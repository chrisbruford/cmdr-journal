import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when under fire (same time as the Under Attack voice message)
 */

export class UnderAttack extends JournalEvent {
  event: JournalEvents.underAttack;
  target: "Fighter" | "Mothership" | "You";
}
