import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

<<<<<<< HEAD
        // Properties 
        this.width = window.innerWidth * 0.50
        this.height = window.innerHeight * 0.50
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)
        
        window.addEventListener('resize', () => {
            this.width = window.innerWidth * 0.50
            this.height = window.innerHeight * 0.50
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
=======
    // Properties
    this.width = window.innerWidth * 0.5;
    this.height = window.innerHeight * 0.5;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
>>>>>>> 57bbd6feb819f0d971aebe1279148494e0d39f39

    window.addEventListener("resize", () => {
      this.width = window.innerWidth * 0.75;
      this.height = window.innerHeight * 0.4;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      // Emit event
      this.trigger("resize");
    });
  }
}
