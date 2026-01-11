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
