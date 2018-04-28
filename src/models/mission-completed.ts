import { JournalEvent } from "./journal-event.model";
import { ReputationEffect } from "../enums/reputation-effect.enum";

/**
 * When Written: when a mission is completed
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2018-04-19T18:23:52Z", 
 *     "event":"MissionCompleted", 
 *     "Faction":"Knights of Karma", 
 *     "Name":"MISSION_Scan_name", 
 *     "MissionID":366822930, 
 *     "Reward":2858960, 
 *     "FactionEffects":[ 
 *         { 
 *             "Faction":"Knights of Karma", 
 *             "Effects":[ 
 *                 { 
 *                     "Effect":"$MISSIONUTIL_Interaction_Summary_lockdown_down;", 
 *                     "Effect_Localised":"$#MinorFaction; have less signs of imposing a security lockdown.", 
 *                     "Trend":"DownGood" 
 *                 }
 *             ], 
 *             "Influence":[ { "SystemAddress":4786481006963, "Trend":"UpGood" } ], 
 *             "Reputation":"UpGood" 
 *         } 
 *     ] 
 * }
 * ```
 * ### Example of MaterialsReward
 * ```javascript
 * { 
 *     "Name":"DisruptedWakeEchoes", 
 *     "Name_Localised":"Atypical Disrupted Wake Echoes", 
 *     "Category":"$MICRORESOURCE_CATEGORY_Encoded;", 
 *     "Category_Localised":"Encoded", 
 *     "Count":4 
 * }
 * ```
 */

export class MissionCompleted extends JournalEvent {
    Name: string;
    Faction: string;
    MissionID: number;
    Commodity?: string;
    Commodity_Localised?: string;
    Count?: number;
    Target?: string;
    TargetType?: string;
    TargetFaction?: string;
    Reward?: number;
    Donation?: number;
    PermitsAwarded?: string[];
    CommodityReward?: { Name: string; Count: number; }[];
    MaterialsReward?: {
        Name: string;
        Name_Localised: string;
        Category: string;
        Category_Localised: string;
        Count: number;
    }[];
    FactionEffects?: {
        Faction: string;
        Effects: {
            Effect: string;
            Effect_Localised: string;
            Trend: ReputationEffect;
        }[];
        Influence: {
            SystemAddress: number;
            Trend: ReputationEffect;
        };
        Reputation: ReputationEffect;
    }[]
    DestinationSystem: string;
    DestinationStation: string;
}