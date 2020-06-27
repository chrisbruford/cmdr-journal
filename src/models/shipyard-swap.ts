import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when switching to another ship already stored at this station
 *
 * ## Example:
 * ```javascript
 * {
 *     "timestamp":"2016-07-21T14:36:06Z",
 *     "event":"ShipyardSwap",
 *     "ShipType":"sidewinder",
 *     "ShipID":10,
 *     "StoreOldShip":"Asp",
 *     "StoreShipID":2
 * }
 * ```
 */
export class ShipyardSwap extends JournalEvent {
  event: JournalEvents.shipyardSwap;
  MarketID: number;
  ShipType: string;
  ShipType_Localised: string;
  ShipID: number;
  StoreOldShip?: string; //if storing old ship
  StoreShipID?: number;
  SellOldShip?: string; //if selling old ship
  SellShipID?: number;
}
