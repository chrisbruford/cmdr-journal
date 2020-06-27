import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when a new discovery is added to the Codex
 * The IsNewEntry and NewTraitsDiscovered fields are optional depending on the results of the scan, and the Traits field is only available for entries that have unlocked traits.
 *
 * ## Example:
 * ```JavaScript
 * {
 *  "timestamp": "2018-10-09T07:10:25Z",
 *  "event": "CodexEntry",
 *  "EntryID": 2401001,
 *  "Name": "$Codex_Ent_L_Phn_Part_Cld_001_Name;",
 *  "Name_Localised": "L_Phn_Part_Cld_001",
 *  "SubCategory": "$Codex_SubCategory_Micro_Organisms;",
 *  "SubCategory_Localised": "Micro Organisms",
 *  "Category": "$Codex_Category_Biology;",
 *  "Category_Localised": "Biological and Geological",
 *  "Region": "Region 18",
 *  "System": "Shinrarta Dezhra",
 *  "SystemAddress": 3932277478106,
 *  "NearestDestination":"$SAA_Unknown_Signal:#type=$SAA_SignalType_Geological;:#index=9;",
 *  "NearestDestination_Localised":"Surface signal: Geological (9)",
 *  "IsNewEntry": true,
 *  "NewTraitsDiscovered": true,
 *  "Traits": ["Trait1", "Trait2", "Trait3"]
 * }
 * ```
 */

export class CodexEntry extends JournalEvent {
  event: JournalEvents.codexEntry;
  EntryID: number;
  Name: string;
  Name_Localised: string;
  SubCategory: string;
  SubCategory_Localised: string;
  Category: string;
  Category_Localised: string;
  Region: string;
  System: string;
  SystemAddress: number;
  NearestDestination: string;
  NearestDestination_Localised: string;
  IsNewEntry: boolean;
  NewTraitsDiscovered: boolean;
  Traits: string[];
}
