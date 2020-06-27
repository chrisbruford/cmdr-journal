import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: on a clean shutdown of the game
 */

export class Shutdown extends JournalEvent {
  event: JournalEvents.shutDown;
}
