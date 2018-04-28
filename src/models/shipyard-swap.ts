import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when switching to another ship already stored at this station
 * 
 * ## Example: 
 * ```javascript
 * { 
 *     "timestamp":"2016-07-21T14:36:06Z", 
 *     "event":"ShipyardSwap", 
 *     "ShipType":"sidewinder", 
 *     "ShipID":10, 
 *     "StoreOldShip":"Asp", 
 *     "StoreShipID":2 
 * }
 * ```
 */
export class ShipyardSwap extends JournalEvent {
    MarketID: number;
    ShipType: string;
    ShipID: number;
    StoreOldShip?: string; //if storing old ship
    StoreShipID?: number;
    SellOldShip?: string; //if selling old ship
    SellShipID?: number;
}