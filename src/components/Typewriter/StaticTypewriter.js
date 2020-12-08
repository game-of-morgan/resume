import React, { useEffect, useState } from 'react';
import styles from './Typewriter.module.css';
import { useKeyPress } from '../../helpers/hooks';

const BREAKPOINT_PATTERN = /-.-/g;

const Cursor = ({ visible }) => (
  <span className={!visible && styles.HideCursor}>_</span>
);

const StaticTypewriter = ({ lines }) => {
  const [output, setOutput] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const enterKeyPress = useKeyPress('enter', true);

  useEffect(() => {
    if (
      enterKeyPress
      && lines[currentLineIndex + 1]
    ) {
      if (output[currentLineIndex].length < lines[currentLineIndex].length) {
        setOutput((prevOutput) => {
          const newOutput = [...prevOutput];
          newOutput[currentLineIndex] = lines[currentLineIndex];
          return newOutput;
        });
      }
      setCurrentLineIndex(currentLineIndex + 1);
    }
  }, [enterKeyPress]);

  // Typewrite
  useEffect(() => {
    const lineText = lines[currentLineIndex];
    const lineOutput = output[currentLineIndex] || [];
    if (lineOutput !== lineText) {
      const breakpoint = lineText.substr(lineOutput.length, '---'.length);
      if (BREAKPOINT_PATTERN.test(breakpoint)) {
        setTimeout(() => {
          setOutput((prevOutput) => {
            const newOutput = [...prevOutput];
            const prevLineOutput = prevOutput[currentLineIndex] || '';
            newOutput[currentLineIndex] = `${prevLineOutput}---`;
            return newOutput;
          });
        }, breakpoint.split('-')[1] * 100);
      } else {
        setTimeout(() => {
          setOutput((prevOutput) => {
            const newOutput = [...prevOutput];
            const prevLineOutput = prevOutput[currentLineIndex] || '';
            newOutput[currentLineIndex] = lineText.substr(
              0, prevLineOutput.length + 1,
            );
            return newOutput;
          });
        }, 60);
      }
    }
  }, [output, currentLineIndex]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.Container}>
      {output.map((lineOutput, index) => (
        <div>
          <h1 className={styles.Typewriter}>
            <div className={`${styles.Terminal} ${index !== currentLineIndex ? styles.Faded : ''}`}>
              <div>
                <span>&gt;</span>
              </div>
              <div>
                <div key={`tw-output-l${index}`}>
                  {`${lineOutput.replace(BREAKPOINT_PATTERN, '')}`}
                  <Cursor visible={showCursor && index === currentLineIndex} />
                </div>
              </div>
            </div>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default StaticTypewriter;
