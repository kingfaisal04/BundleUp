import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, ShoppingCart, ArrowRight, Phone, CreditCard, ChevronDown, 
  Receipt, Clock, Wallet, TrendingUp, MessageSquare, Gift, Lightbulb, Tv, Wifi, GraduationCap, ShieldCheck, Route
} from 'lucide-react';

const networks = [
  { id: 'MTN', name: 'MTN', bgImage: '/images/MTN.jpg', color: 'text-[#FFCB00]', ring: 'ring-[#FFCB00]/5' },
  { id: 'Telecel', name: 'Telecel', bgImage: '/images/TELECEL.jpg', color: 'text-red-500', ring: 'ring-red-600/5' },
  { id: 'AirtelTigo', name: 'AirtelTigo', bgImage: '/images/AT.jpg', color: 'text-rose-500', ring: 'ring-rose-600/5' }
];

const bundles = [
  { id: '1GB', name: '1 GB', price: 5.20, oldPrice: 6.00, validity: '7 Days', badge: 'PROMO' },
  { id: '2GB', name: '2 GB', price: 9.50, oldPrice: null, validity: '14 Days', badge: null },
  { id: '5GB', name: '5 GB', price: 23.50, oldPrice: 28.00, validity: '30 Days', badge: 'Best Value' },
  { id: '10GB', name: '10 GB', price: 42.00, oldPrice: null, validity: '30 Days', badge: null }
];

