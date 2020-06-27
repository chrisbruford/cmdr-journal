import { CrewRoles } from "../enums/crew-roles.enum";
import { MusicTrackNames } from "../enums/music-track-names.enum";
import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/*

IMPORTANT NOTE: THESE MODELS WILL BE REFACTORED INTO INDIVIDUAL MODEL FILES AS AND WHEN THEY NEED UPDATING
NO NEW MODELS SHOULD BE CREATED HERE

*/

//STARTUP

export class Materials extends JournalEvent {
  Raw: { Name: string; Count: number }[];
  Manufactured: { Name: string; Count: number }[];
  Encoded: { Name: string; Count: number }[];
}
//{ "timestamp":"2017-02-10T14:25:51Z", "event":"Materials", "Raw":[ { "Name":"chromium", "Count":28 }, { "Name":"zinc", "Count":18 }, { "Name":"iron", "Count":23 }, { "Name":"sulphur", "Count":19 } ], "Manufactured":[ { "Name":"refinedfocuscrystals", "Count":10 }, { "Name":"highdensitycomposites", "Count":3 }, { "Name":"mechanicalcomponents", "Count":3 } ], "Encoded":[ { "Name":"emissiondata", "Count":32 }, { "Name":"shielddensityreports", "Count":23 } } ] }

export class Passengers extends JournalEvent {
  Manifest: {
    MissionID: number;
    Type: string;
    VIP: boolean;
    Wanted: boolean;
    Count: number;
  }[];
}

