import { JournalEvent } from "./journal-event.model";

/**
 * When written: At startup
 * 
 * This line contains the information displayed in the statistics panel on the right side of the cockpit
 * 
 * ## Example
 * ```javascript
 * { 
 *     "timestamp":"2017-09-25T15:18:31Z", 
 *     "event":"Statistics", 
 *     "Bank_Account": { 
 *         "Current_Wealth":148827050, 
 *         "Spent_On_Ships":14499177, 
 *         "Spent_On_Outfitting":30785093, 
 *         "Spent_On_Repairs":17716, 
 *         "Spent_On_Fuel":1647, 
 *         "Spent_On_Ammo_Consumables":0, 
 *         "Insurance_Claims":4, 
 *         "Spent_On_Insurance":1397620 
 *     }, 
 *     "Combat": { 
 *         "Bounties_Claimed":0, 
 *         "Bounty_Hunting_Profit":0, 
 *         "Combat_Bonds":0, 
 *         "Combat_Bond_Profits":0, 
 *         "Assassinations":0, 
 *         "Assassination_Profits":0, 
 *         "Highest_Single_Reward":0, 
 *         "Skimmers_Killed":0 
 *     }, 
 *     "Crime": { 
 *         "Fines":0, 
 *         "Total_Fines":0, 
 *         "Bounties_Received":0, 
 *         "Total_Bounties":0, 
 *         "Highest_Bounty":0 
 *     }, 
 *     "Smuggling": { 
 *         "Black_Markets_Traded_With":0, 
 *         "Black_Markets_Profits":0, 
 *         "Resources_Smuggled":0, 
 *         "Average_Profit":0, 
 *         "Highest_Single_Transaction":0 
 *     }, 
 *     "Trading": { 
 *         "Markets_Traded_With":3, 
 *         "Market_Profits":40700, 
 *         "Resources_Traded":23, 
 *         "Average_Profit":4070, 
 *         "Highest_Single_Transaction":17961 
 *     }, 
 *     "Mining": { 
 *         "Mining_Profits":0, 
 *         "Quantity_Mined":0, 
 *         "Materials_Collected":100 
 *     }, 
 *     "Exploration": { 
 *         "Systems_Visited":228, 
 *         "Fuel_Scooped":111, 
 *         "Fuel_Purchased":0, 
 *         "Exploration_Profits":304469, 
 *         "Planets_Scanned_To_Level_2":39, 
 *         "Planets_Scanned_To_Level_3":15, 
 *         "Highest_Payout":52503, 
 *         "Total_Hyperspace_Distance":844927, 
 *         "Total_Hyperspace_Jumps":295, 
 *         "Greatest_Distance_From_Start":65222.47204614, 
 *         "Time_Played":651060 
 *     }, 
 *     "Passengers": { 
 *         "Passengers_Missions_Bulk":0, 
 *         "Passengers_Missions_VIP":0, 
 *         "Passengers_Missions_Delivered":0, 
 *         "Passengers_Missions_Ejected":0 
 *     }, 
 *     "Search_And_Rescue": { 
 *         "SearchRescue_Traded":12, 
 *         "SearchRescue_Profit":19467, 
 *         "SearchRescue_Count":8 
 *     }, 
 *     "Crafting": { 
 *         "Spent_On_Crafting":0, 
 *         "Count_Of_Used_Engineers":2, 
 *         "Recipes_Generated":28, 
 *         "Recipes_Generated_Rank_1":9, 
 *         "Recipes_Generated_Rank_2":6, 
 *         "Recipes_Generated_Rank_3":9, 
 *         "Recipes_Generated_Rank_4":4, 
 *         "Recipes_Generated_Rank_5":0, 
 *         "Recipes_Applied":21, 
 *         "Recipes_Applied_Rank_1":8, 
 *         "Recipes_Applied_Rank_2":5, 
 *         "Recipes_Applied_Rank_3":7, 
 *         "Recipes_Applied_Rank_4":1, 
 *         "Recipes_Applied_Rank_5":0, 
 *         "Recipes_Applied_On_Previously_Modified_Modules":0 
 *     }, 
 *     "Crew": { 
 *         "NpcCrew_TotalWages":0, 
 *         "NpcCrew_Hired":0, 
 *         "NpcCrew_Fired":0, 
 *         "NpcCrew_Died":0 
 *     }, 
 *     "Multicrew": { 
 *         "Multicrew_Time_Total":23327, 
 *         "Multicrew_Gunner_Time_Total":14241, 
 *         "Multicrew_Fighter_Time_Total":6070, 
 *         "Multicrew_Credits_Total":0, 
 *         "Multicrew_Fines_Total":0 
 *     } 
 * }
 * ```
 */