function LandingPage() {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [selectedBundle, setSelectedBundle] = useState(bundles[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('MTN Mobile Money');
  const [selectedCategory, setSelectedCategory] = useState('Data');

  const categories = [
    { name: 'Data', icon: <Zap className="w-4 h-4" /> },
    { name: 'Airtime', icon: <Phone className="w-4 h-4" /> },
    { name: 'Electricity', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'TV Subs', icon: <Tv className="w-4 h-4" /> },
    { name: 'Internet', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Exams', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  const savedContacts = [
    { name: 'Mom', phone: '024 123 4567', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
    { name: 'Kofi', phone: '050 987 6543', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    { name: 'Office', phone: '020 555 7777', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' }
  ];

  const handleOrder = () => {
    if (!phoneNumber) {
      alert("Please enter recipient phone number.");
      return;
    }
    // Simulate order
    alert(`Processing order for ${selectedBundle.name} on ${selectedNetwork.name} to ${phoneNumber} via ${paymentMethod}...`);
    navigate('/customer');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="page-container block flex-grow"
    >
      {/* Hero Section */}
      <div className="relative py-12 md:py-20 px-6 max-w-7xl mx-auto text-center border-b border-slate-800/50">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide shadow-inner shadow-blue-500/5">
          <Zap className="w-3.5 h-3.5 text-blue-400 animate-bounce" />Ghana's Ultimate Digital Services Hub
        </div>
        
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
          Pay Bills & Buy Data<br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Instantly & Securely</span>
        </h1>
        
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Buy data bundles, pay ECG bills, renew TV subscriptions, and more. Save money with <span className="text-emerald-400 font-semibold">1% instant cashback</span> on every transaction.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#buy-section" className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl text-sm transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Start Transacting Now
          </a>
          <button onClick={() => navigate('/agent')} className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl text-sm transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 text-center flex items-center justify-center gap-2">
            Become a Reseller <ArrowRight className="w-4 h-4" />
          </button>
        </div>  

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 border-t border-slate-900">
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 p-4 rounded-2xl">
            <div className="font-display font-extrabold text-2xl md:text-3xl text-white">300+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Happy Customers</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 p-4 rounded-2xl">
            <div className="font-display font-extrabold text-2xl md:text-3xl text-blue-400">&lt; 2-10 Mins</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Average Delivery Time</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 p-4 rounded-2xl">
            <div className="font-display font-extrabold text-2xl md:text-3xl text-emerald-400">1% Back</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Cashback Guarantee</div>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 p-4 rounded-2xl">
            <div className="font-display font-extrabold text-2xl md:text-3xl text-purple-400">99%</div>
            <div className="text-xs text-slate-500 font-medium mt-1">API Uptime Monitor</div>
          </motion.div>
        </div>
      </div>

      {/* Buy Section */}
      <div id="buy-section" className="max-w-7xl mx-auto px-4 md:px-8 py-16 scroll-mt-20">
        <div className="text-center md:text-left mb-10">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">Choose Your Package</h2>
          <p className="text-slate-500 text-sm mt-1">Choose your network carrier, selecting your desired size data bundle package.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">

            {/* Service Categories (Horizontal Scroll) */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Step 1: Select Service</label>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex-shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${selectedCategory === cat.name ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'}`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>
            
            {selectedCategory === 'Data' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Step 2: Select Network</label>
              <div className="grid grid-cols-3 gap-4">
                {networks.map((net) => (
                  <motion.div 
                    key={net.id}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedNetwork(net)}
                    style={{ backgroundImage: `url('${net.bgImage}')` }}
                    className={`bg-no-repeat bg-cover bg-center backdrop-blur-sm border-4 rounded-2xl p-4 text-center cursor-pointer transition-all duration-200 flex flex-col justify-between ${selectedNetwork.id === net.id ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-slate-800 hover:border-slate-700/80'}`}
                  >
                    <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center font-extrabold text-sm ring-4 font-display mb-3 ${net.color} ${net.ring}`}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Step 3: Choose Data Volume</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bundles.map((bundle) => (
                  <motion.div 
                    key={bundle.id}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedBundle(bundle)}
                    className={`bundle-card bg-slate-900/40 backdrop-blur-sm border rounded-2xl p-5 cursor-pointer transition-all duration-200 flex flex-col justify-between gap-4 ${selectedBundle.id === bundle.id ? 'border-blue-500 bg-blue-900/10' : 'border-slate-800 hover:border-slate-700/80'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-display font-extrabold text-2xl text-slate-100">{bundle.name}</div>
                        <span className="text-xs text-slate-500 block mt-1">Valid {bundle.validity}</span>
                      </div>
                      {bundle.badge && (
                        <span className="text-[10px] font-bold text-[#FFCB00] bg-[#FFCB00]/10 px-2 py-0.5 rounded-full ring-1 ring-[#FFCB00]/20">{bundle.badge}</span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-slate-200">GH₵ {bundle.price.toFixed(2)}</span>
                      {bundle.oldPrice && (
                        <span className="text-xs text-slate-500 line-through">GH₵ {bundle.oldPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
              </>
            )}
            
            {selectedCategory !== 'Data' && (
              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{selectedCategory} services coming soon!</h3>
                <p className="text-slate-400 text-sm">We are actively integrating APIs for this service. Check back next week.</p>
              </div>
            )}

          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-fit space-y-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-blue-500" /> Checkout Order
              </h3>
              <div className="flex gap-2 mt-2">
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full"><ShieldCheck className="w-3 h-3" /> Instant Refund Guarantee</span>
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full"><Route className="w-3 h-3" /> Smart Routing</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">Review your payment method and input recipient details below.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Recipient Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input 
                    type="tel" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 0244 123 456" 
                    className="w-full bg-[#0B0F19] text-white border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition duration-150"
                  />
                </div>
                {/* Beneficiary Bubbles */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {savedContacts.map(contact => (
                    <button
                      key={contact.name}
                      onClick={() => setPhoneNumber(contact.phone)}
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${contact.color} transition-all hover:scale-105 active:scale-95 flex items-center gap-1`}
                    >
                      {contact.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Payment Method</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <select 
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-[#0B0F19] text-white border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition duration-150 appearance-none cursor-pointer"
                  >
                    <option>MTN Mobile Money</option>
                    <option>Telecel Cash</option>
                    <option>Card (Visa/Mastercard)</option>
                    <option>Wallet Balance (GH₵ 47.50)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B0F19] border border-slate-850 p-4 rounded-xl space-y-2.5 text-xs text-slate-400">
              <div className="flex justify-between items-center">
                <span>Bundle Selected</span>
                <span className="font-semibold text-slate-200">{selectedBundle.name} - {selectedNetwork.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Base Pricing</span>
                <span className="font-semibold text-slate-200 font-mono">GH₵ {selectedBundle.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400 border-t border-slate-800/80 pt-2.5">
                <span className="flex items-center gap-1"><Gift className="w-3.5 h-3.5" /> Cashback Earned (1%)</span>
                <span className="font-bold font-mono">+ GH₵ {(selectedBundle.price * 0.01).toFixed(2)}</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOrder}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition duration-150 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
            >
              <Zap className="w-4 h-4 fill-current text-white animate-pulse" /> Pay & Deliver Instantly
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 border-t border-slate-800/50">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">Why Choose BundleUp?</h2>
          <p className="text-gray-300 text-sm mt-1">Discover what sets our VTU distribution network apart from alternatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div whileHover={{ y: -5, borderColor: '#1e293b' }} className="bg-slate-900/20 border border-slate-850 p-6 rounded-2xl transition duration-150">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-100 mb-2">Sub-2 Minute Delivery</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Automated processing via APIs ensures bundles arrive before competitors even review invoices.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5, borderColor: '#1e293b' }} className="bg-slate-900/20 border border-slate-850 p-6 rounded-2xl transition duration-150">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-100 mb-2">Cashback on Every Purchase</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Earn 3% cashback directly credited back to your system wallet on every order.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5, borderColor: '#1e293b' }} className="bg-slate-900/20 border border-slate-850 p-6 rounded-2xl transition duration-150">
            <div className="w-10 h-10 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-100 mb-2">Earn as a Reseller</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Join 500+ active agents with private dashboards, adjusted margins, and sub-agents.</p>
          </motion.div>
          <motion.div whileHover={{ y: -5, borderColor: '#1e293b' }} className="bg-slate-900/20 border border-slate-850 p-6 rounded-2xl transition duration-150">
            <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-slate-100 mb-2">WhatsApp Bot Ordering</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Initiate bundle ordering pipelines directly inside a secure 24/7 WhatsApp conversation.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
