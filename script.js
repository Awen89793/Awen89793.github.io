document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  createParticles();
});

function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const count = 80;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 4 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * -20;
    const opacity = Math.random() * 0.6 + 0.2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = x + "%";
    particle.style.top = y + "%";
    particle.style.opacity = opacity;
    particle.style.animationDuration = duration + "s";
    particle.style.animationDelay = delay + "s";

    container.appendChild(particle);
  }

  const style = document.createElement("style");
  style.textContent = `
    .particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(160, 120, 255, 0.7);
      animation: float linear infinite;
    }

    @keyframes float {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0.2;
      }
      50% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(-120vh) translateX(40px);
        opacity: 0.2;
      }
    }
  `;
  document.head.appendChild(style);
}
