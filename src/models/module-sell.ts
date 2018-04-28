import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when selling a module in outfitting
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"ModuleSell", 
 *     "Slot":"Slot06_Size2", 
 *     "SellItem":"int_cargorack_size1_class1", 
 *     "SellPrice":877, 
 *     "Ship":"asp", 
 *     "ShipID":1 
 * }
 * ```
 */

export class ModuleSell extends JournalEvent {
    MarketID: number;
    Slot: string;
    SellItem: string;
    SellPrice: number;
    Ship: string;
    ShipID: number;
}