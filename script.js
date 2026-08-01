const countdownElement = document.getElementById("countdown");
    const message = document.getElementById("birthday-message");
    const balloons = document.getElementById("balloons");

    const targetDate = new Date("August 21, 2026 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        clearInterval(timer);
        countdownElement.style.display = "none";
        message.style.display = "block";
        showBalloons();
      }
    };

    function showBalloons() {
      balloons.style.display = "block";
      for (let i = 0; i < 30; i++) {
        let b = document.createElement("div");
        b.classList.add("balloon");
        b.style.left = Math.random() * 100 + "%";
        b.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        b.style.animationDelay = Math.random() * 3 + "s";
        balloons.appendChild(b);
      }
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
