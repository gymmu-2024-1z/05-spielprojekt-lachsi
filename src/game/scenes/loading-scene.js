import Phaser from "phaser"
/**
 * Spiellogik für das Level02.
 */
export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: "loading" })
  }

  /**
   * Mit dieser Methode werden alle Resourcen geladen die vom Spiel gebraucht
   * werden. Hier werden alle Grafiken und auch Töne geladen. Diese können
   * danach im ganzen Spiel verwendet werden.
   */
  preload() {
    // Lade das Spritesheet für den Spieler.
    this.load.spritesheet("player", "./assets/player.png", {
      frameWidth: 32,
      frameHeight: 32,
    })
    this.load.spritesheet("hai", "./assets/player2.png", {
      frameWidth: 32,
      frameHeight: 32,
    })

    // Lade das Tileset für die Karten und die Objekte.
    this.load.image("tileset", "./assets/tileset.png")

    // Lade einen Atlas von einem Tileset. Damit können einzelne Kacheln aus
    // einem Tileset definiert werden.
    this.load.atlas(
      "pickups",
      "./assets/tileset.png",
      "./assets/atlas/atlas-pickups.json",
    )
    this.load.atlas(
      "doors",
      "./assets/tileset.png",
      "./assets/atlas/atlas-doors.json",
    )

    this.load.audio("lost-boys", ["./assets/sound/lost-boys.mp3"])

    // Wir möchten auf das Drücken der Leertaste reagieren können, daher müssen
    // wir das hier registrieren.
    this.SPACE = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    )
    //this.load.audio("CatAstroPhi", ["./assets/sound/sound.mp3"])
  }

  create() {
    this.createAnimations()

    this.add
      .text(320, 240, "Press SPACE to start the Game.")
      .setOrigin(0.5, 0.5)

    this.sound = this.sound.add("lost-boys")
    this.sound.play()
  }

  update() {
    if (this.SPACE.isDown) {
      this.scene.start("level-01")
    }
  }

  createAnimations() {
    this.anims.create({
      key: "player_idle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 1,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "hai_idle",
      frames: this.anims.generateFrameNumbers("hai", {
        start: 1,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "player_right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 6,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "hai_right",
      frames: this.anims.generateFrameNumbers("hai", {
        start: 6,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: "player_left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 3,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "hai_left",
      frames: this.anims.generateFrameNumbers("hai", {
        start: 3,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "player_up",
      frames: this.anims.generateFrameNumbers("player", {
        start: 9,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "hai_up",
      frames: this.anims.generateFrameNumbers("hai", {
        start: 9,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "player_down",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: "hai_down",
      frames: this.anims.generateFrameNumbers("hai", {
        start: 0,
        end: 2,
      }),
      frameRate: 10,
      repeat: -1,
    })
  }
}
