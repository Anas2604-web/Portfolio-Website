
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initGSAPAnimations = () => {
  // Hero section animations
  const tl = gsap.timeline();
  
  tl.from(".hero-image", {
    scale: 0,
    rotation: 180,
    duration: 1.2,
    ease: "back.out(1.7)"
  })
  .from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.5")
  .from(".hero-subtitle", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.3")
  .from(".hero-description", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.2")
  .from(".hero-buttons", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.3")
  .from(".hero-social", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.1
  }, "-=0.4");

  // Floating animation for profile image
  gsap.to(".hero-image", {
    y: -20,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  });

  // Parallax effect for background elements
  gsap.to(".parallax-bg", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-bg",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const initScrollAnimations = () => {
  // About section animations
  gsap.from(".about-title", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".about-content", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".about-content",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from(".skill-tag", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".skill-tag",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });

  // Projects section animations
  gsap.from(".project-card", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".project-card",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });

  // Contact section animations
  gsap.from(".contact-card", {
    y: 80,
    opacity: 0,
    rotation: 5,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".contact-card",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
};

export const addHoverAnimations = () => {
  // Project card hover effects
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const image = card.querySelector(".project-image");
    const content = card.querySelector(".project-content");
    
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
      gsap.to(image, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      gsap.to(content, { y: -5, duration: 0.3, ease: "power2.out" });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(content, { y: 0, duration: 0.3, ease: "power2.out" });
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll(".gsap-button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    });
    
    button.addEventListener("mouseleave", () => {
      gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
  });

  // Social icon hover effects
  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, { 
        scale: 1.2, 
        rotation: 360, 
        duration: 0.4, 
        ease: "back.out(1.7)" 
      });
    });
    
    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, { 
        scale: 1, 
        rotation: 0, 
        duration: 0.3, 
        ease: "power2.out" 
      });
    });
  });
};
