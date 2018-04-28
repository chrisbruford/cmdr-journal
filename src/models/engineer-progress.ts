import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when a player increases their access to an engineer
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"EngineerProgress", 
 *     "Progress":"Unlocked", 
 *     "Engineer":"Elvira Martuuk", 
 *     "EngineerID":300160 
 * }
 * ```
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z", 
 *     "event":"EngineerProgress", 
 *     "Engineer":"Elvira Martuuk", 
 *     "EngineerID":300160, 
 *     "Rank":2 
 * }
 * ```
 */

export class EngineerProgress extends JournalEvent {
    Engineer: string;
    EngineerID: number;
    Rank: number;
    Progress: "Invited" | "Acquainted" | "Unlocked" | "Barred"
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Progress":"Unlocked", "Engineer":"Elvira Martuuk" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Engineer":"Elvira Martuuk", "Rank":2 }