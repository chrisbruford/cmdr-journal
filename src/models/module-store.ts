import { JournalEvent } from "./journal-event.model";

/**
 * When written: when storing a module in Outfitting
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2018-01-31T10:55:15Z", 
 *     "event":"ModuleStore", 
 *     "MarketID":128676487, 
 *     "Slot":"TinyHardpoint1", 
 *     "StoredItem":"$hpt_shieldbooster_size0_class3_name;", 
 *     "StoredItem_Localised":"Shield Booster", 
 *     "Ship":"empire_courier", 
 *     "ShipID":11, 
 *     "Hot":false, 
 *     "EngineerModifications":"ShieldBooster_Explosive", 
 *     "Level":1, 
 *     "Quality":0.527100 
 * }
 * ```
 */

export class ModuleStore extends JournalEvent {
    MarketID: number;
    Slot: string;
    Ship: string;
    ShipID: number;
    StoredItem: string;
    Hot: boolean;
    EngineerModifications?: string;
    Level: number;
    Quality: number;
    ReplacementItem?: string; //if a core module
    Cost?: number
}