import cn from 'classnames';
import { useEffect, useState } from 'react';
import { generateWord } from './generateWord';
import { getBackground } from './getBackgound';

import styles from './index.module.css';

const TIME_TO_UPDATE = 10; // seconds

function App() {
  const [word, setWord] = useState(generateWord());
  const [background, setBackground] = useState(getBackground());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWord(generateWord());
      setBackground(getBackground());
    }, TIME_TO_UPDATE * 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <>
    <div className={cn(styles.background)} style={{backgroundImage: background}} />
    <div className={cn(styles.container)} >
      <div className={cn(styles.word)}>
        {word.map(letter => (
          <img src={require(`./images/${letter.picname}.png`)} alt='' className={cn(styles.img)}/>
        ))}
      </div>
      <div className={cn(styles.coords_container)}>
        {word.map(letter => (
          <a target="_blank" href={`https://www.google.com/maps?q=${letter.lat},${letter.lon}`} rel="noreferrer">
            {letter.lat}, {letter.lon}
          </a>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
