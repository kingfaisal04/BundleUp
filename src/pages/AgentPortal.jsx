import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

function AgentPortal() {
  const toast = (msg) => alert(msg);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="page-container block flex-grow"
    >
      <div className="bg-gradient-to-r from-[#0C1220] to-[#121A2E] border-b border-slate-800 px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">Agent Portal Console</span>
            <h2 className="font-display font-extrabold text-2xl text-white">Rabiyatu Adamu</h2>
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
              <span>Agent ID: <b className="font-mono text-slate-300">DBG-A00124</b></span>
              <span>•</span>
              <span>Joined Jan 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF8E6]/5 border border-[#B7791F]/20 px-4 py-2 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#B7791F]/10 flex items-center justify-center text-[#B7791F]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[9px] font-bold text-[#B7791F] uppercase block tracking-wider">Agent Level</span>
              <span className="text-xs font-bold text-slate-200">Gold Reseller 🥇</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-500 font-medium">Monthly Sales (Jun)</span>
            <div className="font-display font-extrabold text-xl text-white mt-1">GH₵ 3,840</div>
            <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">↑ 22% vs May</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-500 font-medium">Earned Commission</span>
            <div className="font-display font-extrabold text-xl text-emerald-400 mt-1">GH₵ 384</div>
            <span className="text-[10px] text-slate-500 block mt-0.5">At 10% Gold rate</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-500 font-medium">Active Sub-Agents</span>
            <div className="font-display font-extrabold text-xl text-white mt-1">8</div>
            <span className="text-[10px] text-slate-500 block mt-0.5">3 online today</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs text-slate-500 font-medium">Customers Served</span>
            <div className="font-display font-extrabold text-xl text-blue-500 mt-1">247</div>
            <span className="text-[10px] text-slate-500 block mt-0.5">↑ 31 new this week</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="text-sm font-bold text-slate-200">Volume Sales Split</h3>
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>MTN Ghana</span>
                    <span className="text-yellow-500">72%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5">
                    <motion.div initial={{ width: 0 }} animate={{ width: "72%" }} className="bg-[#FFCB00] h-1.5 rounded-full"></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>Telecel</span>
                    <span className="text-red-500">18%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5">
                    <motion.div initial={{ width: 0 }} animate={{ width: "18%" }} className="bg-red-600 h-1.5 rounded-full"></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                    <span>AirtelTigo</span>
                    <span className="text-rose-500">10%</span>
                  </div>
                  <div className="w-full bg-slate-950 rounded-full h-1.5">
                    <motion.div initial={{ width: 0 }} animate={{ width: "10%" }} className="bg-rose-600 h-1.5 rounded-full"></motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl">
              <h3 className="text-sm font-bold text-slate-200 mb-4">Commission Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-slate-500 border-b border-slate-800 pb-2">
                      <th className="pb-2 font-medium">Bundle Package</th>
                      <th className="pb-2 font-medium">Total Orders</th>
                      <th className="pb-2 font-medium text-right">Commission</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {[
                      { item: '1GB MTN 7-Day', orders: '312 sales', commission: 'GH₵ 162.00' },
                      { item: '5GB MTN 30-Day', orders: '88 sales', commission: 'GH₵ 207.00' },
                      { item: '2GB Telecel 14-Day', orders: '41 sales', commission: 'GH₵ 43.00' },
                      { item: '10GB MTN 30-Day', orders: '9 sales', commission: 'GH₵ 38.00' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-800/10">
                        <td className="py-3 font-semibold text-slate-300">{row.item}</td>
                        <td className="py-3 text-slate-400">{row.orders}</td>
                        <td className="py-3 text-emerald-400 font-bold text-right font-mono">{row.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-slate-200">My Sub-Agents</h3>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toast('Sub-agent registration link copied!')} 
                  className="text-[10px] font-bold text-blue-400 bg-blue-600/10 border border-blue-500/25 px-3 py-1 rounded-full hover:bg-blue-500/20 transition-all"
                >
                  + Invite Agent
                </motion.button>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Patrick Annor', vol: 'GH₵ 420.00', status: 'Active', initials: 'PA', bg: 'bg-blue-500/15', text: 'text-blue-400', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-400', badgeBorder: 'border-emerald-500/10' },
                  { name: 'Abena Afrakomah', vol: 'GH₵ 310.00', status: 'Active', initials: 'AA', bg: 'bg-emerald-500/15', text: 'text-emerald-400', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-400', badgeBorder: 'border-emerald-500/10' },
                  { name: 'Al-Haqq', vol: 'GH₵ 85.00', status: 'Low Activity', initials: 'AH', bg: 'bg-purple-500/15', text: 'text-purple-400', badgeBg: 'bg-amber-500/10', badgeText: 'text-amber-400', badgeBorder: 'border-amber-500/10' },
                ].map((agent, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-850">
                    <div className={`w-8 h-8 rounded-full ${agent.bg} ${agent.text} flex items-center justify-center font-bold text-xs`}>{agent.initials}</div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs font-bold text-slate-200 truncate">{agent.name}</h4>
                      <span className="text-[9px] text-slate-500 block mt-0.5">{agent.vol} volume this month</span>
                    </div>
                    <span className={`text-[9px] font-bold ${agent.badgeText} ${agent.badgeBg} px-2 py-0.5 rounded-full border ${agent.badgeBorder}`}>{agent.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-5">
              <div>
                <span className="text-xs text-slate-500 font-medium">Available Payout balance</span>
                <div className="font-display font-extrabold text-3xl text-blue-500 mt-1">GH₵ 384.00</div>
                <span className="text-[10px] text-slate-500 block mt-1">Automatic deposits linked to MTN MoMo: <b className="font-mono text-slate-400">0244 *** 890</b></span>
              </div>
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-400">Withdrawal Amount</label>
                <div className="flex gap-2">
                  <input type="number" placeholder="Enter amount (min GH₵ 50)" className="flex-grow bg-[#0B0F19] text-white border border-slate-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500" />
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toast('Withdrawal submitted! Processed in 2 hours.')} 
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 rounded-xl text-xs whitespace-nowrap transition"
                  >
                    Request Payout
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AgentPortal;
