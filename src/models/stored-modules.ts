import { JournalEvent } from "./journal-event.model";

/** 
 * When written: when first visiting Outfitting, and when the set of stored modules has changed
 * 
 * "EngineerModifications", "Level" and "Quality" only appear for an engineered module
 * 
 * The InTransit value only appears (with value true) if the module is being transferred. In this case, the system, market, transfer cost and transfer time are not written.
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2018-01-31T10:55:16Z", 
 *     "event":"StoredModules", 
 *     "MarketID":128676487, 
 *     "StationName":"Farseer Inc", 
 *     "StarSystem":"Deciat", 
 *     "Items":[
 *         { 0
 *             "Name":"$int_engine_size3_class5_name", 
 *             "Name_Localised":"Thrusters", 
 *             "StorageSlot":57, 
 *             "StarSystem":"Deciat", 
 *             "MarketID":128676487, 
 *             "TransferCost":0, 
 *             "TransferTime":0, 
 *             "BuyPrice":495215, 
 *             "Hot":false, 
 *             "EngineerModifications":"Engine_Dirty", 
 *             "Level":1, 
 *             "Quality":0.000000 
 *         },
 *         { 
 *             "Name":"$int_hyperdrive_size6_class5_name;", 
 *             "Name_Localised":"FSD", 
 *             "StorageSlot":59, 
 *             "StarSystem":"Shinrarta Dezhra", 
 *             "MarketID":128666762, 
 *             "TransferCost":79680, 
 *             "TransferTime":1317, 
 *             "BuyPrice":12620035, 
 *             "Hot":false, 
 *             "EngineerModifications":"FSD_LongRange", 
 *             "Level":5, 
 *             "Quality":0.000000 
 *         } 
 *     ] 
 * }
 * ```
 */

export class StoredModules extends JournalEvent {
    MarketID: number; //current market
    Items: {
        Name: string;
        StarSystem?: string;
        MarketID?: number; //where module is stored
        StorageSlot: number;
        TransferCost?: number;
        TransferTime?: number;
        Hot: boolean;
        EngineerModifications?: string;
        Level?: number;
        Quality?: number;
        InTransit?: boolean;
    }[];

}