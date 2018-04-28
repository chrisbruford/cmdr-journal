import { JournalEvent } from "./journal-event.model";

/**
 * When written: liftoff from a landing pad in a station, outpost or settlement
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"Undocked", 
 *     "StationName":"Long Sight Base" 
 * }
 * ```
 */

export class Undocked extends JournalEvent {
    StationName: string;
    MarketID: number;
}
