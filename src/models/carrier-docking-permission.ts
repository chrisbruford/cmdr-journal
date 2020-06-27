import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * The carrier owner changes docking criteria.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-11T15:07:25Z",
 *     "event":"CarrierDockingPermission",
 *     "CarrierID":3700005632,
 *     "DockingAccess":"squadron",
 *     "AllowNotorious":true
 * }
 * ```
 */

export class CarrierDockingPermission extends JournalEvent {
  event: JournalEvents.carrierDockingPermission;
  CarrierID: number;
  DockingAccess: "all" | "none" | "friends" | "squadron" | "squadronfriends";
  AllowNotorious: boolean;
}
