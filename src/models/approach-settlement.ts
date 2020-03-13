import { JournalEvent } from "./journal-event.model";

/**
 * When written: when approaching a planetary settlement
 *
 * * ## Example
 * ```javascript
 * {
 *  "timestamp":"2019-05-25T13:17:11Z",
 *  "event":"ApproachSettlement",
 *  "Name":"Mallett Arsenal ++",
 *  "MarketID":3513707776,
 *  "SystemAddress":58141509045112,
 *  "BodyID":22,
 *  "BodyName":"Ngobedu 10 f",
 *  "Latitude":-57.586079,
 *  "Longitude":-134.559311
 * }
 * ```
 */

export class ApproachSettlement extends JournalEvent {
  MarketID: number;
  Name: string;
  Latitude: number;
  Longitude: number;
  SystemAddress: number;
  BodyID: number;
  BodyName: string;
}
