import { JournalEvent } from "./journal-event.model";

/**
 * When written: when selecting a star system to jump to
 * Note: when following a multi-jump route, this will typically appear for the next star, during a jump, ie after “StartJump” but before the “FSDJump”
 * 
 * ## Example
 * ```javascript
 * { 
 *  "timestamp":"2018-12-11T20:54:07Z",
 *  "event":"FSDTarget",
 *  "Name":"Wredguia WS-S c17-15",
 *  "SystemAddress":4206551405210 
 * }
 * ```
 */

export class FSDTarget extends JournalEvent {
  Name: string;
  SystemAddress: number;
}