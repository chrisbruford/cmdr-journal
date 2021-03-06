import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * Written when a carrier makes a jump request. Not the jump.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-04-20T09:30:58Z",
 *     "event":"CarrierJumpRequest",
 *     "CarrierID":3700005632,
 *     "SystemName":"Paesui Xena",
 *     "Body":"Paesui Xena A",
 *     "SystemAddress":7269634680241,
 *     "BodyID":1
 * }
 * ```
 */

export class CarrierJumpRequest extends JournalEvent {
  event: JournalEvents.carrierJumpRequest;
  CarrierID: number;
  SystemName: string;
  Body: string;
  SystemAddress: number;
  BodyID: number;
}
