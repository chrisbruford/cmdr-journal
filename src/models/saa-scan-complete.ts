import { JournalEvent } from "./journal-event.model";

/**
 * When written: after using the “Surface Area Analysis” scanner
 * 
 * ## Example
 * ```javascript
 * { 
 *  "timestamp":"2018-10-05T15:06:12Z",
 *  "event":"SAAScanComplete",
 *  "BodyName":"Eranin 5",
 *  "BodyID":5,
 *  "ProbesUsed":6,
 *  "EfficiencyTarget":9 
 * }
 * ```
 */

export class SAAScanComplete extends JournalEvent {
    SystemAddress: number;
    BodyName: string;
    BodyID: number;
    ProbesUsed: number;
    EfficiencyTarget: number;
}