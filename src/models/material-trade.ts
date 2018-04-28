import { JournalEvent } from "./journal-event.model";

/**
 * When written: when exchanging materials at the Material trader contact
 * 
 * ## Example:
 * ```javascript
 * { 
 *     "timestamp":"2018-02-21T15:23:49Z", 
 *     "event":"MaterialTrade", 
 *     "MarketID":3221397760, 
 *     "TraderType":"encoded", 
 *     "Paid": { 
 *         "Material":"scandatabanks", 
 *         "Material_Localised":"Classified Scan Databanks", 
 *         "Category":"$MICRORESOURCE_CATEGORY_Encoded;", 
 *         "Category_Localised":"Encoded", 
 *         "Quantity":6, 
 *         "Category":"$MICRORESOURCE_CATEGORY_Encoded;", 
 *         "Category_Localised":"Encoded" 
 *     }, 
 *     "Received": { 
 *         "Material":"encodedscandata", 
 *         "Material_Localised":
 *         "Divergent Scan Data", 
 *         "Quantity":1 
 *     } 
 * }
 * ```
 */
export class MaterialTrade extends JournalEvent {
    MarketID: number;
    TraderType: string;
    Paid: {
        Material: string;
        Material_Localised: string;
        Category: string;
        Category_Localised: string;
        Quantity: number;
    };
    Received: {
        Material: string;
        Material_Localised: string;
        Category: string;
        Category_Localised: string;
        Quantity: number;
    }
}