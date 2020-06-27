import { JournalEvent } from "./journal-event.model";
import { Faction } from "./faction.model";
import { Conflict } from "./conflict";
import { JournalEvents } from "../enums";

/**
 * When written: when jumping from one star system to another
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2017-02-27T15:37:47Z",
 *     "event":"FSDJump",
 *     "StarSystem":"HR 3316",
 *     "StarPos":[100.719,19.813,-51.125],
 *     "SystemAllegiance":"Independent",
 *     "SystemEconomy":"$economy_Colony;",
 *     "SystemEconomy_Localised":"Colony",
 *     "SystemGovernment":"$government_Democracy;",
 *     "SystemGovernment_Localised":"Democracy",
 *     "SystemSecurity":"$SYSTEM_SECURITY_medium;",
 *     "SystemSecurity_Localised":"Medium Security",
 *     "JumpDist":20.326,
 *     "FuelUsed":1.260775,
 *     "FuelLevel":12.872868,
 *     "Factions":[
 *         {
 *             "Name":"Independent HR 3316 Liberals",
 *             "FactionState":"Outbreak",
 *             "Government":"Democracy",
 *             "Influence":0.550000
 *         },
 *         {
 *             "Name":"Jet Natural Partners",
 *             "FactionState":"None",
 *             "Government":"Corporate",
 *             "Influence":0.150000
 *         },
 *         {
 *             "Name":"Camorra of HR 3316",
 *             "FactionState":"None",
 *             "Government":"Anarchy",
 *             "Influence":0.090000
 *         },
 *         {
 *             "Name":"HR 3316 Nobles",
 *             "FactionState":"None",
 *             "Government":"Feudal",
 *             "Influence":0.210000
 *         }
 *     ],
 *     "SystemFaction":"Independent HR 3316 Liberals",
 *     "FactionState":"Outbreak",
 *      "Conflicts":[
 *          {
 *              "WarType":"war",
 *              "Status":"active",
 *              "Faction1":{ "Name":"Camorra of HR 3316", "Stake":"Industrial Installation", "WonDays":3 },
 *              "Faction2":{ "Name":"Jet Natural Partners", "Stake":"", "WonDays":1 }
 *          }
 *      ]
 * }
 * ```
 */

export class FSDJump extends JournalEvent {
  event: JournalEvents.fsdJump;
  StarSystem: string;
  SystemAddress: number;
  StarPos: [number, number, number];
  Body: string;
  JumpDist: number;
  FuelUsed: number;
  FuelLevel: number;
  BoostUsed: boolean;
  SystemFaction: { Name: string; FactionState: string };
  FactionState: string;
  SystemAllegiance: string;
  SystemEconomy: string;
  SystemEconomy_Localised: string;
  SystemSecondEconomy: string;
  SystemSecondEconomy_Localised: string;
  SystemGovernment: string;
  SystemGovernment_Localised: string;
  SystemSecurity: string;
  SystemSecurity_Localised: string;
  Population: number;
  Factions: Faction[];
  Conflicts: Conflict[];
  Wanted: boolean;
  Powers?: string[];
  PowerplayerState?:
    | "InPrepareRadius"
    | "Prepared"
    | "Exploited"
    | "Contested"
    | "Controlled"
    | "Turmoil"
    | "HomeSystem";
}
