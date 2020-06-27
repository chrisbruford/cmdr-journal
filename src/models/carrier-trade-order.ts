import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * Written when the carrier owner requests the carrier buy or sell goods.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-16T14:52:36Z",
 *     "event":"CarrierTradeOrder",
 *     "CarrierID":3700005632,
 *     "BlackMarket":false,
 *     "Commodity":"mineraloil",
 *     "Commodity_Localised":"Mineral Oil",
 *     "PurchaseOrder":70,
 *     "Price":228
 * }
 */

export class CarrierTradeOrder extends JournalEvent {
  event: JournalEvents.carrierTradeOrder;
  CarrierID: number;
  BlackMarket: boolean;
  Commodity: string;
  Commodity_Localised: string;
  PurchaseOrder: number;
  Price: number;
}
