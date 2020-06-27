import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when a text message is sent to another player
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2016-06-10T14:32:03Z", "event":"SendText", "To":"HRC-2", "Message":"zoom" }
 * ```
 */

export class SendText extends JournalEvent {
  event: JournalEvents.sendText;
  /** May be a player or channel name */
  To: string;
  Message: string;
}
