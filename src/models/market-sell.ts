import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when selling goods in the market
 * 
 * ## Example
 * 
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"MarketSell", 
 *     "Type":"agriculturalmedicines", 
 *     "Count":3, 
 *     "SellPrice":1360, 
 *     "TotalSale":4080, 
 *     "AvgPricePaid":304 
 * }
 * ```
 * ```javascript
 * { 
 *     "event":"MarketSell", 
 *     "Type":"mineraloil", 
 *     "Count":9, 
 *     "SellPrice":72, 
 *     "TotalSale":648, 
 *     "AvgPricePaid":0, 
 *     "StolenGoods":true, 
 *     "BlackMarket":true 
 * }
 * ```
 */

export class MarketSell extends JournalEvent {
    Type: string;
    Count: number;
    SellPrice: number;
    TotalSale: number;
    AvgPricePaid: number;
    IllegalGoods?: boolean;
    StolenGoods?: boolean;
    BlackMarket?: boolean;
}

