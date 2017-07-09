import { BodyTypes } from '../body-types.enum';
import { StarTypes } from '../star-types.enum';
import { PlanetTypes } from '../planet-types.enum';
import { VolcanismTypes } from '../volcanism-types.enum';
import { Crimes } from '../crimes.enum';
import { AtmosphereTypes } from '../atmosphere-types.enum';

export class JournalEvent {
    event: string;
    timestamp: string;
}

//model followed by example

//STARTUP
export class ClearSavedGame extends JournalEvent {
    Name: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ClearSavedGame", "Name":"HRC1" }

export class NewCommander extends JournalEvent {
    Name: string;
    Package: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"NewCommander", "Name":"HRC1", "Package":"ImperialBountyHunter" }

export class LoadGame extends JournalEvent {
    Commander: string;
    Ship: string;
    ShipID: number;
    StartLanded?: boolean;
    StartDead?: boolean;
    GameMode: string;
    Group: string;
    Credits: number;
    Loan: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"LoadGame", "Commander":"HRC1", "Ship":"CobraMkIII", "ShipID":1, "GameMode":"Group", "Group":"Mobius", "Credits":600120, "Loan":0  }

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
export class Docked extends JournalEvent {
    StationName: string;
    StationType: string;
    StarSystem: string;
    CockpitBreached?: boolean;
    Faction: string;
    FactionState: string;
    Allegiance: string;
    Economy: string;
    Economy_Localised: string;
    Government: string;
    Government_Localised: string;
    Security: string;
    Security_Localised: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Docked", "StationName":"Kotov Refinery", "StationType":"Outpost", "StarSystem":"Wolf 289", "Faction":"Wolf 289 Gold Federal Industry", "FactionState":"CivilWar", "Allegiance":"Federation", "Economy":"$economy_Extraction", "Government":"$government_Corporate", "Security":"$SYSTEM_SECURITY_high_anarchy;" }

export class DockingCancelled extends JournalEvent {
    StationName: string;
}

export class DockingDenied extends JournalEvent {
    StationName: string;
    Reason: "NoSpace" | "TooLarge" | "Hostile" | "Offences" | "Distance" | "ActiveFighter" | "NoReason"
}

export class DockingGranted extends JournalEvent {
    StationName: string;
    LandingPad: number;
}

export class DockingRequested extends JournalEvent {
    StationName: string;
}

export class DockingTimeout extends JournalEvent {
    StationName: string;
}

export class FSDJump extends JournalEvent {
    StarSystem: string;
    StarPos: [number,number,number];
    Body: string;
    JumpDist: number;
    FuelUsed: number;
    FuelLevel: number;
    BoostUsed: boolean;
    Faction: string;
    FactionState: string;
    Allegiance: string;
    Economy: string;
    Economy_Localised: string;
    Government: string;
    Government_Localised: string;
    Security: string;
    Security_Localised: string;
    Powers?: string[];
    PowerplayerState?: "InPrepareRadius" | "Prepared" | "Exploited" | "Contested" | "Controlled" | "Turmoil" | "HomeSystem"
}
//{ "timestamp":"2016-07-21T13:16:49Z", "event":"FSDJump", "StarSystem":"LP 98-132", "StarPos":[-26.781,37.031,-4.594], "Economy":"$economy_Extraction;", "Allegiance":"Federation", "Government":"$government_Anarchy;", "Security":"$SYSTEM_SECURITY_high_anarchy;", "JumpDist":5.230, "FuelUsed":0.355614, "FuelLevel":12.079949, "Faction":"Brotherhood of LP 98-132", "FactionState":"Outbreak" }
//{ "timestamp":"2016-09-21T14:15:41Z", "event":"FSDJump", "StarSystem":"Tau Bootis", "StarPos":[0.094,48.781,14.625], "Allegiance":"Federation", "Economy":"$economy_Agri;", "Economy_Localised":"Agriculture", "Government":"$government_Democracy;", "Government_Localised":"Democracy", "Security":"$SYSTEM_SECURITY_high;", "Security_Localised":"High Security", "Power":"Edmund Mahon", "PowerplayState":"Controlled", "JumpDist":38.182, "FuelUsed":8.000000, "FuelLevel":11.066821, "Faction":"Values Party of Tau Bootis" }

export class Liftoff extends JournalEvent {
    Latitude: number;
    Longitude: number;
}
//{ "timestamp":"2016-07-22T10:53:19Z", "event":"Liftoff", "Latitude":63.468872, "Longitude":157.599380 }

//written on startup or resurrection
export class Location extends JournalEvent {
    StarSystem: string;
    StarPos: [number,number,number];
    Body: string;
    BodyType: BodyTypes;
    Docked: boolean;
    StationName?: string;
    StationType?: string;
    Faction: string;
    FactionState: string;
    Allegiance: string;
    Economy: string;
    Economy_Localised: string;
    Government: string;
    Government_Localised: string;
    Security: string;
    Security_Locaolised: string;
    Powers: string[];
    PowerplayState: "InPrepareRadius" | "Prepared" | "Exploited" | "Contested" | "Controlled" | "Turmoil" | "HomeSystem";
}
//{ "timestamp":"2016-07-21T13:14:25Z", "event":"Location", "Docked":true, "StationName":"Azeban City", "StationType":"Coriolis", "StarSystem":"Eranin", "StarPos":[-22.844,36.531,-1.188], "Allegiance":"Alliance", "Economy":"$economy_Agri;", "Government":"$government_Communism;", "Security":$SYSTEM_SECURITY_medium;, "Faction":"Eranin Peoples Party" }
//{ "timestamp":"2016-09-21T14:11:22Z", "event":"Location", "Docked":false, "StarSystem":"Alpha Centauri", "StarPos":[3.031,-0.094,3.156], "Allegiance":"Independent", "Economy":"$economy_Extraction;", "Economy_Localised":"Extraction", "Government":"$government_Cooperative;", "Government_Localised":"Cooperative", "Security":"$SYSTEM_SECURITY_medium;", "Security_Localised":"Medium Security", "Body":"Alpha Centauri B 1", "Powers":["Zachary Hudson"], "PowerplayState":"Exploited", "Faction":"Hutton Orbital Truckers Co-Operative", "FactionState":"Outbreak" }

export class SupercruiseEntry extends JournalEvent {
    Starsystem: string;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"SupercruiseEntry", "StarSystem":"Yuetu" }

export class SupercruiseExit extends JournalEvent {
    Starsystem: string;
    Body: string;
    BodyType: BodyTypes;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SupercruiseExit", "StarSystem":"Yuetu", "Body":"Yuetu B" }

export class Touchdown extends JournalEvent {
    Latitude: number;
    Longitude: number;
}
//{ "timestamp":"2016-07-22T10:38:46Z", "event":"Touchdown", "Latitude":63.468872, "Longitude":157.599380 }

export class Undocked extends JournalEvent {
    StationName: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Undocked", "StationName":"Long Sight Base" }

//COMBAT

export class Bounty extends JournalEvent {
    Rewards: {Faction: string, Reward: number}[];
    VictimFaction: string;
    TotalReward: number;
    SharedWithOthers: number;
    Target: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Bounty", "Rewards": [ {"Faction":"Federation", "Reward":1000 }, {"Faction":"Nuenets Corp.", "Reward": 10280} ],"Target":"Skimmer", "TotalReward":11280, "VictimFaction":"MMU" }

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
    Killers?: {KillerName: string; KillerName_Localised: string; KillerShip: string; KillerRank:string}[]
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Died", "KillerName":"$ShipName_Police_Independent;", "KillerShip":"viper", "KillerRank":"Deadly" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Died", "Killers":[ { "Name":"Cmdr HRC1", "Ship":"Vulture", "Rank":"Competent" }, { "Name":"Cmdr HRC2", "Ship":"Python", "Rank":"Master" } ] }

export class EscapeInterdiction extends JournalEvent {
    Interdictor: string;
    IsPlayer: boolean;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"EscapeInterdiction", "Interdictor":"Hrc1", "IsPlayer":true }

export class FactionKillBond extends JournalEvent {
    Reward: number;
    AwardingFaction: string;
    VictimFaction: string;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"FactionKillBond",  "Reward": 500, "AwardingFaction":"Jarildekald Public Industry", "VictimFaction": "Lencali Freedom Party" }

export class HeatDamage extends JournalEvent { }

export class HeatWarning extends JournalEvent { }

//emitted in 20% steps
export class HullDamage extends JournalEvent { 
    Health: number;
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
    CombatRank: number //victim's rank in range 0-8
}

export class ShieldState extends JournalEvent {
    ShieldsUp: boolean;
}
// { "timestamp":"2016-07-25T14:45:48Z", "event":"ShieldState", "ShieldsUp":false }
// { "timestamp":"2016-07-25T14:46:36Z", "event":"ShieldState", "ShieldsUp":true }

//EXPLORATION

//lots of these properties are optional depending on object scanned
export class Scan extends JournalEvent {
    Bodyname: string;
    DistanceFromArrivalLS: number;
    RotationPeriod: number;
    SurfaceTemperature: number;
    //if planet/star has rings
    Rings?: {
        Name: string;
        RingClass: string;
        MassMT: number;
        InnerRad: number;
        OuterRad: number;
    }[];
    //orbital properties (not for star in single star system)
    SemiMajorAxis?: number;
    Eccentricity?: number;
    OrbitalInclination?: number;
    Periapsis?: number;
    OrbitalPeriod?: number;
    //stars
    StarType?: StarTypes;
    StellarMass?: number;
    Radius?: number;
    AbsoluteMagnitude?: number;
    Age_MY?: number;
    //planets/moons
    TidalLock?: boolean;
    TerraformState?: "Terraformable" | "Terraforming" | "Terraformed" | null;
    PlanetClass?: PlanetTypes;
    Atmosphere?: AtmosphereTypes;
    Volcanism?: VolcanismTypes;
    SurfaceGravity?: number;
    SurfacePressure?: number;
    Landable?: boolean;
    Materials?: {Name:string; Percentage: number};
}
//{ "timestamp":"2016-09-22T10:40:44Z", "event":"Scan", "BodyName":"Bei Dou Sector JH-V b2-1 1", "DistanceFromArrivalLS":392.607605, "TidalLock":false, "TerraformState":"", "PlanetClass":"Icy body", "Atmosphere":"thin neon rich atmosphere", "Volcanism":"", "MassEM":0.190769, "Radius":4412562.000000, "SurfaceGravity":3.905130, "SurfaceTemperature":64.690628, "SurfacePressure":321.596558, "Landable":false, "SemiMajorAxis":117704065024.000000, "Eccentricity":0.000033, "Periapsis":5.692884, "OrbitalPeriod":43704092.000000, "RotationPeriod":104296.351563 }

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

export class SellExplorationData extends JournalEvent {
    Systems: string[];
    Discovered: string[];
    BaseValue: number;
    Bonus: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SellExplorationData", "Systems":[ "HIP 78085", "Praea Euq NW-W b1-3" ], "Discovered":[ "HIP 78085 A", "Praea Euq NW-W b1-3", "Praea Euq NW-W b1-3 3 a", "Praea Euq NW-W b1-3 3" ], "BaseValue":10822, "Bonus":3959 }

export class Screenshot extends JournalEvent {
    Filename: string;
    Width: number;
    Height: number;
    System: string;
    Body: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Screenshot", "Filename":"_Screenshots/Screenshot_0151.bmp", "Width":1600, "Height":900, "System":"Shinrarta Dezhra", "Body":"Founders World" }

//TRADE
export class BuyTradeData extends JournalEvent {
    System: string;
    Cost: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyTradeData", "System":"i Bootis", "Cost":100 }

export class CollectCargo extends JournalEvent {
    Type: string;
    Stolen: boolean;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CollectCargo", "Type":"agriculturalmedicines", "Stolen":false }

export class EjectCargo extends JournalEvent {
    Type: string;
    Count: number;
    Abandoned: boolean;
    PowerplayOrigin?: string;
}
// { "timestamp":"2016-06-10T14:32:03Z", "event":"EjectCargo", "Type":"tobacco", "Count":1, "Abandoned":true }
// { "timestamp":"2016-09-21T14:18:23Z", "event":"EjectCargo", "Type":"alliancelegaslativerecords", "Count":2, "Abandoned":true, "PowerplayOrigin":"Tau Bootis" }


export class MarketBuy extends JournalEvent {
    Type: string;
    Count: number;
    BuyPrice: number;
    TotalCost: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MarketBuy", "Type":"foodcartridges", "Count":10, "BuyPrice":39, "TotalCost":390 }

export class MarketSell extends JournalEvent {
    Type: string;
    Count: number;
    SellPrice: number;
    TotalSale: number;
    AvgPricePaid: number;
    IllegalGoods?: boolean;
    StolenGoods?: boolean;
    BlackMarket?: boolean;
}
// { "timestamp":"2016-06-10T14:32:03Z", "event":"MarketSell", "Type":"agriculturalmedicines", "Count":3, "SellPrice":1360, "TotalSale":4080, "AvgPricePaid":304 }
// { "event":"MarketSell", "Type":"mineraloil", "Count":9, "SellPrice":72, "TotalSale":648, "AvgPricePaid":0, "StolenGoods":true, "BlackMarket":true }


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

export class CommunityGoalDiscard extends JournalEvent {
    Name: string;
    System: string;
}

export class CommunityGoalJoin extends JournalEvent {
    Name: string;
    System: string;
}

export class CommunityGoalReward extends JournalEvent {
    Name: string;
    System: string;
    Reward: number;
}

export class CrewAssign extends JournalEvent {
    Name: string;
    Role: string;
}
//{ "timestamp":"2016-08-09T08:45:31Z", "event":"CrewAssign", "Name":"Dannie Koller", "Role":"Active" }

export class CrewFire extends JournalEvent {
    Name: string;
}
//{ "timestamp":"2016-08-09T08:46:11Z", "event":"CrewFire", "Name":"Whitney Pruitt-Munoz" }

export class CrewHire extends JournalEvent {
    Name: string;
    Faction: string;
    Cost: number;
    CombatRank: number;
}
//{ "timestamp":"2016-08-09T08:46:29Z", "event":"CrewHire", "Name":"Margaret Parrish", "Faction":"The Dark Wheel", "Cost":15000, "CombatRank":1 }

export class EngineerApply extends JournalEvent {
    Engineer: string;
    Blueprint: string;
    Level: number;
    Override: boolean;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerApply", "Engineer":"Elvira Martuuk", "Blueprint":"ShieldGenerator_Reinforced", "Level":1 }

export class EngineerCraft extends JournalEvent {
    Engineer: string;
    Blueprint: string;
    Level: number;
    Ingredients: {[key: string]: number}; //ingredientName:quantity pairs
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerCraft", "Engineer":"Elvira Martuuk", "Blueprint":"FSD_LongRange", "Level":2, "Ingredients":{"praseodymium":1, "disruptedwakeechoes":3, "chemicalprocessors":2, "arsenic":2 } }

export class EngineerProgress extends JournalEvent {
    Engineer: string;
    Rank: number;
    Progress: "Invited" | "Acquainted" | "Unlocked" | "Barred"
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Progress":"Unlocked", "Engineer":"Elvira Martuuk" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Engineer":"Elvira Martuuk", "Rank":2 }

export class FetchRemoteModule extends JournalEvent {
    StorageSlot: string;
    StoredItem: string;
    ServerId: number;
    TransferCost: number;
    Ship: string;
    ShipId: number;
}

export class MassModuleStore extends JournalEvent {
    Ship: string;
    ShipId: number;
    Items: {
        Slot: string;
        Name: string;
        EngineerModifications: string;
    }[]
}

export class MissionAbandoned extends JournalEvent {
    Name: string;
    MissionID: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MissionAbandoned", "Name":"Mission_Collect_name", "MissionID":65343025 }

export class MissionAccepted extends JournalEvent {
    Name: string;
    Faction: string;
    MissionID: number;
    Commodity?: string;
    Count?: number;
    Target?: string;
    TargetType?: string;
    TargetFaction?: string;
    Expiry?: string; //ISO 8601
    DestinationSystem?: string;
    DestinationStation?: string;
    PassengerCount?: number;
    PassengerVIPs?: boolean;
    PassengerWanted?: boolean;
    PassengerType?: string;
}
//{ "timestamp":"2016-07-26T11:36:44Z", "event":"MissionAccepted", "Faction":"Tsu Network", "Name":"Mission_Collect", "MissionID":65343026, "Commodity":"$Fish_Name;", "Commodity_Localised":"Fish", "Count":2, "Expiry":"2016-07-27T15:56:23Z" }

export class MissionCompleted extends JournalEvent {
    Faction: string;
    Name: string;
    MissionID: number;
    Commodity: string;
    Commodity_Localised: string;
    Count: number;
    DestinationSystem: string;
    DestinationStation: string;
    Reward: number;
    CommodityReward: {Name: string, Count: number}[];
}
//{ "timestamp":"2016-09-30T08:37:38Z", "event":"MissionCompleted", "Faction":"Maljenni Inc", "Name":"Mission_Delivery_name", "MissionID":65347208, "Commodity":"$Cobalt_Name;", "Commodity_Localised":"Cobalt", "Count":14, "DestinationSystem":"Maljenni", "DestinationStation":"Bowersox Enterprise", "Reward":0, "CommodityReward":[ { "Name": "ArticulationMotors", "Count": 2 } ] }

export class MissionFailed extends JournalEvent {
    Name: string;
    MissionID: number;
}

export class ModuleBuy extends JournalEvent {
    Slot: string;
    BuyItem: string;
    BuyPrice: number;
    Ship: string;
    ShipID: number;
    //if replacing existing module
    SellItem?: string;
    SellPrice?: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleBuy", "Slot":"MediumHardpoint2", "SellItem":"hpt_pulselaser_fixed_medium", "SellPrice":0, "BuyItem":"hpt_multicannon_gimbal_medium", "BuyPrice":50018, "Ship":"cobramkiii","ShipID":1  }

export class ModuleRetrieve extends JournalEvent {
    Slot: string;
    Ship: string;
    ShipID: number;
    RetrievedItem: string;
    EngineerModifications?: string;
    SwapOutItem: string;
    Cost: number;
}

export class ModuleSell extends JournalEvent {
    Slot: string;
    SellItem: string;
    SellPrice: number;
    Ship: string;
    ShipID: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleSell", "Slot":"Slot06_Size2", "SellItem":"int_cargorack_size1_class1", "SellPrice":877, "Ship":"asp", "ShipID":1 }

export class ModuleSellRemote extends JournalEvent {
    StorageSlot: string;
    SellItem: string;
    ServerId: number;
    SellPrice: number;
    Ship: string;
    ShipId: number;
}

export class ModuleStore extends JournalEvent {
    Slot: string;
    Ship: string;
    ShipID: number;
    StoredItem: string;
    EngineerModifications?: string;
    ReplacementItem?: string; //if a core item
    Cost?: number
}

export class ModuleSwap extends JournalEvent {
    FromSlot: string;
    ToSlot: string;
    FromItem: string;
    ToItem: string;
    Ship: string;
    ShipID: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleSwap", "FromSlot":"MediumHardpoint1", "ToSlot":"MediumHardpoint2", "FromItem":"hpt_pulselaser_fixed_medium", "ToItem":"hpt_multicannon_gimbal_medium", "Ship":"cobramkiii", "ShipID":1  }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleSwap", "FromSlot":"SmallHardpoint2", "ToSlot":"SmallHardpoint1", "FromItem":"hpt_pulselaserburst_fixed_small_scatter", "ToItem":"Null", "Ship":"cobramkiii", "ShipID":1  }

export class PayFines extends JournalEvent {
    Amount: number;
    BrokerPercentage?: number;
}

export class PayLegacyFines extends JournalEvent {
    Amount: number;
    BrokerPercentage?: number;
}

export class RedeemVoucher extends JournalEvent {
    Type: string;
    Amount: number;
    BrokerPercentage?: number;    
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RedeemVoucher", "Type":"bounty", "Amount":1000 }

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

export class Repair extends JournalEvent {
    Item: string;
    Cost: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Repair", "Item":"int_powerplant_size3_class5", "Cost":1100 }

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

export class ScientificResearch extends JournalEvent {
    Name: string;
    Category: string;
    Count: number;
}

export class SellDrones extends JournalEvent {
    Type: string;
    Count: number;
    SellPrice: number;
    TotalSale: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SellDrones", "Type":"Drones", "Count":1, "SellPrice":91, "TotalSale":91 }

export class ShipyardBuy extends JournalEvent {
    ShipType: string;
    ShipPrice: number;
    StoreOldShip?: string; //ship type being stored if so
    StoreShipID: number;
    SellShipID: number;
    SellPrice: number;
}
//{ "timestamp":"2016-07-21T14:36:38Z", "event":"ShipyardBuy", "ShipType":"hauler", "ShipPrice":46262, "StoreOldShip":"SideWinder", "StoreShipID":2 }

export class ShipyardNew extends JournalEvent {
    ShipType: string;
    ShipID: number;
}
//{ "timestamp":"2016-07-21T14:36:38Z", "event":"ShipyardNew", "ShipType":"hauler", "ShipID":4 }

export class ShipyardSell extends JournalEvent {
    ShipType: string;
    SellShipID: number;
    ShipPrice: number;
    System?: string; //if remote selling, where is ship?
}
//{ "timestamp":"2016-07-21T15:12:19Z", "event":"ShipyardSell", "ShipType":"Adder", "SellShipID":6, "ShipPrice":79027, "System":"Eranin" }

export class ShipyardTransfer extends JournalEvent {
    ShipType: string;
    ShipID: number;
    System: string;
    Distance: number;
    TransferPrice: number;
}
//{ "timestamp":"2016-07-21T15:19:49Z", "event":"ShipyardTransfer", "ShipType":"SideWinder", "ShipID":7, "System":"Eranin", "Distance":85.639145, "TransferPrice":580 }

export class ShipyardSwap extends JournalEvent {
    ShipType: string;
    ShipID: number;
    StoreOldShip?: string; //if storing old ship
    StoreShipID?: number;
    SellOldShip?: string; //if selling old ship
    SellShipID?: number;
}
//{ "timestamp":"2016-07-21T14:36:06Z", "event":"ShipyardSwap", "ShipType":"sidewinder", "ShipID":10, "StoreOldShip":"Asp", "StoreShipID":2 }

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

export class ApproachSettlement extends JournalEvent {
    Name: string;
}

export class CockpitBreached extends JournalEvent { }
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

export class DockFighter extends JournalEvent { }

export class DockSRV extends JournalEvent { }

export class FuelScoop extends JournalEvent {
    Scooped: number;
    Total: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"FuelScoop", "Scooped":0.498700, "Total":16.000000 }

export class JetConeBoost extends JournalEvent {
    BoostValue: number;
}

export class JetConeDamage extends JournalEvent {
    Module: string;
}

export class LaunchFighter extends JournalEvent {
    Loadout: string;
    PlayerController: boolean;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"LaunchFighter", "Loadout":"starter", "PlayerControlled":true }

export class LaunchSRV extends JournalEvent {
    Loadout: string;
}

export class Promotion extends JournalEvent {
    Combat?: number;
    Trade?: number;
    Explore?: number;
    CQC?: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Promotion", "Explore":2 }

export class RebootRepair extends JournalEvent {
    Modules: string[]
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RebootRepair", "Modules":[ "MainEngines", "TinyHardpoint1" ] }

export class ReceiveText extends JournalEvent {
    From: string;
    Message: string;
    Channel: "wing" | "local" | "voicechat" | "friend" | "player" | "npc";
}

export class Resurrect extends JournalEvent {
    Option: string;
    Cost: number;
    Bankrupt: boolean;
}

export class SelfDestruct extends JournalEvent { }

export class SendText extends JournalEvent {
    To: string;
    Message: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SendText", "To":"HRC-2", "Message":"zoom" }

export class Synthesis extends JournalEvent {
    Name: string;
    Materials: {[index:string]:number}
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Synthesis", "Name":"Repair Basic", "Materials":{ "iron":2, "nickel":1 } }

export class USSDrop extends JournalEvent {
    USSType: string;
    USSThreat: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"USSDrop", "USSType":"Disrupted wake echoes", "USSThreat": 0 }

export class VehicleSwitch extends JournalEvent {
    To: "Mothership" | "Fighter"
}
// { "timestamp":"2016-06-10T14:32:03Z", "event":"VehicleSwitch", "To":"Fighter" }
// { "timestamp":"2016-06-10T14:32:03Z", "event":"VehicleSwitch", "To":"Mothership" }

export class WingAdd extends JournalEvent { }

export class WingJoin extends JournalEvent {
    Others: string[];
}

export class WingLeave extends JournalEvent { }