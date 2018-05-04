import { JournalEvent } from "./journal-event.model";

/**
 * When written: when dismissing a member of crew
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-08-09T08:46:11Z", 
 *     "event":"CrewFire", 
 *     "Name":"Whitney Pruitt-Munoz" 
 * } 
 * ```
 */

export class CrewFire extends JournalEvent {
    Name: string;
    CrewID: number;
}