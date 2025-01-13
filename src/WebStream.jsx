import { useRef, useEffect } from 'react';

function WebcamStream() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const videoRef = useRef(null);
  let sendFrameInterval;

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.addEventListener('loadedmetadata', () => {
            videoRef.current.play();
            sendFrameInterval = setInterval(sendFrame, 10000); // Send frame data every 3 seconds
          });
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startWebcam();

    return () => {
      // Clean up: Stop video stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      if (sendFrameInterval) {
        clearInterval(sendFrameInterval);
      }
    };
  }, []);

  const sendFrame = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) {
          sendDataViaAPI(blob);
        }
      }, 'image/jpeg');
    }
  };

  const sendDataViaAPI = (blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'frame.jpg'); // Append the blob as a file
    formData.append("interview_id", "6772a648652fdff0a3c339ba");
    formData.append("question_id", "6772a574a19e5eedb1d94ebe");
    formData.append("user_id", "6772a6cd9f17be85486b1f81");
    formData.append("company_id", "6772a6cd9f17be85486b1f81");

    fetch(`${BACKEND_URL}/face/analyse-image/`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send frame data');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from API:', data);
      })
      .catch((error) => {
        console.error('Error sending frame data:', error);
      });
  };

  return <video ref={videoRef} />;
}

export default WebcamStream;
