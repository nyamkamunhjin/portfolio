/* eslint-disable react/no-unescaped-entities */
import { NameComponent, Ticket } from 'components';
import { motion } from 'framer-motion';
import { Gradients, TicketColor } from 'interfaces';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

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
