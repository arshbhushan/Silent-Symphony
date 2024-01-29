// // src/components/FingerSpellingComponent.jsx
// import React, { useEffect, useState } from 'react';
// import './styles.css';
// import AlphabetCard from './AlphabetCard';
// import axios from 'axios';
// const FingerSpellingComponent = () => {
//   const [fingerSpellings, setFingerSpellings] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5555/finger-spelling')
//       .then((response) => {
//         setFingerSpellings(response.data.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <h1>Finger Spellings</h1>
//       {fingerSpellings.map((spelling) => (
//         <AlphabetCard key={spelling._id} alphabet={spelling} />
//       ))}
//     </div>
//   );
// };

// export default FingerSpellingComponent;
