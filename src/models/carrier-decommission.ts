import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * Generated when player requests decommission.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-11T15:12:26Z",
 *     "event":"CarrierDecommission",
 *     "CarrierID":3700005632,
 *     "ScrapRefund":1746872629,
 *     "ScrapTime":1584601200
 * }
 * ```
 */

export class CarrierDecommission extends JournalEvent {
  event: JournalEvents.carrierDecommission;
  CarrierID: number;
  ScrapRefund: number;
  ScrapTime: number;
}
