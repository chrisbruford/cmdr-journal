import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: at startup, when loading from main menu into game
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2016-06-10T14:32:03Z", "event":"NewCommander", "Name":"HRC1", "FID": "F1234567" ,"Package":"ImperialBountyHunter" }
 * ```
 */

export class NewCommander extends JournalEvent {
  event: JournalEvents.newCommander;
  Name: string;
  FID: string;
  Package: string;
}
