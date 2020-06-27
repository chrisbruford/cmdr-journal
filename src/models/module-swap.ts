import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when moving a module to a different slot on the ship
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"ModuleSwap",
 *     "FromSlot":"MediumHardpoint1",
 *     "ToSlot":"MediumHardpoint2",
 *     "FromItem":"hpt_pulselaser_fixed_medium",
 *     "ToItem":"hpt_multicannon_gimbal_medium",
 *     "Ship":"cobramkiii",
 *     "ShipID":1
 * }
 * ```
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"ModuleSwap",
 *     "FromSlot":"SmallHardpoint2",
 *     "ToSlot":"SmallHardpoint1",
 *     "FromItem":"hpt_pulselaserburst_fixed_small_scatter",
 *     "ToItem":"Null",
 *     "Ship":"cobramkiii",
 *     "ShipID":1
 * }
 * ```
 */

export class ModuleSwap extends JournalEvent {
  event: JournalEvents.moduleSwap;
  MarketID: number;
  FromSlot: string;
  ToSlot: string;
  FromItem: string;
  ToItem: string;
  Ship: string;
  ShipID: number;
}
