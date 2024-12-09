document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.getElementById('registrationForm');
  const participantList = document.getElementById('participantList');
  const pickWinnerButton = document.getElementById('pickWinner');
  const winnerName = document.getElementById('winnerName');
  const popup = document.getElementById('popup');
  const popupWinner = document.getElementById('popupWinner');
  const closePopup = document.getElementById('closePopup');
  const shareButton = document.getElementById('shareButton');

  // Countdown Timer
  const giveawayDate = new Date('2024-12-25T00:00:00');
  const countdown = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date();
    const difference = giveawayDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }

  setInterval(updateCountdown, 1000);

  // Participants Array
  const participants = JSON.parse(localStorage.getItem('participants')) || [];

  // Load participants on page load
  participants.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    participantList.appendChild(listItem);
  });

  // Register Participants
  registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name) {
      participants.push(name);
      localStorage.setItem('participants', JSON.stringify(participants));

      const listItem = document.createElement('li');
      listItem.textContent = name;
      participantList.appendChild(listItem);
      nameInput.value = '';
    } else {
      alert('Tafadhali jaza jina!');
    }
  });

  // Pick Winner
  pickWinnerButton.addEventListener('click', () => {
    if (participants.length === 0) {
      alert('Hakuna mshiriki bado!');
    } else {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants[randomIndex];
      winnerName.textContent = `Mshindi ni: ${winner} 🎉`;
      popupWinner.textContent = `Hongera ${winner}!`;
      popup.classList.remove('hidden');
    }
  });

  // Close Popup
  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  // Share Giveaway
  shareButton.addEventListener('click', () => {
    const shareData = {
      title: 'Christmas Giveaway',
      text: 'Jiunge na kushiriki zawadi za Krismasi! Tembelea link hapa:',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) => console.error('Error sharing:', error));
    } else {
      alert(`Nakili link hii: ${window.location.href}`);
    }
  });
});

        // Jinsi ya kutengeneza theluji
const snowflakesCount = 50; // Idadi ya theluji inayoundwa
        const body = document.body;
        
        // Fanya theluji iundwe mara kwa mara
        setInterval(() => {
          if (document.querySelectorAll('.snowflake').length < snowflakesCount) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = Math.random() * 100 + 'vw'; // Nafasi ya bahati nasibu
            snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Kasi ya bahati nasibu
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Ukubwa wa bahati nasibu
            snowflake.textContent = '❄'; // Theluji
            body.appendChild(snowflake);
        
            // Ondoa theluji baada ya muda
            setTimeout(() => {
              snowflake.remove();
            }, 10000); // Ondoa baada ya sekunde 10
          }
        }, 200); // Unda theluji mpya kila milisekunde 200