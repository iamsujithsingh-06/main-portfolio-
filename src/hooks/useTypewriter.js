import { useState, useEffect } from 'react';

/**
 * Custom hook for creating a typewriter typing and erasing effect.
 * @param {string[]} words - Array of words/phrases to cycle through.
 * @param {number} typeSpeed - Delay in ms between typing characters.
 * @param {number} eraseSpeed - Delay in ms between erasing characters.
 * @param {number} delay - Delay in ms before starting to erase completed word.
 */
export const useTypewriter = (words, typeSpeed = 80, eraseSpeed = 40, delay = 1500) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing mode
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typeSpeed);

      // If word is completely typed, wait and start deleting
      if (text === currentWord) {
        clearTimeout(timer);
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      // Deleting mode
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, eraseSpeed);

      // If word is completely erased, switch to next word
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, eraseSpeed, delay]);

  return text;
};

export default useTypewriter;
