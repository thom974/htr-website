/**
 * THREE.JS IMPORTS
 */
import * as THREE from "three";
import Anim from "./Anim";

export default class Renderer {
  constructor() {
    // Global access
    this.anim = new Anim();

    // Main properties
    this.canvas = this.anim.canvas;
    this.sizes = this.anim.sizes;

    // Setup
    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      stencil: false,
      depth: false,
    });

    this.instance.physicallyCorrectLights = true;
    this.instance.outputEncoding = THREE.sRGBEncoding;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFShadowMap;
    this.instance.setClearColor("#595b5e");
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
}