// % progress to next rank
export class Progress extends JournalEvent {
  Combat: number;
  Trade: number;
  Explore: number;
  Empire: number;
  Federation: number;
  CQC: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Progress", "Combat":77, "Trade":9, "Explore":93, "Empire":0, "Federation":0, "CQC":0 }

// current rank on scale (0-8 except for Fed and Empire)
export class Rank extends JournalEvent {
  Combat: number;
  Trade: number;
  Explore: number;
  Empire: number;
  Federation: number;
  CQC: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Rank", "Combat":2, "Trade":2, "Explore":5, "Empire":1, "Federation":3, "CQC":0 }

//TRAVEL

export class SupercruiseEntry extends JournalEvent {
  event: JournalEvents.supercruiseEntry;
  StarSystem: string;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"SupercruiseEntry", "StarSystem":"Yuetu" }

//COMBAT
export class CapShipBond extends JournalEvent {
  Reward: number;
  AwardingFaction: string;
  VictimFaction: string;
}

export class Died extends JournalEvent {
  KillerName?: string;
  KillerName_Localised?: string;
  KillerShip?: string;
  KillerRank?: string;
  //or the below when killed by a wing
  Killers?: {
    KillerName: string;
    KillerName_Localised: string;
    KillerShip: string;
    KillerRank: string;
  }[];
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Died", "KillerName":"$ShipName_Police_Independent;", "KillerShip":"viper", "KillerRank":"Deadly" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Died", "Killers":[ { "Name":"Cmdr HRC1", "Ship":"Vulture", "Rank":"Competent" }, { "Name":"Cmdr HRC2", "Ship":"Python", "Rank":"Master" } ] }

export class EscapeInterdiction extends JournalEvent {
  Interdictor: string;
  IsPlayer: boolean;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"EscapeInterdiction", "Interdictor":"Hrc1", "IsPlayer":true }

/**
 * When written: Player rewarded for taking part in a combat zone
 */
export class FactionKillBond extends JournalEvent {
  Reward: number;
  AwardingFaction: string;
  VictimFaction: string;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"FactionKillBond",  "Reward": 500, "AwardingFaction":"Jarildekald Public Industry", "VictimFaction": "Lencali Freedom Party" }

export class HeatDamage extends JournalEvent {}

export class HeatWarning extends JournalEvent {}

//emitted in 20% steps
export class HullDamage extends JournalEvent {
  Health: number;
  PlayerPilot: boolean;
  Fighter: boolean;
}
// { "timestamp":"2016-07-25T14:46:23Z", "event":"HullDamage", "Health":0.798496 }
// { "timestamp":"2016-07-25T14:46:23Z", "event":"HullDamage", "Health":0.595611 }
// { "timestamp":"2016-07-25T14:46:23Z", "event":"HullDamage", "Health":0.392725 }
// { "timestamp":"2016-07-25T14:46:26Z", "event":"HullDamage", "Health":0.188219 }

export class Interdicted extends JournalEvent {
  Submitted: boolean;
  Interdictor: string;
  IsPlayer: boolean;
  Faction: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Interdicted", "Submitted":false, "Interdictor":"Dread Pirate Roberts", "IsPlayer":false, "Faction": "Timocani Purple Posse"  }

export class Interdiction extends JournalEvent {
  Success: boolean;
  Interdicted: string;
  IsPlayer: boolean;
  CombatRank: number;
  Faction: string;
  Power?: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Interdiction", "Success":true, "Interdicted":"Fred Flintstone", "IsPlayer":true, "CombatRank":5 }

export class PVPKill extends JournalEvent {
  Victim: string;
  CombatRank: number; //victim's rank in range 0-8
}

export class ShieldState extends JournalEvent {
  ShieldsUp: boolean;
}
// { "timestamp":"2016-07-25T14:45:48Z", "event":"ShieldState", "ShieldsUp":false }
// { "timestamp":"2016-07-25T14:46:36Z", "event":"ShieldState", "ShieldsUp":true }

//EXPLORATION
export class MaterialCollected extends JournalEvent {
  Category: "Raw" | "Encoded" | "Manufactured";
  Name: string;
  Count: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialCollected", "Category":"Raw", "Name":"sulphur", "Count":2 }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialCollected", "Category":"Encoded", "Name":"disruptedwakeechoes", "Count":1 }

export class MaterialDiscarded extends JournalEvent {
  Category: "Raw" | "Encoded" | "Manufactured";
  Name: string;
  Count: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialDiscarded", "Category":"Raw", "Name":"sulphur", "Count": 5 }

export class MaterialDiscovered extends JournalEvent {
  Category: "Raw" | "Encoded" | "Manufactured";
  Name: string;
  DiscoveryNumber: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialDiscovered", "Category":"Manufactured", "Name":"focuscrystals", "DiscoveryNumber":3 }

export class BuyExplorationData extends JournalEvent {
  System: string;
  Cost: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyExplorationData", "System":"Styx", "Cost":352 }

/**
When Written: when a screen snapshot is saved

The latitude, longitude, altitude and heading will be included if on a planet or in low-altitude flight

## Example:

```javascript
{ 
    "timestamp":"2018-01-17T09:48:26Z", 
    "event":"Screenshot", 
    "Filename":"_Screenshots/Screenshot_0024.bmp", 
    "Width":1440, 
    "Height":900, 
    "System":"Nuenets", 
    "Body":"Nuenets C 2", 
    "Latitude":-60.799900, 
    "Longitude":-74.059799, 
    "Heading":39, 
    "Altitude":27502.876953 
}```
*/
export class Screenshot extends JournalEvent {
  Filename: string;
  Width: number;
  Height: number;
  System: string;
  Body: string;
  Latitude?: number;
  Longitude?: number;
  Altitude: number;
  Heading: number;
}

//TRADE
export class BuyTradeData extends JournalEvent {
  System: string;
  Cost: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyTradeData", "System":"i Bootis", "Cost":100 }

export class MiningRefined extends JournalEvent {
  Type: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MiningRefined", "Type:"Gold" }

//STATION SERVICES
export class BuyAmmo extends JournalEvent {
  Cost: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyAmmo", "Cost":80 }

export class BuyDrones extends JournalEvent {
  Type: string;
  Count: number;
  BuyPrice: number;
  TotalCost: number;
}
// { "timestamp":"2016-06-10T14:32:03Z", "event":"BuyDrones", "Type":"Drones", "Count":2, "SellPrice":101, "TotalCost":202 }

export class FetchRemoteModule extends JournalEvent {
  StorageSlot: string;
  StoredItem: string;
  ServerId: number;
  TransferCost: number;
  Ship: string;
  ShipId: number;
  TransferTime: number; //in seconds
}

export class MissionRedirected extends JournalEvent {
  MissionID: number;
  MissionName: string;
  NewDestinationStation: string;
  OldDestinationStation: string;
  NewDestinationSystem: string;
  OldDestinationSystem: string;
}
//{ "timestamp": "2017-08-01T09:04:07Z", "event": "MissionRedirected", "MissionID": 65367315, "NewDestinationStation": "Metcalf Orbital", "OldDestinationStation": "Cuffey Orbital", "NewDestinationSystem": "Cemiess", "OldDestinationSystem": "Vequess" }

export class ModuleSellRemote extends JournalEvent {
  StorageSlot: string;
  SellItem: string;
  ServerId: number;
  SellPrice: number;
  Ship: string;
  ShipId: number;
}

export class PayLegacyFines extends JournalEvent {
  Amount: number;
  BrokerPercentage?: number;
}

export class refuelAll extends JournalEvent {
  Cost: number;
  Amount: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RefuelAll", "Cost":317, "Amount":6.322901 }

export class RefuelPartial extends JournalEvent {
  Cost: number;
  Amount: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RefuelPartial", "Cost":83, "Amount":1.649000 }

export class RepairAll extends JournalEvent {
  Cost: number;
}

export class RestockVehicle extends JournalEvent {
  Type: string;
  Loadout: string;
  Cost: number;
  Count: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RestockVehicle", "Type":"SRV", "Loadout":"starter", "Cost":1030, "Count":1 }

export class SellDrones extends JournalEvent {
  Type: string;
  Count: number;
  SellPrice: number;
  TotalSale: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SellDrones", "Type":"Drones", "Count":1, "SellPrice":91, "TotalSale":91 }

export class SetUserShipName extends JournalEvent {
  Ship: string;
  ShipID: number;
  UserShipName: string;
  UserShipId: string;
}
//{ "timestamp":"2017-01-24T10:42:38Z", "event":"SetUserShipName", "Ship":"cobramkiii", "ShipID":2, "UserShipName":"Enterprise", "UserShipId":"NCC 1701" }

//POWERPLAY
export class PowerplayCollect extends JournalEvent {
  Power: string;
  Type: string;
  Count: number;
}

export class PowerplayDefect extends JournalEvent {
  FromPower: string;
  ToPower: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayDefect", "FromPower":"Zachary Hudson", "ToPower":"Li Yong-Rui" }

export class PowerplayDeliver extends JournalEvent {
  Power: string;
  Type: string;
  Count: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayDeliver", "Power":"Li Yong-Rui", "Type":"siriusfranchisepackage", "Count":10 }

export class PowerplayFastTrack extends JournalEvent {
  Power: string;
  Cost: number;
}

export class PowerplayJoin extends JournalEvent {
  Power: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayJoin", "Power":"Zachary Hudson" }

export class PowerplayLeave extends JournalEvent {
  Power: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayLeave", "Power":"Li Yong-Rui" }

export class PowerplaySalary extends JournalEvent {
  Amount: number;
  Power: string;
}

export class PowerplayVote extends JournalEvent {
  Power: string;
  Votes: number;
  System: string;
}

export class PowerplayVoucher extends JournalEvent {
  Power: string;
  Systems: string[];
}

//OTHER EVENTS

export class AfmuRepairs extends JournalEvent {
  Module: string;
  Module_Localised: string;
  FullyRepaired: boolean;
  Health: number; //0.0-1.0
}
//{ "timestamp":"2017-08-14T15:41:50Z", "event":"AfmuRepairs", "Module":"$modularcargobaydoor_name;", "Module_Localised":"Cargo Hatch", "FullyRepaired":true, "Health":1.000000 }

export class ChangeCrewRole extends JournalEvent {
  Role: CrewRoles;
}

export class CockpitBreached extends JournalEvent {}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CockpitBreached" }

export class CommitCrime extends JournalEvent {
  CrimeType: string;
  Faction: string;
  Victim?: string;
  Fine?: string;
  Bounty?: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CommitCrime", "CrimeType":"assault", "Faction":"The Pilots Federation", "Victim":"Potapinski", "Bounty":210 }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CommitCrime", "CrimeType":"fireInNoFireZone", "Faction":"Jarildekald Public Industry", "Fine":100 }

//written when logfile exceeds 500k: log file is closed and a new one opened with this part num
export class Continued extends JournalEvent {
  Part: number;
}

export class CrewMemberJoins extends JournalEvent {
  Crew: string;
}

export class CrewMemberQuits extends JournalEvent {
  Crew: string;
}

export class CrewMemberRoleChange extends JournalEvent {
  Crew: string;
  Role: CrewRoles;
}

export class DatalinkScan extends JournalEvent {
  Message: string;
}

export class DatalinkVoucher extends JournalEvent {
  Reward: number;
  VictimFaction: string;
  PayeeFaction: string;
}

export class DataScanned extends JournalEvent {
  Type: string;
}

export class EndCrewSession extends JournalEvent {
  OnCrime: boolean;
}

export class Friends extends JournalEvent {
  Status: "Requested" | "Declined" | "Added" | "Lost" | "Offline" | "Online";
  Name: string;
}

export class JetConeBoost extends JournalEvent {
  BoostValue: number;
}

export class JetConeDamage extends JournalEvent {
  Module: string;
}

export class JoinACrew extends JournalEvent {
  Captain: string;
}

export class kickCrewMember extends JournalEvent {
  Crew: string;
  OnCrime: boolean;
}

/**
When written: when looking at the cockpit RHS modules info panel, if data has changed

This also writes a ModulesInfo.json file alongside the journal, listing the modules in the same order as displayed

## Example:

```javascript
{ 
    "timestamp":"2018-01-10T14:35:08Z", 
    "event":"ModuleInfo", 
    "Modules":[ 
        { 
            "Slot":"MainEngines", 
            "Item":"int_engine_size3_class5", 
            "Power":3.720000, 
            "Priority":0 
        }, 

        { 
            "Slot":"MediumHardpoint1", 
            "Item":"hpt_beamlaser_turret_medium", 
            "Power":0.930000, 
            "Priority":0 
        }, 

        { 
            "Slot":"Slot03_Size2", 
            "Item":"int_shieldgenerator_size2_class1", 
            "Power":0.900000, 
            "Priority":2 
        }, 

        { 
            "Slot":"MediumHardpoint2", 
            "Item":"hpt_multicannon_gimbal_medium", 
            "Power":0.640000, 
            "Priority":0 
        }, 

        { 
            "Slot":"CargoHatch", 
            "Item":"modularcargobaydoor", 
            "Power":0.600000, 
            "Priority":2 
        }, 

        { 
            "Slot":"MediumHardpoint3", 
            "Item":"hpt_pulselaser_gimbal_medium", 
            "Power":0.600000, 
            "Priority":0 
        }, 

        { 
            "Slot":"PowerDistributor", 
            "Item":"int_powerdistributor_size3_class5", 
            "Power":0.600000, 
            "Priority":0 
        }, 

        { 
            "Slot":"FrameShiftDrive", 
            "Item":"int_hyperdrive_size3_class5", 
            "Power":0.450000, 
            "Priority":0 
        }, 

        { 
            "Slot":"Slot04_Size2", 
            "Item":"int_fuelscoop_size2_class5", 
            "Power":0.390000, 
            "Priority":0 
        }, 

        { 
            "Slot":"LifeSupport", 
            "Item":"int_lifesupport_size1_class1", 
            "Power":0.320000, 
            "Priority":2 
        }, 

        { 
            "Slot":"Slot05_Size2", 
            "Item":"int_buggybay_size2_class1", 
            "Power":0.250000, 
            "Priority":0 
        }, 

        { 
            "Slot":"Radar", 
            "Item":"int_sensors_size2_class2", 
            "Power":0.210000, 
            "Priority":0 
        }, 

        { 
            "Slot":"ShipCockpit", 
            "Item":"empire_courier_cockpit", 
            "Power":0.000000 
        }, 

        { 
            "Slot":"PowerPlant", 
            "Item":"int_powerplant_size4_class2", 
            "Power":0.000000 
        }, 

        { 
            "Slot":"Slot01_Size3", 
            "Item":"int_cargorack_size2_class1", 
            "Power":0.000000 
        }, 

        { 
            "Slot":"Slot02_Size3", 
            "Item":"int_cargorack_size2_class1", 
            "Power":0.000000 
        }, 

        { 
            "Slot":"Slot06_Size1", 
            "Item":"int_stellarbodydiscoveryscanner_standard", 
            "Power":0.000000 
        }, 

        { 
            "Slot":"DataLinkScanner", 
            "Item":"hpt_shipdatalinkscanner", 
            "Power":0.000000, 
            "Priority": 0 
        }
    ] 
}```
*/

export class ModuleInfo extends JournalEvent {}

export class Promotion extends JournalEvent {
  Combat?: number;
  Trade?: number;
  Explore?: number;
  CQC?: number;
  Federation: number;
  Empire: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Promotion", "Explore":2 }

export class QuitACrew extends JournalEvent {
  Captain: string;
}

export class RebootRepair extends JournalEvent {
  Modules: string[];
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RebootRepair", "Modules":[ "MainEngines", "TinyHardpoint1" ] }

export class Resurrect extends JournalEvent {
  Option: string;
  Cost: number;
  Bankrupt: boolean;
}

export class Scanned extends JournalEvent {
  ScanType: "Cargo" | "Crime" | "Cabin" | "Data" | "Unknown";
}

export class SelfDestruct extends JournalEvent {}

export class Synthesis extends JournalEvent {
  Name: string;
  Materials: { Name: string; Count: number }[];
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Synthesis", "Name":"Repair Basic", "Materials":{ "iron":2, "nickel":1 } }

// * When written: when the player's ship systems shut down (eg in a Thargoid encounter)
export class SystemsShutdown extends JournalEvent {}

export class USSDrop extends JournalEvent {
  USSType: string;
  USSThreat: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"USSDrop", "USSType":"Disrupted wake echoes", "USSThreat": 0 }

export class VehicleSwitch extends JournalEvent {
  To: "Mothership" | "Fighter";
}
// { "timestamp":"2016-06-10T14:32:03Z", "event":"VehicleSwitch", "To":"Fighter" }
// { "timestamp":"2016-06-10T14:32:03Z", "event":"VehicleSwitch", "To":"Mothership" }

export class WingAdd extends JournalEvent {}

export class WingInvite extends JournalEvent {
  Name: string;
}

export class WingJoin extends JournalEvent {
  Others: string[];
}

export class WingLeave extends JournalEvent {}

export class Music extends JournalEvent {
  MusicTrack: MusicTrackNames;
}

/**
 * each number represents amount of damage repaired
 */
export class RepairDrone extends JournalEvent {
  HullRepaired: number;
  CockpitRepaired: number;
  CorrosionRepaired: number;
}
