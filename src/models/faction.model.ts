import { Happiness } from "../enums";

/**
 * ## Example
 * ```javascript
 * { 
 *     "Name":"Inupiates Patrons of Law", 
 *     "FactionState":"Lockdown", 
 *     "Government":"Patronage", 
 *     "Influence":0.550000, 
 *     "Allegiance":"Empire", 
 *     "PendingStates":[ 
 *         { "State":"Boom", "Trend":0 }, 
 *         { "State":"CivilUnrest", "Trend":0 } 
 *     ] 
 * }
 * ```
 * ```javascript
 * "{ 
 *     "Name":"IV Comae Berenices Purple Creative", 
 *     "FactionState":"CivilWar", 
 *     "Government":"Corporate", 
 *     "Influence":0.550000, 
 *     "Allegiance":"Independent", 
 *     "RecoveringStates":[ 
 *         { "State":"Boom", "Trend":0 } 
 *     ] 
 * ```
 */

export class Faction {
    Name: string;
    FactionState: string;
    Government: string;
    Influence: number;
    Happiness: Happiness;
    Happiness_Localised?: string;
    MyReputation: number;
    PendingStates?: {State: string, Trend: number}[];
    RecoveringStates?: {State: string, Trend: number}[];
    ActiveStates?: string[];
    SquadronFaction?: boolean;
    HappiestSystem?: boolean;
    HomeSystem?: boolean;
}