import { JournalEvent } from "./journal-event.model";

/**
 * When written: when the player cancels a docking request
 */

export class DockingCancelled extends JournalEvent {
    StationName: string;
    StationType: string;
    MarketID: number;
}