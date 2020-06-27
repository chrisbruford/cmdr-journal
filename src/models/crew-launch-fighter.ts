import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: A crew member launches a fighter
 */

export class CrewLaunchFighter extends JournalEvent {
  event: JournalEvents.crewLaunchFighter;
  ID: string;
  Crew: string;
}
