import { motion } from 'framer-motion';
import { Gift, Copy, Share2, TrendingUp, Award, Zap } from 'lucide-react';
import { useState } from 'react';

function Rewards() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://bundleup.gh/ref/MFaisal26";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="page-container block flex-grow"
    >
      <div className="bg-gradient-to-br from-[#101827] via-[#0C1220] to-[#0A0F1C] border-b border-slate-800 px-4 md:px-8 py-8 md:py-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 tracking-wide shadow-inner shadow-emerald-500/5">
              <Gift className="w-3.5 h-3.5" /> BundleUp Rewards
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white">Your Cashback & Rewards</h2>
            <p className="text-slate-400 mt-2 max-w-md text-sm">Earn GH₵ for every purchase you make and every friend you invite.</p>
          </div>
          
          <div className="flex flex-col items-end gap-2 bg-slate-900/60 border border-slate-800 p-5 rounded-2xl w-full md:w-auto">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Total Available Cashback</span>
            <div className="font-display font-extrabold text-4xl text-emerald-400 flex items-center gap-2">
              GH₵ 42.50
            </div>
            <button className="mt-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 active:scale-95">
              Withdraw to Wallet
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Streak Card */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full">3 Day Streak!</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Purchase Streak</h3>
            <p className="text-slate-400 text-xs mb-4">Buy data 5 days in a row to unlock a mystery data box.</p>
            
            <div className="flex gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div className={`w-full h-2 rounded-full ${i < 3 ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]' : 'bg-slate-800'}`}></div>
                  <span className={`text-[10px] font-bold ${i < 3 ? 'text-orange-400' : 'text-slate-500'}`}>{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard/Ranking */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full">Top 15%</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Your Ranking</h3>
            <p className="text-slate-400 text-xs mb-4">You are ranked #4,201 out of 30,000 users this month.</p>
            <div className="w-full bg-slate-950 rounded-full h-2 mb-2">
              <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="bg-purple-500 h-2 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></motion.div>
            </div>
            <span className="text-[10px] text-slate-500">2,000 points to reach Top 10% (Gold Tier)</span>
          </div>

          {/* Referral Card */}
          <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">GH₵5.00 / Invite</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Refer & Earn</h3>
              <p className="text-slate-400 text-xs mb-4">Invite friends. Get GH₵5.00 when they make their first purchase.</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-300 font-mono truncate">
                {referralLink}
              </div>
              <button 
                onClick={copyToClipboard}
                className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 p-2.5 rounded-xl border border-blue-500/20 transition-all active:scale-95 flex-shrink-0"
              >
                {copied ? <span className="text-xs font-bold px-1">Copied!</span> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default Rewards;
