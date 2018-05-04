import { JournalEvent } from "./journal-event.model";

/**
 * When written: when scooping fuel from a star
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"FuelScoop", 
 *     "Scooped":0.498700, 
 *     "Total":16.000000 
 * }
 * ```
 */

export class FuelScoop extends JournalEvent {
    Scooped: number;
    Total: number;
}