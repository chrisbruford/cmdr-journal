import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when receiving a reward for a community goal
 */

export class CommunityGoalReward extends JournalEvent {
    CGID: number;
    Name: string;
    System: string;
    Reward: number;
}