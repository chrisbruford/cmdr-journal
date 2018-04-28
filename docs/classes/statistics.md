[cmdr-journal](../README.md) > [Statistics](../classes/statistics.md)



# Class: Statistics


When written: At startup

This line contains the information displayed in the statistics panel on the right side of the cockpit

## Example

    {
        "timestamp":"2017-09-25T15:18:31Z",
        "event":"Statistics",
        "Bank_Account": {
            "Current_Wealth":148827050,
            "Spent_On_Ships":14499177,
            "Spent_On_Outfitting":30785093,
            "Spent_On_Repairs":17716,
            "Spent_On_Fuel":1647,
            "Spent_On_Ammo_Consumables":0,
            "Insurance_Claims":4,
            "Spent_On_Insurance":1397620
        },
        "Combat": {
            "Bounties_Claimed":0,
            "Bounty_Hunting_Profit":0,
            "Combat_Bonds":0,
            "Combat_Bond_Profits":0,
            "Assassinations":0,
            "Assassination_Profits":0,
            "Highest_Single_Reward":0,
            "Skimmers_Killed":0
        },
        "Crime": {
            "Fines":0,
            "Total_Fines":0,
            "Bounties_Received":0,
            "Total_Bounties":0,
            "Highest_Bounty":0
        },
        "Smuggling": {
            "Black_Markets_Traded_With":0,
            "Black_Markets_Profits":0,
            "Resources_Smuggled":0,
            "Average_Profit":0,
            "Highest_Single_Transaction":0
        },
        "Trading": {
            "Markets_Traded_With":3,
            "Market_Profits":40700,
            "Resources_Traded":23,
            "Average_Profit":4070,
            "Highest_Single_Transaction":17961
        },
        "Mining": {
            "Mining_Profits":0,
            "Quantity_Mined":0,
            "Materials_Collected":100
        },
        "Exploration": {
            "Systems_Visited":228,
            "Fuel_Scooped":111,
            "Fuel_Purchased":0,
            "Exploration_Profits":304469,
            "Planets_Scanned_To_Level_2":39,
            "Planets_Scanned_To_Level_3":15,
            "Highest_Payout":52503,
            "Total_Hyperspace_Distance":844927,
            "Total_Hyperspace_Jumps":295,
            "Greatest_Distance_From_Start":65222.47204614,
            "Time_Played":651060
        },
        "Passengers": {
            "Passengers_Missions_Bulk":0,
            "Passengers_Missions_VIP":0,
            "Passengers_Missions_Delivered":0,
            "Passengers_Missions_Ejected":0
        },
        "Search_And_Rescue": {
            "SearchRescue_Traded":12,
            "SearchRescue_Profit":19467,
            "SearchRescue_Count":8
        },
        "Crafting": {
            "Spent_On_Crafting":0,
            "Count_Of_Used_Engineers":2,
            "Recipes_Generated":28,
            "Recipes_Generated_Rank_1":9,
            "Recipes_Generated_Rank_2":6,
            "Recipes_Generated_Rank_3":9,
            "Recipes_Generated_Rank_4":4,
            "Recipes_Generated_Rank_5":0,
            "Recipes_Applied":21,
            "Recipes_Applied_Rank_1":8,
            "Recipes_Applied_Rank_2":5,
            "Recipes_Applied_Rank_3":7,
            "Recipes_Applied_Rank_4":1,
            "Recipes_Applied_Rank_5":0,
            "Recipes_Applied_On_Previously_Modified_Modules":0
        },
        "Crew": {
            "NpcCrew_TotalWages":0,
            "NpcCrew_Hired":0,
            "NpcCrew_Fired":0,
            "NpcCrew_Died":0
        },
        "Multicrew": {
            "Multicrew_Time_Total":23327,
            "Multicrew_Gunner_Time_Total":14241,
            "Multicrew_Fighter_Time_Total":6070,
            "Multicrew_Credits_Total":0,
            "Multicrew_Fines_Total":0
        }
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Statistics**







## Index

### Properties

* [Bank_Account](statistics.md#bank_account)
* [Combat](statistics.md#combat)
* [Crafting](statistics.md#crafting)
* [Crew](statistics.md#crew)
* [Crime](statistics.md#crime)
* [Exploration](statistics.md#exploration)
* [Mining](statistics.md#mining)
* [Multicrew](statistics.md#multicrew)
* [Passengers](statistics.md#passengers)
* [Search_And_Rescue](statistics.md#search_and_rescue)
* [Smuggling](statistics.md#smuggling)
* [Trading](statistics.md#trading)
* [event](statistics.md#event)
* [timestamp](statistics.md#timestamp)



---
## Properties
<a id="bank_account"></a>

###  Bank_Account

**●  Bank_Account**:  *`object`* 

*Defined in models/statistics.ts:118*


#### Type declaration




 Current_Wealth: `number`






 Insurance_Claims: `number`






 Spent_On_Ammo_Consumables: `number`






 Spent_On_Fuel: `number`






 Spent_On_Insurance: `number`






 Spent_On_Outfitting: `number`






 Spent_On_Repairs: `number`






 Spent_On_Ships: `number`







___

<a id="combat"></a>

###  Combat

**●  Combat**:  *`object`* 

*Defined in models/statistics.ts:128*


#### Type declaration




 Assassination_Profits: `number`






 Assassinations: `number`






 Bounties_Claimed: `number`






 Bounty_Hunting_Profit: `number`






 Combat_Bond_Profits: `number`






 Combat_Bonds: `number`






 Highest_Single_Reward: `number`






 Skimmers_Killed: `number`







___

<a id="crafting"></a>

###  Crafting

**●  Crafting**:  *`object`* 

*Defined in models/statistics.ts:188*


#### Type declaration




 Count_Of_Used_Engineers: `number`






 Recipes_Applied: `number`






 Recipes_Applied_On_Previously_Modified_Modules: `number`






 Recipes_Applied_Rank_1: `number`






 Recipes_Applied_Rank_2: `number`






 Recipes_Applied_Rank_3: `number`






 Recipes_Applied_Rank_4: `number`






 Recipes_Applied_Rank_5: `number`






 Recipes_Generated: `number`






 Recipes_Generated_Rank_1: `number`






 Recipes_Generated_Rank_2: `number`






 Recipes_Generated_Rank_3: `number`






 Recipes_Generated_Rank_4: `number`






 Recipes_Generated_Rank_5: `number`






 Spent_On_Crafting: `number`







___

<a id="crew"></a>

###  Crew

**●  Crew**:  *`object`* 

*Defined in models/statistics.ts:205*


#### Type declaration




 NpcCrew_Died: `number`






 NpcCrew_Fired: `number`






 NpcCrew_Hired: `number`






 NpcCrew_TotalWages: `number`







___

<a id="crime"></a>

###  Crime

**●  Crime**:  *`object`* 

*Defined in models/statistics.ts:138*


#### Type declaration




 Bounties_Received: `number`






 Fines: `number`






 Highest_Bounty: `number`






 Total_Bounties: `number`






 Total_Fines: `number`







___

<a id="exploration"></a>

###  Exploration

**●  Exploration**:  *`object`* 

*Defined in models/statistics.ts:164*


#### Type declaration




 Exploration_Profits: `number`






 Fuel_Purchased: `number`






 Fuel_Scooped: `number`






 Greatest_Distance_From_Start: `number`






 Highest_Payout: `number`






 Planets_Scanned_To_Level_2: `number`






 Planets_Scanned_To_Level_3: `number`






 Systems_Visited: `number`






 Time_Played: `number`






 Total_Hyperspace_Distance: `number`






 Total_Hyperspace_Jumps: `number`







___

<a id="mining"></a>

###  Mining

**●  Mining**:  *`object`* 

*Defined in models/statistics.ts:159*


#### Type declaration




 Materials_Collected: `number`






 Mining_Profits: `number`






 Quantity_Mined: `number`







___

<a id="multicrew"></a>

###  Multicrew

**●  Multicrew**:  *`object`* 

*Defined in models/statistics.ts:211*


#### Type declaration




 Multicrew_Credits_Total: `number`






 Multicrew_Fighter_Time_Total: `number`






 Multicrew_Fines_Total: `number`






 Multicrew_Gunner_Time_Total: `number`






 Multicrew_Time_Total: `number`







___

<a id="passengers"></a>

###  Passengers

**●  Passengers**:  *`object`* 

*Defined in models/statistics.ts:177*


#### Type declaration




 Passengers_Missions_Bulk: `number`






 Passengers_Missions_Delivered: `number`






 Passengers_Missions_Ejected: `number`






 Passengers_Missions_VIP: `number`







___

<a id="search_and_rescue"></a>

###  Search_And_Rescue

**●  Search_And_Rescue**:  *`object`* 

*Defined in models/statistics.ts:183*


#### Type declaration




 SearchRescue_Count: `number`






 SearchRescue_Profit: `number`






 SearchRescue_Traded: `number`







___

<a id="smuggling"></a>

###  Smuggling

**●  Smuggling**:  *`object`* 

*Defined in models/statistics.ts:145*


#### Type declaration




 Average_Profit: `number`






 Black_Markets_Profits: `number`






 Black_Markets_Traded_With: `number`






 Highest_Single_Transaction: `number`






 Resources_Smuggled: `number`







___

<a id="trading"></a>

###  Trading

**●  Trading**:  *`object`* 

*Defined in models/statistics.ts:152*


#### Type declaration




 Average_Profit: `number`






 Highest_Single_Transaction: `number`






 Market_Profits: `number`






 Markets_Traded_With: `number`






 Resources_Traded: `number`







___

<a id="event"></a>

###  event

**●  event**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[event](journalevent.md#event)*

*Defined in models/journal-event.model.ts:2*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[timestamp](journalevent.md#timestamp)*

*Defined in models/journal-event.model.ts:3*





___


