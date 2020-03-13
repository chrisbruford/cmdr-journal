import { JournalEvent } from ".";

/**
 * When written: at startup, when loading from main menu into game
 * 
 * ## Example
 * ```javascript
 * { "timestamp":"2016-06-10T14:32:03Z", "event":"ClearSavedGame", "Name":"HRC1", "FID": "F123456" }
 * ```
 */

export class ClearSavedGame extends JournalEvent {
    Name: string;
    FID: string;
}
