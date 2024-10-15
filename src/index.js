import "./styles.css";
import loadHome from "./home";
import loadAbout from "./about";



const navBtns = document.querySelectorAll("button");
const contentHolder = document.querySelector("#content");

loadHome(contentHolder);

navBtns.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const btnId = e.target.id;


        contentHolder.replaceChildren();

        if(btnId === "menu"){

            console.log("Menu Loaded");
        }else if(btnId === "about"){
            console.log("About Loaded");
            loadAbout(contentHolder);
        }else{
            console.log("Home Loaded");
            loadHome(contentHolder);
        }


    })

});
