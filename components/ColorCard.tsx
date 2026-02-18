import React from 'react';

interface ColorCardProps {
  name: string;
  hex: string;
  variable: string;
  whiteContrast: string;
  blackContrast: string;
  // Simple pass/fail logic based on WCAG 2.1 (Approximate)
  whitePass: boolean;
  blackPass: boolean;
}

const ColorCard = ({ name, hex, variable, whiteContrast, blackContrast, whitePass, blackPass }: ColorCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col min-w-[250px]">
      {/* Top Section with Color */}
      <div style={{ backgroundColor: hex }} className="p-4 h-48 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="font-bold text-lg  text-white">{name}</span>
          <span className="font-mono text-sm  text-white uppercase">{hex}</span>
        </div>
        
        <div className="text-xs font-mono opacity-80  text-white">
          var(--{variable})
        </div>

        <div className="mt-4 border-t border-white/20 pt-2">
           <div className="flex justify-between items-end">
              <span className="text-xs  text-white">Text size</span>
              <div className="flex gap-4">
                <span className="text-2xl font-semibold  text-white">Aa</span>
                <span className="text-sm  text-white">Aa</span>
              </div>
           </div>
        </div>
      </div>

      {/* Accessibility Section */}
      <div className="bg-white p-3 space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">White ({whiteContrast})</span>
          <span className={`px-2 py-0.5 rounded-full flex items-center gap-1 ${whitePass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {whitePass ? 'pass ✓' : 'fail ✕'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Black ({blackContrast})</span>
          <span className={`px-2 py-0.5 rounded-full flex items-center gap-1 ${blackPass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {blackPass ? 'pass ✓' : 'fail ✕'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ColorCard;