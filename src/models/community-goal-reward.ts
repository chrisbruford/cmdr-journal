import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when receiving a reward for a community goal
 */

export class CommunityGoalReward extends JournalEvent {
  event: JournalEvents.communityGoalReward;
  CGID: number;
  Name: string;
  System: string;
  Reward: number;
}
