import { JournalEvent } from "./journal-event.model";

/**
 * When written: when delivering items to a Search and Rescue contact
 */

export class SearchAndRescue extends JournalEvent {
    MarketID: number
    Name: string;
    Count: number;
    Reward: number;
}