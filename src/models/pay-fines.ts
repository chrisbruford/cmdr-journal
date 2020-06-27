import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when paying fines
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-03-19T10:24:21Z",
 *     "event":"PayFines",
 *     "Amount":250,
 *     "AllFines":false,
 *     "Faction":"Batz Transport Commodities",
 *     "ShipID":9
 * }
 * ```
 */

export class PayFines extends JournalEvent {
  event: JournalEvents.payFines;
  /**
   * total amount paid , including any broker fee
   */
  Amount: number;
  BrokerPercentage?: number;
  AllFines: boolean;
  Faction?: string;
  ShipID: number;
}
