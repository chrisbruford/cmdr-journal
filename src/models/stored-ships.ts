import { JournalEvent } from "./journal-event.model";

/** 
 * When written: when visiting shipyard
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2017-10-04T10:07:21Z", 
 *     "event":"StoredShips", 
 *     "StationName":"Jameson Memorial", 
 *     "StarSystem":"Shinrarta Dezhra", 
 *     "ShipsHere":[ 
 *         { 
 *             "ShipID":64, 
 *             "ShipType":"sidewinder", 
 *             "Value":567962 
 *         }, 
 *         { 
 *             "ShipID":20, 
 *             "ShipType":"empire_eagle", 
 *             "Value":6373956 
 *         } 
 *     ], 
 *     "ShipsRemote":[ 
 *         { 
 *             "ShipID":0, 
 *             "ShipType":"CobraMkIII", 
 *             "StarSystem":"Beta-1 Tucanae", 
 *             "TransferPrice":3777, 
 *             "TransferTime":1590, 
 *             "Value":9464239 
 *         } 
 *     ] 
 * }
 * ```
 */

export class StoredShips extends JournalEvent {
    MarketID: number;
    StationName: string;
    StarSystem: string;
    ShipsHere: {
        ShipID: number;
        ShipType: string;
        ShipType_Localised: string;
        Name?: string;
        Value: number;
        Hot: boolean;
    }[];
    ShipsRemote: {
        ShipID: number;
        ShipType: string;
        ShipType_Localised: string;
        Value: number;
        Hot: boolean;
        Name?: string;
        InTransit?: boolean;
        /**
         * Only if InTransit !== true
         */
        StarSystem?: string;
        ShipMarketID?: number;
        TransferPrice?: number;
        TransferTime?: string;
    }[];
}