import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: at startup, if player has pledged to a power
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-01-31T10:53:04Z",
 *     "event":"Powerplay",
 *     "Power":"Edmund Mahon",
 *     "Rank":0,
 *     "Merits":10,
 *     "Votes":0,
 *     "TimePledged":433024
 * }
 * ```
 */

export class Powerplay extends JournalEvent {
  event: JournalEvents.powerplay;
  Power: string;
  Rank: number;
  Merits: number;
  Votes: number;
  TimePledged: number;
}
