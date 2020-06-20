import { JournalEvent } from "./journal-event.model";

/**
 * A carrier module pack is bought.
 * Listed as the same as CarrierShipPack.
 *{ "timestamp":"2020-03-16T09:25:39Z",
 *"event":"CarrierModulePack",
 *"CarrierID":3700005632,
 *"Operation":"BuyPack",
 *"PackTheme":"Zorgon Peterson - Cargo",
 *"PackTier":1,
 *"Cost":1668880 }
 */


export class CarrierModulePack extends JournalEvent {
	CarrierID: number;
	Operation:
	| "buypack"
	| "sellpack"
	| "restockpack";
	PackTheme: string;
	PackTier: number;
	Cost?: number;
	Refund?: number;
}
