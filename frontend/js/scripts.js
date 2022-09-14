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
  let display_messages = document.getElementById("display-messages");

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
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
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
      probName =
        "Please enter your full name (Name should be at least 5 characters long)";
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
    if (
      (!number.value.match(/\+9613\d{6}/) &&
        !number.value.match(/\+961[0-24-9]\d{7}/)) ||
      (number.value.length > 11 && number.value.match(/\+9613\d{6}/)) ||
      (number.value.length > 12 && number.value.match(/\+961[0-24-9]\d{7}/))
    ) {
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

  // fetch submit_message api
  let sendMessage = () => {
    fetch("http://localhost/bootstrap/submit_message.php", {
      method: "POST",
      body: new URLSearchParams({
        name: name.value,
        email: email.value,
        phone: number.value,
        text_message: message.value,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  // fetch get_messages
  let getMessages = () => {
    fetch("http://localhost/bootstrap/get_messages.php")
      .then(data => data.json())
      .then(all_data =>
        all_data.forEach(d => {
          display_messages.innerHTML += `<p>${d.text_message}</p>`;
        })
      )
      .catch(error => console.log(error));
  };
  //  validate input
  let validateInputs = () => {
    if (checkName() && checkEmail() && checkNumber() && checkMessage()) {
      validateText.innerText = "Your message has been sent successfully!";
      validateSection.classList.remove("red-background");
      validateSection.classList.add("green-background");
      sendMessage();
    } else {
      validateSection.classList.remove("green-background");
      validateSection.classList.add("red-background");
      if (!checkName()) {
        validateText.innerText += probName;
      }
      if (!checkEmail()) {
        validateText.innerText += `
        ${probEmail}`;
      }
      if (!checkNumber()) {
        validateText.innerText += `
        ${probNumber}`;
      }
      if (!checkMessage()) {
        validateText.innerText += `
        ${probMessage}`;
      }
    }
  };

  //
  window.onscroll = () => {
    scroll();
  };
  getMessages();
  portfolioFirst.addEventListener("click", openPopup);
  closeWindow.addEventListener("click", closePopup);
  contactSubmit.addEventListener("click", e => {
    e.preventDefault();
    validateText.innerText = "";
  });
  contactSubmit.addEventListener("click", validateInputs);
};
