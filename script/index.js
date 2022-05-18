const featured = [
  {
    image: "./images/thumbnail/time-tracking.jpg",
    title: "Time tracking dashboard",
    desc: "The challenge from frontend mentor to complete this I used Random user API, Bootstrap 5 and JSON to complete this project",
    github:
      "https://github.com/hatwell-jonel/frontendmentor-time-tracking-dashboard.git",
    preview:
      "https://hatwell-jonel.github.io/frontendmentor-time-tracking-dashboard/",
  },
  {
    image: "./images/thumbnail/countries.jpg",
    title: "Rest Country",
    desc: "The challenge from frontend mentor, I built this using reactJs and Rest Country API.",
    github: "https://github.com/hatwell-jonel/frontendmentor-countries-reactjs",
    preview:
      "https://frontendmentor-countries-reactjs-5kb53opt3-hatwell-jonel.vercel.app/",
  },
  {
    image: "./images/thumbnail/todo-app.png",
    title: "Todo App",
    desc: "The challenge from frontend mentor, A classic todo app with a few twist! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    github: "https://github.com/hatwell-jonel/frontendmentor-todoapp.git",
    preview: "https://hatwell-jonel.github.io/frontendmentor-todoapp/",
  },
];

const moreProjects = [
  {
    image: "./images/thumbnail/blogr-landing.png",
    title: "Blogr landing page",
    desc: "The challenge from frontend mentor, I built this using HTML, Vanilla JavaScript and SCSS.",
    github:
      "https://github.com/hatwell-jonel/frontendmentor-blogr-landingpage.git",
    preview:
      "https://hatwell-jonel.github.io/frontendmentor-blogr-landingpage/",
  },
  {
    image: "./images/thumbnail/testimonial-grid.jpg",
    title: "Testimonial Grid Section",
    desc: "The challenge from frontend mentor, this helps me to improve my knowledge about using CSS Grid.",
    github: "https://github.com/hatwell-jonel/testimonial-fem.git",
    preview: "https://hatwell-jonel.github.io/testimonial-fem/",
  },
  {
    image: "./images/thumbnail/huddle-landing.jpg",
    title: "Huddle landing page",
    desc: "The challenge from frontend mentor, this helps me to practice my layout skills.",
    github:
      "https://github.com/hatwell-jonel/frontendmentor-huddle-landingpage.git",
    preview:
      "https://hatwell-jonel.github.io/frontendmentor-huddle-landingpage/",
  },
  {
    image: "./images/thumbnail/loopstudios-landing.jpg",
    title: "Loopstudios landing page",
    desc: "The challenge from frontend mentor, this helps me to practice my knowledge using CSS Grid.",
    github: "https://github.com/hatwell-jonel/frontendmentor-loopstudio.git",
    preview: "https://hatwell-jonel.github.io/frontendmentor-loopstudio/",
  },
  {
    image: "./images/thumbnail/pricingcomponent.jpg",
    title: "Pricing component",
    desc: "The challenge from frontend mentor, this helps me to increase my knowledge on JavaScript and how to style input range.",
    github:
      "https://github.com/hatwell-jonel/frontendmentor-pricingcomponent.git",
    preview: "https://hatwell-jonel.github.io/frontendmentor-pricingcomponent/",
  },
  {
    image: "./images/thumbnail/drumkit.png",
    title: "Drumkit",
    desc: "One of the mini project from #javascript30 of wes bos",
    github: "https://github.com/hatwell-jonel/drumkit.git",
    preview: "https://hatwell-jonel.github.io/drumkit/",
  },
  {
    image: "./images/thumbnail/insure-landing.jpg",
    title: "Insure landing page",
    desc: "The challenge from frontend mentor, In this project I used for the first the array of objects for the data of about section.",
    github:
      "https://github.com/hatwell-jonel/frontendmentor-insure-landingpage.git",
    preview:
      "https://hatwell-jonel.github.io/frontendmentor-insure-landingpage/",
  },
];

