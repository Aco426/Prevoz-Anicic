const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");


if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();


    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const text = form.elements["message"].value;


    const subject = encodeURIComponent("Kontakt forma - " + name);
    const body = encodeURIComponent(
      "Ime: " + name + "\n" +
      "Email: " + email + "\n" +
      "Telefon: " + phone + "\n\n" +
      "Poruka:\n" + text
    );


    const mailtoLink =
      "mailto:anicicprevoz@gmail.com" +
      "?subject=" + subject +
      "&body=" + body;


    window.location.href = mailtoLink;


    if (message) {
      message.innerText = "Poruka je spremna za slanje.";
    }


    form.reset();
  });
}
