import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when contributing materials to a "research" community goal
 */

export class ScientificResearch extends JournalEvent {
  event: JournalEvents.scientificResearch;
  MarketID: number;
  Name: string;
  Name_Localised: string;
  Category: string;
  Category_Localised: string;
  Count: number;
}
