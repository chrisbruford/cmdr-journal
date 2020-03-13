import { JournalEvent } from "./journal-event.model";

/**
 * When written: when a ship-launched fighter is destroyed
 */

export class FighterDestroyed extends JournalEvent {
  ID: string;
}
