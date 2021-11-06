import { motion } from 'framer-motion';
import { Gradients, TicketColor } from 'interfaces';

export interface Ticket {
  username: string;
  name: string;
  avatar: string;
  ticketColor?: TicketColor;
}

export const Ticket: React.FC<Ticket> = ({
  name,
  username,
  avatar,
  ticketColor = 'greenBlue',
}) => (
  <motion.div
    className={`p-1 rounded-lg bg-gradient-to-r ${Gradients[ticketColor]} animate-gradient-x`}
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
    <div className="flex flex-col gap-4 text-white w-full max-w-sm py-6 px-8 bg-black rounded-lg">
      <div className="flex items-center">
        <div
          className={`rounded-full bg-gradient-to-l ${Gradients[ticketColor]}`}
          style={{ padding: '0.2rem' }}
        >
          <img
            className="rounded-full border-2 border-black w-32 object-cover"
            alt="avatar"
            src={avatar}
          />
        </div>

        <div className="flex flex-col gap-2 w-full items-start ml-4">
          <span className="font-code text-lg font-semibold">{name}</span>
          <span className="font-code text-base">@{username}</span>
        </div>
      </div>

      <div className="flex justify-center ">
        <span
          className={`font-mono font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients[ticketColor]}`}
        >
          #0044213
        </span>
      </div>
    </div>
  </motion.div>
);
