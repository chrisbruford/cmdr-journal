import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * The planned jump is cancelled.
 */

export class CarrierJumpCancelled extends JournalEvent {
  event: JournalEvents.carrierJumpCancelled;
  CarrierID: number;
}
