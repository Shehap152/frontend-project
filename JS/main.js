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


  