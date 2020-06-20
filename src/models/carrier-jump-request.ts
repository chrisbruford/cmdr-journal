import { JournalEvent } from "./journal-event.model";

/** 
 *Written when a carrier makes a jump request. Not the jump.
 *{ "timestamp":"2020-04-20T09:30:58Z",
 *"event":"CarrierJumpRequest",
 *"CarrierID":3700005632,
 *SystemName":"Paesui Xena",
 *"Body":"Paesui Xena A",
 *"SystemAddress":7269634680241,
 *"BodyID":1 }
 */

export class CarrierJumpRequest extends JournalEvent {
	CarrierID: number;
	SystemName: string;
	Body: string;
	SystemAddress: number;
	BodyID: number;
}
