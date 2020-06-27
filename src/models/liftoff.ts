import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: Taking off from a planet surface
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2016-07-22T10:53:19Z",
 *  "event":"Liftoff",
 *  "Latitude":63.468872,
 *  "Longitude":157.599380,
 *  "PlayerControlled":true
 *  "NearestDestination":"$SAA_Unknown_Signal:#type=$SAA_SignalType_Geological;:#index=9;",
 *  "NearestDestination_Localised":"Surface signal: Geological (9)"
 * }
 * ```
 */

export class Liftoff extends JournalEvent {
  event: JournalEvents.liftoff;
  Latitude: number;
  Longitude: number;
  PlayerControlled: boolean;
  NearestDestination: string;
  NearestDestination_Localised: string;
}
