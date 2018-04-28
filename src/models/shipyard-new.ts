import { JournalEvent } from "./journal-event.model";

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
    ShipType: string;
    NewShipID: number;
}