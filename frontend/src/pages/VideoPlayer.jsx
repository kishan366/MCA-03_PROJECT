// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Modal from 'react-modal';

// // Set root for accessibility
// Modal.setAppElement('#root');

// const VideoPlayer = () => {
//   const { topic } = useParams();
//   const [selectedWord, setSelectedWord] = useState(null);

//   const wordInfo = {
//     variables: 'Variables store data values in programming.',
//     JavaScript: 'JavaScript is a scripting language used to create dynamic web content.',
//     dynamic: 'Dynamic means capable of changing, typically in response to user interaction.',
//     Basics: 'Basics refer to the fundamental principles or starting points of a subject.',
//     fun: 'Fun refers to something enjoyable or entertaining.',
//   };

//   const videoData = {
//     javascript: {
//       title: 'JavaScript Basics',
//       // ✅ Working MP4 demo video (hosted on archive.org)
//       videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
//       subtitles: [
//         { time: '00:00', text: 'Welcome to JavaScript Basics!' },
//         { time: '00:05', text: 'Let’s learn about variables.' },
//         { time: '00:10', text: 'JavaScript is fun and dynamic.' },
//       ],
//     },
//   };
  

//   const data = videoData[topic];
//   if (!data) return <h2>Topic not found</h2>;

//   const renderClickableWords = (text) =>
//     text.split(' ').map((word, index) => {
//       const cleanWord = word.replace(/[^\w]/g, '');
//       return (
//         <span
//           key={index}
//           style={styles.word}
//           onClick={() => setSelectedWord(cleanWord)}
//         >
//           {word}{' '}
//         </span>
//       );
//     });

//   return (
//     <div style={styles.wrapper}>
//       <h1 style={styles.title}>{data.title}</h1>

//       <video controls width="100%" style={styles.video}>
//         <source src={data.videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div style={styles.subtitles}>
//         <h3 style={styles.subtitlesTitle}>📋 Subtitles</h3>
//         <ul style={styles.subtitleList}>
//           {data.subtitles.map((line, index) => (
//             <li key={index} style={styles.subtitleItem}>
//               <strong>{line.time}</strong>: {renderClickableWords(line.text)}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Modal
//         isOpen={!!selectedWord}
//         onRequestClose={() => setSelectedWord(null)}
//         style={modalStyles}
//         contentLabel="Word Info Modal"
//       >
//         <h2 style={styles.modalTitle}>{selectedWord}</h2>
//         <p style={styles.modalText}>
//           {wordInfo[selectedWord] || 'No information available.'}
//         </p>
//         <button onClick={() => setSelectedWord(null)} style={styles.closeButton}>
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     padding: '2rem',
//     fontFamily: 'system-ui, sans-serif',
//     textAlign: 'center',
//     background: '#fff8dc',
//     minHeight: '100vh',
//   },
//   title: {
//     color: '#1d4ed8',
//     fontSize: '2rem',
//     marginBottom: '1rem',
//   },
//   video: {
//     maxWidth: '800px',
//     borderRadius: '0.5rem',
//     marginBottom: '2rem',
//   },
//   subtitles: {
//     marginTop: '2rem',
//     background: '#f1f5f9',
//     padding: '1rem',
//     borderRadius: '0.75rem',
//     maxWidth: '800px',
//     margin: '0 auto',
//     textAlign: 'left',
//   },
//   subtitlesTitle: {
//     marginBottom: '1rem',
//     color: '#1f2937',
//     fontSize: '1.25rem',
//   },
//   subtitleList: {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//   },
//   subtitleItem: {
//     marginBottom: '0.5rem',
//     fontSize: '1rem',
//     color: '#374151',
//   },
//   word: {
//     cursor: 'pointer',
//     color: '#1d4ed8',
//     textDecoration: 'underline dotted',
//   },
//   modalTitle: {
//     fontSize: '1.5rem',
//     marginBottom: '1rem',
//     color: '#1d4ed8',
//   },
//   modalText: {
//     fontSize: '1rem',
//     color: '#374151',
//     marginBottom: '1.5rem',
//   },
//   closeButton: {
//     backgroundColor: '#1d4ed8',
//     color: '#fff',
//     border: 'none',
//     padding: '0.5rem 1rem',
//     borderRadius: '0.5rem',
//     cursor: 'pointer',
//     fontSize: '1rem',
//   },
// };

// const modalStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '2rem',
//     borderRadius: '1rem',
//     background: '#ffffff',
//     maxWidth: '400px',
//     width: '90%',
//     textAlign: 'center',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     zIndex: 1000,
//   },
// };

// export default VideoPlayer;

import React from "react";
import { useParams } from "react-router-dom";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const { topic } = useParams();

  const videoData = {
    javascript: {
      title: "JavaScript Shorts - Basics",
      youtubeId: "FtaQSdrl7YA",
    },
  };

  const data = videoData[topic];
  if (!data) return <h2 className="error">❌ Topic not found</h2>;

  return (
    <div
      className="video-container"
      data-theme={localStorage.getItem("theme") || "light"}
    >
      <h1 className="video-title">{data.title}</h1>

      <div className="video-wrapper">
        <iframe
          width="300"
          height="530"
          src={`https://www.youtube.com/embed/${data.youtubeId}?autoplay=0&controls=1`}
          title="YouTube Short"
          frameBorder="0"
          allowFullScreen
          className="shorts-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
