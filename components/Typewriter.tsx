import { useState, useEffect } from 'react';
interface TypeWriterProps {
  texts : string[] ;
  typingSpeed?:number ;
  delay?:number ;
}
const Typewriter : React.FC<TypeWriterProps> = ({ texts, typingSpeed = 100, delay = 1000 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[currentIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const nextTimeout = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, delay);
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, currentIndex, texts, typingSpeed, delay]);

  return (
    <h1 className="font-mono text-6xl border-r-2 border-black whitespace-nowrap overflow-hidden italic pt-2">
      {currentText}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default Typewriter;
