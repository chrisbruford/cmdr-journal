import { JournalEvent } from "./journal-event.model";
import { BodyTypes } from "../enums/body-types.enum";
import { Faction } from "./faction.model";

/**
 * When written: on startup or resurrection
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2018-05-06T17:51:57Z", 
 *     "event":"Location", 
 *     "Docked":false, 
 *     "StarSystem":"Qa'wakana", 
 *     "SystemAddress":4786481006963, 
 *     "StarPos":[-17.65625,-19.12500,61.78125], 
 *     "SystemAllegiance":"Independent", 
 *     "SystemEconomy":"$economy_Agri;", 
 *     "SystemEconomy_Localised":"Agriculture", 
 *     "SystemSecondEconomy":"$economy_Extraction;", 
 *     "SystemSecondEconomy_Localised":"Extraction", 
 *     "SystemGovernment":"$government_Feudal;", 
 *     "SystemGovernment_Localised":"Feudal", 
 *     "SystemSecurity":"$SYSTEM_SECURITY_high;", 
 *     "SystemSecurity_Localised":"High Security", 
 *     "Population":3238264143, 
 *     "Body":"Qa'wakana", 
 *     "BodyID":0, 
 *     "BodyType":"Star", 
 *     "Factions":[ 
 *         { 
 *             "Name":"Pilots Federation Local Branch", 
 *             "FactionState":"None", 
 *             "Government":"Democracy", 
 *             "Influence":0.000000, 
 *             "Allegiance":"PilotsFederation" }, 
 *         { 
 *             "Name":"Cerktondhs Resistance", 
 *             "FactionState":"Boom", 
 *             "Government":"Democracy", 
 *             "Influence":0.051948, 
 *             "Allegiance":"Federation" 
 *         }, 
 *         { 
 *             "Name":"Social Qa'wakana Revolutionary Party", 
 *             "FactionState":"None", 
 *             "Government":"Democracy", 
 *             "Influence":0.121878, 
 *             "Allegiance":"Independent", 
 *             "PendingStates":[ 
 *                 { 
 *                     "State":"CivilWar", 
 *                     "Trend":0 
 *                 } 
 *             ] 
 *         }, 
 *         { 
 *             "Name":"Qa'wakana Gold Major Inc", 
 *             "FactionState":"Boom", 
 *             "Government":"Corporate", 
 *             "Influence":0.125874, 
 *             "Allegiance":"Federation", 
 *             "PendingStates":[ 
 *                 { 
 *                     "State":"CivilWar", 
 *                     "Trend":0 
 *                 } 
 *             ] 
 *         }, 
 *         { 
 *             "Name":"New Qa'wakana Conservatives", 
 *             "FactionState":"CivilWar", 
 *             "Government":"Dictatorship", 
 *             "Influence":0.057942, 
 *             "Allegiance":"Independent" 
 *         }, 
 *         { 
 *             "Name":"Qa'wakana United Organisation", 
 *             "FactionState":"CivilWar", 
 *             "Government":"Corporate", 
 *             "Influence":0.060939, 
 *             "Allegiance":"Independent" 
 *         }, 
 *         { 
 *             "Name":"Qa'wakana Silver Hand Gang", 
 *             "FactionState":"Boom", 
 *             "Government":"Anarchy", 
 *             "Influence":0.045954, 
 *             "Allegiance":"Independent" 
 *         }, 
 *         { 
 *             "Name":"Knights of Karma", 
 *             "FactionState":"Boom", 
 *             "Government":"Feudal", 
 *             "Influence":0.535465, 
 *             "Allegiance":"Independent" 
 *         } 
 *     ], 
 *     "SystemFaction":"Knights of Karma", 
 *     "FactionState":"Boom" 
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
    SystemSecurity_Localised: string;
    Wanted: boolean;
    Factions: Faction[];
    Powers: string[];
    PowerplayState: "InPrepareRadius" | "Prepared" | "Exploited" | "Contested" | "Controlled" | "Turmoil" | "HomeSystem";
}