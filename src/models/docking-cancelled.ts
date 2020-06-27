import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when the player cancels a docking request
 */

export class DockingCancelled extends JournalEvent {
  event: JournalEvents.dockingCancelled;
  StationName: string;
  StationType: string;
  MarketID: number;
}
