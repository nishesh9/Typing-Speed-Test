const quotes = {
  english: [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed is essential for productivity.",
    "Practice makes perfect in typing as in life.",
    "Always keep your fingers on the home row keys."
  ],
  hindi: [
    "जल्दी बROWN लोमड़ी आलसी कुत्ते के ऊपर कूदती है।",
    "टाइपिंग गति उत्पादकता के लिए आवश्यक है।",
    "टाइपिंग में अभ्यास हमेशा बेहतर बनाता है।",
    "हमेशा अपने अंगूठे को होम रॉ कीज़ पर रखें।"
  ],
  spanish: [
    "El rápido zorro marrón salta sobre el perro perezoso.",
    "La velocidad de escritura es esencial para la productividad.",
    "La práctica hace al maestro en la escritura.",
    "Siempre mantén tus dedos en las teclas de inicio."
  ]
  // Add more languages here if needed
};

const quoteDisplay = document.getElementById("quote");
const inputArea = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
const languageSelect = document.getElementById("languageSelect");

let startTime;
let currentQuote = "";

startBtn.addEventListener("click", () => {
  inputArea.disabled = false;
  inputArea.value = "";
  result.textContent = "";
  
  // Get the selected language from dropdown
  const selectedLanguage = languageSelect.value;
  currentQuote = quotes[selectedLanguage][Math.floor(Math.random() * quotes[selectedLanguage].length)];
  
  quoteDisplay.textContent = currentQuote;
  inputArea.focus();
  startTime = new Date().getTime();
});

inputArea.addEventListener("input", () => {
  const typedText = inputArea.value;
  if (typedText === currentQuote) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // seconds
    const wordsTyped = typedText.split(" ").length;
    const speed = (wordsTyped / timeTaken) * 60; // Words per minute
    result.textContent = `You typed at ${speed.toFixed(2)} words per minute.`;
  }
});
