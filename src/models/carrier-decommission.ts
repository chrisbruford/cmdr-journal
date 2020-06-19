import { JournalEvent } from "./journal-event.model";

/**
 * Generated when player requests decommission.
 *{ "timestamp":"2020-03-11T15:12:26Z",
 *"event":"CarrierDecommission",
 *"CarrierID":3700005632,
 *"ScrapRefund":1746872629,
 *"ScrapTime":1584601200 } 
*/

export class CarrierDecommission extends JournalEvent {
	CarrierID: number;
	ScrapRefund: number;
	ScrapTime: number;
}
