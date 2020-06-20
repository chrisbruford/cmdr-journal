import { JournalEvent } from "./journal-event.model";
import { BodyTypes } from "../enums/body-types.enum";
import { Faction } from "./faction.model";
import { Conflict } from "./conflict";

/**
 * This is similar to FSDJump and Location, but it is written if the player is online and docked at a fleet carrier when the carrier jumps. Note it does not include the distance jumped, or fuel used.
 *
 * ## Example
 *{ "timestamp":"2020-03-25T15:55:56Z",
 *"event":"CarrierJump",
 *"Docked":true,
 *"StationName":"FC L14X1J",
 *"StationType":"FleetCarrier",
 *"MarketID":3700005632,
 *"StationFaction":{ "Name":"FleetCarrier" },
 *"StationGovernment":"$government_Carrier;",
 *"StationGovernment_Localised":"Private Ownership ",
 *"StationServices":["dock","autodock","blackmarket","commodities","outfitting","crewlounge","rearm","refuel","repair","shipyard","tuning","engineer","flightcontroller","stationoperations","stationMenu","carriermanagement","carrierfuel","voucherredemption" ],
 *"StationEconomy":"$economy_Extraction;",
 *"StationEconomy_Localised":"Extraction",
 *"StationEconomies":[{"Name":"$economy_Extraction;","Name_Localised":"Extraction","Proportion":1.000000}],
 *"StarSystem":"Hermitage",
 *"SystemAddress":5363877956440,
 *"StarPos":[-28.75000,25.00000,10.43750],
 *"SystemAllegiance":"",
 *"SystemEconomy":"$economy_None;",
 *"SystemEconomy_Localised":"None",
 *"SystemSecondEconomy":"$economy_None;",
 *"SystemSecondEconomy_Localised":"None",
 *"SystemGovernment":"$government_None;",
 *"SystemGovernment_Localised":"None",
 *"SystemSecurity":"$GAlAXY_MAP_INFO_state_anarchy;",
 *"SystemSecurity_Localised":"Anarchy",
 *"Population":0,
 *"Body":"Hermitage",
 *"BodyID":0,
 *"BodyType":"Star",
 *"SystemFaction":{
 *"Name":"FleetCarrier"}
 *}
 * ```
 */
export class CarrierJump extends JournalEvent {
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
