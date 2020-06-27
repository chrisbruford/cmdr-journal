import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when putting multiple modules into storage
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-03-27T18:31:00Z",
 *     "event":"MassModuleStore",
 *     "MarketID":3230399232,
 *     "Ship":"cobramkiii",
 *     "ShipID":92,
 *     "Items":[
 *         {
 *             "Slot":"MediumHardpoint1",
 *             "Name":"$hpt_railgun_fixed_medium_name;",
 *             "Name_Localised":"Rail Gun",
 *             "Hot":false,
 *             "EngineerModifications":"Weapon_Sturdy",
 *             "Level":4,
 *             "Quality":0.000000
 *         },
 *         {
 *             "Slot":"MediumHardpoint2",
 *             "Name":"$hpt_railgun_fixed_medium_name;",
 *             "Name_Localised":"Rail Gun",
 *             "Hot":false,
 *             "EngineerModifications":"Weapon_LongRange",
 *             "Level":5,
 *             "Quality":0.000000
 *         },
 *         {
 *             "Slot":"Slot01_Size4",
 *             "Name":"$int_shieldgenerator_size4_class5_strong_name;",
 *             "Name_Localised":"Prismatic Shield",
 *             "Hot":false,
 *             "EngineerModifications":"ShieldGenerator_Thermic",
 *             "Level":5,
 *             "Quality":0.000000
 *         }
 *     ]
 * }
 * ```
 */

export class MassModuleStore extends JournalEvent {
  event: JournalEvents.massModuleStore;
  MarketID: number;
  Ship: string;
  ShipId: number;
  Items: {
    Slot: string;
    Name: string;
    Name_Localised: string;
    EngineerModifications: string;
    Hot: boolean;
    Level: number;
    Quality: number;
  }[];
}
