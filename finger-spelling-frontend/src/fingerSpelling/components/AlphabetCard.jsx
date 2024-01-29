// import React, { useState } from 'react';
// import './AlphabetCard.css';

// const AlphabetCard = ({ alphabet }) => {
//   const { Alphabet, handShape, videoUrl, mnemonicTips } = alphabet;
//   const [isClicked, setIsClicked] = useState(false);

//   const handleAlphabetClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div className="alphabet-card">
//       <button onClick={handleAlphabetClick}>
//         <h2>{Alphabet}</h2>
//       </button>

//       {isClicked && handShape && handShape.imageUrl && (
//         <div className="handshape">
//           <img src={handShape.imageUrl} alt={`Handshape for ${Alphabet}`} />
//           <p>{handShape.description}</p>
//         </div>
//       )}

//       {isClicked && (
//         <div className="video-container">
//           <video controls>
//             <source src={videoUrl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}

//       {isClicked && (
//         <div className="mnemonic-tips">
//           <h3>Mnemonic Tips:</h3>
//           <ul>
//             {mnemonicTips.map((tip, index) => (
//               <li key={index}>{tip}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlphabetCard;
