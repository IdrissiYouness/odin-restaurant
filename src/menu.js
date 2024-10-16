import espressoImg from './assets/espresso.jpg'
import cappuccinoImg from './assets/cappuccino.jpg'
import flatwhiteImg from './assets/flatwhite.jpg'
import latteImg from './assets/latte.jpg'
import mochaImg from './assets/mocha.jpg'
import togoImg from './assets/togo.jpg'


const menuItems = [
    {
        name:"Espresso",
        description:"A strong and rich shot of pure coffee, the foundation of many coffee drinks",
        price:"$2.50",
        src:espressoImg
    },
    {
        name:"Latte",
        description:"A smooth blend of espresso with steamed milk, topped with a light layer of foam",
        price:"$3.50",
        src:latteImg
    },
    {
        name:"Mocha",
        description:"A delightful mix of espresso, steamed milk, and chocolate syrup, often finished with whipped cream",
        price:"$4.00",
        src:mochaImg
    },
    {
        name:"Cappuccino",
        description:"A balanced combination of espresso, steamed milk, and a thick layer of foamed milk",
        price:"$3.75",
        src:cappuccinoImg
    },
    {
        name:"Flat White",
        description:"A velvety mix of espresso and steamed milk with a thin layer of microfoam",
        price:"$3.50",
        src:flatwhiteImg
    },
    {
        name:"To go",
        description:"A customizable coffee option designed for quick takeaways, usually served hot or iced",
        price:"$3.00",
        src:togoImg
    },
];




function loadMenu(contentDiv){

    const menuMainContainer = document.createElement("div");
    menuMainContainer.classList.add("menu-main-container");

    const header = document.createElement("h1");
    header.classList.add("menu-header");
    header.innerText = "Menu";

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    menuItems.forEach((item)=>createMenuItem(menuItemsContainer,item))
    menuMainContainer.append(header);
    menuMainContainer.append(menuItemsContainer);
    contentDiv.append(menuMainContainer);

}

function createMenuItem(container,item){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = item.src;

    const title = document.createElement('h3');
    title.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;
    description.classList.add("description");

    const price = document.createElement('p');
    price.textContent = item.price;
    price.classList.add("price");

    menuItem.appendChild(image);
    menuItem.appendChild(title);
    menuItem.appendChild(description);
    menuItem.appendChild(price);

    container.appendChild(menuItem);
}


export default loadMenu;




