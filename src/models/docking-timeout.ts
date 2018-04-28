import { JournalEvent } from "./journal-event.model";

/**
 * When written: When an active docking request times out
 */

export class DockingTimeout extends JournalEvent {
    StationName: string;
    StationType: string;
    MarketID: number;
}