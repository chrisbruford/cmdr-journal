import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: after using the “Surface Area Analysis” scanner
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2019-04-17T13:38:18Z",
 *  "event":"SAASignalsFound",
 *  "BodyName":"Hermitage 4 A Ring",
 *  "SystemAddress":5363877956440,
 *  "BodyID":11,
 *  "Signals":[
 *      { "Type":"LowTemperatureDiamond", "Type_Localised":"Low Temperature Diamonds", "Count":1 },
 *      { "Type":"Alexandrite", "Count":1 }
 *  ]
 * }
 * ```
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2019-04-17T13:40:39Z",
 *  "event":"SAASignalsFound",
 *  "BodyName":"Hermitage 4 b",
 *  "SystemAddress":5363877956440,
 *  "BodyID":13,
 *  "Signals": [
 *      { "Type":"$SAA_SignalType_Geological;", "Type_Localised":"Geological", "Count":14 }
 *  ]
 * }
 * ```
 */

export class SAASignalsFound extends JournalEvent {
  event: JournalEvents.saaSignalsFound;
  BodyName: string;
  SystemAddress: number;
  BodyID: number;
  Signals: { Type: string; Type_Localised: string; Count: number }[];
}
