let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Affiche la première image et description au chargement
showSlide(currentSlide);



const texts = [
    {
        title: "Developpement d'un annuaire et d'un planning",
        text: "Conception et Developpement d'une application en java permettant de gérer un annuaire et un planning collaboratif avec une interface dans un terminal. Le projet a été réalisé en équipe en suivant la méthode Scrum.",
        img: "img/annuaire.jpg",
        softskills: "Travail en équipe, Communication, Gestion du temps",
        hardskills: "Java, Scrum, Git",
        git: "https://gitlab.univ-lille.fr/remi.poupard-ramaut.etu/annuaire-planning"
    },
    {
        title: "Developpement d'un site promouvant une démarche RSE",
        text: "Réalisation d’un site web mettant en avant la Responsabilité Sociétale des Entreprises (RSE) d’une entreprise fictive. Utilisation des bonnes pratiques en termes d’accessibilité et de performance web.",
        img: "img/rse.jpg",
        softskills: "Créativité, Sensibilité aux enjeux environnementaux, Collaboration",
        hardskills: "HTML, CSS",
        git: "https://gitlab.univ-lille.fr/remi.poupard-ramaut.etu/rse-site"
    },
    {
        title: "Developpement d'un générateur de site web statique",
        text: "Création d’un outil en Java permettant de générer automatiquement des sites web statiques à partir d’un fichier de configuration. Le projet inclut la gestion des templates et du rendu HTML/CSS.",
        img: "img/generateur.jpg",
        softskills: "Résolution de problèmes, Adaptabilité, Rigueur",
        hardskills: "Java, Gestion de fichiers, Génération de HTML/CSS, Algorithmes",
        git: "https://gitlab.univ-lille.fr/remi.poupard-ramaut.etu/generateur-site"
    },
    {
        title: "Developpement d'une application de classification",
        text: "Implémentation d’une application permettant de classer des données en utilisant l’algorithme des k-plus proches voisins (k-NN). Application conçue pour être utilisée sur des ensembles de données variés.",
        img: "img/classification.jpg",
        softskills: "Analyse, Prise de décision, Autonomie",
        hardskills: "Java, JavaFX, Algorithme, Git",
        git: "https://gitlab.univ-lille.fr/remi.poupard-ramaut.etu/classification-knn"
    },
    {
        title: "Developpement d'un jeu ludo-éducatif",
        text: "Conception d’un jeu de mémoire éducatif en Java, où les joueurs doivent associer des cartes en français et en anglais avec une interface dans un terminal.",
        img: "img/memory.jpg",
        softskills: "Pédagogie, Créativité, Résolution de problèmes",
        hardskills: "Java, Gestion des événements, Programmation orientée objet",
        git: "https://gitlab.univ-lille.fr/remi.poupard-ramaut.etu/memory-game"
    },
    {
        title: "Developpement d'une application de messagerie en ligne",
        text: "Création d’un site web de messagerie instantanée inspiré de WhatsApp et Discord. L’application permet l’inscription, la création de fils de discussions et l’envoi de messages en temps réel.",
        img: "img/messagerie.jpg",
        softskills: "Travail en équipe, Communication, Gestion de projet",
        hardskills: "Java, PostgresQL, Tomcat, JEE, REST",
        git: "https://gitlab.univ-lille.fr/remi.poupard-ramaut.etu/messaging-app"
    }
];


function openModal(title, text) {
    let projet;
    texts.forEach(elem => {
        console.log(elem.title);
        console.log(title);
        if (elem.title == title) {
            projet = elem;
        }
    });
    console.log(projet);
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-text").textContent = projet.text;
    document.getElementById("modal-hardskills").textContent = projet.hardskills;
    document.getElementById("modal-softskills").textContent = projet.softskills;
    document.getElementById("modal").style.display = "block";
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Ferme la modale si on clique en dehors
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}
