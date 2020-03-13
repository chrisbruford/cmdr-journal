import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when requesting an engineer upgrade
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2017-12-04T16:38:50Z",
 *     "event":"EngineerCraft",
 *     "Engineer":"Elvira Martuuk",
 *     "EngineerID":300160,
 *     "BlueprintName":"ShieldGenerator_Kinetic",
 *     "BlueprintID":128673820,
 *     "Level":1,
 *     "Slot":"Slot02_Size4",
 *     "Quality":0.207000,
 *     "Module":"int_shieldgenerator_size3_class5",
 *     "Ingredients":[
 *         {
 *             "Name":"shieldcyclerecordings",
 *             "Name_Localised":"Distorted Shield Cycle Recordings",
 *             "Count":1
 *         }
 *     ],
 *     "Modifiers":[
 *         {
 *             "Label":"Mass",
 *             "Value":4.159000,
 *             "OriginalValue":5.000000,
 *             "LessIsGood":1
 *         },
 *         {
 *             "Label":"Integrity",
 *             "Value":73.150002,
 *             "OriginalValue":77.000000,
 *             "LessIsGood":0
 *         },
 *         {
 *             "Label":"PowerDraw",
 *             "Value":2.062620,
 *             "OriginalValue":2.520000,
 *             "LessIsGood":1
 *         },
 *         {
 *             "Label":"ShieldGenOptimalMass",
 *             "Value":161.699997,
 *             "OriginalValue":165.000000,
 *             "LessIsGood":0
 *         },
 *         {
 *             "Label":"ShieldGenStrength",
 *             "Value":122.172012,
 *             "OriginalValue":120.000008,
 *             "LessIsGood":0
 *         }
 *     ]
 * }
 * ```
 */

export class EngineerCraft extends JournalEvent {
  Engineer: string;
  EngineerID: number;
  BlueprintName: string;
  BlueprintID: number;
  Level: number;
  Quality: number;
  ApplyExperimentalEffect?: string;
  Ingredients: { Name: string; Name_Localised: string; Count: number }[];
  Modifiers: {
    Label: string;
    Value: number;
    OriginalValue: number;
    LessIsGood: boolean;
    /**
     * These modification types have string values: WeaponMode, DamageType, CabinClass
     * (although I'm not sure if there are any blueprints that actually modify a cabin class!)
     */
    ValueStr?: string;
  }[];
}
