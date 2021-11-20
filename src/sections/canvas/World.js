/**
 * THREE.JS IMPORTS
 */
import * as THREE from "three";
import Anim from "./Anim";

export default class World {
  constructor() {
    // Global access
    this.anim = new Anim();

    // Main properties
    this.scene = this.anim.scene;
    this.camera = this.anim.camera.instance;
    this.renderer = this.anim.renderer.instance;

    // Setup
    this.setTest();
  }

  setTest() {
    this.testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1, 10, 10),
      new THREE.MeshStandardMaterial({ wireframe: true })
    );

    this.scene.add(this.testMesh);
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }
}
