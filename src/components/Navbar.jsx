import { NavLink } from 'react-router-dom';
import { Zap, Home, Smartphone, Users, Settings, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const activeClass = "bg-blue-600 text-white shadow-md";
  const inactiveClass = "text-slate-400 hover:bg-slate-800 hover:text-slate-200";
  
  const navLinkStyle = ({ isActive }) => 
    `nav-tab px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${isActive ? activeClass : inactiveClass}`;

  return (
    <nav className="sticky top-0 z-50 bg-[#0F1626]/80 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3 flex items-center justify-between">
      <NavLink to="/" className="flex items-center gap-2 cursor-pointer">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-tr from-blue-600 to-emerald-400 p-2 rounded-xl text-white shadow-lg shadow-blue-500/20"
        >
          <Zap className="w-5 h-5 fill-current" />
        </motion.div>
        <span className="font-display font-extrabold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
          Bundle<span className="text-blue-500">Up</span>
        </span>
      </NavLink>

      <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
        <NavLink to="/" end className={navLinkStyle}>
          <Home className="w-3.5 h-3.5" /> Home
        </NavLink>
        <NavLink to="/customer" className={navLinkStyle}>
          <Smartphone className="w-3.5 h-3.5" /> My Account
        </NavLink>
        <NavLink to="/rewards" className={navLinkStyle}>
          <Gift className="w-3.5 h-3.5" /> Rewards
        </NavLink>
        <NavLink to="/agent" className={navLinkStyle}>
          <Users className="w-3.5 h-3.5" /> Agent Portal
        </NavLink>
        <NavLink to="/admin" className={navLinkStyle}>
          <Settings className="w-3.5 h-3.5" /> Admin Console
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:block hidden flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ring-1 ring-emerald-500/25">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1"></span>
          <span>Live API</span>
        </div>
        <NavLink to="/customer" className="flex items-center gap-2 bg-slate-900/80 pl-2.5 pr-1 py-1 rounded-full border border-slate-800 cursor-pointer hover:border-slate-700 transition-all">
          <span className="hidden sm:inline text-xs font-semibold text-slate-300">M.Faisal</span>
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-blue-500/20">
            M.F
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
