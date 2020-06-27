import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when a ship's fighter is rebuilt in the hangar
 */

export class FighterRebuilt extends JournalEvent {
  event: JournalEvents.fighterRebuilt;
  Loadout: string;
  ID: string;
}
