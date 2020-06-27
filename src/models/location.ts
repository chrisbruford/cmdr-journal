import { JournalEvent } from "./journal-event.model";
import { BodyTypes } from "../enums/body-types.enum";
import { Faction } from "./faction.model";
import { Conflict } from "./conflict";
import { JournalEvents } from "../enums";

/**
 * When written: on startup or resurrection
 *
 * ## Example
 * ```javascript
 * {
 *  "timestamp":"2019-04-28T11:06:27Z",
 *  "event":"Location",
 *  "DistFromStarLS":62.010319,
 *  "Docked":true,
 *  "StationName":"Liwei Terminal",
 *  "StationType":"Coriolis",
 *  "MarketID":3227870208,
 *  "StationFaction":{ "Name":"Foyama Novingo Startourism" },
 *  "StationGovernment":"$government_Corporate;",
 *  "StationGovernment_Localised":"Corporate",
 *  "StationAllegiance":"Empire",
 *  "StationServices":[ "Dock", "BlackMarket", "Commodities", "Missions", "Outfitting", "Refuel", "Shipyard", "Workshop", "MissionsGenerated", "FlightController", "StationOperations", "SearchAndRescue", "StationMenu" ],
 *  "StationEconomy":"$economy_Repair;",
 *  "StationEconomy_Localised":"Repair",
 *  "StationEconomies":[
 *    { "Name":"$economy_Repair;", "Name_Localised":"Repair", "Proportion":1.000000 },
 *    { "Name":"$economy_HighTech;", "Name_Localised":"High Tech", "Proportion":1.000000 }
 *  ],
 *  "StarSystem":"GD 140",
 *  "SystemAddress":52850328756,
 *  "StarPos":[4.84375,49.56250,-13.31250],
 *  "SystemAllegiance":"Thargoid",
 *  "SystemEconomy":"$economy_Extraction;",
 *  "SystemEconomy_Localised":"Extraction",
 *  "SystemSecondEconomy":"$economy_HighTech;",
 *  "SystemSecondEconomy_Localised":"High Tech",
 *  "SystemGovernment":"$government_Dictatorship;",
 *  "SystemGovernment_Localised":"Dictatorship",
 *  "SystemSecurity":"$SYSTEM_SECURITY_high;",
 *  "SystemSecurity_Localised":"High Security",
 *  "Population":82574191,
 *  "Body":"Liwei Terminal",
 *  "BodyID":100,
 *  "BodyType":"Station",
 *  "Factions":[
 *    { "Name":"Aegis Defense", "FactionState":"None", "Government":"Cooperative", "Influence":0.000000, "Allegiance":"Independent", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":0.000000 }, { "Name":"Progressive Party of GD 140", "FactionState":"None", "Government":"Democracy", "Influence":0.153846, "Allegiance":"Federation", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":-2.200000 }, { "Name":"Pilots' Federation Local Branch", "FactionState":"None", "Government":"Democracy", "Influence":0.000000, "Allegiance":"PilotsFederation", "Happiness":"", "MyReputation":0.161780 },
 *    { "Name":"Parcae Dynamic PLC", "FactionState":"None", "Government":"Corporate", "Influence":0.104895, "Allegiance":"Federation", "Happiness":"$Faction_HappinessBand2;", "Happiness_Localised":"Happy", "MyReputation":-19.320000, "PendingStates":[ { "State":"Election", "Trend":0 } ] },
 *    { "Name":"LHS 2430 for Equality", "FactionState":"None", "Government":"Democracy", "Influence":0.098901, "MyReputation":0.000000 },
 *    { "Name":"GD 140 & Co", "FactionState":"None", "Government":"Corporate", "Influence":0.104895, "MyReputation":0.000000, "PendingStates":[ { "State":"Election", "Trend":0 } ], "RecoveringStates":[ { "State":"Outbreak", "Trend":0 } ] },
 *    { "Name":"United GD 140 Liberty Party", "FactionState":"None", "Government":"Dictatorship", "Influence":0.068931, "MyReputation":0.000000, "RecoveringStates":[ { "State":"Outbreak", "Trend":0 } ] },
 *    { "Name":"LP 320-359 Public Services", "FactionState":"None", "Government":"Corporate", "Influence":0.084915, "MyReputation":0.000000, "RecoveringStates":[ { "State":"Outbreak", "Trend":0 } ] },
 *    { "Name":"GD 140 Systems", "FactionState":"None", "Government":"Corporate", "Influence":0.091908, "MyReputation":0.000000, "RecoveringStates":[ { "State":"Outbreak", "Trend":0 } ] },
 *    { "Name":"Foyama Novingo Startourism", "FactionState":"None", "Government":"Corporate", "Influence":0.291708, "MyReputation":0.000000 }
 *  ],
 *  "SystemFaction": { "Name":"Foyama Novingo Startourism" },
 *  "Conflicts": [
 *    {
 *      "WarType":"election",
 *      "Status":"pending",
 *      "Faction1":{ "Name":"Parcae Dynamic PLC", "Stake":"", "WonDays":0 },
 *      "Faction2": { "Name":"GD 140 & Co", "Stake":"Ricci Prospect", "WonDays":0 }
 *    }
 *  ]
 * }
 * ```
 */
export class Location extends JournalEvent {
  event: JournalEvents.location;
  StarSystem: string;
  SystemAddress: number;
  StarPos: [number, number, number];
  Body: string;
  BodyID: number;
  BodyType: BodyTypes;
  DistFromStarLS?: number;
  Docked: boolean;
  Latitude?: number;
  Longitude?: number;
  StationName?: string;
  StationType?: string;
  MarketID?: number;
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
  Wanted: boolean;
  Factions: Faction[];
  Conflicts: Conflict[];
  Powers: string[];
  PowerplayState:
    | "InPrepareRadius"
    | "Prepared"
    | "Exploited"
    | "Contested"
    | "Controlled"
    | "Turmoil"
    | "HomeSystem";
  StationFaction?: { Name: string; FactionState: string };
  StationGovernment?: string;
  StationGovernment_Localised?: string;
  StationAllegiance?: string;
  StationServices?: string[];
  StationEconomy?: string;
  StationEconomy_Localised?: string;
  StationEconomies: {
    Name: string;
    Name_Localised: string;
    Proportion: number;
  }[];
}
