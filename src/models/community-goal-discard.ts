import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when opting out of a community goal
 */

export class CommunityGoalDiscard extends JournalEvent {
  event: JournalEvents.communityGoalDiscard;
  CGID: number;
  Name: string;
  System: string;
}
