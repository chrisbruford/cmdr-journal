import { JournalEvent } from "./journal-event.model";
import { ModuleAttribute } from "../enums/module-attributes.enum";
import { DamageType, WeaponMode } from "..";
import { CabinClass } from "../enums/cabin-class.enum";

/**
 * When written: at startup, when loading from main menu, or when switching ships, or after changing the ship in Outfitting
 * ## Example
 * 
 * Most "modules" have been removed from this example as they simply repeat the same values many times
 * 
 * ```javascript
 * { 
 *     "timestamp": "2018-04-26T20:19:50Z", 
 *     "event": "Loadout", 
 *     "Ship": "Empire_Courier", 
 *     "ShipID": 4, 
 *     "ShipName": "s3x panther", 
 *     "ShipIdent": "KV-003", 
 *     "HullValue": 2481550, 
 *     "ModulesValue": 4845048, 
 *     "Rebuy": 366333, 
 *     "Modules": [
 *         { 
 *             "Slot": "MediumHardpoint1", 
 *             "Item": "Hpt_MultiCannon_Fixed_Medium", 
 *             "On": true, 
 *             "Priority": 2, 
 *             "AmmoInClip": 82, 
 *             "AmmoInHopper": 2100, 
 *             "Health": 1.000000, 
 *             "Value": 31493, 
 *             "Engineering": { 
 *                 "Engineer": "Tod 'The Blaster' McQuinn", 
 *                 "EngineerID": 300260, 
 *                 "BlueprintID": 128673504, 
 *                 "BlueprintName": "Weapon_Overcharged", 
 *                 "Level": 5, 
 *                 "Quality": 0.000000, 
 *                 "ExperimentalEffect": "special_incendiary_rounds", 
 *                 "ExperimentalEffect_Localised": "Incendiary Rounds", 
 *                 "Modifiers": [
 *                     { 
 *                         "Label": "PowerDraw", 
 *                         "Value": 0.516246, 
 *                         "OriginalValue": 0.460000, 
 *                         "LessIsGood": 1 
 *                     }, 
 *                     { 
 *                         "Label": "DamagePerSecond", 
 *                         "Value": 20.651014, 
 *                         "OriginalValue": 15.642858, 
 *                         "LessIsGood": 0 
 *                     }, 
 *                     { 
 *                         "Label": "Damage", 
 *                         "Value": 3.043308, 
 *                         "OriginalValue": 2.190000, 
 *                         "LessIsGood": 0 }, 
 *                     { 
 *                         "Label": "DistributorDraw", 
 *                         "Value": 0.133285, 
 *                         "OriginalValue": 0.110000, 
 *                         "LessIsGood": 1 }, 
 *                     { 
 *                         "Label": "ThermalLoad", 
 *                         "Value": 0.540000, 
 *                         "OriginalValue": 0.180000, 
 *                         "LessIsGood": 1 }, 
 *                     { 
 *                         "Label": "ArmourPenetration", 
 *                         "Value": 37.304371, 
 *                         "OriginalValue": 37.000000, 
 *                         "LessIsGood": 0 }, 
 *                     { 
 *                         "Label": "RateOfFire", 
 *                         "Value": 6.785714, 
 *                         "OriginalValue": 7.142857, 
 *                         "LessIsGood": 0 }, 
 *                     { 
 *                         "Label": "AmmoClipSize", 
 *                         "Value": 82.000000, 
 *                         "OriginalValue": 100.000000, 
 *                         "LessIsGood": 0 }, 
 *                     { 
 *                         "Label": "DamageType", 
 *                         "ValueStr": "$Thermic;", 
 *                         "ValueStr_Localised": "Thermal" 
 *                      }
 *                 ] 
 *             } 
 *         }, 
 *         { 
 *             "Slot": "TinyHardpoint1", 
 *             "Item": "Hpt_CrimeScanner_Size0_Class3", 
 *             "On": true, 
 *             "Priority": 3, 
 *             "Health": 1.000000, 
 *             "Value": 118852 }, 
 *         { 
 *             "Slot": "TinyHardpoint2", 
 *             "Item": "Hpt_HeatSinkLauncher_Turret_Tiny", 
 *             "On": true, 
 *             "Priority": 2, 
 *             "AmmoInClip": 1, 
 *             "AmmoInHopper": 3, 
 *             "Health": 1.000000, 
 *             "Value": 3072, 
 *             "Engineering": { 
 *                 "Engineer": "Ram Tah", 
 *                 "EngineerID": 300110, 
 *                 "BlueprintID": 128731666, 
 *                 "BlueprintName": "HeatSinkLauncher_HeatSinkCapacity", 
 *                 "Level": 3, 
 *                 "Quality": 0.000000, 
 *                 "Modifiers": [
 *                     { 
 *                         "Label": "Mass", 
 *                         "Value": 3.507817, 
 *                         "OriginalValue": 1.300000, 
 *                         "LessIsGood": 1 
 *                     }, 
 *                     { 
 *                         "Label": "AmmoMaximum", 
 *                         "Value": 3.000000, 
 *                         "OriginalValue": 2.000000, 
 *                         "LessIsGood": 0 
 *                     }, 
 *                     { 
 *                         "Label": "ReloadTime", 
 *                         "Value": 18.647358, 
 *                         "OriginalValue": 10.000000, 
 *                         "LessIsGood": 1 
 *                     }
 *                 ] 
 *             } 
 *         }, 
 *         { 
 *             "Slot": "TinyHardpoint3", 
 *             "Item": "Hpt_ShieldBooster_Size0_Class5", 
 *             "On": true, 
 *             "Priority": 3, 
 *             "Health": 1.000000, 
 *             "Value": 246578, 
 *             "Engineering": { 
 *                 "Engineer": "Didi Vatermann", 
 *                 "EngineerID": 300000, 
 *                 "BlueprintID": 128673783, 
 *                 "BlueprintName": "ShieldBooster_HeavyDuty", 
 *                 "Level": 4, 
 *                 "Quality": 0.000000, 
 *                 "Modifiers": [
 *                     { 
 *                         "Label": "Mass", 
 *                         "Value": 11.785304, 
 *                         "OriginalValue": 3.500000, 
 *                         "LessIsGood": 1 }, { "Label": "Integrity", 
 *                         "Value": 52.320000, 
 *                         "OriginalValue": 48.000000, 
 *                         "LessIsGood": 0 
 *                     }, 
 *                     { 
 *                         "Label": "PowerDraw", 
 *                         "Value": 1.433739, 
 *                         "OriginalValue": 1.200000, 
 *                         "LessIsGood": 1 
 *                     },
 *                     { 
 *                         "Label": "DefenceModifierShieldMultiplier", 
 *                         "Value": 58.250175, 
 *                         "OriginalValue": 20.000004, 
 *                         "LessIsGood": 0 
 *                     }
 *                 ] 
 *             } 
 *         }, 
 *         { 
 *             "Slot": "TinyHardpoint4", 
 *             "Item": "Hpt_HeatSinkLauncher_Turret_Tiny", 
 *             "On": true, 
 *             "Priority": 2, 
 *             "AmmoInClip": 1, 
 *             "AmmoInHopper": 2, 
 *             "Health": 1.000000, 
 *             "Value": 2901 
 *         }, 
 *         { 
 *             "Slot": "PaintJob", 
 *             "Item": "PaintJob_Empire_Courier_BlackFriday_01", 
 *             "On": true, 
 *             "Priority": 1, 
 *             "Health": 1.000000 
 *         }
 *     ] 
 * }
 * ```
*/

export class Loadout extends JournalEvent {
    Ship: string;
    ShipID: number;
    ShipName: string;
    ShipIdent: string;
    HullValue?: number;
    ModulesValue?: number;
    Rebuy: number;
    Modules: {
        Slot: string;
        Item: string;
        On: boolean;
        Priority: number;
        Health: number;
        Value: number;
        /**
         * For a passenger cabin, AmmoInClip holds the number of places in the cabin
         */
        AmmoInClip?: number;
        AmmoInHopper?: number;
        Engineering: {
            EngineerID: number;
            Engineer: string;
            BlueprintID: number;
            BlueprintName: string;
            Level: number;
            Quality: number;
            ExperimentalEffect?: string;
            Modifiers: {
                Label: ModuleAttribute;
                Value?: number | DamageType | WeaponMode | CabinClass;
                OriginalValue: number;
                LessIsGood: boolean;
            }
        }
    }[]
}