import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when claiming payment for combat bounties and bonds
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"RedeemVoucher",
 *     "Type":"bounty",
 *     Factions: [
 *         {
 *             "Faction":"Ed's 38",
 *             "Amount":1000
 *         },
 *         {
 *             "Faction":"Zac's Lads",
 *             "Amount": 2000
 *         }
 *     ]
 * }
 * ```
 */

export class RedeemVoucher extends JournalEvent {
  event: JournalEvents.redeemVoucher;
  Type: string;
  Amount: number;
  Faction?: string; //not for bounties
  BrokerPercentage?: number;
  Factions?: { Faction: string; Amount: number }[]; //for Bounties
}
