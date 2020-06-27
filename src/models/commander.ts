import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: at the start of the LoadGame process
 *
 * This is written before the inventory, loadout, etc
 */

export class Commander extends JournalEvent {
  event: JournalEvents.commander;
  Name: string;
  FID: string;
}
