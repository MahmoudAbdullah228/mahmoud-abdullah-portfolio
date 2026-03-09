const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.getElementById("mobileMenu");

if (navToggle && mobileMenu) {
  const menuLinks = mobileMenu.querySelectorAll("a");

  function setMenuLinksTabindex(focusable) {
    menuLinks.forEach((a) =>
      a.setAttribute("tabindex", focusable ? "0" : "-1"),
    );
  }

  navToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen);
    mobileMenu.setAttribute("aria-hidden", !isOpen);
    setMenuLinksTabindex(isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Close menu when a link is clicked
  menuLinks.forEach((link) => {
    // Touch tap highlight effect
    link.addEventListener(
      "touchstart",
      () => {
        link.classList.add("is-tapped");
        setTimeout(() => link.classList.remove("is-tapped"), 600);
      },
      { passive: true },
    );

    link.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        mobileMenu.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        setMenuLinksTabindex(false);
        document.body.style.overflow = "";
        window.location.href = link.getAttribute("href");
      }, 400);
    });
  });
}

// Only run custom cursor on non-touch devices
if (window.matchMedia("(pointer: fine)").matches) {
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });
  (function loop() {
    rx += (mx - rx) * 0.8;
    ry += (my - ry) * 0.8;
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
    requestAnimationFrame(loop);
  })();
} else {
  // Hide cursor elements on touch devices
  cursor.style.display = "none";
  ring.style.display = "none";
}

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        obs.unobserve(e.target); // stop watching once animated
      }
    });
  },
  { threshold: 0.08 },
);
document
  .querySelectorAll(
    ".skill-card,.project-card,.step-body,.community-card,.stat-item,.bio-panel",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .65s ease, transform .65s ease";
    obs.observe(el);
  });
