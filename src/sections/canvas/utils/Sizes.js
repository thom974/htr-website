import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    // Properties 
    this.width = window.innerWidth * 0.50
    this.height = window.innerHeight * 0.50
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
      
    window.addEventListener('resize', () => {
    this.width = window.innerWidth * 0.50
    this.height = window.innerHeight * 0.50
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    })

    // Emit event
    this.trigger("resize")
  }
}
