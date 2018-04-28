import { JournalEvent } from "./journal-event.model";

/**
 * When written: When docking is granted by the station
 */

export class DockingGranted extends JournalEvent {
    StationName: string;
    StationType: string;
    MarketID: number;
    LandingPad: number;
}