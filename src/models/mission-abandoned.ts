import { JournalEvent } from "./journal-event.model";

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
    Name: string;
    MissionID: number;
    Fine?: number;
}