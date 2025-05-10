
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";
import { Gamepad, Link as LinkIcon } from 'lucide-react';

const GetKey = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const keyMethods = [
    {
      name: "Linkvertise",
      url: "https://ads.luarmor.net/get_key?for=Linkvertise-VCrPMxzUQEDq",
      duration: "24 Hours",
      icon: <LinkIcon className="w-5 h-5 text-blue-300/90" />,
      bgColor: "bg-blue-500/20"
    },
    {
      name: "Lootlabs",
      url: "https://ads.luarmor.net/get_key?for=Lootlabs-oCmVwmZqQgsE",
      duration: "12 Hours",
      icon: <svg className="w-5 h-5 text-green-300/90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h2v-4Z"/></svg>,
      bgColor: "bg-green-500/20"
    },
    {
      name: "Work.ink",
      url: "https://ads.luarmor.net/get_key?for=WorkInk-osqZmHsdsZVE",
      duration: "12 Hours",
      icon: <svg className="w-5 h-5 text-amber-300/90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m7 20.66-1-1.73"/></svg>,
      bgColor: "bg-amber-500/20"
    }
  ];

  const handleLinkClick = (url: string, name: string) => {
    setIsLoading(true);
    
    toast({
      title: "Redirecting",
      description: `Opening ${name} key link...`,
      duration: 2000,
    });
    
    // Direct open of link in new tab to ensure proper redirection
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="relative pt-24 px-4 max-w-4xl mx-auto min-h-screen">      
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
        >
          Get Your Key
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Choose one of the methods below to get a script key.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="max-w-lg mx-auto grid grid-cols-1 gap-4"
      >
        <div className="mb-4 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-background/20">
            <Gamepad className="w-6 h-6 text-blue-300/90" />
          </div>
          <h2 className="text-2xl font-bold text-white">Key Options</h2>
        </div>
        
        {keyMethods.map((method, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
            className="p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15 shadow-lg hover:shadow-blue-900/5 transition-all cursor-pointer group"
            onClick={() => handleLinkClick(method.url, method.name)}
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${method.bgColor}`}>
                {method.icon}
              </div>
              <div>
                <h3 className="font-medium text-lg text-white group-hover:text-blue-200/90 transition-colors">{method.name}</h3>
                <p className="text-sm text-gray-400">Complete to get a key valid for {method.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
        
        <div className="mt-4 p-5 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 backdrop-blur-lg border border-primary/15 shadow-lg">
          <p className="text-sm text-gray-400 mb-2">Key information:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
            <li>Keys expire after their validity period</li>
            <li>Each key works with all supported games</li>
            <li>You will need a new key once yours expires</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default GetKey;
