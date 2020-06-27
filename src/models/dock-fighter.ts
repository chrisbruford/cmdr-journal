import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: docking a fighter with the ship
 */

export class DockFighter extends JournalEvent {
  event: JournalEvents.dockFighter;
  ID: string;
}
