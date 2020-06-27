import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums";

/**
 * When written: whenever materials are collected
 *
 * ## Example:
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"MaterialCollected",
 *     "Category":"Manufactured",
 *     "Name":"chemicalmanipulators",
 *     "Name_Localised":"Chemical Manipulators",
 *     "Count":2
 * }
 * ```
 */

export class MaterialDiscarded extends JournalEvent {
  event: JournalEvents.materialDiscarded;
  Category: "Raw" | "Encoded" | "Manufactured";
  Name: string;
  Name_Localised: string;
  Count: number;
}
