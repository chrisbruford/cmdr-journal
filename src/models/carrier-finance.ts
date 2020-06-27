import { JournalEvent } from "./journal-event.model";

/**
 * Changes are made to tax rate or reserve.
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2020-03-26T10:36:32Z",
 *     "event":"CarrierFinance",
 *     "CarrierID":3700005632,
 *     "TaxRate":5,
 *     "CarrierBalance":3278186,
 *     "ReserveBalance":0,
 *     "AvailableBalance":475108,
 *     "ReservePercent":0
 * }
 * ```
 */

export class CarrierFinance extends JournalEvent {
  CarrierID: number;
  TaxRate: number;
  CarrierBalance: number;
  ReserveBalance: number;
  AvailableBalance: number;
  ReservePercent: number;
}
