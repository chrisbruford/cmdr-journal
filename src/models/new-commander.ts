import { JournalEvent } from ".";

/**
 * When written: at startup, when loading from main menu into game
 * 
 * ## Example
 * ```javascript
 * { "timestamp":"2016-06-10T14:32:03Z", "event":"NewCommander", "Name":"HRC1", "FID": "F1234567" ,"Package":"ImperialBountyHunter" }
 * ```
 */

export class NewCommander extends JournalEvent {
    Name: string;
    FID: string;
    Package: string;
}