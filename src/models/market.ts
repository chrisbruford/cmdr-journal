import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when accessing the commodity market in a station
 *
 * A separate file market.json is written to the same folder as the journal, containing full market price info
 *
 * ## Example
 * ```javascript
 * {
 *    "timestamp":"2017-10-05T10:10:34Z",
 *     "event":"Market",
 *     "MarketID":128678535,
 *     "StationName":"Black Hide",
 *     "StarSystem":"Wyrd",
 *     "Items":[
 *         { "id":128049152, "Name":"$platinum_name;", "Name_Localised":"Platinum", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":42220, "MeanPrice":19756, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":9182, "Consumer":true, "Producer":false, "Rare":false },
 *         { "id":128049153, "Name":"$palladium_name;", "Name_Localised":"Palladium", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":13999, "MeanPrice":13244, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":123183, "Consumer":true, "Producer":false, "Rare":false },
 *         { "id":128049154, "Name":"$gold_name;", "Name_Localised":"Gold", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":10831, "MeanPrice":9373, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":151492, "Consumer":true, "Producer":false, "Rare":false },
 *         { "id":128049155, "Name":"$silver_name;", "Name_Localised":"Silver", "Category":"$MARKET_category_metals;", "Category_Localised":"Metals", "BuyPrice":0, "SellPrice":5512, "MeanPrice":4759, "StockBracket":0, "DemandBracket":3, "Stock":0, "Demand":266258, "Consumer":true, "Producer":false, "Rare":false }
 *     ]
 * }
 * ```
 */

export class Market extends JournalEvent {
  event: JournalEvents.market;
  MarketID: number;
  StationName: string;
  StarSystem: string;
  items?: {
    id: number;
    Name: string;
    Name_Localised: string;
    Category: string;
    Category_Localised: string;
    BuyPrice: number;
    SellPrice: number;
    MeanPrice: number;
    StockBracket: number;
    DemandBracket: number;
    Stock: number;
    Demand: number;
    Consumer: boolean;
    Producer: boolean;
    Rare: boolean;
  }[];
}
