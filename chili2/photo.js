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



data.sort((a, b) => {
        if (a.released > b.released) {
            return -1;
        }
        if (a.released < b.released) {
     	    return 1;
 	    }
        return 0;
 	return b.released.localeCompare(a.released);
});

 */

export default class Photo{
    images;
    constructor(){
        this.images = [
            {id: 1, image: "./img/arc_de_triomphe.jpg", date: "2025-03-30", titre: "l'Arc de triomphe", text: ""},
            {id: 2, image: "./img/assemblee_nationale.jpg", date: "2025-03-30", titre: "l'Assemblée Nationale", text: ""},
            {id: 3, image: "./img/atlantique.jpg", date: "2025-04-01", titre: "Survol de l'atlantique", text: ""},
            {id: 4, image: "./img/avion1.jpg", date: "2025-03-31", titre: "Mon premier avion", text: ""},
            {id: 5, image: "./img/avion2.jpg", date: "2025-04-01", titre: "Mon deuxième avion", text: ""},
            {id: 6, image: "./img/bresil.jpg", date: "2025-04-01", titre: "Cote brésilienne", text: ""},
            {id: 7, image: "./img/bresil2.jpg", date: "2025-04-01", titre: "Foret brésilenne", text: "Je suis pas sur de si c'est l'Amazonie ou pas"},
            {id: 8, image: "./img/bus_santiago_vina_palmier.jpg", date: "2025-04-02", titre: "Photo de mon trajet Santiago - Vina del Mar", text: ""},
            {id: 9, image: "./img/chat_casa_colores.jpg", date: "2025-04-02", titre: "Petit chat dans l'entrée de la où je loge", text: ""},
            {id: 10, image: "./img/chat_vue_valparaiso.jpg", date: "2025-04-03", titre: "Chat devant une jolie vue sur Valparaiso", text: ""},
            {id: 11, image: "./img/en_face_du_pantheon.jpg", date: "2025-03-30", titre: "Vue de la tour Eiffel depuis le Panthéon", text: ""},
            {id: 12, image: "./img/escalier_valparaiso.jpg", date: "2025-04-02", titre: "Escalier pour arriver à mon logement", text: ""},
            {id: 13, image: "./img/flocon_hublot.jpg", date: "2025-04-01", titre: "Des flocons sur mon hublot", text: ""},
            {id: 14, image: "./img/graf.jpg", date: "2025-03-30", titre: "Grafiti avec le surnom de Romain", text: ""},
            {id: 15, image: "./img/grand_palais.jpg", date: "2025-03-30", titre: "Grand Palais de Paris", text: ""},
            {id: 18, image: "./img/Jeff_Koons_Tulips.jpg", date: "2025-03-30", titre: "Tulipes de Jeff Koons devant le Grand Palais", text: ""},
            {id: 19, image: "./img/metro_val_RCDG.jpg", date: "2025-04-01", titre: "Métro VAL dans l'aéroport Charle de Gaule", text: ""},
            {id: 20, image: "./img/montagne.jpg", date: "2025-04-02", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 21, image: "./img/montagne_chili.jpg", date: "2025-04-02", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 22, image: "./img/montagne_santiago_vina.jpg", date: "2025-04-02", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 23, image: "./img/montagne_santiago_vina2.jpg", date: "2025-04-02", titre: "Montagne sur mon trajet Santiago - Vina del Mar", text: ""},
            {id: 24, image: "./img/montmartre.jpg", date: "2025-03-30", titre: "Montmartre", text: ""},
            {id: 25, image: "./img/notre_dame.jpg", date: "2025-03-29", titre: "Notre Dame de Paris", text: ""},
            {id: 26, image: "./img/oblelisque.jpg", date: "2025-03-30", titre: "Obélisque à Concorde", text: ""},
            {id: 27, image: "./img/oblelisque_arc_triomphe.jpg", date: "2025-03-30", titre: "l'Obélisque avec l'Arc de triomphe derrière", text: ""},
            {id: 29, image: "./img/pied_tour_eiffel.jpg", date: "2025-03-30", titre: "Tour Eiffel", text: ""},
            {id: 30, image: "./img/pied_tour_eiffel_arbres.jpg", date: "2025-03-30", titre: "Tour Eiffel", text: ""},
            {id: 31, image: "./img/pont_alexandre_III_grand_palais.jpg", date: "2025-03-30", titre: "Pont Alexandre III avec le Grand Palais derrière", text: ""},
            {id: 32, image: "./img/pont_alexandre_III_invalides.jpg", date: "2025-03-30", titre: "Pont Alexandre III et les Invalides derrière", text: ""},
            {id: 33, image: "./img/pont_alexandre_II_tour_eiffel.jpg", date: "2025-03-30", titre: "Pont Alexandre III et la tour Eiffel derrière", text: ""},
            {id: 34, image: "./img/rue _de_paris.jpg", date: "2025-03-30", titre: "Une rue dans Paris", text: "Je sais pas pourquoi j'ai pris la photo"},
            {id: 35, image: "./img/rue_vaugirard.jpg", date: "2025-03-30", titre: "Rue Vaugirard", text: "Comme au Monopoly"},
            {id: 36, image: "./img/seine.jpg", date: "2025-03-30", titre: "La Seine", text: ""},
            {id: 37, image: "./img/seine_tour_eiffel.jpg", date: "2025-03-30", titre: "La Seine et la tour Eiffel derrière", text: ""},
            {id: 38, image: "./img/statue_liberte_jardin_luxembourg.jpg", date: "2025-03-30", titre: "Statue de la liberté du Jardin du Luxembourg", text: ""},
            {id: 39, image: "./img/tour_eiffel2.jpg", date: "2025-03-30", titre: "Tour Eiffel depuis une belle rue", text: ""},
            {id: 40, image: "./img/tour_eiffel3.jpg", date: "2025-03-30", titre: "Tour Eiffel depuis le quai Jacques Chirac", text: ""},
            {id: 41, image: "./img/tour_eiffel_1.jpg", date: "2025-03-30", titre: "Tour Eiffel depuis le champ de Mars", text: ""},
            {id: 42, image: "./img/trajet_santiago_vina.jpg", date: "2025-04-01", titre: "Trajet Santiago - Vina del Mar", text: ""},
            {id: 43, image: "./img/trocadero.jpg", date: "2025-03-30", titre: "Le Trocadéro", text: ""},
            {id: 44, image: "./img/vue_valparaiso.jpg", date: "2025-04-01", titre: "Vue de Valparaiso", text: ""},
            {id: 45, image: "./img/avenue_cotiere_vina.jpg", date: "2025-04-07", titre: "Avenue côtière de Vina", text: ""},
            {id: 46, image: "./img/bus_vers_universite.jpg", date: "2025-04-11", titre: "Bus vers l'université", text: ""},
            {id: 47, image: "./img/canal_vina_pelican.jpg", date: "2025-04-07", titre: "Canal à Vina del Mar", text: "On voit pas bien mais y'a des pélicans"},
            {id: 48, image: "./img/centre_commercial_colimacon.jpg", date: "2025-04-10", titre: "Centre commercial", text: "y'a pas d'escalier, c'est juste un grand colimaçon"},
            {id: 49, image: "./img/chateau_vina.jpg", date: "2025-04-08", titre: "Château à Vina del Mar", text: ""},
            {id: 50, image: "./img/chat_casa.jpg", date: "2025-04-06", titre: "Chat à la maison", text: ""},
            {id: 51, image: "./img/cote_vina.jpg", date: "2025-04-07", titre: "Côte de Vina del Mar", text: ""},
            {id: 52, image: "./img/coucher2.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina", text: ""},
            {id: 53, image: "./img/coucher3.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina", text: ""},
            {id: 54, image: "./img/coucher4.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina", text: ""},
            {id: 55, image: "./img/coucher5.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina", text: ""},
            {id: 56, image: "./img/coucher6.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina", text: ""},
            {id: 57, image: "./img/coucher7.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina", text: ""},
            {id: 58, image: "./img/coucher_soleil_vina.jpg", date: "2025-04-07", titre: "Coucher de soleil à Vina del Mar", text: ""},
            {id: 59, image: "./img/erazuriz.jpg", date: "2025-04-07", titre: "Rue Erazuriz", text: ""},
            {id: 60, image: "./img/fete_du_livre.jpg", date: "2025-04-06", titre: "Fête du livre", text: ""},
            {id: 61, image: "./img/horloge_vina.jpg", date: "2025-04-08", titre: "Horloge à Vina del Mar", text: ""},
            {id: 62, image: "./img/nuggets_among_us.jpg", date: "2025-04-11", titre: "Nuggets Among Us", text: ""},
            {id: 63, image: "./img/photo_casa.jpg", date: "2025-04-13", titre: "Photo de la maison", text: "C'est la maison en rouge/marron tout en haut"},
            {id: 64, image: "./img/photo_cimetiere.jpg", date: "2025-04-13", titre: "Cimetière", text: "C'est le cimetiere près de la maison (en vert)"},
            {id: 65, image: "./img/plage.jpg", date: "2025-04-07", titre: "Plage", text: ""},
            {id: 66, image: "./img/plage_vina.jpg", date: "2025-04-07", titre: "Plage à Vina del Mar", text: ""},
            {id: 67, image: "./img/valpo.jpg", date: "2025-04-06", titre: "Valpo", text: ""},
            {id: 67, image: "./img/vue_valpo.jpg", date: "2025-04-10", titre: "Valpo", text: ""},
            {id: 68, image: "./img/vue1.jpg", date: "2025-04-01", titre: "Vue", text: ""},
            {id: 69, image: "./img/vue_ocean.jpg", date: "2025-04-10", titre: "Vue sur l'océan", text: ""},
            {id: 69, image: "./img/vue_ocean_valpo.jpg", date: "2025-04-07", titre: "Vue sur l'océan", text: ""},
            {id: 70, image: "./img/vue_ocean_rue_valpo.jpg", date: "2025-04-06", titre: "Vue sur l'océan", text: ""},
            {id: 71, image: "./img/affiche_gauche.jpg", date: "2025-04-06", titre: "Affiche de gauche", text: ""},
            {id: 72, image: "./img/rue_vina.jpg", date: "2025-04-07", titre: "Ruelle de Vina del Mar", text: ""},
            {id: 73, image: "./img/station_metro_vina.jpg", date: "2025-04-07", titre: "Station de métro de Vina del Mar", text: ""},
            {id: 73, image: "./img/rue_erazuriz.jpg", date: "2025-04-13", titre: "Rue Erazuriz", text: ""},
        ];
    }
    getHTML(){
        let html = `<div class="photos">`;
        this.images.sort((a, b) => {
            if (a.date > b.date) {
                return -1;
            }
            if (a.date < b.date) {
                 return 1;
             }
            return 0;
    });
        this.images.forEach(image => {
            if(image.date != ""){
                html += `<div class="photo">
                        <div class="image"><img src="${image.image}" alt="${image.titre}"></div>
                        <div class="data">
                            <div class="titre">
                                <h3>${image.titre}</h3>
                                <p class="image-date">${image.date}</p>
                            </div>
                            <p class="image-content">${image.text}</p>
                        </div>
                        </div>`;
            }
        });
        return html;
    }
}