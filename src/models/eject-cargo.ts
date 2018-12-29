import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when ejecting cargo from the hold
 *  
 * ## Example
 * ```javascript
 *  { 
 *    "timestamp":"2016-06-10T14:32:03Z",
 *    "event":"EjectCargo",
 *    "Type":"tobacco",
 *    "Count":1,
 *    "Abandoned":true
 *  }
 * ```
 * 
 * ```javascript
 * {
 *  "timestamp":"2016-09-21T14:18:23Z",
 *  "event":"EjectCargo",
 *  "Type":"alliancelegaslativerecords",
 *  "Count":2,
 *  "Abandoned":true,
 *  "PowerplayOrigin":"Tau Bootis"
 * }
 * ```
 */

export class EjectCargo extends JournalEvent {
  Type: string;
  Count: number;
  Abandoned: boolean;
  PowerplayOrigin?: string;
  MissionID?: number;
}