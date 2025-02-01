// Initialisation de la scène Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lumières améliorées
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3); // Lumière d'ambiance douce
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 50); // Lumière ponctuelle
pointLight.position.set(0, 10, 0); // Position centrale au plafond
scene.add(pointLight);

// Couleurs dynamiques pour les murs
const colors = [
  0xff6347, // Tomate (rouge)
  0x3cb371, // Vert moyen
  0x4682b4, // Bleu acier
  0xffd700, // Or (jaune)
  0xee82ee, // Violet clair
  0x40e0d0, // Turquoise
];

// Création des murs avec un matériau basique
const wallGeometry = new THREE.PlaneGeometry(20, 10); // Taille des murs

// Dimensions de la pièce (pour les murs uniquement)
const room = {
    minX: -10, // Mur gauche
    maxX: 10,  // Mur droit
    minZ: -10, // Mur du fond
    maxZ: 10   // Mur avant
  };
 
 // Fonction pour créer un mur avec une chance de 25% d'avoir une porte (trou)
function createWallWithDoor(color, isVertical) {
    const material = new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide });
    const wall = new THREE.Mesh(wallGeometry, material);
  
    // Déterminer aléatoirement si le mur aura une porte
    const hasDoor = Math.random() < 0.25; // 25% de chance d'avoir une porte
  
    // Si le mur a une porte, on va créer une ouverture en "perforant" le mur
    if (hasDoor) {
      const doorWidth = 6;  // Largeur de la porte
      const doorHeight = 10;  // Hauteur de la porte
  
      // Créer deux parties du mur : à gauche et à droite de l'ouverture
      const leftWallGeometry = new THREE.PlaneGeometry(10 - doorWidth / 2, 10);  // Moitié gauche
      const rightWallGeometry = new THREE.PlaneGeometry(10 - doorWidth / 2, 10);  // Moitié droite
  
      const leftWall = new THREE.Mesh(leftWallGeometry, material);
      const rightWall = new THREE.Mesh(rightWallGeometry, material);
  
      leftWall.position.set(-doorWidth / 2, 0, 0); // Décalage à gauche
      rightWall.position.set(doorWidth / 2, 0, 0); // Décalage à droite
  
      // Ajouter les deux parties du mur à la scène
      wall.add(leftWall);
      wall.add(rightWall);
  
      // Appliquer la rotation (verticale ou horizontale) selon le type du mur
      if (isVertical) {
        wall.rotation.y = Math.PI / 2;  // Mur vertical
      } else {
        wall.rotation.y = 0; // Mur horizontal
      }
    }
  
    return wall;
  }
  
  // Création des murs avec la possibilité d'avoir une porte
  const walls = [];
  walls.push(createWallWithDoor(0xff6347, false)); // Mur arrière
  walls.push(createWallWithDoor(0x3cb371, false)); // Mur avant
  walls.push(createWallWithDoor(0x4682b4, true));  // Mur gauche
  walls.push(createWallWithDoor(0xffd700, true));  // Mur droit
  
  // Sol et plafond infinis
  const infiniteFloorGeometry = new THREE.PlaneGeometry(2000, 2000); // Un sol très grand pour simuler l'infini
  const infiniteCeilingGeometry = new THREE.PlaneGeometry(2000, 2000); // Plafond infini
  
  // Sol
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x40e0d0, side: THREE.DoubleSide });
  const floor = new THREE.Mesh(infiniteFloorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI / 2; // Le sol est parallèle à l'axe X-Z
  floor.position.y = -5; // Placer le sol en bas
  scene.add(floor);
  
  // Plafond
  const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0x40e0d0, side: THREE.DoubleSide });
  const ceiling = new THREE.Mesh(infiniteCeilingGeometry, ceilingMaterial);
  ceiling.rotation.x = Math.PI / 2; // Le plafond est parallèle à l'axe X-Z
  ceiling.position.y = 15; // Placer le plafond en haut
  scene.add(ceiling);
  
  // Positionnement des murs (boîte fermée)
  walls[0].position.set(0, 5, -10); // Mur du fond
  walls[1].position.set(0, 5, 10);  // Mur avant
  walls[1].rotation.y = Math.PI;
  
  walls[2].position.set(-10, 5, 0); // Mur gauche
  walls[2].rotation.y = Math.PI / 2;
  walls[3].position.set(10, 5, 0);  // Mur droit
  walls[3].rotation.y = -Math.PI / 2;
  
  // Ajouter les murs à la scène
  walls.forEach(wall => scene.add(wall));
  
  
  

// Positionnement initial de la caméra
camera.position.set(0, 2, 5);

// Variables pour la rotation fluide
let targetRotation = 0; // Rotation cible
let currentRotation = 0; // Rotation actuelle
const rotationSpeed = 0.1; // Vitesse de transition

// Vitesse de déplacement
const moveSpeed = 0.3;

// Gestion des touches
const keysPressed = {};
document.addEventListener('keydown', e => {
  keysPressed[e.key.toLowerCase()] = true;
  handleKeyPress(e.key.toLowerCase());
});
document.addEventListener('keyup', e => keysPressed[e.key.toLowerCase()] = false);

// Gérer les rotations avec transition douce
function handleKeyPress(key) {
  const rotationStep = Math.PI / 2; // 90° en radians
  if (key === 'arrowleft') targetRotation += rotationStep; // Tourner à gauche
  if (key === 'arrowright') targetRotation -= rotationStep; // Tourner à droite
}

  
  // Fonction pour vérifier si la caméra est dans les limites
  function isWithinRoomBounds(x, z) {
    return x >= room.minX && x <= room.maxX && z >= room.minZ && z <= room.maxZ;
  }
  
  // Gestion des mouvements avec détection de collision
  function handleMovement() {
    const newPosition = { x: camera.position.x, z: camera.position.z };
  
    if (keysPressed['z']) {
      // Calculer la position proposée en avançant
      newPosition.x -= Math.sin(currentRotation) * moveSpeed;
      newPosition.z -= Math.cos(currentRotation) * moveSpeed;
    }
    if (keysPressed['s']) {
      // Calculer la position proposée en reculant
      newPosition.x += Math.sin(currentRotation) * moveSpeed;
      newPosition.z += Math.cos(currentRotation) * moveSpeed;
    }
    if (keysPressed['q']) {
      // Calculer la position proposée en se déplaçant à gauche
      newPosition.x -= Math.cos(currentRotation) * moveSpeed;
      newPosition.z += Math.sin(currentRotation) * moveSpeed;
    }
    if (keysPressed['d']) {
      // Calculer la position proposée en se déplaçant à droite
      newPosition.x += Math.cos(currentRotation) * moveSpeed;
      newPosition.z -= Math.sin(currentRotation) * moveSpeed;
    }
  
    // Vérifier si la position proposée est valide
    if (isWithinRoomBounds(newPosition.x, newPosition.z)) {
      camera.position.x = newPosition.x;
      camera.position.z = newPosition.z;
    }
  }
  

// Animation principale
function animate() {
  requestAnimationFrame(animate);

  // Transition douce vers la rotation cible
  if (Math.abs(targetRotation - currentRotation) > 0.01) {
    currentRotation += (targetRotation - currentRotation) * rotationSpeed;
  } else {
    currentRotation = targetRotation;
  }

  // Appliquer la rotation à la caméra
  camera.rotation.y = currentRotation;

  // Gestion des déplacements
  handleMovement();

  // Rendu
  renderer.render(scene, camera);
}

// Réajustement de la taille lors du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Lancement de l'animation
animate();
