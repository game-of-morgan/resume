import React, { useEffect, useState } from 'react';
import styles from './Typewriter.module.css';

const BREAKPOINT_PATTERN = /-.-/g;

const Cursor = ({ visible }) => (
  <span className={!visible && styles.HideCursor}>_</span>
);

const StaticTypewriter = ({ text }) => {
  const [output, setOutput] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Typewrite
  useEffect(() => {
    if (output !== text) {
      const breakpoint = text.substr(output.length, '---'.length);
      if (BREAKPOINT_PATTERN.test(breakpoint)) {
        setTimeout(() => {
          setOutput((prevOutput) => `${prevOutput}---`);
        }, breakpoint.split('-')[1] * 100);
      } else {
        setTimeout(() => {
          setOutput((prevOutput) => {
            const newOutput = text.substr(0, prevOutput.length + 1);
            return newOutput;
          });
        }, 60);
      }
    }
  }, [output]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={styles.Typewriter}>
      <div className={styles.Terminal}>
        <div>
          <span>&gt;</span>
        </div>
        <div>
          {`${output.replace(BREAKPOINT_PATTERN, '')}`}
          <Cursor visible={showCursor} />
        </div>
      </div>
    </h1>
  );
};

export default StaticTypewriter;
