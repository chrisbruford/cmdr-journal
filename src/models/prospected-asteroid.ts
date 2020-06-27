import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: When using a prospecting drone
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2019-05-27T10:52:05Z",
 *  "event":"ProspectedAsteroid",
 *  "Materials":[
 *      { "Name":"water", "Proportion":6.803207 },
 *      { "Name":"liquidoxygen", "Name_Localised":"Liquid oxygen", "Proportion":9.004333 }
 *  ],
 *  "Content":"$AsteroidMaterialContent_Medium;",
 *  "Content_Localised":"Material Content: Medium",
 *  "Remaining":100.000000
 * }
 * ```
 */
export class ProspectedAsteroid extends JournalEvent {
  event: JournalEvents.prospectedAsteroid;
  Materials: { Name: string; Name_Localised?: string; Proportion: number }[];
  Content: string;
  Content_Localised: string;
  MotherlodeMaterial?: string;
  MotherlodeMaterial_Localised?: string;
}
