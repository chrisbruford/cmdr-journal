import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when a ship-launched fighter is destroyed
 */

export class FighterDestroyed extends JournalEvent {
  event: JournalEvents.fighterDestroyed;
  ID: string;
}
