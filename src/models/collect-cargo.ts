import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when scooping cargo from space or planet surface
 *  
 * ## Example
 * ```javascript
 *  { 
 *    "timestamp":"2016-06-10T14:32:03Z",
 *    "event":"CollectCargo",
 *    "Type":"agriculturalmedicines",
 *    "Stolen":false 
 *  }
  * ```
  */

export class CollectCargo extends JournalEvent {
  Type: string;
  Stolen: boolean;
  MissionID?: boolean;
}