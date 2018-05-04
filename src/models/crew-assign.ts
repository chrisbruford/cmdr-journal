import { JournalEvent } from "./journal-event.model";

/**
 * When written: when changing the task assignment of a member of crew
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-08-09T08:45:31Z", 
 *     "event":"CrewAssign", 
 *     "Name":"Dannie Koller", 
 *     "Role":"Active" 
 * }
 * ```
 */

export class CrewAssign extends JournalEvent {
    Name: string;
    CrewID: number;
    Role: string;
}