import { JournalEvent } from "./journal-event.model";

/**
 * The planned jump is cancelled.
 */


export class CarrierJumpCancelled extends JournalEvent {
	CarrierID: number;
}
