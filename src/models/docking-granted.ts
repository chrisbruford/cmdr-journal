import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: When docking is granted by the station
 */

export class DockingGranted extends JournalEvent {
  event: JournalEvents.dockingGranted;
  StationName: string;
  StationType: string;
  MarketID: number;
  LandingPad: number;
}
