import { NavLink } from 'react-router-dom';
import { Home, Smartphone, Users, Settings, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

function MobileBottomNav() {
  const activeClass = "text-blue-400 font-semibold";
  const inactiveClass = "text-slate-400";
  
  const navLinkStyle = ({ isActive }) => 
    `flex flex-col items-center gap-1 text-[10px] transition-colors duration-200 ${isActive ? activeClass : inactiveClass}`;

  return (
    <>
      {/* Spacer to prevent content overlapping with the fixed bottom nav */}
      <div className="h-20 md:hidden"></div>
      
      <motion.nav 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F1626]/90 backdrop-blur-lg border-t border-slate-800/80 py-2.5 px-4 flex justify-around items-center md:hidden shadow-2xl pb-[calc(env(safe-area-inset-bottom)+0.625rem)]"
      >
        <NavLink to="/" end className={navLinkStyle}>
          {({ isActive }) => (
            <>
              <Home className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span>Home</span>
            </>
          )}
        </NavLink>
        <NavLink to="/customer" className={navLinkStyle}>
          {({ isActive }) => (
            <>
              <Smartphone className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span>Account</span>
            </>
          )}
        </NavLink>
        <NavLink to="/rewards" className={navLinkStyle}>
          {({ isActive }) => (
            <>
              <Gift className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span className="hidden sm:inline">Rewards</span>
              <span className="sm:hidden">Gift</span>
            </>
          )}
        </NavLink>
        <NavLink to="/agent" className={navLinkStyle}>
          {({ isActive }) => (
            <>
              <Users className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span>Reseller</span>
            </>
          )}
        </NavLink>
        <NavLink to="/admin" className={navLinkStyle}>
          {({ isActive }) => (
            <>
              <Settings className={`w-5 h-5 ${isActive ? 'text-blue-400' : ''}`} />
              <span>Admin</span>
            </>
          )}
        </NavLink>
      </motion.nav>
    </>
  );
}

export default MobileBottomNav;
