import cn from 'classnames';
import { useEffect, useState } from 'react';
import { generateWord } from './generateWord';
import { getBackground } from './getBackgound';
import { getIcon } from './getIcon';

import styles from './index.module.css';

const TIME_TO_UPDATE = 10; // seconds

const setIcon = () => {
  let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
  if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = `/images/${getIcon()}.png`;
}

function App() {
  const [word, setWord] = useState(generateWord());
  const [background, setBackground] = useState(getBackground());

  useEffect(() => {
    setIcon();

    const intervalId = setInterval(() => {
      setWord(generateWord());
      setBackground(getBackground());
      setIcon();
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
          <img src={`/images/${letter.picname}.png`} alt='' className={cn(styles.img)}/>
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
