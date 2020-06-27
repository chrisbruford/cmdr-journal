import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when selling exploration data in Cartographics, a page at a time
 *
 * ## Example:
 *
 * ```javascript
 *{
 *      "timestamp":"2016-06-10T14:32:03Z",
 *      "event":"MultiSellExplorationData",
 *      "Discovered": [
 *          { "SystemName":"HIP 84742", "NumBodies":23 },
 *          { "SystemName":"Col 359 Sector NY-S b20-1", "NumBodies":9 }
 *      ],
 *      "BaseValue":10822,
 *      "Bonus":3959,
 *      "TotalEarnings":44343
 * }```
 */

export class MultiSellExplorationData extends JournalEvent {
  event: JournalEvents.multiSellExplorationData;
  Systems: string[];
  Discovered: { SystemName: string; NumBodies: number }[];
  BaseValue: number;
  Bonus: number;
  TotalEarnings: number;
}
