// AlphabetCard.jsx

import React from 'react';

const AlphabetCard = ({ alphabet }) => {
  const { Alphabet, handShape, videoUrl, mnemonicTips } = alphabet;

  return (
    <div className="alphabet-card">
      <h2>{Alphabet}</h2>

      {handShape && handShape.imageUrl && (
        <div className="handshape">
          <img src={handShape.imageUrl} alt={`Handshape for ${Alphabet}`} />
          <p>{handShape.description}</p>
        </div>
      )}

      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="mnemonic-tips">
        <h3>Mnemonic Tips:</h3>
        <ul>
          {mnemonicTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlphabetCard;
