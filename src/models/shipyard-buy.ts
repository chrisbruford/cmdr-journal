import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when buying a new ship in the shipyard
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-07-21T14:36:38Z",
 *     "event":"ShipyardBuy",
 *     "ShipType":"hauler",
 *     "ShipPrice":46262,
 *     "StoreOldShip":"SideWinder",
 *     "StoreShipID":2
 * }
 * ```
 */

export class ShipyardBuy extends JournalEvent {
  event: JournalEvents.shipyardBuy;
  MarketID: number;
  ShipType: string;
  ShipType_Localised: string;
  ShipPrice: number;
  StoreOldShip?: string; //ship type being stored if so
  StoreShipID: number;
  SellShipID: number;
  SellPrice: number;
}
