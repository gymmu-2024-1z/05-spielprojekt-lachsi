import Phaser from "phaser"
/**
 * Spiellogik für das Level02.
 */
export default class HintergrundMusik extends Phaser.Scene {
  constructor() {
    super({ key: "HintergrundMusik" })
  }
  preload() {
    this.load.audio("HintergrundMusik", ["assets/audio/musik-hintergrund.mp3"])
  }
  create() {
    this.HintergrundMusik = this.sound.add("HintergrundMusik")
    this.HintergrundMusik.loop = true
    this.HintergrundMusik.play()
  }
}

const config = {
  audio: {
    disableWebAudio: true,
  },
}
