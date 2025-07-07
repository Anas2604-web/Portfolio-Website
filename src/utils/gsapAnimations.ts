
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utility function to create smooth scroll animations
export const createScrollAnimation = (element: HTMLElement, options: gsap.TweenVars) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    ...options
  });
};

// Utility function to create stagger animations
export const createStaggerAnimation = (elements: Element[], options: gsap.TweenVars) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: elements[0],
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    ...options
  });
};

// Utility function to create hover animations
export const addHoverAnimation = (element: HTMLElement, hoverVars: gsap.TweenVars, exitVars: gsap.TweenVars) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      duration: 0.3,
      ease: "power2.out",
      ...hoverVars
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      duration: 0.3,
      ease: "power2.out",
      ...exitVars
    });
  });
};

// Utility function to create parallax effect
export const createParallaxEffect = (element: HTMLElement, speed: number = -50) => {
  return gsap.to(element, {
    yPercent: speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};
