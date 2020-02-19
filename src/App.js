import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import SelectBox from './SelectBox';
import TopText from './TopText';
import BottomText from './BottomText';
import GenerateButton from './GenerateButton';

import Image from './Image';

export default function App() {
  const [imageSrc, setImageSrc] = useState('https://memegen.link/apcr/_.jpg');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Image imageSrc={imageSrc} />
      <SelectBox
        onChange={event => {
          setValue(event.target.value);
          setImageSrc(`https://memegen.link/${event.target.value}/_.jpg`);
        }}
      />

      <TopText
        onChange={event => {
          setTopText(event.target.value);
          setImageSrc(
            `https://memegen.link/${value}/${event.target.value}/${bottomText}_.jpg`,
          );
        }}
      />
      <BottomText
        onChange={event => {
          setBottomText(event.target.value);
          setImageSrc(
            `https://memegen.link/${value}/${topText}/${event.target.value}/_.jpg`,
          );
        }}
      />

      <GenerateButton
        onClick={() =>
          setImageSrc(
            `https://memegen.link/${value}/${topText}/${bottomText}.jpg`,
          )
        }
      />
      <button>
        <a
          href={`https://memegen.link/${value}/${topText}/${bottomText}.jpg`}
          download
        >
          download
        </a>
      </button>
    </div>
  );
}
