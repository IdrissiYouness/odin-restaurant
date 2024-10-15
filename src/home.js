
function loadHome(contentHolder){

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("home-main-container");

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("home-content-container");

    const HomeHeader = document.createElement("h1");
    HomeHeader.classList.add("h-header");

    const HomeMessage = document.createElement("p");
    HomeHeader.classList.add("h-message");


    HomeHeader.innerText = "Welcome to Midnight Koffee !";
    HomeMessage.innerText = "Brew or order  a Perfect Coffee based on your mood Anywhere Anytime";

    messageContainer.append(HomeHeader,HomeMessage);
    mainContainer.append(messageContainer);

    contentHolder.append(mainContainer);
}

export default loadHome;