const theme = document.querySelector("#theme-selector");
const themeIcon = document.querySelector(".fa-solid");
const nameEl = document.querySelector("#typing-name");
const yearEl = document.querySelector(".year");
const featuredDOM = document.querySelector("#featured");
const caraouselDOM = document.querySelector("#owl-carousel");
const confetti = document.querySelector("#confetti");
const gimmickBtn = document.querySelector("#click-me");

let typingText = "JONEL HATWELL.";
let indexOfChar = 0;

document.addEventListener("DOMContentLoaded", () => {
  themeChanger();
  btnGimmick();
  type();
  currentYear();
  let featuredProj = featuredProjects(featured);
  renderProjects(featuredProj, featuredDOM);
  let moreProjct = moreProj(moreProjects);
  renderProjects(moreProjct, caraouselDOM);
});

// THEME
function themeChanger() {
  let lightTheme = false;
  let storeTheme = localStorage.getItem("theme");

  if (storeTheme === "light-theme") {
    lightTheme = true;
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    lightTheme = false;
  }

  if (lightTheme) {
    document.body.classList.toggle("light-theme");
  }
  theme.addEventListener("click", (e) => {
    document.body.classList.toggle("light-theme");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-theme")
        ? "light-theme"
        : "default"
    );

    if (document.body.classList.contains("light-theme")) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      themeIcon.classList.add("fa-sun");
      themeIcon.classList.remove("fa-moon");
    }
  });
}

// FEATURED PROJECTS
function featuredProjects(projects) {
  const project = projects.map((project) => {
    const { image, title, desc, github, preview } = project;
    return `
      <article class="card">
            <div class="card-img">
              <img src="${image}" alt="project image">
            </div>
            <div class="card-text">
              <div class="indicator">
                <i class="fa-solid fa-grip-lines"></i>
              </div>
              <div class="card-text-header">
                <h3 class="title">${title}</h3>
              </div>
              <div class="card-text-body">
                  <p class="description">${desc}</p>
                <div class="external">
                  <a href="${github}" class="external-link">
                    <i class="fa-brands fa-github"></i>
                    Github
                  </a>
                  <a href="${preview}" class="external-link" target="_blank">
                      <i class="fa-solid fa-eye"></i>
                      Preview
                  </a>
                </div>
              </div>
            </div>
          </article>
    `;
  });

  return project;
}

// MORE PROJECTS
function moreProj(projects) {
  const project = projects.map((project) => {
    const { image, title, desc, github, preview } = project;
    return `
      <article class="card">
            <div class="card-img">
              <img src="${image}" alt="project image">
            </div>
            <div class="card-text">
              <div class="indicator">
                <i class="fa-solid fa-grip-lines"></i>
              </div>
              <div class="card-text-header">
                <h3 class="title">${title}</h3>
              </div>
              <div class="card-text-body">
                  <p class="description">${desc}</p>
                <div class="external">
                  <a href="${github}" class="external-link">
                    <i class="fa-brands fa-github"></i>
                    Github
                  </a>
                  <a href="${preview}" class="external-link" target="_blank">
                      <i class="fa-solid fa-eye"></i>
                      Preview
                  </a>
                </div>
              </div>
            </div>
          </article>
    `;
  });
  return project;
}

function renderProjects(data, parentEl) {
  let elements = "";
  for (const project of data) {
    elements += project;
  }
  parentEl.innerHTML = elements;
}

function type() {
  nameEl.innerHTML += typingText.charAt(indexOfChar);
  indexOfChar++;
  setTimeout(type, 250);
}

function currentYear() {
  const date = new Date();
  let year = date.getFullYear();
  yearEl.innerHTML = year;
}

function btnGimmick() {
  const animItem = bodymovin.loadAnimation({
    wrapper: confetti,
    animType: "svg",
    loop: false,
    autoplay: false,
    path: "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json",
  });
  gimmickBtn.addEventListener("click", () => {
    confetti.classList.remove("hide");
    animItem.goToAndPlay(0, true);
  });
  animItem.addEventListener("complete", () => {
    confetti.classList.add("hide");
  });
}
