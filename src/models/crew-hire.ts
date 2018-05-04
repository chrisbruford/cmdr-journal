import { JournalEvent } from "./journal-event.model";

/**
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2016-08-09T08:46:29Z", 
 *     "event":"CrewHire", 
 *     "Name":"Margaret Parrish", 
 *     "Faction":"The Dark Wheel", 
 *     "Cost":15000, 
 *     "CombatRank":1 
 * }
 * ```
 */

export class CrewHire extends JournalEvent {
    Name: string;
    CrewID: number;
    Faction: string;
    Cost: number;
    CombatRank: number;
}