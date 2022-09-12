window.onload = () => {
  // Declare variables
  const portfolioFirst = document.getElementById("portfolio-first");
  const closeWindow = document.getElementById("close-window");
  const popupFirst = document.getElementById("popup-first");
  const linksHeader = document.querySelectorAll("header a");
  

  // Functions
  let openPopup = () => {
    popupFirst.classList.add("popup-visible");
  };
  let closePopup = () => {
    popupFirst.classList.remove("popup-visible");
  };
  let scroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      linksHeader.forEach(l => {
        l.classList.add("small-header");
      });
    } else {
      linksHeader.forEach(l => {
        l.classList.remove("small-header");
      });
    }
  };
  //
  window.onscroll = () => {
    scroll();
  };

  portfolioFirst.addEventListener("click", openPopup);
  closeWindow.addEventListener("click", closePopup);
};
