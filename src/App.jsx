import Home from './Home'
import Header from './Header';
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from "react-router";
import InterviewPlayground from './InterviewPlayground';
<<<<<<< HEAD
import Login from './components/Login.jsx';
=======
import InterviewMEET from './Interview_meet';
import AudioRecorder from './AudioRecorder';
import WebcamStream from './WebStream';
>>>>>>> c701d4e8b8d2558ff3beae10137df070e4c51e93

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
    <div className='flex flex-col '>
      <Header />
      <main className='mt-20 m-2 w-full h-full'>
=======
      {/* <Header /> */}
>>>>>>> c701d4e8b8d2558ff3beae10137df070e4c51e93
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/audio" element={<AudioRecorder />} />
        <Route path="/video" element={<WebcamStream />} />
        <Route path="/create-interview" element={<InterviewPlayground />} />
        <Route path="/meet" element={<InterviewMEET />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>

      </main>
    </div>
    </BrowserRouter>
  )
}

export default App;
