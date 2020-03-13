import { JournalEvent } from "./journal-event.model";

/**
 * When written: When fuel is moved from one fuel tank to another
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2019-04-28T16:14:28Z", "event":"ReservoirReplenished", "FuelMain":30.930000, "FuelReservoir":1.070000 }
 * ```
 */
export class ReservoirReplenished extends JournalEvent {
  FuelMain: number;
  FuelReservoir: number;
}
