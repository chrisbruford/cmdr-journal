import { JournalEvent } from "../models/journal-event.model";

/**
 * When written: at startup (after Rank and Progress)
 * 
 * Note thresholds:
 * -100.. -90: hostile<br />
 * -90.. -35: unfriendly<br />
 * -35..+ 4: neutral<br />
 * +4..+35: cordial<br />
 * +35..+90: friendly<br />
 * +90..+100: allied<br />
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2018-03-24T10:10:38Z", 
 *     "event":"Reputation", 
 *     "Empire":75.000000, 
 *     "Federation":75.937500, 
 *     "Independent":75.000000, 
 *     "Alliance":74.068703 
 * }
 * ```
 */

export class Reputation extends JournalEvent {
    Empire: number;
    Federation: number;
    Independent: number;
    Alliance: number;
}