export class Statistics extends JournalEvent {
    Bank_Account: { 
        Current_Wealth:number; 
        Spent_On_Ships:number; 
        Spent_On_Outfitting:number; 
        Spent_On_Repairs:number; 
        Spent_On_Fuel:number; 
        Spent_On_Ammo_Consumables:number; 
        Insurance_Claims:number; 
        Spent_On_Insurance:number; 
    };
    Combat: { 
        Bounties_Claimed:number; 
        Bounty_Hunting_Profit:number; 
        Combat_Bonds:number; 
        Combat_Bond_Profits:number; 
        Assassinations:number; 
        Assassination_Profits:number; 
        Highest_Single_Reward:number; 
        Skimmers_Killed:number;
    };
    Crime: { 
        Fines:number; 
        Total_Fines:number; 
        Bounties_Received:number; 
        Total_Bounties:number; 
        Highest_Bounty:number;
    };
    Smuggling: { 
        Black_Markets_Traded_With:number; 
        Black_Markets_Profits:number; 
        Resources_Smuggled:number; 
        Average_Profit:number; 
        Highest_Single_Transaction:number;
    };
    Trading: { 
        Markets_Traded_With:number;
        Market_Profits:number;
        Resources_Traded:number;
        Average_Profit:number;
        Highest_Single_Transaction:number;
    };
    Mining: { 
        Mining_Profits:number;
        Quantity_Mined:number;
        Materials_Collected:number;
    };
    Exploration: { 
        Systems_Visited:number;
        Fuel_Scooped:number;
        Fuel_Purchased:number;
        Exploration_Profits:number;
        Planets_Scanned_To_Level_2:number;
        Planets_Scanned_To_Level_3:number;
        Highest_Payout:number;
        Total_Hyperspace_Distance:number;
        Total_Hyperspace_Jumps:number;
        Greatest_Distance_From_Start:number;
        Time_Played:number;
    };
    Passengers: { 
        Passengers_Missions_Bulk:number;
        Passengers_Missions_VIP:number;
        Passengers_Missions_Delivered:number;
        Passengers_Missions_Ejected:number;
    };
    Search_And_Rescue: { 
        SearchRescue_Traded:number;
        SearchRescue_Profit:number;
        SearchRescue_Count:number;
    };
    Crafting: { 
        Spent_On_Crafting:number;
        Count_Of_Used_Engineers:number;
        Recipes_Generated:number;
        Recipes_Generated_Rank_1:number;
        Recipes_Generated_Rank_2:number;
        Recipes_Generated_Rank_3:number;
        Recipes_Generated_Rank_4:number;
        Recipes_Generated_Rank_5:number;
        Recipes_Applied:number;
        Recipes_Applied_Rank_1:number;
        Recipes_Applied_Rank_2:number;
        Recipes_Applied_Rank_3:number;
        Recipes_Applied_Rank_4:number;
        Recipes_Applied_Rank_5:number;
        Recipes_Applied_On_Previously_Modified_Modules:number;
    }; 
    Crew: { 
        NpcCrew_TotalWages:number;
        NpcCrew_Hired:number;
        NpcCrew_Fired:number;
        NpcCrew_Died:number;
    };
    Multicrew: { 
        Multicrew_Time_Total:number;
        Multicrew_Gunner_Time_Total:number;
        Multicrew_Fighter_Time_Total:number;
        Multicrew_Credits_Total:number;
        Multicrew_Fines_Total:number;
    } 
}

   