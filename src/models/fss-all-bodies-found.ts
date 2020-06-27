import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: after having identified all bodies in the system
 *
 * ## Example
 * ```javascript
 * { "timestamp":"2019-05-06T18:06:01Z", "event":"FSSAllBodiesFound", "SystemName":"Asterope", "SystemAddress":216054883492, "Count":3 }
 * ```
 */

export class FSSAllBodiesFound extends JournalEvent {
  event: JournalEvents.fssAllBodiesFound;
  SystemName: string;
  SystemAddress: number;
  Count: number;
}
