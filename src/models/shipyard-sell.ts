import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when selling a ship stored in the shipyard
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-07-21T15:12:19Z", 
 *     "event":"ShipyardSell", 
 *     "ShipType":"Adder", 
 *     "SellShipID":6, 
 *     "ShipPrice":79027, 
 *     "System":"Eranin" 
 * }
 * ```
 */

export class ShipyardSell extends JournalEvent {
    MarketID: number;
    ShipType: string;
    ShipType_Localised: string;
    SellShipID: number;
    ShipPrice: number;
    System?: string; //if remote selling, where is ship?
}