/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Button, Loading, NameComponent, WaveCard } from 'components';
import { ethers } from 'ethers';
import { motion } from 'framer-motion';
import { Gradients, ICleanedWave, IWave, TicketColor } from 'interfaces';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEthereum } from 'react-icons/fa';
import abi from 'utils/WavePortal.json';

const MainPage: NextPage = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [currentWaveCount, setCurrentWaveCount] = useState(0);
  const [currentWaves, setCurrentWaves] = useState<ICleanedWave[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ message: string; color: TicketColor }>();

  const watchSeletedColor = watch('color', 'greenBlue' as TicketColor);

  /* WavePortal contract address */
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
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
      }
      console.log('We have the ethereum object', ethereum);

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts?.length > 0) {
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
      /*
       * Refresh wave count and messages
       */
      await getAllWaves();
      await getWaveCount();
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getWaveCount = async () => {
    try {
      const { ethereum } = window as any;

      if (ethereum && contractAddress) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        );

        const count = await wavePortalContract.getTotalWaves();
        setCurrentWaveCount(count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllWaves = async () => {
    try {
      const { ethereum } = window as any;
      console.log('Getting all waves.');
      if (ethereum && contractAddress) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer,
        );

        console.log('Getting waves?');
        const waves = await wavePortalContract.getAllWaves();
        const wavesCleaned: ICleanedWave[] = (waves as IWave[]).map((each) => ({
          address: each.waver,
          timestamp: new Date(each.timestamp * 1000),
          message: each.message,
          color: each.color as TicketColor,
        }));

        wavesCleaned.sort(
          (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
        );

        console.log(wavesCleaned);
        setCurrentWaves(wavesCleaned || []);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const wave = async (message: string, color: string) => {
    try {
      const { ethereum } = window as any;

      if (ethereum && contractAddress) {
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
        const waveTxn = await wavePortalContract.wave(message, color, {
          gasLimit: 300000,
        });
        console.log('Mining...', waveTxn.hash);
        setLoading(true);

        await waveTxn.wait();
        console.log('Mined -- ', waveTxn.hash);
        setLoading(false);

        count = await wavePortalContract.getTotalWaves();
        setCurrentWaveCount(count.toNumber());
        console.log('Retrieved total wave count:', count.toNumber());

        await getAllWaves();
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data: { message: string; color: TicketColor }) => {
    console.log(data);
    wave(data.message, data.color);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    getWaveCount();
    getAllWaves();
  }, []);

  return (
    <>
      <Head>
        <title>Munkhjin Nyamdorj @nyamkamuhjin</title>
      </Head>
      <div className="pt-20 bg-black min-w-full min-h-screen w-full h-full flex flex-col items-center gap-6 font-mono p-4 pb-20">
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
          Wave at me
        </motion.p>
        <motion.p
          className="text-2xl max-w-lg font-bold text-gray-300 text-center filter drop-shadow-sm"
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
          <span
            className={`font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients.spearmint}`}
          >
            MJ
          </span>{' '}
          here, i am a fullstack developer. Mostly work on{' '}
          <span
            className={`font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients.greenBluePurple}`}
          >
            React (Next.js) + Tailwind, Express + Prisma and Golang
          </span>
          . Connect your{' '}
          <span
            className={`font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients.pinkRedYellow}`}
          >
            wallet
          </span>{' '}
          and wave at me with a message 👋🏻
        </motion.p>
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
        />
        <div className="max-w-xl w-full mx-auto flex flex-col gap-4 items-center">
          {currentAccount && (
            <motion.p
              className="text-5xl font-bold max-w-md mx-auto text-white text-center font-mono mb-10"
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
                className={` font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r animate-gradient-x ${Gradients.greenBluePurple}`}
              >
                {currentWaveCount}
              </span>{' '}
              🌊
            </motion.p>
          )}
          {/* connect to metamask */}
          {currentAccount && (
            <NameComponent
              username={currentAccount}
              icon={<FaEthereum className="text-2xl" />}
            />
          )}
          {!currentAccount ? (
            <Button type="button" color="pinkRedYellow" onClick={connectWallet}>
              <img
                src="https://docs.metamask.io/metamask-fox.svg"
                alt="metamask logo"
                className="w-7"
              />
              <span>Connect to MetaMask</span>
            </Button>
          ) : (
            <Button color="pinkRedYellow" hoverEffect={false}>
              <img
                src="https://docs.metamask.io/metamask-fox.svg"
                alt="metamask logo"
                className="w-7"
              />
              <span>Connected</span>
            </Button>
          )}
          {/* wave with some eth */}
          {currentAccount && (
            <div className="w-full flex flex-col gap-4">
              <form
                className="mt-10 flex flex-col gap-4 w-full items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <textarea
                  rows={4}
                  className="w-full rounded-lg p-2"
                  placeholder="Type something cool..."
                  {...register('message', { required: true })}
                />
                {errors.message && (
                  <span className="w-full text-red-400">
                    Message is required to wave 👋🏻
                  </span>
                )}
                <select
                  className={`w-full py-3 px-2 rounded-lg appearance-none bg-gradient-to-r animate-gradient-x font-code font-semibold text-white ${
                    Gradients[watchSeletedColor as TicketColor]
                  }`}
                  {...register('color', { required: true })}
                  defaultValue={Gradients.greenBlue}
                >
                  <option className="text-black" value="greenBlue">
                    Green Blue
                  </option>
                  <option className="text-black" value="pinkPurpleIndigo">
                    Pink Purple Indigo
                  </option>
                  <option className="text-black" value="pinkRedYellow">
                    Pink Red Yellow
                  </option>
                  <option className="text-black" value="greenBluePurple">
                    Green Blue Purple
                  </option>
                  <option className="text-black" value="spearmint">
                    Spearmint
                  </option>
                  <option className="text-black" value="mojave">
                    Mojave
                  </option>
                </select>
                {errors.color && (
                  <span className="w-full text-red-400">
                    Color is required to wave 👋🏻
                  </span>
                )}
                <Button type="submit" color="greenBluePurple">
                  {loading ? <Loading className="w-7 animate-spin" /> : '👋🏻'}
                </Button>
              </form>
              <div className="max-w-xl w-full flex flex-col items-start gap-4">
                <h2 className="text-2xl text-white font-semibold">Waves</h2>
                {currentWaves.length > 0 &&
                  currentWaves.map((each) => (
                    <WaveCard
                      key={`${each.timestamp.toString()}-${each.address}`}
                      address={each.address}
                      color={each.color}
                      message={each.message}
                      timestamp={each.timestamp}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
