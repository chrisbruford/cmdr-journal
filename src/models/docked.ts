import { JournalEvent } from "./journal-event.model";
import { StationServices } from "../enums/station-services.enum";

/**
 * When written: when landing at landing pad in a space station, outpost, or surface settlement
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2018-03-07T12:22:25Z", 
 *     "event":"Docked", 
 *     "StationName":"Jenner Orbital", 
 *     "StationType":"Outpost", 
 *     "StarSystem":"Luhman 16", 
 *     "SystemAddress":22960358574928, 
 *     "MarketID":3228883456, 
 *     "StationFaction":"Union of Luhman 16 Values Party", 
 *     "FactionState":"CivilWar", 
 *     "StationGovernment":"$government_Democracy;", 
 *     "StationGovernment_Localised":"Democracy", 
 *     "StationAllegiance":"Federation", 
 *     "StationServices":[ 
 *         "Dock", 
 *         "Autodock", 
 *         "BlackMarket", 
 *         "Commodities", 
 *         "Contacts", 
 *         "Exploration", 
 *         "Missions", 
 *         "Outfitting", 
 *         "CrewLounge", 
 *         "Rearm", 
 *         "Refuel", 
 *         "Workshop", 
 *         "MissionsGenerated", 
 *         "FlightController", 
 *         "StationOperations", 
 *         "Powerplay", 
 *         "SearchAndRescue" 
 *     ], 
 *     "StationEconomy":"$economy_Refinery;", 
 *     "StationEconomy_Localised":"Refinery", 
 *     "StationEconomies":[ 
 *         { 
 *             "Name":"$economy_Refinery;", 
 *             "Name_Localised":"Refinery", 
 *             "Proportion":0.760000 
 *         }, 
 *         { 
 *             "Name":"$economy_Extraction;", 
 *             "Name_Localised":"Extraction", 
 *             "Proportion":0.240000 
 *         }
 *     ], 
 *     "DistFromStarLS":10.061876 
 * }
 * ```
 */

export class Docked extends JournalEvent {
    StationName: string;
    MarketID: number;
    SystemAddress: number;
    StationType: string;
    StarSystem: string;
    CockpitBreached?: boolean;
    StationFaction: string;
    FactionState: string;
    StationAllegiance: string;
    StationEconomy: string;
    StationEconomy_Localised: string;
    StationEconomies: {
        Name: string;
        Name_Localised: string;
        Propotion: number;
    }[];
    StationGovernment: string;
    StationGovernment_Localised: string;
    DistFromStarLS: number;
    StationServices: StationServices[];
    Wanted?: boolean;
    ActiveFine?: boolean;
}