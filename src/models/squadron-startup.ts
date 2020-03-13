import { JournalEvent } from "./journal-event.model";

/**
 * When written: At game startup, to identify the player’s squadron
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2019-09-28T13:34:18Z", "event":"SquadronStartup", "SquadronName":"KNIGHTS OF KARMA", "CurrentRank":0 }
 * ```
 */
export class SquadronStartup extends JournalEvent {
  SquadronName: string;
  CurrentRank: number;
}
