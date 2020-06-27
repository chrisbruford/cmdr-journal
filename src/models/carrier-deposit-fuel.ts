import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * Player gives fuel (tritium) to the carrier.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-19T09:17:29Z",
 *     "event":"CarrierDepositFuel",
 *     "CarrierID":3700005632,
 *     "Amount":45,
 *     "Total":112
 * }
 */

export class CarrierDepositFuel extends JournalEvent {
  event: JournalEvents.carrierDepositFuel;
  CarrierID: number;
  Amount: number;
  Total: number;
}
