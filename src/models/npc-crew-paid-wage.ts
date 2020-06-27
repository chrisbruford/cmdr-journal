import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * This is written when crew receive wages
 */

export class NpcCrewPaidWage extends JournalEvent {
  event: JournalEvents.npcCrewPaidWage;
  NpcCrewId: number;
  NpcCrewName: string;
  Amount: number;
}
