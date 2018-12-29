import { JournalEvent } from "./journal-event.model";

/**
 * When written: when approaching a planetary settlement
 */

export class ApproachSettlement extends JournalEvent {
    MarketID: number;
    Name: string;
    Latitude: number;
    Longitude: number;
}