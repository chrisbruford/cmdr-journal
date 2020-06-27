import { JournalEvent } from "./journal-event.model";

/**
 * Written when the carrier owner requests the carrier buy or sell goods.
 *
 * ## Example
 * ```javascript
 * {
 *     timestamp: "2020-03-12T12:49:54Z",
 *     event: "CargoTransfer",
 *     Transfers: [
 *         { Type: "tea", Count: 1, Direction: "tocarrier" },
 *         { Type: "gold", Count: 1, Direction: "toship" },
 *     ],
 * };
 * ```
 *
 * ```javascript
 * {
 *     "timestamp":"2020-03-12T13:34:22Z",
 *     "event":"CargoTransfer",
 *     "Transfers":[ { "Type":"grain", "Count":2, "Direction":"tosrv" } ]
 * }
 * ```
 */

export class CargoTransfer extends JournalEvent {
  Transfers: {
    Type: string;
    Count: number;
    Direction: "tosrv" | "tocarrier" | "toship";
  }[];
}
