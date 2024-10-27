let isEnglish = false; // État de la langue, faux par défaut (français)

document.getElementById("translate-btn").addEventListener("click", function() {
    // Objets de contenu pour les deux langues
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
                    "Nom du projet 1 : Description du projet 1, mettant en avant les technologies utilisées et les résultats obtenus.",
                    "Nom du projet 2 : Description du projet 2, soulignant son impact et son importance.",
                    "Nom du projet 3 : Description du projet 3, avec les défis rencontrés et les leçons apprises."
                ],
                en: [
                    "Project Name 1: Description of project 1, highlighting the technologies used and the results obtained.",
                    "Project Name 2: Description of project 2, emphasizing its impact and importance.",
                    "Project Name 3: Description of project 3, with challenges encountered and lessons learned."
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
