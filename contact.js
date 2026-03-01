const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");


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


  message.innerText = "Poruka je spremna za slanje.";


  form.reset();
});













//<section class="hero" id="hero">
 // <div class="hero-content">
//    <h2>Brz i Siguran <span>Prevoz</span></h2>
//    <p>
//      Građevinski materijal, sanitarije, pločice i sve što vam treba – brzo, sigurno i pouzdano. Aničić kombi prevoz stiže do vaše lokacije bez problema!
//    </p>
 //   <button class="btn" onclick="scrollToSection('contact')">
//      Kontaktiraj Nas
///    </button>
 // </div>
//<div class="kombislika"></div>
//</section>  //