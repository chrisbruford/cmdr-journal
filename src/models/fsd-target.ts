import { JournalEvent } from "./journal-event.model";
import { StarLuminosityClasses } from "../enums/star-luminosity-classes.enum";

/**
 * When written: when selecting a star system to jump to
 * Note: when following a multi-jump route, this will typically appear for the next star, during a jump, ie after “StartJump” but before the “FSDJump”
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2020-03-12T22:51:56Z",
 *  "event":"FSDTarget",
 *  "Name":"Eol Prou PC-K c9-221",
 *  "SystemAddress":60815897305682,
 *  "RemainingJumpsInRoute":2
 *  "StarClass":"M"
 * }
 * ```
 */

export class FSDTarget extends JournalEvent {
  Name: string;
  SystemAddress: number;
  RemainingJumpsInRoute: number;
  StarClass: StarLuminosityClasses;
}
