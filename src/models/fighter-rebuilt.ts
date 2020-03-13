import { JournalEvent } from "./journal-event.model";

/**
 * When written: when a ship's fighter is rebuilt in the hangar
 */

export class FighterRebuilt extends JournalEvent {
  Loadout: string;
  ID: string;
}
