let projects = [
  {
    title: "USTHB L1 CS Student Companion App",
    description: `Overview: An Offline-First Android app for first-year CS students to access announcements, module resources, and study materials seamlessly.

Core Features: Secure Google/Email authentication via Firebase Auth, personalized student profile management, and dynamic offline status detection.

Data Management: Real-time news and resource synchronization between local Room Database and Firebase Firestore with pull-to-refresh capabilities.

Admin & Roadmap: Role-based Admin panel for publishing content, with upcoming multi-language support (English/French) and organized module hubs.`,
    images: [
      "https://placehold.co/600x400/1e1e1e/27C93F?text=Working+On+It+.....",
      //"https://placehold.co/600x400/1e1e1e/27C93F?text=Firebase+Chat+2"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Firestore","Room DB", "MVVM","Offline-First Architecture"],
    demoLink: "",
    sourceLink: "https://github.com/chikhZE/app-cs-student",
    right: false
  },
  
  {
    title: "Islamic Companion (Android Native - API)",
    description: "A beautiful, modern, and minimalist Islamic Android application engineered with an offline-first architecture. The app provides a distraction-free, calm environment for daily Dhikr, Hadith exploration, and Quranic supplications, respecting the user's focus and device resources.",
    images: [
      "assets/imgs/islamic-app-1.png",
      "assets/imgs/islamic-app-2.png",
      "assets/imgs/islamic-app-3.png",
      "assets/imgs/islamic-app-4.png",
      "assets/imgs/islamic-app-5.png",
      "assets/imgs/islamic-app-6.png",
  
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "REST API", "Coroutines"],
    demoLink: "",
    sourceLink: "https://github.com/chikhZE/IslamicApp",
    right: true
  },
  {
    title: "Baccalaureate & BEM Score Calculator",
    description: "An algorithm-driven Android application designed to compute exam scores using stream-specific coefficient logic, dynamic input validation, and clean state observation.",
    images: [
      "assets/imgs/bac-app-1.png",
      "assets/imgs/bac-app-2.png",
      "assets/imgs/bac-app-3.png",
      "assets/imgs/bac-app-4.png",
      "assets/imgs/bac-app-5.png",
      "assets/imgs/bac-app-6.png",
      "assets/imgs/bac-app-7.png",
      "assets/imgs/bac-app-8.png"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Clean Architecture", "State Management"],
    demoLink: "",
    sourceLink: "https://github.com/chikhZE/AlgerianScoreCounter",
    right: false
  },
  {
    title: "Habit Tracker & Productivity App",
    description: "A feature-complete, production-ready Android habit-tracking app implementing local data` persistence with Room DB, scheduled background notifications via WorkManager, and dynamic user streak metrics.",
    images: [
      "assets/imgs/habit-app-1.png",
      "assets/imgs/habit-app-3.png",
      "https://placehold.co/600x400/1e1e1e/27C93F?text=On+Progress+....."
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room DB", "WorkManager", "MVVM"],
    demoLink: "",
    sourceLink: "https://github.com/chikhZE/smart-habit-tracker",
    right: true
  },
  {
    title: "Real-Time Chat & Cloud App",
    description: "A cloud-enabled mobile application featuring real-time messaging, secure user authentication with Firebase Auth, and instant cloud data synchronization via Firestore.",
    images: [
      "https://placehold.co/600x400/1e1e1e/27C93F?text=Working+On+It+.....",
      //"https://placehold.co/600x400/1e1e1e/27C93F?text=Firebase+Chat+2"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Firebase Auth", "Firestore"],
    demoLink: "",
    sourceLink: "https://github.com/chikhZE",
    right: false
  },
  
];

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(".projects-container");

  projects.forEach((proj) => {
    const imagesHTML = proj.images
      .map((img, idx) => `<img src="${img}" class="slide ${idx === 0 ? 'active' : ''}" alt="${proj.title}">`)
      .join('');

    const dotsHTML = proj.images.length > 1 
      ? `<div class="slider-dots">${proj.images.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`).join('')}</div>`
      : '';

    const controlsHTML = proj.images.length > 1 
      ? `<button class="slider-btn prev-btn" aria-label="Previous">&lt;</button>
         <button class="slider-btn next-btn" aria-label="Next">&gt;</button>`
      : '';

    const demoBtnHTML = proj.demoLink 
      ? `<a class="button active" href="${proj.demoLink}" target="_blank">Live Demo</a>` 
      : '';

    projectsContainer.innerHTML += `
      <div class="project ${proj.right ? 'right' : ''}">
        <div class="project-slider">
          <div class="slider-images">
            ${imagesHTML}
          </div>
          ${controlsHTML}
          ${dotsHTML}
        </div>
        <div class="text-container">
          <h2>${proj.title}</h2>
          <div class="tech-used">
            ${proj.techStack.map(tech => `<span class="tech">${tech}</span>`).join(' <span class="text-green">//</span> ')}
          </div>
          <p>${proj.description}</p>
          <div class="project-btns">
            ${demoBtnHTML}
            <a class="button" href="${proj.sourceLink}" target="_blank">View Source</a>
          </div>
        </div>
      </div>
    `;
  });

  const sliders = document.querySelectorAll(".project-slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");

    if (slides.length <= 1) return;

    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      if (index >= slides.length) currentIndex = 0;
      else if (index < 0) currentIndex = slides.length - 1;
      else currentIndex = index;

      slides[currentIndex].classList.add("active");
      if (dots[currentIndex]) dots[currentIndex].classList.add("active");
    }

    if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
    if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => showSlide(idx));
    });
  });
});