"use strict";

// hamburger_btn
{
  const openBtn = document.getElementsByClassName('openBtn')[0];
  const gNav = document.getElementsByClassName('gNav_sp')[0];
  openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('active');
    gNav.classList.toggle('d_block');
  });
  
}

// slider
{
  let sliderImages = document.querySelectorAll(".slide");
  let arrowRight = document.getElementById("arrowRight");
  let arrowLeft = document.getElementById("arrowLeft");
  let current = 0;

  function startSlide() {
    sliderImages[0].style.display = "block";
  }

  arrowRight.addEventListener("click", () => {
    sliderImages[current].style.display = "none";
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    sliderImages[current + 1].style.display = "block";
    current++;
  });

  arrowLeft.addEventListener("click", () => {
    sliderImages[current].style.display = "none";
    if (current === 0) {
      current = sliderImages.length;
    }
    sliderImages[current - 1].style.display = "block";
    current--;
  });

  startSlide();
}

// tab_menu
{
  const tab_ranking = document.getElementsByClassName('tab')[0].getElementsByTagName('a')[0];
  const tab_tea = document.getElementsByClassName('tab')[0].getElementsByTagName('a')[1];
  const tab_party = document.getElementsByClassName('tab')[0].getElementsByTagName('a')[2];
  const tab_gifts = document.getElementsByClassName('tab')[0].getElementsByTagName('a')[3];
  const tab_season = document.getElementsByClassName('tab')[0].getElementsByTagName('a')[4];

  const tab_area_ranking = document.getElementsByClassName('tab_area')[0];
  const tab_area_tea = document.getElementsByClassName('tab_area')[1];
  const tab_area_party = document.getElementsByClassName('tab_area')[2];
  const tab_area_gifts = document.getElementsByClassName('tab_area')[3];
  const tab_area_season = document.getElementsByClassName('tab_area')[4];

  const first_area = document.getElementsByClassName('first_area')[0];

  tab_ranking.addEventListener('click', () => {
    tab_ranking.classList.add('tab_active');
    tab_tea.classList.remove('tab_active');
    tab_party.classList.remove('tab_active');
    tab_gifts.classList.remove('tab_active');
    tab_season.classList.remove('tab_active');

    tab_area_ranking.classList.add('is_active');
    tab_area_tea.classList.remove('is_active');
    tab_area_party.classList.remove('is_active');
    tab_area_gifts.classList.remove('is_active');
    tab_area_season.classList.remove('is_active');
  });
  tab_tea.addEventListener('click', () => {
    tab_ranking.classList.remove('tab_active');
    tab_tea.classList.add('tab_active');
    tab_party.classList.remove('tab_active');
    tab_gifts.classList.remove('tab_active');
    tab_season.classList.remove('tab_active');

    tab_tea.classList.add('tab_active');

    first_area.classList.remove('first_area');
    tab_area_ranking.classList.remove('is_active');
    tab_area_tea.classList.add('is_active');
    tab_area_party.classList.remove('is_active');
    tab_area_gifts.classList.remove('is_active');
    tab_area_season.classList.remove('is_active');
  });
  tab_party.addEventListener('click', () => {
    tab_ranking.classList.remove('tab_active');
    tab_tea.classList.remove('tab_active');
    tab_party.classList.add('tab_active');
    tab_gifts.classList.remove('tab_active');
    tab_season.classList.remove('tab_active');

    first_area.classList.remove('first_area');

    tab_area_ranking.classList.remove('is_active');
    tab_area_tea.classList.remove('is_active');
    tab_area_party.classList.add('is_active');
    tab_area_gifts.classList.remove('is_active');
    tab_area_season.classList.remove('is_active');
  });
  tab_gifts.addEventListener('click', () => {
    tab_ranking.classList.remove('tab_active');
    tab_tea.classList.remove('tab_active');
    tab_party.classList.remove('tab_active');
    tab_gifts.classList.add('tab_active');
    tab_season.classList.remove('tab_active');

    first_area.classList.remove('first_area');

    tab_area_ranking.classList.remove('is_active');
    tab_area_tea.classList.remove('is_active');
    tab_area_party.classList.remove('is_active');
    tab_area_gifts.classList.add('is_active');
    tab_area_season.classList.remove('is_active');
  });
  tab_season.addEventListener('click', () => {
    tab_ranking.classList.remove('tab_active');
    tab_tea.classList.remove('tab_active');
    tab_party.classList.remove('tab_active');
    tab_gifts.classList.remove('tab_active');
    tab_season.classList.add('tab_active');

    first_area.classList.remove('first_area');
    
    tab_area_ranking.classList.remove('is_active');
    tab_area_tea.classList.remove('is_active');
    tab_area_party.classList.remove('is_active');
    tab_area_gifts.classList.remove('is_active');
    tab_area_season.classList.add('is_active');
  });
}
