import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when in Supercruise, and distance from planet drops to within the 'Orbital Cruise' zone
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2017-09-27T15:21:05Z",
 *     "event":"ApproachBody",
 *     "StarSystem":"Eranin",
 *     "Body":"Eranin 2"
 * }
 * ```
 */

export class ApproachBody extends JournalEvent {
  event: JournalEvents.approachBody;
  StarSystem: string;
  SystemAddress: number;
  Body: string;
  BodyID: number;
}
