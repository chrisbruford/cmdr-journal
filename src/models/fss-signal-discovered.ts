import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when zooming in on a signal using the FSS scanner
 *
 * * ## Example
 * ```javascript
 * { "timestamp":"2020-02-15T13:09:03Z", "event":"FSSSignalDiscovered", "SystemAddress":58141509045112, "SignalName":"$MULTIPLAYER_SCENARIO42_TITLE;", "SignalName_Localised":"Nav Beacon" }
 * ```
 */

export class FSSSignalDiscovered extends JournalEvent {
  event: JournalEvents.fssSignalDiscovered;
  SignalName: string;
  SignalName_Localised: string;
  /** the BGS state that triggered this event, if relevant */

  SpawningState: string;
  SpawningFaction: string;
  /** remaining lifetime in seconds, if relevant */
  TimeRemaining: number;
  SystemAddress: number;
  /** (if a USS) */
  ThreatLevel?: number;
  /** (if a USS) */
  USSType?: string;
  IsStation: boolean;
}
