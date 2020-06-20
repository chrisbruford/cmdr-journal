import { JournalEvent } from "./journal-event.model";

/**
 * Written when the carrier owner requests the carrier buy or sell goods.
 *{ "timestamp":"2020-03-16T14:52:36Z",
 *"event":"CarrierTradeOrder",
 *CarrierID":3700005632,
 *"BlackMarket":false,
 *"Commodity":"mineraloil",
 *"Commodity_Localised":"Mineral Oil",
 *"PurchaseOrder":70,
 *"Price":228 } 
 *
 */


export class CarrierTradeOrder extends JournalEvent {
	CarrierID: number;
	BlackMarket: boolean;
	Commodity: string;
	Commodity_Localised: string;
	PurchaseOrder: number;
	Price: number;
}
