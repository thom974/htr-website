/**
 * THREE.JS IMPORTS
 */
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Anim from "./Anim";

export default class Camera {
    constructor() {

        // Global access
        this.anim = new Anim()

        // Main properties
        this.canvas = this.anim.canvas
        this.sizes = this.anim.sizes
        this.scene = this.anim.scene

        // Setup
        this.setInstance()
        this.setOrbitControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100) 
        this.instance.position.set(0,1,-3)
        this.scene.add(this.instance)
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true 
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()
    }
}