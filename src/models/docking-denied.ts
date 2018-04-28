import { JournalEvent } from "./journal-event.model";

/**
 * When written: When docking is denied for any reason
 */

export class DockingDenied extends JournalEvent {
    StationName: string;
    StationType: string;
    MarketID: number;
    Reason: "NoSpace" | "TooLarge" | "Hostile" | "Offences" | "Distance" | "ActiveFighter" | "NoReason"
}