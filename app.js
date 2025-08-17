document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  const testimonial = document.querySelector(".testimonial");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove highlights from other cards
      document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("selected");
      });

      // Highlight this card
      const card = button.closest(".card");
      card.classList.add("selected");

      // Show modal
      const planName = card.querySelector("h3").textContent;
      showModal(`You selected the <strong>${planName}</strong> plan.`);

      // Scroll to testimonial
      testimonial.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Feature hover effect
  const features = document.querySelectorAll(".features li");
  features.forEach(feature => {
    feature.addEventListener("mouseenter", () => {
      feature.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
      feature.style.paddingLeft = "10px";
    });
    feature.addEventListener("mouseleave", () => {
      feature.style.backgroundColor = "transparent";
      feature.style.paddingLeft = "0";
    });
  });
});

// Modal creation
function showModal(message) {
  // If modal already exists, remove it
  const existingModal = document.querySelector(".modal-overlay");
  if (existingModal) existingModal.remove();

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <p>${message}</p>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Close button
  modal.querySelector(".close-btn").addEventListener("click", () => {
    overlay.remove();
  });

  // Auto-dismiss after 4 sec
  setTimeout(() => {
    overlay.remove();
  }, 4000);
}
