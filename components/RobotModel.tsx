import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RobotModel = () => {
  const ref = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);
  const [currentEmote, setCurrentEmote] = useState<string>('Wave');
//   const clock = new THREE.Clock();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/models/gltf/RobotExpressive/RobotExpressive.glb', (gltf) => {
      setModel(gltf.scene);
      const newMixer = new THREE.AnimationMixer(gltf.scene);
      setMixer(newMixer);

      // Set up animations
      const actions: { [key: string]: THREE.AnimationAction } = {};
      gltf.animations.forEach((clip: THREE.AnimationClip) => {
        const action = newMixer.clipAction(clip);
        actions[clip.name] = action;
      });

      // Function to play the current emote
      const playEmote = (name: string) => {
        Object.values(actions).forEach(action => action.stop()); // Stop all animations
        if (actions[name]) {
          actions[name].play().setLoop(THREE.LoopRepeat , THREE.LoopRepeat); // Play the selected emote and loop it
        }
      };

      // Initial emote setup
      playEmote(currentEmote);

      // Change emote every 2 seconds
      const emotes = ['Wave', 'Jump', 'Yes', 'No']; // List of emotes to cycle through
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % emotes.length;
        setCurrentEmote(emotes[index]);
        playEmote(emotes[index]);
      }, 2000);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    });
  }, []);

  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  return model ? (
    <primitive 
      object={model} 
      ref={ref} 
      scale={[1, 1, 1]} // Adjust the scale for a medium-sized model
    />
  ) : null;
};

export const RobotViewer = () => (
  <Canvas camera={{ position: [-5, 3, 10], fov: 45 }}>
    <ambientLight intensity={0.5} />
    <hemisphereLight intensity={3} />
    <directionalLight position={[0, 20, 10]} intensity={3} />
    <OrbitControls /> {/* Enables mouse interaction */}

    <RobotModel />
  </Canvas>
);
