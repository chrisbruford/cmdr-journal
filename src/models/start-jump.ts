import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: at the start of a Hyperspace or Supercruise jump (start of countdown)
 */

export class StartJump extends JournalEvent {
  event: JournalEvents.startJump;
  JumpType: "Hyperspace" | "Supercruise";
  StarSystem?: string;
  SystemAddress: number;
  StarClass?: string;
}
