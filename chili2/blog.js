/**
<div class="blog-post">
<div class="left-post"><img src="./Capture d'écran 2024-10-23 220604.png" alt=""></div>
<div class="right-post">
    <div class="entete">
        <h3>Titre du truc</h3>
        <p class="post-date">01-04-2025</p>
    </div>
    <p class="post-content">blablabla blebleble blublublu HA blublublu lingaguliguliguliguata lingangu lingangu</p>
</div>
</div>
 */

export default class Blog{
    posts;
    constructor(){
        this.posts = [
            {id:1,image:"./img/notre_dame.jpg",titre:"Arrivée à Paris",date:"29-03-2025",text:"Etant donné que mon avion décollait le 31 au soir, j'ai profité du week-end pour visiter Paris avec Zacharie et Octavio. Le flixbus a eu du retard mais on a fini pars arriver quand même et le soir meme on c'est fait une petite ballade."},
            {id:2,image:"./img/seine_tour_eiffel.jpg",titre:"Deuxieme jour à Paris",date:"30-03-2025",text:"Après avoir passé la nuit à Paris, on refait une ballade. Cette fois ci on peut voir plus de batiment mais du coup c'étatit super épuisant. Le soir je suis allé dormir chez Jean."},
            {id:3,image:"./img/avion1.jpg",titre:"Troisième et dernier jour à paris",date:"31-03-2025",text:"Mon dernier jour à Paris, je rejoins Jean à sa fac pour manger avec ses amis. On passe un bout de l'aprem ensemble puis Jean m'accompagne jusqu'au RER d'où je pars seul en direction de l'aéroport. Après avoir passé les controles et attendu me voici enfin dans l'avion, vers 23h50 on décolle."},
            {id:4,image:"./img/bresil.jpg",titre:"Problème de AirFrance",date:"01-04-2025",text:"On est le lendemain et je ne suis toujours pas au Chili mais bien de retour à Paris. Pourquoi ? Parce que l'avion était défaillant et a du faire demi tour après 3h de vol. Mais bon, après avoir repassé les controles je repars dans un nouvel avion flambant neuf. J'arrive le soir vers 22h à l'aéroport de Santiago où je dors dans un hotel."},
            {id:5,image:"./img/montagne_santiago_vina.jpg",titre:"Première journée au Chili",date:"02-04-2025",text:"Je me mets en route pour Valparaiso. Je prend un bus vers Pajaritos une seconde gare routiere. J'achete un ticket de bus pour Valparaiso, on me dit que je doit aller a Vina del Mar. Du coup j'y vais, je fais un beau trajet, et une fois a Vina del Mar, je prend un bus de ville pour Valparaiso. J'arrive a destination sain et sauf et je m'installe tranquillement."},
            {id:6,image:"./img/vue_valparaiso.jpg",titre:"Deuxieme jour au Chili",date:"03-04-2025",text:"Ce jour là, j'ai pris contact avec mon maitre de stage et fais une petite ballade dans Valparaiso"},
            {id:7,image:"./img/avenue_cotiere_vina.jpg",titre:"Fin de la première semaine",date:"13-04-2025",text:"Ca fait déjà un peu plus d'une semaine que je suis au Chili. J'ai mon sujet de stage (un site internet pour automatiser leur gestion des stages) et j'ai rencontré un de mes coloc qui s'avère être un étudiant en BUT Chimie qui, comme moi, fait son stage ici. Du coup on a visité Valpo et Vina del Mar ensemble. Il commence à faire un peu frais, c'est le début de l'automne mais y'a pas mal de soleil quand même."},
        ];
    }
    getHTML(tri){
        let html = `
        
        <form class="tri-blog">
        <label for="tri-blog">Trier:</label>
        <select name="tri" id="tri">
        <option value="AnteChronologique">AnteChronologique</option>
        <option value="Chronologique">Chronologique</option>
        </select> 
        <input type="submit" value="Appliquer">
        </form>

        <div class="posts">`;
        if(tri == "Chronologique"){
            this.posts.sort((a, b) => a.id - b.id);
        }else if(tri == "AnteChronologique"){
            this.posts.sort((a, b) => b.id - a.id);
        }
        let imageLeft = 1;
        this.posts.forEach(post => {
            if(imageLeft == 1){
                imageLeft = 0;
                html += `<div class="blog-post">
                        <div class="left-post"><img src="${post.image}" alt="${post.image}"></div>
                        <div class="right-post">
                            <div class="entete">
                                <h3>${post.titre}</h3>
                                <p class="post-date">${post.date}</p>
                            </div>
                            <p class="post-content">${post.text}</p>
                        </div>
                        </div>`;
            }else{
                imageLeft = 1;
                html += `<div class="blog-post">
                        <div class="left-post">
                            <div class="entete">
                                <h3>${post.titre}</h3>
                                <p class="post-date">${post.date}</p>
                            </div>
                            <p class="post-content">${post.text}</p>
                        </div>
                        <div class="right-post"><img src="${post.image}" alt="${post.image}"></div>
                        </div>`;
            }
        });
        return html;
    }
}