import { JournalEvent } from "./journal-event.model";

/** 
 * When written: when accessing shipyard in a station
 * 
 * ## Example:
 * ```javascript
 * { 
 *     "timestamp":"2017-10-04T10:01:38Z", 
 *     "event":"Shipyard", 
 *     "MarketID: 128122104, 
 *     "StationName":"Seven Holm", 
 *     "StarSystem":"Tamor", 
 *     "Horizons":true, 
 *     "AllowCobraMkIV":true, 
 *     "PriceList":[
 *         { "id":128049249, "ShipType":"sidewinder", "ShipPrice":24336 }, 
 *         { "id":128049255, "ShipType":"eagle", "ShipPrice":34071 }, 
 *         { "id":128049261, "ShipType":"hauler", "ShipPrice":40094 }, 
 *         { "id":128049267, "ShipType":"adder", "ShipPrice":66779 }, 
 *         { "id":128672138, "ShipType":"empire_eagle", "ShipType_Localised":"Imperial Eagle", "ShipPrice":84283 }
 *     ]
 * }
 * ```
 */

export class Shipyard extends JournalEvent {
    MarketID: number;
    StationName: string;
    StarSystem: string;
    Horizons: boolean;
    AllowCobraMkIV: boolean;
    /**
     * The full price list is written to a separate file, in the same folder as the journal, Shipyard.json
     */
    Pricelist: {
        ShipType: string;
        ShipType_Localised: string;
        ShipPrice: number;
    }[]
}