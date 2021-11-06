/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import { IoLogoGithub } from 'react-icons/io5';

interface NameComponent {
  username: string;
}

enum Gradients {
  greenBlue = 'from-green-400 to-blue-500',
  pinkPurpleIndigo = 'from-pink-300 via-purple-300 to-indigo-400',
  pinkRedYellow = 'from-pink-500 via-red-500 to-yellow-500',
  greenBluePurple = 'from-green-300 via-blue-500 to-purple-600',
  spearmint = 'from-green-200 via-green-400 to-green-500',
  mojave = 'from-yellow-100 via-yellow-300 to-yellow-500',
}

type TicketColor = keyof typeof Gradients;

interface Ticket {
  username: string;
  name: string;
  avatar: string;
  ticketColor?: TicketColor;
}

const NameComponent: React.FC<NameComponent> = ({ username }) => (
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
    <IoLogoGithub className="text-3xl" />
    <span className="text-base font-code">{username}</span>
    <HiCheckCircle className="ml-auto text-3xl text-green-400" />
  </motion.div>
);

const Ticket: React.FC<Ticket> = ({
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

const MainPage: NextPage = () => {
  const [ticketColor, setTicketColor] =
    React.useState<TicketColor>('greenBlue');

  return (
    <>
      <Head>
        <title>Munkhjin Nyamdorj @nyamkamuhjin</title>
      </Head>
      <div className="pt-20 bg-black min-w-full min-h-screen w-full h-full flex flex-col items-center gap-6 font-mono p-4">
        <motion.p
          className="text-8xl text-white font-bold text-center filter drop-shadow-sm"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 1,
              },
            },
          }}
        >
          It’s yours. Now tell the world.
        </motion.p>

        <motion.p
          className="text-2xl max-w-md mx-auto text-gray-400 text-center"
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
          Color & share to help make the web faster, together.
        </motion.p>
        <NameComponent username="nyamkamunhjin" />
        {/* ticket color chooser */}
        <motion.div
          className="flex gap-2 mt-10 flex-wrap justify-center"
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
          {Object.keys(Gradients).map((each) => (
            <button
              className={`rounded-lg font-code p-1 bg-black text-white w-48 bg-gradient-to-r ${
                Gradients[each as TicketColor]
              }`}
              key={each}
              onClick={() => setTicketColor(each as TicketColor)}
              type="button"
            >
              <div className="rounded-lg bg-black px-4 py-2">{each}</div>
            </button>
          ))}
        </motion.div>

        <Ticket
          username="nyamkamunhjin"
          name="Munkhjin Nyamdorj"
          avatar="https://github.com/nyamkamunhjin.png"
          ticketColor={ticketColor}
        />
      </div>
    </>
  );
};

export default MainPage;
