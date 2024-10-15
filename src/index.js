import "./styles.css";
import loadHome from "./home";



const navBtns = document.querySelectorAll("button");
const contentHolder = document.querySelector("#content");

//loadHome(contentHolder);

navBtns.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const btnId = e.target.id;


        contentHolder.replaceChildren();

        if(btnId === "menu"){

            console.log("Menu Loaded");
        }else if(btnId === "about"){
            console.log("About Loaded");
        }else{
            console.log("Home Loaded");
            loadHome(contentHolder);
        }


    })

});
