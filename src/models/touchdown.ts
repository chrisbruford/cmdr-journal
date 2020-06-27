import { JournalEvent } from ".";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: Landing on a planet surface
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2019-05-13T13:20:18Z",
 *  "event":"Touchdown",
 *  "PlayerControlled":true,
 *  "Latitude":10.503607,
 *  "Longitude":102.789810,
 *  "NearestDestination":"$SAA_Unknown_Signal:#type=$SAA_SignalType_Geological;:#index=9;",
 *  "NearestDestination_Localised":"Surface signal: Geological (9)"
 * }
 * ```
 */

export class Touchdown extends JournalEvent {
  event: JournalEvents.touchdown;
  Latitude: number;
  Longitude: number;
  PlayerControlled: boolean;
  NearestDestination: string;
  NearestDestination_Localised: string;
}
