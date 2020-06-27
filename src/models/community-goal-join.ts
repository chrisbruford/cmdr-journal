import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when signing up to a community goal
 */

export class CommunityGoalJoin extends JournalEvent {
  event: JournalEvents.communityGoalJoin;
  CGID: number;
  Name: string;
  System: string;
}
