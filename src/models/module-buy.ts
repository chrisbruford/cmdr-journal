import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when buying a module in outfitting
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"ModuleBuy",
 *     "Slot":"MediumHardpoint2",
 *     "SellItem":"hpt_pulselaser_fixed_medium",
 *     "SellPrice":0,
 *     "BuyItem":"hpt_multicannon_gimbal_medium",
 *     "BuyPrice":50018,
 *     "Ship":"cobramkiii","ShipID":1
 * }
 * ```
 */

export class ModuleBuy extends JournalEvent {
  event: JournalEvents.moduleBuy;
  MarketID: number;
  Slot: string;
  BuyItem: string;
  BuyPrice: number;
  Ship: string;
  ShipID: number;
  /**
   * If existing module is stored
   */
  StoredItem: string;
  /**
   * if replacing existing module
   */
  SellItem?: string;
  SellPrice?: number;
}
