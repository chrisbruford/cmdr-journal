import { JournalEvent } from "./journal-event.model";

/**
 * Player gives fuel (tritium) to the carrier.
 *{ "timestamp":"2020-03-17T12:38:54Z",
 * "event":"CarrierCrewServices",
 * "CarrierID":3700005632,
 * "CrewRole":"Outfitting",
 *"Operation":"Activate",
 *"CrewName":"Eugene Johnson" } 
 *
 */


export class CarrierCrewServices extends JournalEvent {
	CarrierID: number;
	CrewRole: string;
	Operation:
	| "Activate"
	| "Deactivate"
	| "Pause"
	| "Resume"
	| "Replace";
	CrewName: string;
}
