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
  const cursorHalf = 5; // --cursor-size / 2
  const ringHalf = 18; // --ring-size / 2

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.transform = `translate3d(${mx - cursorHalf}px, ${my - cursorHalf}px, 0)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate3d(${rx - ringHalf}px, ${ry - ringHalf}px, 0)`;
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
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
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
    el.classList.add("reveal");
    obs.observe(el);
  });
