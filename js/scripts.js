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

  //  validate email
  let checkEmail = () => {
    if (!email.value.match(/.{3,}@.{5,}/)) {
      probEmail =
        "Please enter a valid email (Email should have a minimum of 3 characters before the @ and 5 characters after the @)";
      return false;
    } else {
      return true;
    }
  };

  //  validate phone number
  let checkNumber = () => {
    if (!number.value.match(/\+9613[0-9]{7}/) && !number.value.match(/\+961[0-24-9]\d{7}/)) {
      probNumber =
        "Please enter a valid phone number (Number should start with +961 and followed by either 7 digits (if it's a 03 number, i.e: +9613456789) or. followed by 8 digits (if it's a 71/76/70/etc: +96171345234)";
      return false;
    } else {
      return true;
    }
  };

  //  validate message
  let checkMessage = () => {
    if (message.value.length < 100) {
      probMessage = "Message should be a minimum of 100 characters long.";
      return false;
    } else {
      return true;
    }
  };

  //
  window.onscroll = () => {
    scroll();
  };
  portfolioFirst.addEventListener("click", openPopup);
  closeWindow.addEventListener("click", closePopup);
};
