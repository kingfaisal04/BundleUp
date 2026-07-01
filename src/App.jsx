import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import FloatingChat from './components/FloatingChat';
import LandingPage from './pages/LandingPage';
import CustomerDashboard from './pages/CustomerDashboard';
import AgentPortal from './pages/AgentPortal';
import AdminConsole from './pages/AdminConsole';
import Rewards from './pages/Rewards';

function App() {
  return (
    <Router>
      {/* Glow Orbs background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 -left-1/4 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-blue-600/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/customer" element={<CustomerDashboard />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/agent" element={<AgentPortal />} />
            <Route path="/admin" element={<AdminConsole />} />
          </Routes>
          <MobileBottomNav />
          <FloatingChat />
        </main>
      </div>
    </Router>
  );
}

export default App;
