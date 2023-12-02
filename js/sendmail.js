function valideMail() {
  // variable pour la langue des message
  var mess1;
  var mess2;
  var mess3;

  // traitement français
  if (window.location.href == "https://marinervdy.github.io/fr/liensutiles.html") {
    mess1 = "Message envoyé cliquez sur Ok pour recharger la page";
    mess2 = "Mail invalide";
    mess3 = "Veuillez cocher la case";

  // traitement anglais
  } else if (window.location.href == "https://marinervdy.github.io/en/liensutiles.html") {
    mess1 = "Message sent click Ok to reload the page";
    mess2 = "Invalid mail";
    mess3 = "Please tick the box!";
  }
  // captcha correcte
  if (grecaptcha.getResponse().length > 0) {
    
    // récupération de la valeur du mail
    var mail = document.getElementById("mail").value;
    var reg = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    
    // test si le mail est valide
    if (reg.test(mail)) {    
      document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'service_gq3ktht';
        const templateID = 'template_1ujf46e';
        // envoie du mail
        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            if (window.confirm(mess1)) {
              location.reload();
            }
          }, (err) => {
            alert(JSON.stringify(err));
          });
      });
        
    } 
    // mail invalide
    else alert(mess2);

  
  // captcha incorrecte
  } else alert(mess3);
}
 
