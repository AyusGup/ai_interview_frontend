import Home from './Home'
import Header from './Header';
import Dashboard from './Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InterviewPlayground from './InterviewPlayground';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-interview" element={<InterviewPlayground />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
