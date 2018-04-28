import { JournalEvent } from "./journal-event.model";

/**
 * When written: when offering items cash or bounties to an Engineer to gain access
 * 
 * ## Example
 * 
 * ```javascript
 * { 
 *     "timestamp":"2017-05-24T10:41:51Z", 
 *     "event":"EngineerContribution", 
 *     "Engineer":"Elvira Martuuk", 
 *     "EngineerID":300160, 
 *     "Type":"Commodity", 
 *     "Commodity":"soontillrelics", 
 *     "Quantity":2, 
 *     "TotalQuantity":3 
 * }
 * ```
 */

export class EngineerContribution extends JournalEvent {
    Engineer: string;
    EngineerID: number;
    Type: "Commodity" | "materials" | "Credits" | "Bond" | "Bounty";
    Commodity?: string;
    Material?: string;
    Faction?: string;
    Quantity: number;
    TotalQuantity: number;
}