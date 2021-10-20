/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { NextPage } from 'next';
import React, { Suspense, useRef } from 'react';
import * as three from 'three';

const Sphere = () => {
  const sphere = useRef<three.Mesh>();
  const colorMap = useLoader(three.TextureLoader, '/relief.jpg');

  useFrame(() => {
    sphere.current.rotateY(0.001);
  });

  return (
    <mesh ref={sphere}>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

const Scene = () => (
  <>
    {/* <gridHelper /> */}
    {/* <axesHelper /> */}
    <pointLight intensity={1.0} position={[5, 3, 5]} />
    <Sphere />
  </>
);

const App: NextPage = () => (
  <div
    className="w-screen h-screen bg-white"
    style={{ background: '/download.png' }}
  >
    <Canvas
      camera={{
        near: 0.1,
        far: 1000,
        zoom: 1,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000');
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Stats />
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default App;
