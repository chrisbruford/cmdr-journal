import { JournalEvent } from "./journal-event.model";

/**
 *{ "timestamp":"2020-03-11T15:12:38Z",
 *"event":"CarrierCancelDecommission",
 *"CarrierID":3700005632 } 
*/


export class CarrierCancelDecommission extends JournalEvent {
	CarrierID: number;
}
