import { JournalEvent } from "./journal-event.model";

/**
 * When written: when opting out of a community goal
 */

export class CommunityGoalDiscard extends JournalEvent {
    CGID: number;
    Name: string;
    System: string;
}