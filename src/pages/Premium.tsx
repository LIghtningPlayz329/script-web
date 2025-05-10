
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Premium product card component
const PremiumProductCard = ({ product, onBuy }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  return (
    <div className="rounded-xl overflow-hidden bg-[#0e1b35] border border-[#1e3a5e]/40">
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Icon and product info */}
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${product.bgColor}`}>
              {product.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-lg text-white">
                  {product.name}
                </h3>
                {product.popular && (
                  <Badge className="ml-2 bg-blue-600 text-white">Popular</Badge>
                )}
              </div>
              <p className="text-sm text-gray-300">{product.description}</p>
            </div>
          </div>
          
          {/* Pricing options */}
          <div className="ml-auto flex gap-6">
            {product.options ? (
              product.options.map((option, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-sm text-gray-400">{option.duration}</span>
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
              ))
            ) : (
              <div className="flex flex-col items-center">
                {product.specialPrice ? (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-white">{product.price}</span>
                    <span className="text-sm text-white bg-blue-600 px-2 py-0.5 rounded-md">
                      {product.specialPrice}
                    </span>
                  </div>
                ) : (
                  <span className="font-bold text-xl text-white">{product.price}</span>
                )}
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => onBuy(product.link)}
                  className={`mt-2 ${product.isSpecial 
                    ? "bg-white text-[#f97316] hover:bg-gray-100"
                    : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                >
                  Buy Now
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Collapsible details section */}
        <Collapsible
          open={isDetailsOpen}
          onOpenChange={setIsDetailsOpen}
          className="mt-4 border-t border-[#1e3a5e]/40 pt-2"
        >
          <CollapsibleTrigger className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <ChevronUp className={`h-4 w-4 transition-transform ${!isDetailsOpen ? 'rotate-180' : ''}`} />
            {isDetailsOpen ? 'Hide Details' : 'Show Details'}
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4">
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <span className="text-gray-300">Includes all supported game scripts</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <span className="text-gray-300">Access to discontinued scripts</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <span className="text-gray-300">Priority Support</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <span className="text-gray-300">Premium Only Features</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <span className="text-gray-300">Frequent feature updates</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <span className="text-gray-300">Access to exclusive betas and test builds</span>
              </li>
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

const Premium = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('all');
  
  const premiumProducts = [
    {
      name: "Koronis Hub Premium",
      description: "Access to all premium features",
      options: [
        { duration: "1 Day", price: "$1.00" },
        { duration: "Lifetime", price: "$10.00" },
        { duration: "Lifetime", price: "" },
      ],
      icon: <div className="w-6 h-6 text-blue-400">◆</div>,
      bgColor: "bg-blue-500/20",
      link: "https://arcstore.mysellauth.com/product/koronishub",
      type: "script",
    },
    {
      name: "Hot Deal",
      description: "20,000,000 Lumber Bucks",
      price: "$0.99",
      icon: <div className="w-6 h-6 text-yellow-300">🚀</div>,
      bgColor: "from-amber-500/80 to-orange-500/80",
      isGradient: true,
      isSpecial: true,
      type: "offer",
      link: "https://arcstore.mysellauth.com/product/lumberbucks",
    },
    {
      name: "Ronin External",
      description: "External cheat solution with premium features",
      price: "$8.99",
      icon: <div className="w-6 h-6 text-purple-300">💎</div>,
      bgColor: "bg-purple-500/20",
      link: "https://arcstore.mysellauth.com/product/ronin-external",
      type: "external",
      popular: true,
    },
    {
      name: "Lumber Tycoon 2 Private Server",
      description: "Play Lumber Tycoon 2 on a private server with friends",
      price: "$0.99",
      icon: <div className="w-6 h-6 text-green-300">🖥️</div>,
      bgColor: "bg-green-500/20",
      link: "https://arcstore.mysellauth.com/product/lumber-tycoon-2",
      type: "private",
    },
    {
      name: "Fisch Private Server",
      description: "Exclusive private server access for Fisch",
      price: "$0.99",
      icon: <div className="w-6 h-6 text-amber-300">🖥️</div>,
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

  // Filter products based on active filter
  const filteredProducts = activeTab === 'all' 
    ? premiumProducts 
    : premiumProducts.filter(product => product.type === activeTab);

  return (
    <div className="relative pt-16 px-4 min-h-screen bg-[#0d1522]">
      <div className="text-center mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-2 text-white"
        >
          Purchase
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Enhance your gaming experience with our premium offerings.
        </motion.p>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-[#1e3a5e]/40 p-1 rounded-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'all' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('script')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'script' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Script
            </button>
            <button
              onClick={() => setActiveTab('external')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'external' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              External
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'private' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Private
            </button>
          </div>
        </div>
        
        {/* Product cards */}
        <div className="max-w-4xl mx-auto space-y-5">
          {filteredProducts.map((product, index) => (
            <PremiumProductCard 
              key={index} 
              product={product} 
              onBuy={handleProductClick} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;
