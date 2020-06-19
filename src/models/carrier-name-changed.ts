import { JournalEvent } from "./journal-event.model";

/**
 * The carrier name is changed.
 */


export class CarrierNameChanged extends JournalEvent {
	CarrierID: number;
	Callsign: string;
	Name: string;
}
