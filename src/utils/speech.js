
// Function to speak a given text
export const speakText = (text) => {
    return new Promise((resolve, reject) => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
  
      utterance.onend = () => resolve(true);
      utterance.onerror = (err) => reject(err);
  
      synth.speak(utterance);
    });
  };
  