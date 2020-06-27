import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: after using the “Surface Area Analysis” scanner
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2018-10-05T15:06:12Z",
 *  "event":"SAAScanComplete",
 *  "BodyName":"Eranin 5",
 *  "BodyID":5,
 *  "ProbesUsed":6,
 *  "EfficiencyTarget":9
 * }
 * ```
 */

export class SAAScanComplete extends JournalEvent {
  event: JournalEvents.saaScanComplete;
  SystemAddress: number;
  BodyName: string;
  BodyID: number;
  ProbesUsed: number;
  EfficiencyTarget: number;
}
