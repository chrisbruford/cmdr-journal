import { JournalEvent } from ".";

/**
 * When written: A crew member launches a fighter
 */

export class CrewLaunchFighter extends JournalEvent {
  ID: string;
  Crew: string;
}
