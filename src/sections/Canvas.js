/**
 * EXTERNAL
 */
import { VStack } from "@chakra-ui/react";

import { useEffect } from "react";

/**
 * THREE.JS IMPORTS
 */
import Anim from "./canvas/Anim";

let instance = null;

const Canvas = () => {
  useEffect(() => {
    const anim = new Anim(document.querySelector("canvas.webgl"));
  });

  return (
    <VStack w="full" mt="100">
      <canvas className="webgl"></canvas>
    </VStack>
  );
};

export default Canvas;
