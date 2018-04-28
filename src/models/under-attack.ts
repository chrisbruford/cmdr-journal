import { JournalEvent } from "./journal-event.model";

/**
 * When written: when under fire (same time as the Under Attack voice message)
 */

export class UnderAttack extends JournalEvent {
    target: "Fighter" | "Mothership" | "You";
}