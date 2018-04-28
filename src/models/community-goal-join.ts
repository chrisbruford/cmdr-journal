import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when signing up to a community goal
 */

export class CommunityGoalJoin extends JournalEvent {
    CGID: number;
    Name: string;
    System: string;
}