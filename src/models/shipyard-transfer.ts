import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when requesting a ship at another station be transported to this station
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-07-21T15:19:49Z", 
 *     "event":"ShipyardTransfer", 
 *     "ShipType":"SideWinder", 
 *     "ShipID":7, 
 *     "System":"Eranin", 
 *     "Distance":85.639145, 
 *     "TransferPrice":580 
 * }
 * ```
 */

export class ShipyardTransfer extends JournalEvent {
    MarketID: number;
    ShipType: string;
    ShipID: number;
    System: string;
    Distance: number;
    TransferPrice: number;
    TransferTime: number;
}