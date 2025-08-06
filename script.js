// JavaScript to center the entire carousel on active card depending on direction with swipe and pagination
const trackNews = document.getElementById('carousel');
  const cardsNews = trackNews.querySelectorAll('.card');
  const leftBtnNews = document.querySelector('.arrow-left');
  const rightBtnNews = document.querySelector('.arrow-right');
  let activeIndexNews = 2;

  function updateActiveCardNews() {
    cardsNews.forEach((card, index) => {
      card.classList.toggle('active', index === activeIndexNews);
    });
    const activeCardNews = cardsNews[activeIndexNews];
    const scrollToNews = activeCardNews.offsetLeft - (trackNews.parentElement.offsetWidth / 2) + (activeCardNews.offsetWidth / 2);
    trackNews.style.transform = `translateX(${-scrollToNews}px)`;
    updateDotsNews();
  }

  const dotsContainerNews = document.createElement('div');
  dotsContainerNews.className = 'carouselNewsDots';
  cardsNews.forEach((_, index) => {
    const dotNews = document.createElement('span');
    dotNews.className = 'dotNews';
    dotNews.addEventListener('click', () => {
      activeIndexNews = index;
      updateActiveCardNews();
    });
    dotsContainerNews.appendChild(dotNews);
  });
  document.querySelector('.actualNews').appendChild(dotsContainerNews);

  function updateDotsNews() {
    const dotsNews = dotsContainerNews.querySelectorAll('.dotNews');
    dotsNews.forEach((dot, index) => {
      dot.classList.toggle('activeDotNews', index === activeIndexNews);
    });
  }

  leftBtnNews.addEventListener('click', () => {
    activeIndexNews = (activeIndexNews - 1 + cardsNews.length) % cardsNews.length;
    updateActiveCardNews();
  });

  rightBtnNews.addEventListener('click', () => {
    activeIndexNews = (activeIndexNews + 1) % cardsNews.length;
    updateActiveCardNews();
  });

  let startXNews = 0;
  let isDraggingNews = false;

  trackNews.addEventListener('touchstart', (e) => {
    startXNews = e.touches[0].clientX;
    isDraggingNews = true;
  });

  trackNews.addEventListener('touchmove', (e) => {
    if (!isDraggingNews) return;
    const deltaXNews = e.touches[0].clientX - startXNews;
    if (Math.abs(deltaXNews) > 50) {
      if (deltaXNews < 0) {
        activeIndexNews = (activeIndexNews + 1) % cardsNews.length;
      } else {
        activeIndexNews = (activeIndexNews - 1 + cardsNews.length) % cardsNews.length;
      }
      updateActiveCardNews();
      isDraggingNews = false;
    }
  });

  trackNews.addEventListener('touchend', () => {
    isDraggingNews = false;
  });

  updateActiveCardNews();
  //  reviews


 const trackReview = document.getElementById('carouselReviews');
    const cardsReview = trackReview.querySelectorAll('.cardReviews');
    const leftBtnReview = document.querySelector('.arrowReviewsLeft');
    const rightBtnReview = document.querySelector('.arrowReviewsRight');
    let activeIndexReview = 2;

    function updateActiveCardReview() {
      cardsReview.forEach((card, index) => {
        card.classList.toggle('active', index === activeIndexReview);
      });
      const activeCardReview = cardsReview[activeIndexReview];
      const scrollToReview = activeCardReview.offsetLeft - (trackReview.parentElement.offsetWidth / 2) + (activeCardReview.offsetWidth / 2);
      trackReview.style.transform = `translateX(${-scrollToReview}px)`;
      updateDotsReview();
    }

    const dotsContainerReview = document.createElement('div');
    dotsContainerReview.className = 'carouselReviewsDots';
    cardsReview.forEach((_, index) => {
      const dotReview = document.createElement('span');
      dotReview.className = 'dotReviews';
      dotReview.addEventListener('click', () => {
        activeIndexReview = index;
        updateActiveCardReview();
      });
      dotsContainerReview.appendChild(dotReview);
    });
    document.querySelector('.carouselReviewsSection').appendChild(dotsContainerReview);

    function updateDotsReview() {
      const dotsReview = dotsContainerReview.querySelectorAll('.dotReviews');
      dotsReview.forEach((dot, index) => {
        dot.classList.toggle('activeDotReviews', index === activeIndexReview);
      });
    }

    leftBtnReview.addEventListener('click', () => {
      activeIndexReview = (activeIndexReview - 1 + cardsReview.length) % cardsReview.length;
      updateActiveCardReview();
    });

    rightBtnReview.addEventListener('click', () => {
      activeIndexReview = (activeIndexReview + 1) % cardsReview.length;
      updateActiveCardReview();
    });

    let startXReview = 0;
    let isDraggingReview = false;

    trackReview.addEventListener('touchstart', (e) => {
      startXReview = e.touches[0].clientX;
      isDraggingReview = true;
    });

    trackReview.addEventListener('touchmove', (e) => {
      if (!isDraggingReview) return;
      const deltaXReview = e.touches[0].clientX - startXReview;
      if (Math.abs(deltaXReview) > 50) {
        if (deltaXReview < 0) {
          activeIndexReview = (activeIndexReview + 1) % cardsReview.length;
        } else {
          activeIndexReview = (activeIndexReview - 1 + cardsReview.length) % cardsReview.length;
        }
        updateActiveCardReview();
        isDraggingReview = false;
      }
    });

    trackReview.addEventListener('touchend', () => {
      isDraggingReview = false;
    });

    updateActiveCardReview();

const buttonKontakt = document.querySelector('.buttonKontakt');
const popupWindow = document.querySelector('.popup-window');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');

// Open the popup and show the overlay
buttonKontakt.addEventListener('click', () => {
    popupWindow.classList.add('show');
    overlay.classList.add('show');
});

// Close the popup and hide the overlay
closeButton.addEventListener('click', () => {
    popupWindow.classList.remove('show');
    overlay.classList.remove('show');
});

// Close the popup when clicking on the overlay
overlay.addEventListener('click', () => {
    popupWindow.classList.remove('show');
    overlay.classList.remove('show');
});