import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when the player has broken up a ‘Motherlode’ asteroid for mining
 *
 */
export class AsteroidCracked extends JournalEvent {
  event: JournalEvents.asteroidCracked;
  Body: string;
}
