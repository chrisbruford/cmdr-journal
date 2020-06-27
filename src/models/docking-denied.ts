import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: When docking is denied for any reason
 */

export class DockingDenied extends JournalEvent {
  event: JournalEvents.dockingDenied;
  StationName: string;
  StationType: string;
  MarketID: number;
  Reason:
    | "NoSpace"
    | "TooLarge"
    | "Hostile"
    | "Offences"
    | "Distance"
    | "ActiveFighter"
    | "NoReason";
}
