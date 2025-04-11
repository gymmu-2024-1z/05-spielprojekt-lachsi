import Flower from "../../gameObjects/pickups/flower"
import Mushroom from "../../gameObjects/pickups/mushroom"
import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level02.
 */
export default class Level02 extends Base2DScene {
  constructor() {
    super({ key: "level-02" })
  }

  preload() {
    // Load the assets here
    this.load.tilemapTiledJSON(
      "map-level-02",
      "./assets/maps/map-level-02.json",
    )
  }

  create() {
    super.create("map-level-02")
  }
  pickUp(actor, item) {
    super.pickUp(actor, item)

    // TODO: Hier wird die Logik für Kollisionen von Spielobjekten geändert. Das
    // ist pro Level anders. Wenn eine Logik für alle Levels gelten soll, dann
    // muss dies in `Base2DScene` angepasst werden.
    if (item instanceof Flower) {
      // Dieses Objekt gehört zu der Klasse von "Flower"
      this.player.addKey("level-02")
      this.player.increaseSpeed(100)
      this.player.heal(item.props.restoreHp || 0)
    } else if (item instanceof Mushroom) {
      // Dieses Objekt gehört zu der Klasse von "Mushroom"
      this.player.decreaseSpeed(100)
      this.player.damage(item.props.damageHp || 0)
      if (this.player.hp <= 0) {
        this.scene.start("loading")
      }

      // TODO: Aktivieren Sie das hier, wenn ein Effekt über eine gewisse Zeit
      // passieren soll.
      // Durch diese Funktion wird der Spieler halb so gross, und mit jedem Frame wird er wieder
      // normaler. Nach 6 Sekunden erreicht er seine normale Grösse.
      this.tweens.addCounter({
        from: 0.5,
        to: 1,
        ease: "Linear",
        duration: 6000,
        repeat: 0,
        onUpdate: (tween) => {
          const val = tween.getValue()
          this.player.setScale(val)
        },
      })
    }
  }
}
