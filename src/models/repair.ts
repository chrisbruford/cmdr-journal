import { JournalEvent } from "./journal-event.model";

/**
 * Written when repairing the ship
 *
 * Note when repairing on a FleetCarrier, you can now get a list of the modules repaired:
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2016-06-10T14:32:03Z",
 *     "event":"Repair",
 *     "Item":"int_powerplant_size3_class5",
 *     "Cost":1100
 * }
 * ```
 * ```javascript
 * {
 *     "timestamp":"2020-03-31T13:39:42Z",
 *     "event":"Repair",
 *     "Items":[
 *         "$hpt_dumbfiremissilerack_fixed_large_name;",
 *         "$hpt_beamlaser_gimbal_medium_name;",
 *         "$hpt_railgun_fixed_medium_name;",
 *         "$hpt_beamlaser_gimbal_medium_name;",
 *         "$hpt_dumbfiremissilerack_fixed_large_name;"
 *     ],
 *     "Cost":34590
 * }
 * ```
 */

export class Repair extends JournalEvent {
  Item: string | string[];
  Cost: number;
}
