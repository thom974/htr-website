/**
 * THREE.JS IMPORTS
 */
import * as THREE from "three";
import Anim from "./Anim";

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';

export default class Renderer {
  constructor() {
    // Global access
    this.anim = new Anim();

    // Main properties
    this.canvas = this.anim.canvas;
    this.camera = this.anim.camera;
    this.scene = this.anim.scene;
    this.sizes = this.anim.sizes;
    
    this.snowShader = {
      uniforms: {
        tDiffuse: { value: null },
        time: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        varying vec2 vUv;
        
        float rand(vec2 co){
          return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
        }
        
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float snow = rand(vUv + time) > 0.99 ? 1.0 : 0.0; // 1% of pixels will be snow
          gl_FragColor = mix(color, vec4(1.0), snow);
        }
      `,
    };

    // Setup
    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      depth: true,
      alpha: true,
    });

    this.instance.physicallyCorrectLights = true;
    // this.instance.outputEncoding = THREE.sRGBEncoding;
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#000000", 0);
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  setPost() {
    this.composer = new EffectComposer(this.instance, new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
      type: THREE.HalfFloatType
    }));

    this.renderPass = new RenderPass(this.scene, this.camera.instance);
    this.composer.addPass(this.renderPass);

    this.glitchPass = new GlitchPass();
    this.composer.addPass(this.glitchPass);

    // this.smaaPass = new SMAAPass();
    // this.composer.addPass(this.smaaPass);

    // this.bokehPass = new BokehPass(this.scene, this.camera, {
    //   aperture: 1.0,
    //   maxblur: 1.0,
    //   focus: 1.0
    // });
    // this.composer.addPass(this.bokehPass);
    
    this.snowPass = new ShaderPass({
      vertexShader: this.snowShader.vertexShader,
      fragmentShader: this.snowShader.fragmentShader,
      uniforms: this.snowShader.uniforms
    });

    this.composer.addPass(this.snowPass);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
}
