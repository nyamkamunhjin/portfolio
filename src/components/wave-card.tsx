/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { Gradients, ICleanedWave } from 'interfaces';
import React from 'react';

export const WaveCard: React.FC<ICleanedWave> = ({
  color = 'greenBlue',
  address,
  message,
  timestamp,
}) => (
  <motion.div
    className={`p-1 rounded-lg bg-gradient-to-r w-full max-w-xl ${Gradients[color]} animate-gradient-x`}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 1,
        },
      },
    }}
  >
    <div className="flex flex-col gap-4 text-white w-full p-2 bg-black rounded-lg">
      <span
        className={`font-code font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients[color]}`}
      >
        {address} waved <span className="text-white">👋🏻</span>
      </span>
      <span className="font-code text-base">{message}</span>

      <span className="font-mono font-semibold text-gray-400 text-sm">
        {timestamp.toLocaleString()}
      </span>
    </div>
  </motion.div>
);
