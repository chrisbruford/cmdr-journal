import { JournalEvent } from "./journal-event.model";
import { BodyTypes } from "../enums/body-types.enum";
import { Faction } from "./faction.model";

/**
 * When written: on startup or resurrection
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-07-21T13:14:25Z", 
 *     "event":"Location", 
 *     "Docked":true, 
 *     "StationName":"Azeban City", 
 *     "StationType":"Coriolis", 
 *     "StarSystem":"Eranin", 
 *     "StarPos":[-22.844,36.531,-1.188], 
 *     "Allegiance":"Alliance", 
 *     "Economy":"$economy_Agri;", 
 *     "Government":"$government_Communism;", 
 *     "Security":$SYSTEM_SECURITY_medium;, 
 *     "Faction":"Eranin Peoples Party" 
 * }
 * ```
 * ```javascript
 * { 
 *     "timestamp":"2016-09-21T14:11:22Z", 
 *     "event":"Location", 
 *     "Docked":false, 
 *     "StarSystem":"Alpha Centauri", 
 *     "StarPos":[3.031,-0.094,3.156], 
 *     "Allegiance":"Independent", 
 *     "Economy":"$economy_Extraction;", 
 *     "Economy_Localised":"Extraction", 
 *     "Government":"$government_Cooperative;", 
 *     "Government_Localised":"Cooperative", 
 *     "Security":"$SYSTEM_SECURITY_medium;", 
 *     "Security_Localised":"Medium Security", 
 *     "Body":"Alpha Centauri B 1", 
 *     "Powers":["Zachary Hudson"], 
 *     "PowerplayState":"Exploited", 
 *     "Faction":"Hutton Orbital Truckers Co-Operative", 
 *     "FactionState":"Outbreak" 
 * }
 * ```
 */
export class Location extends JournalEvent {
    StarSystem: string;
    SystemAddress: number;
    StarPos: [number,number,number];
    Body: string;
    BodyID: number;
    BodyType: BodyTypes;
    Docked: boolean;
    Latitude?: number;
    Longitude?: number;
    StationName?: string;
    StationType?: string;
    MarketID?: number;
    SystemFaction: string;
    FactionState: string;
    SystemAllegiance: string;
    SystemEconomy: string;
    SystemEconomy_Localised: string;
    SystemSecondEconomy: string;
    SystemSecondEconomy_Localised: string;
    SystemGovernment: string;
    SystemGovernment_Localised: string;
    SystemSecurity: string;
    Security_Localised: string;
    Wanted: boolean;
    Factions: Faction[];
    Powers: string[];
    PowerplayState: "InPrepareRadius" | "Prepared" | "Exploited" | "Contested" | "Controlled" | "Turmoil" | "HomeSystem";
}