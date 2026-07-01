import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Receipt, Users, LineChart, Wallet, 
  Database, Server, Bell, AlertTriangle 
} from 'lucide-react';

function AdminConsole() {
  const toast = (msg) => alert(msg);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="page-container block flex-grow"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:grid md:grid-cols-[200px_1fr] gap-8">
        
        <div className="space-y-6 mb-8 md:mb-0">
          <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl text-center md:text-left">
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-widest font-display">Admin Console</h4>
            <span className="text-[9px] font-mono text-slate-500 mt-0.5 block">Version Release v1.02</span>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-2.5 rounded-2xl space-y-4">
            <div>
              <span className="text-[9px] font-bold text-slate-500 block px-2.5 mb-1.5 uppercase tracking-wider">Main</span>
              <div className="space-y-0.5">
                <button className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600/10 text-blue-400 text-left"><LayoutDashboard className="w-3.5 h-3.5" /> Dashboard</button>
                <button onClick={() => toast('Orders view loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><Receipt className="w-3.5 h-3.5" /> Orders Log</button>
                <button onClick={() => toast('Customers manager loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><Users className="w-3.5 h-3.5" /> Customers</button>
              </div>
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-500 block px-2.5 mb-1.5 uppercase tracking-wider">Finance</span>
              <div className="space-y-0.5">
                <button onClick={() => toast('Revenue streams loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><LineChart className="w-3.5 h-3.5" /> Revenue</button>
                <button onClick={() => toast('Payout audits loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><Wallet className="w-3.5 h-3.5" /> Payouts</button>
              </div>
            </div>
            <div>
              <span className="text-[9px] font-bold text-slate-500 block px-2.5 mb-1.5 uppercase tracking-wider">System</span>
              <div className="space-y-0.5">
                <button onClick={() => toast('Inventory manager loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><Database className="w-3.5 h-3.5" /> Bundles</button>
                <button onClick={() => toast('Provider gateways loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><Server className="w-3.5 h-3.5" /> VTU Gateways</button>
                <button onClick={() => toast('Global broadcast loaded')} className="w-full flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-850 hover:text-slate-200 text-left"><Bell className="w-3.5 h-3.5" /> Broadcast</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="font-display font-extrabold text-2xl text-white">System Administration</h2>
              <p className="text-slate-500 text-sm mt-0.5">Overview of live metrics, transactions, and VTU status.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 font-mono">Wednesday, Jun 3 2026</span>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => toast('Report requested! Preparing download...')} 
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl text-xs transition duration-150"
              >
                Export System Report
              </motion.button>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/25 p-4 rounded-2xl flex items-center gap-3.5 text-xs text-amber-400">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4.5 h-4.5" />
            </div>
            <p className="leading-normal">
              <strong>VTU Gateway Delays:</strong> 3 orders failed on Provider 1 (N-Sell) due to carrier API latency. Automatic failover routing to Provider 2 is currently active.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Today's Revenue</span>
              <div className="font-display font-extrabold text-2xl text-blue-500 mt-1">GH₵ 4,218</div>
              <span className="text-[9px] text-emerald-400 font-semibold block mt-0.5">↑ 18% vs yesterday</span>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Orders Placed</span>
              <div className="font-display font-extrabold text-2xl text-emerald-500 mt-1">842</div>
              <span className="text-[9px] text-emerald-400 font-semibold block mt-0.5">↑ 124 in last hour</span>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Active Accounts</span>
              <div className="font-display font-extrabold text-2xl text-white mt-1">1,247</div>
              <span className="text-[9px] text-slate-500 font-semibold block mt-0.5">↑ 89 new signups</span>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Pending Payouts</span>
              <div className="font-display font-extrabold text-2xl text-purple-500 mt-1">GH₵ 2,840</div>
              <span className="text-[9px] text-slate-500 font-semibold block mt-0.5">14 Agents waiting</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="text-sm font-bold text-slate-200">Revenue Stream (Last 7 Days)</h3>
              <div className="h-36 flex items-end justify-between gap-2.5 pb-2 pt-4 px-2">
                {[3100, 3800, 2900, 4200, 3600, 5100, 4218].map((val, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${(val / 5100) * 100}%` }}
                    className="w-full bg-blue-600 rounded-t flex-grow transition-all"
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 px-2 font-mono">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="text-sm font-bold text-slate-200">Microservice Status</h3>
              <div className="space-y-2.5 text-xs">
                {[
                  { name: 'VTU Provider 1', status: 'Latent', color: 'amber', bg: 'bg-amber-400', badgeBg: 'bg-amber-500/10', badgeText: 'text-amber-400', badgeBorder: 'border-amber-500/10' },
                  { name: 'VTU Provider 2', status: 'Active', color: 'emerald', bg: 'bg-emerald-400', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-400', badgeBorder: 'border-emerald-500/10' },
                  { name: 'Paystack Payment', status: 'Active', color: 'emerald', bg: 'bg-emerald-400', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-400', badgeBorder: 'border-emerald-500/10' },
                  { name: 'MTN VTU API', status: 'Active', color: 'emerald', bg: 'bg-emerald-400', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-400', badgeBorder: 'border-emerald-500/10' },
                  { name: 'WhatsApp Bot Node', status: 'Active', color: 'emerald', bg: 'bg-emerald-400', badgeBg: 'bg-emerald-500/10', badgeText: 'text-emerald-400', badgeBorder: 'border-emerald-500/10' },
                ].map((service, i) => (
                  <div key={i} className="flex justify-between items-center py-1.5 border-b border-slate-850 last:border-0">
                    <span className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${service.bg}`}></span> 
                      {service.name}
                    </span>
                    <span className={`text-[9px] font-bold ${service.badgeText} ${service.badgeBg} px-2 py-0.5 rounded-full border ${service.badgeBorder}`}>
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default AdminConsole;
