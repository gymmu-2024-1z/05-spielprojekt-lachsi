import { LEFT, RIGHT } from "phaser"
import Flower from "../../gameObjects/pickups/flower"
import Mushroom from "../../gameObjects/pickups/mushroom"
import Base2DScene from "../base-2d-scene"

/**
 * Spiellogik für das Level03.
 */
export default class Level03 extends Base2DScene {
  constructor() {
    super({ key: "level-03" })
  }

  preload() {
    // Load the assets here
    this.load.tilemapTiledJSON(
      "map-level-03",
      "./assets/maps/map-level-03.json",
    )
  }

  create() {
    super.create("map-level-03")
  }
  pickUp(actor, item) {
    super.pickUp(actor, item)

    // TODO: Hier wird die Logik für Kollisionen von Spielobjekten geändert. Das
    // ist pro Level anders. Wenn eine Logik für alle Levels gelten soll, dann
    // muss dies in `Base2DScene` angepasst werden.
    if (item instanceof Flower) {
      // Dieses Objekt gehört zu der Klasse von "Flower"
      this.player.addKey("level-03")
      this.player.increaseSpeed(100)
      this.player.heal(item.props.restoreHp || 0)
    } else if (item instanceof Mushroom) {
      // Dieses Objekt gehört zu der Klasse von "Mushroom"
      this.player.decreaseSpeed(100)
      this.player.damage(item.props.damageHp || 0)
    }
    // TODO: Aktivieren Sie das hier, wenn ein Effekt über eine gewisse Zeit
    // passieren soll.
    // Hier dreht sich der Spieler im Kreis und mit jedem Frame dreht er sich weiter um seine Achse.
    // Nach 6 Sekunden hört er wieder auf.
    this.turnaround.addCounter({
      from: RIGHT,
      to: LEFT,
      ease: "rotation",
      duration: 6000,
      repeat: 0,
      onUpdate: (turnaround) => {
        const val = turnaround.getValue()
        this.player.setScale(val)
      },
    })
  }
}
