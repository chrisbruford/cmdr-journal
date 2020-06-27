import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

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
  event: JournalEvents.crewAssign;
  Name: string;
  CrewID: number;
  Role: string;
}
