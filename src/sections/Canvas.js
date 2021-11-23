/**
 * EXTERNAL
 */

import { useEffect } from "react";

import { VStack } from '@chakra-ui/react'

import gsap from 'gsap'
 
/**
 * THREE.JS IMPORTS
 */
import Anim from "./canvas/Anim";

let instance = null;

const Canvas = () => {  
  useEffect(() => {
    const anim = new Anim(document.querySelector("canvas.webgl"));
    window.anim = anim
    gsap.fromTo('.canvas', {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      duration: 6
    })
  });

  return (
    <VStack w="full" mt={{sm: '50', md: '100'}}>
      <div className='canvas'>
        <canvas className="webgl"></canvas>
      </div>
    </VStack>
  );
};

export default Canvas;
