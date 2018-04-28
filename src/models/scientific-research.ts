import { JournalEvent } from "./journal-event.model";

/**
 * When written: when contributing materials to a "research" community goal
 */

export class ScientificResearch extends JournalEvent {
    MarketID: number;
    Name: string;
    Name_Localised: string;
    Category: string;
    Category_Localised: string;
    Count: number;
}