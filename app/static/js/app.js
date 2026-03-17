document.addEventListener("DOMContentLoaded", () => {
    const particleContainer = document.getElementById("chakra-particles");

    function createParticle() {
        if (!particleContainer) return;

        const particle = document.createElement("span");
        particle.classList.add("chakra-particle");

        const size = Math.random() * 10 + 4;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 6;

        particle.style.left = `${left}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = (Math.random() * 0.5 + 0.35).toString();

        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    setInterval(createParticle, 260);

    const cards = document.querySelectorAll(".anime-card, .feature-card, .about-card");

    cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 8;
            const rotateX = ((y / rect.height) - 0.5) * -8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    const reveals = document.querySelectorAll(".reveal-up");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
            }
        });
    }, {
        threshold: 0.16
    });

    reveals.forEach((item) => revealObserver.observe(item));
});