import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when paying off bounties
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-03-19T10:25:10Z",
 *     "event":"PayBounties",
 *     "Amount":400,
 *     "Faction":"$faction_Federation;",
 *     "Faction_Localised":"Federation",
 *     "ShipID":9,
 *     "BrokerPercentage":25.000000
 * }
 * ```
 */

export class PayBounties extends JournalEvent {
  event: JournalEvents.payBounties;
  /**
   * total amount paid , including any broker fee
   */
  Amount: number;
  BrokerPercentage?: number;
  AllFines: boolean;
  Faction: string;
  Faction_Localised: string;
  ShipID: number;
}
