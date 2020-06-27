import { JournalEvent } from "./journal-event.model";
import { BodyTypes } from "../enums/body-types.enum";
import { Faction } from "./faction.model";
import { Conflict } from "./conflict";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when another player commits a crime against the current player
 *
 * note: this is documented in the Frontier Development docs as 'when another player commits a crime against the current player' but it seems
 * to log when the current player commits a crime against another player/npc
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2020-03-12T22:20:07Z", "event":"CrimeVictim", "Offender":"Blood Drunk", "CrimeType":"assault", "Bounty":100 }
 * ```
 */
export class CrimeVictim extends JournalEvent {
  event: JournalEvents.crimeVictim;
  Offender: string;
  CrimeType: string;
  /** Will be a Fine OR a Bounty - never both */
  Fine?: string;
  /** Will be a Fine OR a Bounty - never both */
  Bounty?: string;
}
