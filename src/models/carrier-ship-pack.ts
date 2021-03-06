import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * A carrier ship pack is bought.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-16T09:25:39Z",
 *     "event":"CarrierShipPack",
 *     "CarrierID":3700005632,
 *     "Operation":"BuyPack",
 *     "PackTheme":"Zorgon Peterson - Cargo",
 *     "PackTier":1,
 *     "Cost":1668880
 * }
 * ```
 */

export class CarrierShipPack extends JournalEvent {
  event: JournalEvents.carrierShipPack;
  CarrierID: number;
  Operation: "buypack" | "sellpack" | "restockpack";
  PackTheme: string;
  PackTier: number;
  Cost?: number;
  Refund?: number;
}
