window.onload = () => {
  // Declare variables
  const portfolioFirst = document.getElementById("portfolio-first");
  const closeWindow = document.getElementById("close-window");
  const popupFirst = document.getElementById("popup-first");
  const linksHeader = document.querySelectorAll("header a");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let number = document.getElementById("number");
  let message = document.getElementById("message");
  let validateSection = document.getElementById("contact-validation");
  let validateText = document.getElementById("contact-validation-text");
  let contactSubmit = document.getElementById("contact-submit");
  let probName;
  let probEmail;
  let probNumber;
  let probMessage;

  // Functions

  // open popup
  let openPopup = () => {
    popupFirst.classList.add("popup-visible");
  };

  // close popup
  let closePopup = () => {
    popupFirst.classList.remove("popup-visible");
  };

  // make header smaller when scrolling dwown
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

  //  validate name
  let checkName = () => {
    if (name.value.length < 5) {
      probName = "Please enter your full name (Name should be at least 5 characters long)";
      return false;
    }
    return true;
  };

  //
  window.onscroll = () => {
    scroll();
  };
  portfolioFirst.addEventListener("click", openPopup);
  closeWindow.addEventListener("click", closePopup);
};
