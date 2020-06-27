import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: When the pilot requests docking clearance
 */

export class DockingRequested extends JournalEvent {
  event: JournalEvents.dockingRequested;
  StationName: string;
  StationType: string;
  MarketID: number;
}
