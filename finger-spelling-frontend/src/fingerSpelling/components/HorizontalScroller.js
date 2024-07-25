// import React from 'react';
// import Slider from 'react-slick';
// import './HorizontalScroller.css' // Import the CSS file
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const featuresData = [
//   { feature: 'Off-Grid Power Generation', imageUrl: '/home_bg.jpg',color:'#2E600B' },
//   { feature: 'Regenerative Braking', imageUrl: '/regenerative_braking.png',color:'#4E8329' },
//   { feature: 'Self-Sustaining Power Generation', imageUrl: '/sustainableenergy.png',color:'#438812' },
//   { feature: 'Motor Control', imageUrl: '/motorControl.png',color:'#51A516' },
// ];

// const HorizontalScroller = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="horizontal-scroller-container">
//       <Slider {...settings}>
//         {featuresData.map((data, index) => (
//           <div key={index} className="feature-wrapper">
//             <div className="feature-box"style={{ backgroundColor: data.color }}>
//               <img className="feature-image" src={process.env.PUBLIC_URL + data.imageUrl} alt={data.feature} />
//               <div className="feature-text">{data.feature}</div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HorizontalScroller;
