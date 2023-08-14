import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MiddleGear = () => {
    const GearBox = useRef();

    const model = useLoader(GLTFLoader, './models/gearMiddle2.glb');

    useFrame(({ clock }) => {
        GearBox.current.rotation.y = (clock.getElapsedTime()*1)
    })

    // Iterate through all materials and enable wireframe mode
    model.scene.traverse((child) => {

        if (child.isMesh) {
            child.material.wireframe = true;
        }
    });

    return (
        <>
            <primitive
                ref={GearBox}
                object={model.scene}
                scale={3}
                rotation={[Math.PI/2, 0, 0]}
                position={[0, 0.5, 0]}
            />
            <ambientLight />
        </>
    );
};

export default MiddleGear