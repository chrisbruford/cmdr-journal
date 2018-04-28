import { JournalEvent } from "./journal-event.model";

/** 
 * When written: when in Supercruise, and distance from planet drops to within the 'Orbital Cruise' zone
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2017-09-27T15:21:05Z", 
 *     "event":"ApproachBody", 
 *     "StarSystem":"Eranin", 
 *     "Body":"Eranin 2" 
 * }
 * ```
 */

export class ApproachBody extends JournalEvent {
    StarSystem: string;
    SystemAddress: number;
    Body: string;
    BodyID: number;
}