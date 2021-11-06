import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

interface NameComponent {
  username: string;
  icon?: React.ReactChild;
}

export const NameComponent: React.FC<NameComponent> = ({ username, icon }) => (
  <motion.div
    className="flex gap-4 items-center p-3 bg-gray-700 text-white max-w-md w-full rounded-lg"
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
    {icon}
    <span className="text-base font-code truncate pr-4">{username}</span>
    <HiCheckCircle className="ml-auto text-3xl text-green-400" />
  </motion.div>
);
