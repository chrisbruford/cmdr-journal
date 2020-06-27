import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when collecting or delivering cargo for a wing mission, or if a wing member updates progress
 *
 * The CargoType and Count are included when you collect or deliver gods, they are not included for a wing update.
 *
 * The Progress value actually represents pending progress for goods in transit: (ItemsCollected-ItemsDelievered)/TotalItemsToDeliver
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-03-07T15:47:03Z",
 *     "event":"CargoDepot",
 *     "MissionID":65394170,
 *     "UpdateType":"Deliver",
 *     "CargoType":"BasicMedicines",
 *     "Count":8,
 *     "StartMarketID":3228867072,
 *     "EndMarketID":3534964736,
 *     "ItemsCollected":16,
 *     "ItemsDelivered":16,
 *     "TotalItemsToDeliver":3020,
 *     "Progress":0.000000
 * }
 * ```
 */

export class CargoDepot extends JournalEvent {
  event: JournalEvents.cargoDepot;
  MissionID: number;
  UpdateType: "Collect" | "Deliver" | "WingUpdate";
  CargoType: string;
  Count: number;
  StartMarketID: number;
  EndMarketID: number;
  ItemsCollected: number;
  ItemsDelivered: number;
  TotalItemsToDeliver: number;
  Progress: number;
}
