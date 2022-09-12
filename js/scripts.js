window.onload = () => {
  // Declare variables
  const portfolioFirst = document.getElementById("portfolio-first");
  const closeWindow = document.getElementById("close-window");
  const popupFirst = document.getElementById("popup-first");

  // Functions
  let openPopup = () => {
    popupFirst.classList.add("popup-visible");
  };
  let closePopup = () => {
    popupFirst.classList.remove("popup-visible");
  };

  //
  portfolioFirst.addEventListener("click", openPopup);
  closeWindow.addEventListener("click", closePopup);
};
