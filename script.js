const textToSpeakInput = document.getElementById('input');
const SpeakButton = document.getElementById('speak');

if ('speechSynthesis' in window) {
    const synthesis = window.speechSynthesis;
    let voices = [];

    synthesis.onvoiceschanged = () => {
        voices = synthesis.getVoices();
    };

    SpeakButton.addEventListener('click', () => {
        const textToSpeak = textToSpeakInput.value;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        // Set voice and language
        utterance.voice = voices.find(voice => voice.lang === 'id-ID');
        utterance.lang = 'id-ID';

        // Adjust pitch, rate, and volume
        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;

        synthesis.speak(utterance); // Fix the comma here
    });
} else {
    console.log('Web Speech API is not supported in this browser');
}
// efek scrolling 
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  // script.js
  window.addEventListener('load', () => {
    const titleElement = document.querySelector('p');
  
    setTimeout(() => {
      titleElement.style.opacity = 1; /* Setel opasitas menjadi 1 (terlihat) */
      titleElement.style.transform = 'translateY(0)'; /* Setel translasi vertikal ke 0 */
    }, 500); /* Atur waktu penundaan sebelum animasi dimulai (misalnya, 500ms) */
  });
  window.addEventListener('load', () => {
    const titleElement = document.querySelector('.title');
  
    setTimeout(() => {
      titleElement.style.opacity = 1; /* Setel opasitas menjadi 1 (terlihat) */
      titleElement.style.transform = 'translateY(0)'; /* Setel translasi vertikal ke 0 */
    }, 500); /* Atur waktu penundaan sebelum animasi dimulai (misalnya, 500ms) */
  });
  