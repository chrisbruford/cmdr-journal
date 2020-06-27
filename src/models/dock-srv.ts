import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: docking an SRV with the ship
 */

export class DockSRV extends JournalEvent {
  event: JournalEvents.dockSRV;
  ID: string;
}
