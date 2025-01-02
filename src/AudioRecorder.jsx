import {useRef, useState} from "react";
import { downloadWav, getWaveBlob } from "webm-to-wav-converter";


export default function App() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const mediaRecorder = useRef(null);
  const stream = useRef(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const record = async () => {
    if (!(mediaRecorder.current && stream.current)) {
      const constraints = { audio: true, video: false };

      try {
        stream.current = await navigator.mediaDevices.getUserMedia(constraints);

        mediaRecorder.current = new MediaRecorder(stream.current);

        mediaRecorder.current.ondataavailable = async(e) => {
          if (mediaRecorder.current) {
    
            const wavBlob = await getWaveBlob(e.data, false); // Should return a valid Blob

            if (!(wavBlob instanceof Blob)) {
                console.error("getWaveBlob did not return a valid Blob");
            }
            
            setAudioBlob(wavBlob);
          }
        };
      } catch (err) {
        console.error(err);
      }
    }
    mediaRecorder.current.start();
  };

  const stop = () => {
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const tracks = stream.current.getTracks();
      tracks.forEach((track) => track.stop());
      stream.current = null;
      mediaRecorder.current = null;
    };
  };
  const end = () => {
    // const tracks = stream.current.getTracks();
    // tracks.forEach((track) => track.stop());
  };

  const uploadAudio = async () => {
    if (!audioBlob) {
      console.error("No audio blob available for upload.");
      return;
    }

    const formData = new FormData();
    console.log("audioBlob", audioBlob);
    formData.append("file", audioBlob, "recording.wave");

    try {
      const response = await fetch(`${BACKEND_URL}/upload-audio/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Audio uploaded successfully:", result);
      } else {
        console.error("Failed to upload audio:", response.statusText);
      }
    } catch (err) {
      console.error("Error uploading audio:", err);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={record}>Start</button>
      <button onClick={stop}>Stop</button>
      {audioBlob? <button onClick={uploadAudio}>Upload Audio</button> : <></>}
    </div>
  );
}
