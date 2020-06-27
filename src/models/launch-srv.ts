import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: launching an SRV
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2016-06-10T14:32:03Z", "event":"LaunchFighter", "Loadout":"starter", "PlayerControlled":true }
 * ```
 */

export class LaunchSRV extends JournalEvent {
  event: JournalEvents.launchSRV;
  Loadout: string;
  ID: string;
}
