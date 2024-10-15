function loadAbout(contentHolder){

  const aboutMainContainer = document.createElement("div");
  aboutMainContainer.classList.add("about-main-container");

  const aboutContentContainer = document.createElement("div");
  aboutContentContainer.classList.add("about-content-container");

  const aboutHeader = document.createElement("h1");
  aboutHeader.classList.add("a-header");
  aboutHeader.innerText = "About";

  const aboutMessage = document.createElement("p");
  aboutMessage.classList.add("a-message");
  aboutMessage.innerText =
    "Blending culture, coffee & top notch services";


  aboutContentContainer.append(aboutMessage);
  aboutMainContainer.append(aboutHeader, aboutContentContainer);
  contentHolder.append(aboutMainContainer);

}

export default loadAbout;