let langIndex = 0;
var language = {

    en:{

        aboutCategory: "About me",
        animCategory: "3D animations",
        otherCategory: "Other personnal creations"

        

    },
    fr:{

        aboutCategory: "A propos de moi",
        animCategory: "Animations 3D",
        otherCategory: "Autres créations personnelles",

        aboutSection: "Je suis actuellement en 1ère année de BUT en Métiers du Multimédia et de l'Internet à l'IUT de Mulhouse<br>J'adore créer, apprendre et me découvrir de nouvelles passions. Je suis quelqu'un d'ambitieux et de créatif, qui n'hésite pas à faire de ses rêves une réalité<br>À travers ce portfolio, vous allez retrouver toutes les créations que j'ai pu réaliser, que ce soit dans le cadre de mes études ou en dehors."

    },
    ro:{
        aboutCategory: "Despre mine",
        animCategory: "Animatii 3D",
        otherCategory: "Alte creati personale"

    }

}



function changeLanguage(){

    switch(langIndex){

        default:
            document.querySelector(".about").innerText = language.en.aboutCategory;
            document.querySelector(".animation").innerText = language.en.animCategory;
            document.querySelector(".other").innerText = language.en.otherCategory;
            break;
        case 0:
            document.querySelector(".about").innerText = language.en.aboutCategory;
            document.querySelector(".animation").innerText = language.en.animCategory;
            document.querySelector(".other").innerText = language.en.otherCategory;
            break;
        case 1:
            document.querySelector(".about").innerText = language.fr.aboutCategory;
            document.querySelector(".animation").innerText = language.fr.animCategory;
            document.querySelector(".other").innerText = language.fr.otherCategory;
            document.querySelector(".aboutSection>p").innerHTML = language.fr.aboutSection;
            break;
        case 2:
            document.querySelector(".about").innerText = language.ro.aboutCategory;
            document.querySelector(".animation").innerText = language.ro.animCategory;
            document.querySelector(".other").innerText = language.ro.otherCategory;
            break;
        
    }


}
//add language menu instead of arrow keys
document.addEventListener("keydown", function(event) {


    if(event.key == "ArrowUp"){

        changeLanguage();
        langIndex += 1;


    }

});