import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: when selling exploration data in Cartographics
 *
 * ## Example:
 *
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"SellExplorationData",
 *     "Systems":[
 *         "HIP 78085",
 *         "Praea Euq NW-W b1-3"
 *     ],
 *     "Discovered": [
 *         "HIP 78085 A",
 *         "Praea Euq NW-W b1-3",
 *         "Praea Euq NW-W b1-3 3 a",
 *         "Praea Euq NW-W b1-3 3"
 *     ],
 *     "BaseValue":10822,
 *     "Bonus":3959,
 *     "TotalEarnings":44343
 * }```
 */

export class SellExplorationData extends JournalEvent {
  event: JournalEvents.sellExplorationData;
  Systems: string[];
  Discovered: string[];
  BaseValue: number;
  Bonus: number;
  TotalEarnings: number;
}
