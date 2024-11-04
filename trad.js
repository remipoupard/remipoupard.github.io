let isEnglish = false;

document.getElementById("translate-btn").addEventListener("click", function() {

    const sections = {

        "etat-civil": {
            title: {
                fr: "<i class=\"fas fa-id-card\"></i> État Civil",
                en: "<i class=\"fas fa-id-card\"></i> Personal Information"
            },
            content: {
                fr: [
                    "<strong>Âge :</strong> 18 ans",
                    "<strong>Email </strong>: remi.poupard@proton.me",
                    "<strong>Téléphone </strong>: +33 6 95 40 05 93",
                    "<p><strong>Adresse :</strong> 73 rue de Dieppe, Lille</p>"
                ],
                en: [
                    "<strong>Age:</strong> 18 years",
                    "<strong>Email </strong>: remi.poupard@proton.me",
                    "<strong>Phone </strong>: +33 6 95 40 05 93",
                    "<p><strong>Address :</strong> 73 rue de Dieppe, Lille</p>"
                ]
            }
        },

        "formation": {
            title: {
                fr: "<i class=\"fas fa-graduation-cap\"></i> Formation",
                en: "<i class=\"fas fa-graduation-cap\"></i> Education"
            },
            content: {
                fr: [
                    "2023 - Présent : Informatique - Université de Lille",
                    "2020 - 2023 : Baccalauréat Général - Lycée International Montebello"
                ],
                en: [
                    "2023 - Present: Computer Science - University of Lille",
                    "2020 - 2023: General Baccalaureate - Lycée International Montebello"
                ]
            }
        },
        
        "competences": {
            title: {
                fr: "<i class=\"fas fa-cogs\"></i> Compétences",
                en: "<i class=\"fas fa-cogs\"></i> Skills"
            },
            content: {
                fr: [
                    "Développement Web (HTML, CSS, JavaScript)",
                    "Langages de programmation (Python, Java, C++)",
                    "Gestion de bases de données (SQL, MongoDB)",
                    "UI/UX Design",
                    "Gestion de projet"
                ],
                en: [
                    "Web Development (HTML, CSS, JavaScript)",
                    "Programming Languages (Python, Java, C++)",
                    "Database Management (SQL, MongoDB)",
                    "UI/UX Design",
                    "Project Management"
                ]
            }
        },

        "experiences": {
            title: {
                fr: "<i class=\"fas fa-briefcase\"></i> Expériences",
                en: "<i class=\"fas fa-briefcase\"></i> Professional Experience"
            },
            content: {
                fr: [
                    "Développeur Web - Société ABC (2023 - Présent) : Développement de sites web responsives et optimisation des performances.",
                    "Stagiaire en Informatique - Société XYZ (2022 - 2023) : Participation à des projets de développement logiciel.",
                    "Assistant de recherche - Université de Lille (2021 - 2022) : Assistance dans la recherche en informatique théorique."
                ],
                en: [
                    "Web Developer - Company ABC (2023 - Present): Development of responsive websites and performance optimization.",
                    "Intern in Computer Science - Company XYZ (2022 - 2023): Participation in software development projects.",
                    "Research Assistant - University of Lille (2021 - 2022): Assistance in theoretical computer science research."
                ]
            }
        },

        "centres-interets": {
            title: {
                fr: "<i class=\"fas fa-heart\"></i> Centres d’Intérêts",
                en: "<i class=\"fas fa-heart\"></i> Interests"
            },
            content: {
                fr: [
                    "Voyager",
                    "Photographie",
                    "Lecture de science-fiction",
                    "Développement personnel",
                    "Sports (Football, Course à pied)"
                ],
                en: [
                    "Traveling",
                    "Photography",
                    "Science Fiction Reading",
                    "Personal Development",
                    "Sports (Football, Running)"
                ]
            }
        },

        "projets": {
            title: {
                fr: "<i class=\"fas fa-folder-open\"></i> Projets",
                en: "<i class=\"fas fa-folder-open\"></i> Projects"
            },
            content: {
                fr: [
                    "<h3>Projet Annuaire</h3> <p>Développement d'une application d'annuaire en équipe, en utilisant la méthode Scrum. Gestion du projet par sprints réduit à deux heures et revues de sprint pour ajuster les priorités.</p>",
                    "<h3>Projet RSE</h3> <p>Création en équipe d'un site web pour promouvoir la démarche RSE d'une entreprise, en utilisant HTML et CSS.</p>",
                    "<h3>Projet Web Statique</h3> <p>Développement d'un site web statique en Java, centré sur la lecture et l'écriture de fichiers pour générer les pages HTML. Respect des délais de rendu de livrables pour assurer la livraison du projet dans les temps.</p>"
                ],
                en: [
                    "<h3>Directory Project</h3> <p>Development of a directory application as a team, using the Scrum method. Project management through two-hour sprints and sprint reviews to adjust priorities.</p>",
                    "<h3>CSR Project</h3> <p>Team creation of a website to promote a company's CSR approach, using HTML and CSS.</p>",
                    "<h3>Static Web Project</h3> <p>Development of a static website in Java, focused on reading and writing files to generate HTML pages. Adherence to delivery deadlines to ensure timely project delivery.</p>"
                ]
            }
        }
    };


    // Traduire les éléments de navigation
    const navItems = {
        "etat-civil": {
            fr: "État Civil",
            en: "Personal Information"
        },
        "formation": {
            fr: "Formation",
            en: "Education"
        },
        "competences": {
            fr: "Compétences",
            en: "Skills"
        },
        "experiences": {
            fr: "Expériences",
            en: "Professional Experience"
        },
        "centres-interets": {
            fr: "Centres d’Intérêts",
            en: "Interests"
        },
        "projets": {
            fr: "Projets",
            en: "Projects"
        }
    };

    // Mettre à jour le contenu en fonction de l'état de la langue
    for (const [sectionId, { title, content }] of Object.entries(sections)) {
        const section = document.getElementById(sectionId);
        section.querySelector("h2").innerHTML = isEnglish ? title.fr : title.en; // Titre
        const paragraphs = section.querySelectorAll("p, ul");

        // Réinitialisation de la section pour chaque contenu
        paragraphs.forEach((para, index) => {
            if (para.tagName === "P") {
                para.innerHTML = isEnglish ? content.fr[index] : content.en[index]; // Contenu
            } else if (para.tagName === "UL") {
                para.innerHTML = ""; // Vide la liste avant d'ajouter de nouveaux éléments
                const items = isEnglish ? content.fr : content.en;
                items.forEach(item => {
                    const li = document.createElement("li");
                    li.innerHTML = item; // Utilisation de innerHTML pour garder le formatage
                    para.appendChild(li);
                });
            }
        });
    }


    // Traduire les éléments de navigation
    const navLinks = document.querySelectorAll("nav ul li a"); // Sélectionnez tous les liens dans la navigation
    navLinks.forEach(link => {
        const id = link.getAttribute("data-nav"); // Utilisez l'attribut data-nav pour identifier chaque élément
        if (navItems[id]) {
            link.innerText = isEnglish ? navItems[id].fr :navItems[id].en ; // Mise à jour du texte du lien
        }
    });


    // Changer l'état de la langue et le texte du bouton
    isEnglish = !isEnglish; // Basculer l'état de la langue
    this.innerHTML = isEnglish ? "<img src=\"img/fr-flag.png\" alt=\"Traduire en français\">" :  "<img src=\"img/uk-flag.png\" alt=\"Translate to english\">" ; // Changer le texte du bouton
});
