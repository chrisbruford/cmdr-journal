import { JournalEvent } from "./journal-event.model";
import { BodyTypes } from "../enums/body-types.enum";

/**
 * When written: leaving supercruise for normal space
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"SupercruiseExit", 
 *     "StarSystem":"Yuetu", 
 *     "Body":"Yuetu B" 
 * }
 * ```
 */

export class SupercruiseExit extends JournalEvent {
    StarSystem: string;
    Body: string;
    BodyID: number;
    BodyType: BodyTypes;
}