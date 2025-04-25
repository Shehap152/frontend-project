// Nab Bar 
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '.nav-bar',
  offset: 100
});
// Drop Down :
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.deep-dropdown-toggle').forEach(toggle => {
    const submenu = toggle.parentElement.querySelector('.fixed-submenu');


    console.log('Deep dropdown found, attaching click handler');

    toggle.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Deep dropdown clicked');


      const rect = toggle.getBoundingClientRect();

      submenu.classList.toggle('show');
    });
  });

  document.addEventListener('click', e => {

    document.querySelectorAll('.fixed-submenu.show').forEach(sm => {
      if (!sm.contains(e.target)) sm.classList.remove('show');
    });
  });
});

// To display links at mobile screen (Responsve) by click on bar icon :

const menuIcon = document.getElementById('menu-icon');
const links = document.querySelector('.links');

menuIcon.addEventListener('click', () => {

  links.classList.toggle('display-links');


  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

// Red Line under links in Nav Bar
const navLinks = document.querySelectorAll('.links ul > li > a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {

    navLinks.forEach(l => l.classList.remove('active'));

    this.classList.add('active');
  });
});

////////////////////////

var menuItems = {
  starter: [
    { name: "Magnam Tiste", price: "$5.95", img: "./img/menu/menu-item-1.png" },
    { name: "Aut Luia", price: "$14.95", img: "./img/menu/menu-item-2.png" },
    { name: "Est Eligendi", price: "$8.95", img: "./img/menu/menu-item-3.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-4.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-5.png" },
    { name: "Laboriosam Direva", price: "$9.95", img: "./img/menu/menu-item-6.png" }
  ],
  breakfast: [
    { name: "Magnam Tiste", price: "$5.95", img: "./img/menu/menu-item-1.png" },
    { name: "Aut Luia", price: "$14.95", img: "./img/menu/menu-item-2.png" },
    { name: "Est Eligendi", price: "$8.95", img: "./img/menu/menu-item-3.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-4.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-5.png" },
    { name: "Laboriosam Direva", price: "$9.95", img: "./img/menu/menu-item-6.png" }
  ],
  lunch: [
    { name: "Magnam Tiste", price: "$5.95", img: "./img/menu/menu-item-1.png" },
    { name: "Aut Luia", price: "$14.95", img: "./img/menu/menu-item-2.png" },
    { name: "Est Eligendi", price: "$8.95", img: "./img/menu/menu-item-3.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-4.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-5.png" },
    { name: "Laboriosam Direva", price: "$9.95", img: "./img/menu/menu-item-6.png" }
  ],
  dinner: [
    { name: "Magnam Tiste", price: "$5.95", img: "./img/menu/menu-item-1.png" },
    { name: "Aut Luia", price: "$14.95", img: "./img/menu/menu-item-2.png" },
    { name: "Est Eligendi", price: "$8.95", img: "./img/menu/menu-item-3.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-4.png" },
    { name: "Eos Luibusdam", price: "$12.95", img: "./img/menu/menu-item-5.png" },
    { name: "Laboriosam Direva", price: "$9.95", img: "./img/menu/menu-item-6.png" }
  ]
};

// const lightbox = GLightbox({
//   selector: '.glightbox'
// });

const menuContainer = document.getElementById("menuContainer");
const buttons = document.querySelectorAll("#menuNav .btn");

function renderMenu(category) {
  menuContainer.classList.add("fade-out");

  setTimeout(() => {
    menuContainer.innerHTML = "";
    menuItems[category].forEach(item => {
      const col = document.createElement("div");
      col.className = "col-lg-4 col-sm-6";
      col.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="img-fluid">
        <h4 class="mt-3">${item.name}</h4>
        <p>Lorem, deren, trataro, filede, nerada</p>
        <b class="text-danger fs-3">${item.price}</b>
      `;
      menuContainer.appendChild(col);
    });
    menuContainer.classList.remove("fade-out");
  }, 300);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active-menu").classList.remove("active-menu");
    btn.classList.add("active-menu");
    const category = btn.getAttribute("data-category");
    renderMenu(category);
  });
});

renderMenu("starter");



document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Initialize Swiper for Testimonials
  document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
    let configScript = swiperElement.querySelector(".swiper-config");
    if (!configScript) return;

    let config;
    try {
      config = JSON.parse(configScript.innerHTML.trim());
    } catch (error) {
      console.error("Invalid Swiper config JSON:", error);
      return;
    }

    // Initialize Swiper
    new Swiper(swiperElement, config);
  });
});




// ---------------------------------------------- //

// Counter Animation for State Section
// Get the counter elements for each state
var state_1_counter = document.getElementById("state-1");
var state_2_counter = document.getElementById("state-2");
var state_3_counter = document.getElementById("state-3");
var state_4_counter = document.getElementById("state-4");

// Set Target For each State 
state_1_target = Number(state_1_counter.innerHTML); // 232
state_2_target = Number(state_2_counter.innerHTML); // 521
state_3_target = Number(state_3_counter.innerHTML); // 1453
state_4_target = Number(state_4_counter.innerHTML); // 32

// Set Initial Value For each State equal to 0
state_1_counter.innerHTML = 0;
state_2_counter.innerHTML = 0;
state_3_counter.innerHTML = 0;
state_4_counter.innerHTML = 0;

function counter(state_x_counter, state_x_target, step) {
  let current = 0;

  let intervalId = setInterval(function () {
    current += step;
    if (current >= state_x_target) {
      current = state_x_target;
      clearInterval(intervalId);
    }
    state_x_counter.innerHTML = Math.round(current);
  }, 10); // Update every 10 ms
}


counter(state_1_counter, state_1_target, state_1_target / 100);
counter(state_2_counter, state_2_target, state_2_target / 100);
counter(state_3_counter, state_3_target, state_3_target / 100);
counter(state_4_counter, state_4_target, state_4_target / 100);


$(document).ready(function () {
  var counted = false;
  $(window).on('scroll', function () {
    var oTop = $('.stats-section').offset().top - $(window).height();
    if (!counted && $(window).scrollTop() > oTop) {
      counted = true;
      $('.stats-section h2').each(function () {
        var $this = $(this);
        var target = +$this.text();
        $this.text('0');
        $({ countNum: 0 }).animate(
          { countNum: target },
          {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $this.text(Math.floor(now));
            },
            complete: function () {
              $this.text(target);
            }
          }
        );
      });
    }
  });
});







