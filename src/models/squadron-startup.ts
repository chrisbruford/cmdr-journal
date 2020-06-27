import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: At game startup, to identify the player’s squadron
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2019-09-28T13:34:18Z", "event":"SquadronStartup", "SquadronName":"KNIGHTS OF KARMA", "CurrentRank":0 }
 * ```
 */
export class SquadronStartup extends JournalEvent {
  event: JournalEvents.squadronStartup;
  SquadronName: string;
  CurrentRank: number;
}
