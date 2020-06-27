import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when a mission has been abandoned
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"MissionAbandoned",
 *     "Name":"Mission_Collect_name",
 *     "MissionID":65343025
 * }
 * ```
 */

export class MissionAbandoned extends JournalEvent {
  event: JournalEvents.missionAbandoned;
  Name: string;
  MissionID: number;
  Fine?: number;
}
