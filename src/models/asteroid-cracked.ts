import { JournalEvent } from "./journal-event.model";

/**
 * When written: when the player has broken up a ‘Motherlode’ asteroid for mining
 * 
 */
export class AsteroidCracked extends JournalEvent {
  Body: string;
}