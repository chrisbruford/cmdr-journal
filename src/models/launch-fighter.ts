import { JournalEvent } from ".";

/**
 * When written: launching a fighter
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2016-06-10T14:32:03Z", "event":"LaunchFighter", "Loadout":"starter", "PlayerControlled":true }
 * ```
 */

export class LaunchFighter extends JournalEvent {
  Loadout: string;
  PlayerControlled: boolean;
  ID: string;
}
