import { JournalEvent } from "./journal-event.model";

/**
 * When written: at startup, note this is now written slightly later in startup, after we have initialised missions, so we can detect if any cargo came from an abandoned delivery mission
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2017-02-10T14:25:51Z", 
 *     "event":"Cargo", "Inventory":[ 
 *         { 
 *             "Name":"syntheticmeat", 
 *             "Count":2, 
 *             "Stolen": 0,
 *             "MissionID":65397935
 *         }, 
 *         { 
 *             "Name":"evacuationshelter", 
 *             "Count":1, 
 *             "Stolen": 0 
 *         }, 
 *         { 
 *             "Name":"progenitorcells", 
 *             "Count":3, 
 *             "Stolen": 3 
 *         }, 
 *         { 
 *             "Name":"bioreducinglichen", 
 *             "Count":1, 
 *             "Stolen": 0 
 *         }, 
 *         { 
 *             "Name":"neofabricinsulation", 
 *             "Count":2, 
 *             "Stolen": 0 
 *         } 
 *     ] 
 * }
 * ```
 */
export class Cargo extends JournalEvent {
  Inventory: {
    Name: string;
    Name_Localised: string;
    Count: number;
    Stolen: number;
    MissionID?: number
  }[]
}
