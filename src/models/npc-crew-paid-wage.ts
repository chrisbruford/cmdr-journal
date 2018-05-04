import { JournalEvent } from "./journal-event.model";

/**
 * This is written when crew receive wages
 */

export class NpcCrewPaidWage extends JournalEvent {
    NpcCrewId: number;
    NpcCrewName: string;
    Amount: number;
}