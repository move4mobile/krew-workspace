const navbar = document.querySelector('#navbar');

// Darkmode switch
if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.querySelector('html').classList.add('dark');
} else if (localStorage.theme === 'dark') {
  document.querySelector('html').classList.add('dark');
}

var lightSwitches = document.getElementsByClassName('js-light-switch');

for (let i = 0; i < lightSwitches.length; i++) {
  lightSwitches[i].addEventListener('click', function() {
    //console.log("Clicked index: " + i);
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme == 'dark') {
      htmlClasses.remove('dark');
      localStorage.removeItem('theme');
    } else {
      htmlClasses.add('dark');
      localStorage.theme = 'dark';
    }
  });
}

// document.getElementsByClassName('js-light-switch').addEventListener('click', function() {
//   let htmlClasses = document.querySelector('html').classList;
//   if (localStorage.theme == 'dark') {
//     htmlClasses.remove('dark');
//     localStorage.removeItem('theme');
//   } else {
//     htmlClasses.add('dark');
//     localStorage.theme = 'dark';
//   }
// });

// scroll to top with easing
const back2Top = document.querySelector('#back2Top');

const easeOutCubic = function(t) {
  return (--t) * t * t + 1;
};

const scrollToTop = (startTime, currentTime, duration, windowScrollY) => {
  const runtime = currentTime - startTime;
  let progress = runtime / duration;
  progress = Math.min(progress, 1);
  const ease = easeOutCubic(progress);

  window.scroll(0, windowScrollY + windowScrollY * -1 * ease);
  if (runtime < duration) {
    requestAnimationFrame((timestamp) => {
      const currentTime = timestamp || new Date().getTime();
      scrollToTop(startTime, currentTime, duration, windowScrollY);
    });
  }
};

back2Top.addEventListener('click', (e) => {
  e.preventDefault();
  const htmlEl = document.querySelector('html');
  htmlEl.style.scrollBehavior = 'smooth';
  if (getComputedStyle(htmlEl).scrollBehavior) {
    window.scroll({ top: 0, left: 0 });
  } else {
    const anim = requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime();
      const duration = 1500;
      const start = stamp;
      const windowScrollY = window.scrollY;
      scrollToTop(start, stamp, duration, windowScrollY);
    });
  }
});

// toggle mobile nav
const openNav = document.querySelector('#openNav');
const closeNav = document.querySelector('#closeNav');
const mobileNav = document.querySelector('#mobileNav');

openNav.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.remove('hidden');
});

closeNav.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.add('hidden');
});

document.querySelectorAll('.closeNavLink').forEach(item => {
  item.addEventListener('click', event => {
    mobileNav.classList.add('hidden');
  });
});

