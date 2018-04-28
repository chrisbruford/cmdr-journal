import { JournalEvent } from "./journal-event.model";

/**
 * When written: When the pilot requests docking clearance
 */

export class DockingRequested extends JournalEvent {
    StationName: string;
    StationType: string;
    MarketID: number;
}