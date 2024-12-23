const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const message = document.getElementById('message')

//Send email
function sendEmail() {
  const bodyMessage = `1- Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Message: ${message.value}`;


  Email.send({
    Host: "smtp.elasticemail.com",
    Username: 'adriancoceres.93@gmail.com',
    Password: "AB1FBCF73A2885303704F85279D4FC804BD8",
    To: 'adriancoceres.93@gmail.com',
    From: "adriancoceres.93@gmail.com",
    Subject: "texto de asunto",
    Body: bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Bien hecho!",
          text: "You clicked the button!",
          icon: "success"
        })
      }
    }
  )
}

//check inputs
function checkInputs() {
  const items = document.querySelectorAll(".input")

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error")
        item.parentElement.classList.remove("error")
      }
      else {
        item.classList.add("error")
        item.parentElement.classList.add("error")
      }
    })
  }
}

//check email
function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
  const errorTxtEmail = document.querySelector(".error-txt.email")

  if (!email.value.match(emailRegex)) {
    email.classList.add("error")
    email.parentElement.classList.add("error")

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address"
    }
    else {
      errorTxtEmail.innerText = "Email Address can't be blank"
    }
  }
  else {
    email.classList.remove("error")
    email.parentElement.classList.remove("error")
  }
}

//submit
form.addEventListener("submit", (e) => {
  e.preventDefault()
  checkInputs()

  if (!fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    sendEmail()
    form.reset()
    return false
  }

}
)