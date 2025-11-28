// Create animated twinkling stars
function createStars() {
  const starsContainer = document.getElementById('starsContainer');
  if (!starsContainer) return;

  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    starsContainer.appendChild(star);
  }
}

// Create falling confetti (Syrian flag colors + black)
function createConfetti() {
  const colors = ['#00843D', '#CE1126', '#FFFFFF', '#000000'];
  for (let i = 0; i < 35; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + '%';
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 3 + 's';
    c.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 6000);
  }
}

// === Everything starts after the 4.2-second intro ===
setTimeout(() => {
  document.getElementById('logoIntro').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';

  createStars();
  createConfetti();
  setInterval(createConfetti, 3000);

  // 10-SECOND COUNTDOWN + AUTO REDIRECT
  (function () {
    const START = 10;                    // ← Exactly 10 seconds
    let sec = START;
    const countdown = document.getElementById('countdown');
    const goNow = document.getElementById('goNow');
    const stayBtn = document.getElementById('stayBtn');
    let timerActive = true;

    function update() {
      countdown.innerText = sec;
    }
    update();

    const timer = setInterval(() => {
      if (!timerActive) return;

      sec--;
      if (sec <= 0) {
        clearInterval(timer);
        window.location.href = goNow.href;   // Auto redirect to Instagram login → profile
      } else {
        update();
      }
    }, 1000);

    stayBtn.addEventListener('click', () => {
      timerActive = false;
      clearInterval(timer);
      document.querySelector('.timer-label').innerText = 'تم إلغاء التحويل التلقائي';
      countdown.style.display = 'none';
    });
  })();

}, 4200); // Matches your logo intro animation perfectly