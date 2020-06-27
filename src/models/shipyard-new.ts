import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: after a new ship has been purchased
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-07-21T14:36:38Z",
 *     "event":"ShipyardNew",
 *     "ShipType":"hauler",
 *     "ShipID":4
 * }
 * ```
 */

export class ShipyardNew extends JournalEvent {
  event: JournalEvents.shipyardNew;
  ShipType: string;
  ShipType_Localised: string;
  NewShipID: number;
}
