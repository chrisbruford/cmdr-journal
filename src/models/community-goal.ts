import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when checking the status of a community goal
 *
 * This event contains the current status of all community goals the player is currently subscribed to
 *
 * ## Example
 *
 * ```javascript
 * {
 *     "timestamp":"2017-08-14T13:20:28Z",
 *     "event":"CommunityGoal",
 *     "CurrentGoals": [
 *         {
 *             "CGID":726,
 *             "Title":"Alliance Research Initiative – Trade",
 *             "SystemName":"Kaushpoos",
 *             "MarketName":"Neville Horizons",
 *             "Expiry":"2017-08-17T14:58:14Z",
 *             "IsComplete":false,
 *             "CurrentTotal":10062,
 *             "PlayerContribution":562,
 *             "NumContributors":101,
 *             "TopRankSize":10,
 *             "PlayerInTopRank":false,
 *             "TierReached":"Tier 1",
 *             "PlayerPercentileBand":50,
 *             "Bonus":200000
 *         }
 *     ]
 * }
 * ```
 */

export class CommunityGoal extends JournalEvent {
  event: JournalEvents.communityGoal;
  CurrentGoals: {
    CGID: number;
    Title: string;
    SystemName: string;
    MarketName: string;
    Expiry: string;
    IsComplete: boolean;
    CurrentTotal: number;
    PlayerContribution: number;
    NumContributors: number;
    PlayerPercentileBand: number;
    TopTier: {
      Name: string;
      Bonus: string;
    };
    //if it has a fixed top band (e.g. top 10 CMDRS)
    TopRankSize?: number;
    PlayerInTopRank?: boolean;
    //If CG has reached first tier
    TierReached: string;
    Bonus: number;
  }[];
}
