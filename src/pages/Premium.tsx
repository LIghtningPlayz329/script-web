
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Diamond, Server, Gem, X, Rocket } from 'lucide-react';

// Premium product card component
const PremiumProductCard = ({ product, onBuy }) => {
  const isMultiOption = product.options && product.options.length > 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden ${product.isSpecial 
        ? `bg-gradient-to-r ${product.bgColor} shadow-lg`
        : 'bg-[#0d1b33] shadow-md border border-[#1e3a5e]/40'}`}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${product.isGradient ? product.bgColor : product.bgColor}`}>
              {product.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                {product.isSpecial && <span className="text-yellow-300">🔥</span>}
                <h3 className={`font-medium text-lg ${product.textColor || 'text-white'} transition-colors`}>
                  {product.name}
                </h3>
              </div>
              <p className={`text-sm ${product.descriptionColor || 'text-gray-300'}`}>{product.description}</p>
            </div>
          </div>
          
          {isMultiOption ? (
            <div className="text-right">
              <div className="flex space-x-6 items-center">
                {product.options.map((option, idx) => (
                  <div key={idx} className="flex flex-col items-end">
                    <span className="text-sm text-gray-300">{option.duration}</span>
                    <span className="font-bold text-xl text-white">{option.price}</span>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      onClick={() => onBuy(product.link)}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Buy Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-right">
              <div className="flex flex-col items-end">
                <span className="font-bold text-xl text-white">{product.price}</span>
                <Button 
                  variant={product.isSpecial ? "default" : "secondary"} 
                  size="sm" 
                  onClick={() => onBuy(product.link)}
                  className={product.isSpecial ? "mt-2 bg-white text-[#f97316] hover:bg-gray-100" : "mt-2 bg-blue-600 hover:bg-blue-700 text-white"}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Filter tabs component
const FilterTabs = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'script', label: 'Script' },
    { id: 'external', label: 'External' },
    { id: 'private', label: 'Private' }
  ];
  
  return (
    <div className="flex justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "secondary"}
          onClick={() => setActiveFilter(filter.id)}
          className={activeFilter === filter.id 
            ? "bg-blue-600 hover:bg-blue-700 text-white" 
            : "bg-[#1e3a5e]/40 hover:bg-[#1e3a5e]/60 text-gray-300"}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

// Feedback reminder component
const FeedbackReminder = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-5 right-5 max-w-sm bg-gradient-to-r from-blue-500/80 to-indigo-500/80 rounded-lg shadow-lg p-4 z-50 backdrop-blur-md border border-blue-400/50"
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-white/80 hover:text-white"
      >
        <X size={18} />
      </button>
      <h3 className="text-xl font-semibold text-white mb-2">How are you enjoying Koronis?</h3>
      <p className="text-white/90 mb-4">We'd love to hear your feedback after using our products!</p>
      <div className="flex justify-between">
        <Button variant="ghost" className="text-white bg-white/10 hover:bg-white/20">
          Give Feedback
        </Button>
        <Button variant="default" className="bg-white text-blue-600 hover:bg-blue-50">
          Rate Us
        </Button>
      </div>
    </motion.div>
  );
};

const Premium = () => {
  const { toast } = useToast();
  const [showFeedbackReminder, setShowFeedbackReminder] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    // Check localStorage for feedback reminder
    const lastVisit = localStorage.getItem('premium_last_visit');
    const now = new Date().getTime();
    
    if (lastVisit) {
      const daysSinceLastVisit = (now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24);
      if (daysSinceLastVisit >= 7) {
        setShowFeedbackReminder(true);
      }
    }
    
    // Update last visit timestamp
    localStorage.setItem('premium_last_visit', now.toString());
  }, []);

  const premiumProducts = [
    {
      name: "Hot Deal",
      description: "20,000,000 Lumber Bucks",
      price: "$0.99",
      icon: <Rocket className="w-8 h-8 text-yellow-300" />,
      bgColor: "from-amber-500/80 to-orange-500/80",
      isGradient: true,
      isSpecial: true,
      type: "offer",
      borderColor: "border-yellow-400/50",
      textColor: "text-white",
      descriptionColor: "text-white", // Made sure this is white
      buttonBg: "bg-white text-orange-500 hover:bg-yellow-100",
      link: "https://arcstore.mysellauth.com/product/lumberbucks",
    },
    {
      name: "Ronin External",
      description: "External cheat solution with premium features",
      price: "$8.99",
      icon: <Gem className="w-6 h-6 text-purple-300/90" />,
      bgColor: "bg-purple-500/20",
      link: "https://arcstore.mysellauth.com/product/ronin-external",
      type: "external",
    },
    {
      name: "Koronis Hub Premium",
      description: "Access to all premium features",
      options: [
        { duration: "1 Day", price: "$1.00" },
        { duration: "Lifetime", price: "$10.00" }
      ],
      icon: <Diamond className="w-6 h-6 text-blue-300/90" />,
      bgColor: "bg-blue-500/20",
      link: "https://arcstore.mysellauth.com/product/koronishub",
      type: "script",
    },
    {
      name: "Lumber Tycoon 2 Private Server",
      description: "Play Lumber Tycoon 2 on a private server with friends",
      price: "$0.99",
      icon: <Server className="w-6 h-6 text-green-300/90" />,
      bgColor: "bg-green-500/20",
      link: "https://arcstore.mysellauth.com/product/lumber-tycoon-2",
      type: "private",
    },
    {
      name: "Fisch Private Server",
      description: "Exclusive private server access for Fisch",
      price: "$0.99",
      icon: <Server className="w-6 h-6 text-amber-300/90" />,
      bgColor: "bg-amber-500/20",
      link: "https://arcstore.mysellauth.com/product/fisch",
      type: "private",
    }
  ];

  const handleProductClick = (link) => {
    toast({
      title: "Redirecting to Arcstore",
      description: "Taking you to the payment page...",
      duration: 3000,
    });
    window.open(link, '_blank');
  };

  const handleFeedbackClose = () => {
    setShowFeedbackReminder(false);
    localStorage.setItem('feedback_dismissed', 'true');
  };

  // Filter products based on active filter
  const filteredProducts = activeFilter === 'all' 
    ? premiumProducts 
    : premiumProducts.filter(product => product.type === activeFilter);

  return (
    <div className="relative pt-24 px-4 max-w-5xl mx-auto min-h-screen">
      {showFeedbackReminder && <FeedbackReminder onClose={handleFeedbackClose} />}
      
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Purchase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Enhance your gaming experience with our premium offerings.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <FilterTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        
        <div className="max-w-4xl mx-auto space-y-5">
          {filteredProducts.map((product, index) => (
            <PremiumProductCard 
              key={index} 
              product={product} 
              onBuy={handleProductClick} 
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-8 p-5 rounded-xl bg-[#0d1b33] border border-[#1e3a5e]/40 max-w-4xl mx-auto"
        >
          <p className="text-sm text-gray-300 mb-2">Premium benefits:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Lifetime access to premium features</li>
            <li>Higher script execution priority</li>
            <li>Exclusive games and features</li>
            <li>Priority customer support</li>
            <li>Early access to new releases</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Premium;
