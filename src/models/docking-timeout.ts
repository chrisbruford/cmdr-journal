import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: When an active docking request times out
 */

export class DockingTimeout extends JournalEvent {
  event: JournalEvents.dockingTimeout;
  StationName: string;
  StationType: string;
  MarketID: number;
}
