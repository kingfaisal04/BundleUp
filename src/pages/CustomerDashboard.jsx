import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingCart, History, PlusCircle, Gift, Sliders,
  TrendingUp, CheckCircle, RefreshCw, Play, Plus, Info, HelpCircle,
  ArrowUpRight, PartyPopper, Lightbulb, Copy
} from 'lucide-react';

function CustomerDashboard() {
  const navigate = useNavigate();
  const [walletBalance, setWalletBalance] = useState(47.50);

  const toast = (msg) => alert(msg);
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast(`Copied: ${text}`);
  };

  const topUpWalletSim = (amount) => {
    setWalletBalance(prev => prev + amount);
    toast(`Successfully topped up GH₵ ${amount.toFixed(2)}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="page-container block flex-grow"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:grid md:grid-cols-[240px_1fr] gap-8">
        
        {/* Sidebar */}
        <div className="space-y-6 mb-8 md:mb-0">
          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 text-white flex items-center justify-center font-extrabold text-sm">
                MO
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-200 leading-none">Mohammed Faisal</h4>
                <span className="text-[10px] text-slate-500 mt-1 block">0530 716 545</span>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/10 p-3 rounded-xl">
              <span className="text-[9px] font-bold text-blue-400 block tracking-wider uppercase">Wallet Balance</span>
              <span className="text-xl font-extrabold text-slate-100 font-display block mt-0.5">GH₵ {walletBalance.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-2.5 rounded-2xl space-y-1">
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold rounded-lg bg-blue-600/10 text-blue-400"><LayoutDashboard className="w-4 h-4" /> Overview</button>
            <button onClick={() => navigate('/')} className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition duration-150"><ShoppingCart className="w-4 h-4" /> Buy Data</button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition duration-150"><History className="w-4 h-4" /> Order History</button>
            <button onClick={() => topUpWalletSim(50)} className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition duration-150"><PlusCircle className="w-4 h-4" /> Top Up Wallet</button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition duration-150"><Gift className="w-4 h-4" /> Referrals</button>
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition duration-150"><Sliders className="w-4 h-4" /> Settings</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h2 className="font-display font-extrabold text-2xl text-white">Good morning, Mohammed Faisal 👋</h2>
            <p className="text-slate-500 text-sm mt-0.5">Here is an overview of your consumer account details.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-500 font-medium">Total Spent (This Month)</span>
              <div className="font-display font-extrabold text-2xl text-blue-500 mt-1">GH₵ 182</div>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> ↑ 12% vs last month
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-500 font-medium">Cashback Earned</span>
              <div className="font-display font-extrabold text-2xl text-emerald-500 mt-1">GH₵ 1.82</div>
              <span className="text-[10px] text-slate-500 block mt-1">Accumulated at 1% rate</span>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="bg-slate-900/40 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-500 font-medium">Orders Completed</span>
              <div className="font-display font-extrabold text-2xl text-white mt-1">14</div>
              <div className="text-[10px] text-slate-500 font-semibold mt-1 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> All orders active
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-bold text-slate-200">Quick Buy Presets</h3>
                <span className="text-xs text-blue-500 hover:underline cursor-pointer" onClick={() => navigate('/')}>See All Bundles</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { size: '1 GB', price: '5.20' },
                  { size: '5 GB', price: '23.50' },
                  { size: '10 GB', price: '42.00' },
                  { size: '20 GB', price: '76.00' }
                ].map((preset, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toast(`Quick Ordering ${preset.size} MTN...`)}
                    className="bg-[#FFCB00]/10 border border-[#FFCB00]/25 rounded-xl p-3 text-center cursor-pointer transition duration-150"
                  >
                    <span className="block text-sm font-extrabold text-slate-200 font-display">{preset.size}</span>
                    <span className="text-[10px] font-bold text-[#FFCB00] mt-1 block">GH₵ {preset.price}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-4">
                <h3 className="text-sm font-bold text-slate-200 mb-3">Saved Beneficiaries</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Mom', phone: '024 123 4567', icon: 'M' },
                    { name: 'Kofi', phone: '050 987 6543', icon: 'K' },
                    { name: 'Office Wi-Fi', phone: '020 555 7777', icon: 'O' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-full pr-3 p-1 hover:border-slate-700 cursor-pointer">
                      <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">{contact.icon}</div>
                      <div>
                        <span className="block text-[10px] font-semibold text-slate-300 leading-tight">{contact.name}</span>
                        <span className="block text-[9px] text-slate-500 leading-tight">{contact.phone}</span>
                      </div>
                    </div>
                  ))}
                  <div onClick={() => toast("Add new beneficiary")} className="flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-full px-3 py-1 hover:bg-blue-600/20 cursor-pointer transition">
                    <Plus className="w-3 h-3" />
                    <span className="text-[10px] font-semibold text-blue-400">Add New</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Loyalty Level</span>
                <span className="text-[10px] font-bold text-slate-300 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">Silver 🥈</span>
              </div>
              <div className="my-4">
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                  <span>680 / 1,000 Points</span>
                  <span className="text-blue-400">68%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full" 
                  />
                </div>
              </div>
              <span className="text-[10px] text-slate-500 leading-normal">Need 320 more points to reach Gold tier (unlocking 10% cashbacks).</span>
            </div>
            
            <div className="w-full lg:col-span-4 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-bold text-slate-200 text-sm flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-emerald-400" /> Auto-Renewal Data Subscriptions
                  </h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Subscribe to auto-delivered data plans directly from your wallet balance.</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toast("Simulating renewal...")} className="bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 font-bold px-3 py-1.5 rounded-xl text-[10px] hover:bg-emerald-500/20 active:scale-95 transition-all flex items-center gap-1">
                    <Play className="w-3 h-3" /> Simulate Auto-Renewal
                  </button>
                  <button onClick={() => topUpWalletSim(20)} className="bg-blue-600/10 border border-blue-500/20 text-blue-400 font-bold px-3 py-1.5 rounded-xl text-[10px] hover:bg-blue-500/20 active:scale-95 transition-all flex items-center gap-1">
                    <PlusCircle className="w-3 h-3" /> Load wallet
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-850">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Create Subscription</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">Network</label>
                      <select className="w-full bg-[#0B0F19] text-white border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-blue-500 cursor-pointer">
                        <option>MTN</option>
                        <option>Telecel</option>
                        <option>AirtelTigo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">Package</label>
                      <select className="w-full bg-[#0B0F19] text-white border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-blue-500 cursor-pointer">
                        <option value="5.20">1 GB (GH₵ 5.20)</option>
                        <option value="9.50">2 GB (GH₵ 9.50)</option>
                        <option value="23.50">5 GB (GH₵ 23.50)</option>
                        <option value="42.00">10 GB (GH₵ 42.00)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">Interval</label>
                      <select className="w-full bg-[#0B0F19] text-white border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-blue-500 cursor-pointer">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 mb-1">Recipient Number</label>
                      <input type="tel" placeholder="0244 123 456" className="w-full bg-[#0B0F19] text-white border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-blue-500" />
                    </div>
                  </div>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toast("Subscription created")}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Subscribe Plan
                  </motion.button>
                </div>

                <div className="space-y-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-850 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Active Plan Status</h4>
                    <div className="space-y-2.5">
                      <div className="text-center py-6 text-slate-500 text-xs">
                        <Info className="w-8 h-8 text-slate-600 mx-auto mb-2 block" />
                        <span>No active subscription. Create a plan above using your wallet balance.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-[10px] text-slate-500 leading-normal border-t border-slate-850 pt-2 flex items-start gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                    <span>Subscriptions renew automatically. If your wallet balance drops below the pricing tier, the subscription is automatically terminated.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transactions List */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
            <h3 className="font-bold text-slate-200 text-sm mb-4">Recent Transactions Log</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 py-3 border-b border-slate-850">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-xs font-bold text-slate-200 truncate">5GB MTN Data — 0244 567 890</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Today, 9:42 AM · Delivered via VTU API 1</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-rose-500 block">-GH₵23.50</span>
                  <span className="inline-flex text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-1 border border-emerald-500/10">Delivered</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-slate-850">
                <div className="w-9 h-9 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Plus className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-xs font-bold text-slate-200 truncate">MoMo Wallet Top-Up</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Yesterday, 3:15 PM · Paystack gateway</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-emerald-500 block">+GH₵50.00</span>
                  <span className="inline-flex text-[9px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full mt-1 border border-blue-500/10">Credited</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
            <h3 className="font-bold text-slate-200 text-sm mb-4">Recent Utility Tokens</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-300 block">ECG Prepaid</span>
                      <span className="text-[9px] text-slate-500">Meter: 1234567890</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-200">GH₵ 150.00</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] text-slate-500 uppercase tracking-wider block mb-0.5">Token / Receipt</span>
                    <span className="font-mono text-sm text-yellow-500 font-bold tracking-widest">3421 8976 5543 2100</span>
                  </div>
                  <button onClick={() => copyToClipboard('3421 8976 5543 2100')} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 transition">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-[#0B0F19] border border-slate-800 rounded-2xl p-4 flex items-center justify-center text-center">
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">No Other Bills</span>
                  <p className="text-xs text-slate-400 max-w-[150px]">Your recent utility bills will appear here.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default CustomerDashboard;
