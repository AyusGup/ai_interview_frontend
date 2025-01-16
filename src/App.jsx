import Home from './Home'
import Header from './Header';
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from "react-router";
import InterviewPlayground from './InterviewPlayground';
import Login from './components/Login.jsx';

function App() {
  return (
    <BrowserRouter>
    <div className='flex flex-col '>
      <Header />
      <main className='mt-20 m-2 w-full h-full'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-interview" element={<InterviewPlayground />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>

      </main>
    </div>
    </BrowserRouter>
  )
}

export default App;
