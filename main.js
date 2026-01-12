const buttons = document.querySelectorAll(".js-request-info");
const propertyField = document.getElementById("property-field");
const contactSection = document.getElementById("contact");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
    const propertyName = btn.getAttribute("data-property");
    if (propertyField) {
        propertyField.value = propertyName;
    }
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
    });
});

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(
        "Demo only:\nThis form does not send real data.\n(Perfectly fine for portfolio.)"
    );
    form.reset();
    if (propertyField) {
        propertyField.value = "";
    }
  });
}

// ANIMACIÓN DE TARJETAS AL HACER SCROLL

const observerOptions = {
  threshold: 0.1,  // Dispara cuando el 10% del elemento es visible
  rootMargin: '0px 0px -50px 0px'  // Opcional: activa un poco antes de llegar
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Agregar clase 'visible' cuando el elemento entra al viewport
      entry.target.classList.add('visible');
      
      // Opcional: dejar de observar después de que se mostró
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar todos los elementos con clase 'reveal-card'
document.querySelectorAll('.reveal-card').forEach(card => {
  observer.observe(card);
});
