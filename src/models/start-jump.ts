import { JournalEvent } from "./journal-event.model";

/**
 * When written: at the start of a Hyperspace or Supercruise jump (start of countdown)
 */

export class StartJump extends JournalEvent{
    JumpType: "Hyperspace" | "Supercruise";
    StarSystem?: string;
    SystemAddress: number;
    StarClass?: string;
}