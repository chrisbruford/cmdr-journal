import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: at startup, note this is now written slightly later in startup, after we have initialised missions, so we can detect if any cargo came from an abandoned delivery mission
 * The first “Cargo” event in the file will contain the full inventory, others just indicate a separate file has been written
 * The full data is now written to a separate file Cargo.json
 * A simple event (with no parameters) is written to the main journal file when the cargo file is updated
 *
 * ## Example
 * ```javascript
 * {
 *      "timestamp":"2017-02-10T14:25:51Z",
 *      "event":"Cargo",
 *      "Vessel": "Ship"
 *      "Inventory":[
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
  event: JournalEvents.cargo;
  Vessel: "Ship" | "SRV";
  Inventory: {
    Name: string;
    Name_Localised: string;
    Count: number;
    Stolen: number;
    MissionID?: number;
  }[];
}
