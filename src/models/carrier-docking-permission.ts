import { JournalEvent } from "./journal-event.model";

/**
 * The carrier owner changes docking criteria.
 *{ "timestamp":"2020-03-11T15:07:25Z",
 *"event":"CarrierDockingPermission",
 *"CarrierID":3700005632,
 *"DockingAccess":"squadron",
 *"AllowNotorious":true } 
 */


export class CarrierDockingPermission extends JournalEvent {
	CarrierID: number;
	DockingAccess: 
	| "all"
  | "none"
  | "friends"
  | "squadron"
  | "squadronfriends";
	AllowNotorious: boolean;
}
