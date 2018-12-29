import { JournalEvent } from "./journal-event.model";

/**
 * When Written: when requesting an engineer upgrade
 *  
 * ## Example
 * ```javascript
  *{ 
  *   "timestamp":"2016-06-10T14:32:03Z",
  *  "event":"Bounty",
  *   "Rewards": [ 
  *    {
  *      "Faction":"Federation",
  *      "Reward":1000 
  *    },
  *    {
  *      "Faction":"Nuenets Corp.",
  *      "Reward": 10280
  *    } 
  *  ],
  *  "Target":"Skimmer",
  *  "TotalReward":11280,
  *  "VictimFaction":"MMU" 
  *}
  * ```
  * When the bounty is for a skimmer, it’s slightly different:
  * ```javascript
  * {
  *   "timestamp":"2018-05-20T21:19:58Z",
  *   "event":"Bounty",
  *   "Faction":"HIP 18828 Empire Consulate",
  *   "Target":"Skimmer",
  *   "Reward":1000,
  *   "VictimFaction":"HIP 18828 Empire Consulate"
  * }
  * ```
  */

export class Bounty extends JournalEvent {
  Target: string;
  VictimFaction?: string;
  /**
   * Skimmer bounties only
   */
  Faction?: string;
  Reward?: number;
  /**
   * Non-skimmer bounties only
   */
  Rewards?: {Faction: string, Reward: number}[];
  TotalReward?: number;
  SharedWithOthers?: number;
}