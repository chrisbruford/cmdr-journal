import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when accessing the commodity market in a station
 *
 * A separate file market.json is written to the same folder as the journal, containing full market price info
 *
 * ## Example
 * ```javascript
 * {
 *    "timestamp":"2017-10-05T10:10:34Z",
 *     "event":"Market",
 *     "MarketID":128678535,
 *     "StationName":"Black Hide",
 *     "StarSystem":"Wyrd",
 * }
 * ```
 */

export class Market extends JournalEvent {
  event: JournalEvents.market;
  MarketID: number;
  StationName: string;
  StarSystem: string;
}
