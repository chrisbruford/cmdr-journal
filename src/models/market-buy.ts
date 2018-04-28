import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when purchasing goods in the market
 * 
 * ## Example
 * 
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"MarketBuy", 
 *     "Type":"foodcartridges", 
 *     "Count":10, 
 *     "BuyPrice":39, 
 *     "TotalCost":390 
 * }
 * ```
 */

export class MarketBuy extends JournalEvent {
    MarketID: number;
    Type: string;
    Count: number;
    BuyPrice: number;
    TotalCost: number;
}