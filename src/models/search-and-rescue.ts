import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when delivering items to a Search and Rescue contact
 */

export class SearchAndRescue extends JournalEvent {
  event: JournalEvents.searchAndRescue;
  MarketID: number;
  Name: string;
  Count: number;
  Reward: number;
}
