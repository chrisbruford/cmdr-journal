import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums";

/**
 * When written: Player buys a fleet carrier
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-11T15:31:46Z",
 *     "event":"CarrierBuy",
 *     "CarrierID":3700029440,
 *     "BoughtAtMarket":3221301504,
 *     "Location":"Kakmbutan",
 *     "SystemAddress":3549513615723,
 *     "Price":4875000000,
 *     "Variant":"CarrierDockB",
 *     "Callsign":"P07-V3L"
 * }
 * ```
 */

export class CarrierBuy extends JournalEvent {
  event: JournalEvents.carrierBuy;
  BoughtAtMarket: number;
  CarrierID: number;
  Location: string;
  SystemAddress: number;
  Price: number;
  Variant: string;
  Callsign: string;
}
