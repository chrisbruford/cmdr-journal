import { JournalEvent } from "./journal-event.model";

/**
 * When written: when fetching a previously stored module
*/

export class ModuleRetrieve extends JournalEvent {
    MarketID: number;
    Slot: string;
    Ship: string;
    ShipID: number;
    RetrievedItem: string;
    Hot: boolean;
    EngineerModifications?: string;
    Level: number;
    Quality: number;
    SwapOutItem: string;
    Cost: number;
}