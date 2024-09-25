import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RobotModel = () => {
  const ref = useRef<THREE.Group>(null);
  const [model, setModel] = useState<THREE.Group | null>(null);
  const [mixer, setMixer] = useState<THREE.AnimationMixer | null>(null);
  const [currentEmote, setCurrentEmote] = useState<string>('Wave');
  const [currentState, setCurrentState] = useState<string>('Idle');

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/models/gltf/RobotExpressive/RobotExpressive.glb', (gltf) => {
      setModel(gltf.scene);
      const newMixer = new THREE.AnimationMixer(gltf.scene);
      setMixer(newMixer);

      // Set up animations and states
      const actions: { [key: string]: THREE.AnimationAction } = {};
      gltf.animations.forEach((clip: THREE.AnimationClip) => {
        const action = newMixer.clipAction(clip);
        actions[clip.name] = action;
      });

      // Function to play the current state and emote
      const playAnimation = (state: string, emote: string) => {
        Object.values(actions).forEach(action => action.stop()); // Stop all animations

        // Play the selected state (e.g., Idle, Walking)
        if (actions[state]) {
          actions[state].play().setLoop(THREE.LoopRepeat, THREE.LoopRepeat);
        }

        // Play the selected emote (e.g., Wave, Yes)
        if (actions[emote]) {
          actions[emote].play().setLoop(THREE.LoopRepeat, THREE.LoopRepeat);
        }
      };

      // Initial animation setup
      playAnimation(currentState, currentEmote);

      // List of states and emotes to cycle through
      const states = ['Idle', 'Walking'];
      const emotes = ['Wave', 'Yes', 'ThumbsUp', 'No'];

      let stateIndex = 0;
      let emoteIndex = 0;

      // Change state and emote every 2 seconds
      const interval = setInterval(() => {
        stateIndex = (stateIndex + 1) % states.length;
        emoteIndex = (emoteIndex + 1) % emotes.length;

        setCurrentState(states[stateIndex]);
        setCurrentEmote(emotes[emoteIndex]);

        playAnimation(states[stateIndex], emotes[emoteIndex]);
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
  <Canvas camera={{ position: [-5, 5, 10], fov: 45 }}>
    <ambientLight intensity={0.5} />
    <hemisphereLight intensity={3} />
    <directionalLight position={[0, 20, 10]} intensity={3} />
    {/* <OrbitControls />  */}
    <RobotModel />
  </Canvas>
);
