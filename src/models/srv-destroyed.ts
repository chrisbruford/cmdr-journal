import { JournalEvent } from ".";
import { JournalEvents } from "../enums";

/**
 *  When written: when the player's SRV is destroyed
 */

export class SRVDestroyed extends JournalEvent {
  event: JournalEvents.srvDestroyed;
  ID: string;
}
