/* eslint-disable react/no-unescaped-entities */
import { Loading, NameComponent, Ticket } from 'components';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import { Gradients, TicketColor } from 'interfaces';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import abi from 'utils/WavePortal.json';

const MainPage: NextPage = () => {
  const [ticketColor, setTicketColor] = useState<TicketColor>('greenBlue');
  const [currentAccount, setCurrentAccount] = useState('');
  const [currentWaveCount, setCurrentWaveCount] = useState(0);
  const [loading, setLoading] = useState(false);
  /* WavePortal contract address */
  const contractAddress = '0x3663db2460ED3607b569403834620e8f57486d84';
  const contractABI = abi.abi;

  const checkIfWalletIsConnected = async () => {
    try {
      /*
       * First make sure we have access to window.ethereum
       */
      const { ethereum } = window as any;

      if (!ethereum) {
        console.log('Make sure you have metamask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window as any;

      if (!ethereum) {
        alert('Get MetaMask');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getWaveCount = async () => {
    try {
      const { ethereum } = window as any;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        );

        let count = await wavePortalContract.getTotalWaves();
        setCurrentWaveCount(count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const wave = async () => {
    try {
      const { ethereum } = window as any;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log('Retrieved total wave count: ', count.toNumber());

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.wave();
        console.log('Mining...', waveTxn.hash);
        setLoading(true);

        await waveTxn.wait();
        console.log('Mined -- ', waveTxn.hash);
        setLoading(false);

        count = await wavePortalContract.getTotalWaves();
        setCurrentWaveCount(count.toNumber());
        console.log('Retrieved total wave count:', count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getWaveCount();
  }, []);

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
          Wave at me 🌙
        </motion.p>

        <motion.p
          className="text-5xl font-bold max-w-md mx-auto text-white text-center font-mono"
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
          Total{' '}
          <span
            className={` font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients[ticketColor]}`}
          >
            {currentWaveCount}
          </span>{' '}
          🌊
        </motion.p>
        {/* connect to metamask */}
        {currentAccount && (
          <NameComponent
            username={currentAccount}
            icon={<FaEthereum className="text-2xl" />}
          />
        )}
        {currentAccount === '' ? (
          <button
            className={`flex gap-4 items-center justify-center max-w-md w-full rounded-lg font-code px-4 py-3 text-white bg-gradient-to-r animate-gradient-xy transform-gpu transition hover:text-gray-200 hover:scale-105 ${Gradients.pinkRedYellow}`}
            onClick={connectWallet}
          >
            <img
              src="https://docs.metamask.io/metamask-fox.svg"
              alt="metamask logo"
              className="w-7"
            />
            <span>Connect to MetaMask</span>
          </button>
        ) : (
          <button
            className={`flex gap-4 items-center justify-center max-w-md w-full rounded-lg font-code px-4 py-3 text-white bg-gradient-to-r animate-gradient-xy ${Gradients.pinkRedYellow}`}
          >
            <img
              src="https://docs.metamask.io/metamask-fox.svg"
              alt="metamask logo"
              className="w-7"
            />
            <span>Connected</span>
          </button>
        )}
        {/* wave with some eth */}
        <button
          className={`flex gap-4 items-center justify-center max-w-md w-full rounded-lg font-code px-4 py-3 text-white bg-gradient-to-r animate-gradient-xy transform-gpu transition hover:text-gray-200 hover:scale-105 ${Gradients.greenBluePurple}`}
          onClick={wave}
        >
          {loading ? <Loading className="w-7 animate-spin" /> : 'Wave at Me 👋🏻'}
        </button>
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
