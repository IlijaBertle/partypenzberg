import { Routes, Route } from 'react-router-dom';

// Importe aus den neuen Unterordnern
import HomePage from 'pages/home/Home';
import LineupPage from 'pages/lineup/Home';
import PushPage from 'pages/push/Home';
import AboutPage from 'pages/aboutus/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lineup" element={<LineupPage />} />
      <Route path="/push" element={<PushPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      
      <Route path="*" element={<div className="p-10">404 - Seite nicht gefunden</div>} />
    </Routes>
  );
}