import { JournalEvent } from ".";

/**
 *  When written: when the player's SRV is destroyed
 */

export class SRVDestroyed extends JournalEvent {
  ID: string;
}
