import { JournalEvent } from "./journal-event.model";

/**
 * ## Example
 * 
 * { 
 *     "timestamp":"2017-07-20T08:56:39Z", 
 *     "event":"SellShipOnRebuy", 
 *     "ShipType":"Dolphin", 
 *     "System":"Shinrarta Dezhra", 
 *     "SellShipId":4, 
 *     "ShipPrice":4110183 
 * }
 */

export class SellShipOnRebuy extends JournalEvent {
    ShipType: string;
    ShipType_Localised: string;
    System: string;
    SellShipId: number;
    ShipPrice: number;
}