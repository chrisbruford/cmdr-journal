import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * Written when accessing the outfitting menu
 * The full parts pricelist is written to a separate file Outfitting.json
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2017-10-05T10:11:38Z",
 *     "event":"Outfitting",
 *     "MarketID":128678535,
 *     "StationName":"Black Hide",
 *     "StarSystem":"Wyrd",
 *     "Horizons":true,
 *     "Items":[
 *         {
 *             "id":128049382,
 *             "Name":"hpt_pulselaser_fixed_medium",
 *             "BuyPrice":16731
 *         },
 *         {
 *             "id":128049383,
 *             "Name":"hpt_pulselaser_fixed_large",
 *             "BuyPrice":66924
 *         },
 *         {
 *             "id":128049385,
 *             "Name":"hpt_pulselaser_gimbal_small",
 *             "BuyPrice":6275
 *         },
 *         {
 *             "id":128049386,
 *             "Name":"hpt_pulselaser_gimbal_medium",
 *             "BuyPrice":33653
 *         },
 *         {
 *             "id":128049388,
 *             "Name":"hpt_pulselaser_turret_small",
 *             "BuyPrice":24717
 *         },
 *         {
 *             "id":128681995,
 *             "Name":"hpt_pulselaser_gimbal_huge",
 *             "BuyPrice":834269
 *         }
 *     ]
 * }
 * ```
 */

export class Outfitting extends JournalEvent {
  event: JournalEvents.outfitting;
  MarketID: number;
  StationName: string;
  StarSystem: string;
  /**
   * In seperate Outfitting.json file only
   */
  Horizons?: boolean;
  Items?: {
    id: number;
    Name: string;
    BuyPrice: number;
  }[];
}
