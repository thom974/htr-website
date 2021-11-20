import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    // Properties
    this.width = window.innerWidth * 0.5;
    this.height = window.innerHeight * 0.5;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    window.addEventListener("resize", () => {
      this.width = window.innerWidth * 0.75;
      this.height = window.innerHeight * 0.4;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      // Emit event
      this.trigger("resize");
    });
  }
}
