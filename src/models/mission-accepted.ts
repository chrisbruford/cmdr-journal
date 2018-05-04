import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when starting a mission
 * 
 * ## Example
 * ```javascript
 * {  
 *     "timestamp":"2018-02-28T12:06:37Z", 
 *     "event":"MissionAccepted", 
 *     "Faction":"Official i Bootis Liberty Party", 
 *     "Name":"Mission_DeliveryWing_Agriculture", 
 *     "LocalisedName":"Agricultural supply run: 2280 units of Tea", 
 *     "Commodity":"$Tea_Name;", 
 *     "Commodity_Localised":"Tea", 
 *     "Count":2280, 
 *     "TargetFaction":"Ovid Vision & Co", 
 *     "DestinationSystem":"Ovid", 
 *     "DestinationStation":"Shriver Platform", 
 *     "Expiry":"2018-03-01T12:05:53Z", 
 *     "Wing":true, 
 *     "Influence":"Med", 
 *     "Reputation":"Med", 
 *     "Reward":2686155, 
 *     "MissionID":65393626 
 * }
 * ```
 */

export class MissionAccepted extends JournalEvent {
    Name: string;
    LocalisedName: string;
    Faction: string;
    MissionID: number;
    Influence: "None" | "Low" | "Med" | "High";
    Reputation: "None" | "Low" | "Med" | "High";
    Commodity?: string;
    Commodity_Localised?: string;
    Count?: number;
    Target?: string;
    TargetType?: string;
    TargetFaction?: string;
    KillCount?: number;
    Expiry?: string; //ISO 8601
    DestinationSystem?: string;
    DestinationStation?: string;
    PassengerCount?: number;
    PassengerVIPs?: boolean;
    PassengerWanted?: boolean;
    PassengerType?: string;
}