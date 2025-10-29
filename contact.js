// Initialisation EmailJS
emailjs.init("5GEa8ZEJk5XnQsw3i");

// Sélection du formulaire et du bouton
const form = document.getElementById("contact-form");
const button = form.querySelector("button");

// Génération d'un captcha aléatoire
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const result = num1 + num2;
  const captchaLabel = document.getElementById("captcha-label");
  captchaLabel.innerHTML = `Entrez le résultat de : <strong>${num1} + ${num2}</strong>`;
  return result;
};

// Stocke la réponse correcte du captcha
let captchaAnswer = generateCaptcha();

// Gestion de la soumission du formulaire
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Vérification honeypot
  const honeypot = form.querySelector("[name='website']");
  if (honeypot.value) {
    console.warn("Spam détecté, envoi annulé.");
    return;
  }

  // Vérification captcha
  const userCaptcha = parseInt(form.captcha.value);
  if (userCaptcha !== captchaAnswer) {
    alert("❌ Mauvaise réponse au captcha !");
    captchaAnswer = generateCaptcha(); // régénère un nouveau captcha
    form.captcha.value = "";
    return;
  }

  // Désactivation du bouton et affichage de l'état "envoi"
  button.disabled = true;
  button.innerHTML = 'Envoi en cours <span class="spinner"></span>';

  const userName = form.user_name.value;
  const userEmail = form.user_email.value;

  // Envoi principal via EmailJS
  const mainEmail = emailjs.sendForm("service_usbdf8s", "template_cjdm6e9", form);

  // Auto-réponse pour l'utilisateur
  const autoReply = emailjs.send("service_gcmkzi4", "template_usereply", {
    user_name: userName,
    user_email: userEmail
  });

  Promise.all([mainEmail, autoReply])
    .then(() => {
      alert("✅ Message envoyé avec succès !");
      form.reset();
      captchaAnswer = generateCaptcha(); // nouveau captcha après envoi
    })
    .catch((err) => {
      console.error("Erreur lors de l'envoi :", err);
      alert("❌ Une erreur est survenue. Veuillez réessayer plus tard.");
    })
    .finally(() => {
      button.disabled = false;
      button.textContent = "Envoyer";
    });
});
