import { BodyTypes } from '../body-types.enum';
import { StarTypes } from '../star-types.enum';
import { PlanetTypes } from '../planet-types.enum';
import { VolcanismTypes } from '../volcanism-types.enum';
import { Crimes } from '../crimes.enum';
import { AtmosphereTypes } from '../atmosphere-types.enum';
import { CrewRoles } from '../crew-roles.enum';
import { MusicTrackNames } from '../music-track-names.enum';
import { StarLuminosityClasses } from '../star-luminosity-classes.enum';
import { StationServices } from '../station-services.enum';

export class JournalEvent {
    event: string;
    timestamp: string;
}

//model followed by example

//STARTUP

export class Cargo extends JournalEvent {
        Inventory: {Name: string, Count: number}[]
}
//{ "timestamp":"2017-02-10T14:25:51Z", "event":"Cargo", "Inventory":[ { "Name":"syntheticmeat", "Count":2 }, { "Name":"evacuationshelter", "Count":1 }, { "Name":"progenitorcells", "Count":3 }, { "Name":"bioreducinglichen", "Count":1 }, { "Name":"neofabricinsulation", "Count":2 } ] }

export class ClearSavedGame extends JournalEvent {
    Name: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ClearSavedGame", "Name":"HRC1" }

export class Loadout extends JournalEvent {
    Ship: string;
    ShipID: number;
    ShipName: string;
    ShipIdent: string;
    Modules: {
        Slot: string;
        Item: string;
        On: boolean;
        Priority: number;
        Health: number;
        Value: number;
        AmmoInClip?: number;
        AmmoInHopper?: number;
        EngineerBlueprint?: string;
        EngineerLevel?: number;
    }[]
}
//{ "timestamp":"2017-02-22T09:44:46Z", "event":"Loadout", "Ship":"Hauler", "ShipID":69, "ShipName":"", "ShipIdent":"", "Modules":[ { "Slot":"SmallHardpoint1", "Item":"Hpt_PulseLaser_Fixed_Small", "On":true, "Priority":2, "Health":1.000000, "Value":2091 }, { "Slot":"Armour", "Item":"Hauler_Armour_Grade1", "On":true, "Priority":1, "Health":1.000000, "Value":0 }, { "Slot":"PowerPlant", "Item":"Int_PowerPlant_Size2_Class1", "On":true, "Priority":1, "Health":1.000000, "Value":1880 }, { "Slot":"MainEngines", "Item":"Int_Engine_Size2_Class1", "On":true, "Priority":2, "Health":1.000000, "Value":1880 }, { "Slot":"FrameShiftDrive", "Item":"Int_Hyperdrive_Size2_Class1", "On":true, "Priority":2, "Health":1.000000, "Value":1880 }, { "Slot":"LifeSupport", "Item":"Int_LifeSupport_Size1_Class1", "On":true, "Priority":2, "Health":1.000000, "Value":491 }, { "Slot":"PowerDistributor", "Item":"Int_PowerDistributor_Size1_Class1", "On":true, "Priority":2, "Health":1.000000, "Value":491 }, { "Slot":"Radar", "Item":"Int_Sensors_Size1_Class1", "On":true, "Priority":2, "Health":1.000000, "Value":491 }, { "Slot":"FuelTank", "Item":"Int_FuelTank_Size2_Class3", "On":true, "Priority":1, "Health":1.000000, "Value":3564 }, { "Slot":"Slot01_Size3", "Item":"Int_CargoRack_Size2_Class1", "On":true, "Priority":1, "Health":1.000000, "Value":3089 }, { "Slot":"Slot02_Size3", "Item":"Int_CargoRack_Size2_Class1", "On":true, "Priority":1, "Health":1.000000, "Value":3089 }, { "Slot":"Slot03_Size2", "Item":"Int_ShieldGenerator_Size2_Class1", "On":true, "Priority":2, "Health":1.000000, "Value":1880 }, { "Slot":"Slot04_Size1", "Item":"Int_StellarBodyDiscoveryScanner_Standard", "On":true, "Priority":1, "Health":1.000000, "Value":950 }, { "Slot":"PlanetaryApproachSuite", "Item":"Int_PlanetApproachSuite", "On":true, "Priority":1, "Health":1.000000, "Value":475 }, { "Slot":"CargoHatch", "Item":"ModularCargoBayDoor", "On":true, "Priority":2, "Health":1.000000, "Value":0 }, { "Slot":"ShipCockpit", "Item":"Hauler_Cockpit", "On":true, "Priority":1, "Health":1.000000, "Value":0 } ] 

export class Materials extends JournalEvent {
    Raw: {Name: string, Count: number}[];
    Manufactured: {Name: string, Count: number}[];
    Encoded: {Name: string; Count: number}[];
}
//{ "timestamp":"2017-02-10T14:25:51Z", "event":"Materials", "Raw":[ { "Name":"chromium", "Count":28 }, { "Name":"zinc", "Count":18 }, { "Name":"iron", "Count":23 }, { "Name":"sulphur", "Count":19 } ], "Manufactured":[ { "Name":"refinedfocuscrystals", "Count":10 }, { "Name":"highdensitycomposites", "Count":3 }, { "Name":"mechanicalcomponents", "Count":3 } ], "Encoded":[ { "Name":"emissiondata", "Count":32 }, { "Name":"shielddensityreports", "Count":23 } } ] } 

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
    ShipName: string;
    ShipIdent: string;
    FuelLevel: number;
    FuelCapacity: number;
}
//{ "timestamp":"2017-02-10T14:25:51Z", "event":"LoadGame", "Commander":"HRC-2", "Ship":"FerDeLance", "ShipID":19, "ShipName":"jewel of parhoon", "ShipIdent":"hr-17f", "FuelLevel":3.964024, "FuelCapacity":8.000000, "GameMode":"Open", "Credits":2890718739, "Loan":0 } 

export class Passengers extends JournalEvent {
    Manifest: {
        MissionID: number;
        Type: string;
        VIP: boolean;
        Wanted: boolean;
        Count: number;
    }[]
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
export class Docked extends JournalEvent {
    StationName: string;
    StationType: string;
    StarSystem: string;
    CockpitBreached?: boolean;
    StationFaction: string;
    FactionState: string;
    StationAllegiance: string;
    StationEconomy: string;
    StationEconomy_Localised: string;
    StationGovernment: string;
    StationGovernment_Localised: string;
    Security: string;
    Security_Localised: string;
    DistFromStarLS: number;
    StationServices: StationServices[];
}
//{ "timestamp":"2017-02-23T11:13:28Z", "event":"Docked", "StationName":"MacKellar Dock", "StationType":"Coriolis", "StarSystem":"HIP 43310", "StationFaction":"Alliance of HIP 43310", "StationGovernment":"$government_Confederacy;", "StationGovernment_Localised":"Confederacy", "StationAllegiance":"Federation", "StationEconomy":"$economy_Refinery;", `"StationEconomy_Localised":"Refinery", "DistFromStarLS":1016.981384 }


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
    SystemFaction: string;
    FactionState: string;
    SystemAllegiance: string;
    SystemEconomy: string;
    SystemEconomy_Localised: string;
    SystemGovernment: string;
    SystemGovernment_Localised: string;
    SystemSecurity: string;
    SystemSecurity_Localised: string;
    Population: number;
    Factions: {
        Name: string;
        FactionState: string;
        Government: string;
        Influence: number;
        PendingStates: {State: string, Trend: number}[];
    }[];
    RecoveringStates: {State: string, Trend: number}[]
    Powers?: string[];
    PowerplayerState?: "InPrepareRadius" | "Prepared" | "Exploited" | "Contested" | "Controlled" | "Turmoil" | "HomeSystem"
}
//{ "timestamp":"2017-02-27T15:37:47Z", "event":"FSDJump", "StarSystem":"HR 3316", "StarPos":[100.719,19.813,-51.125], "SystemAllegiance":"Independent", "SystemEconomy":"$economy_Colony;", "SystemEconomy_Localised":"Colony", "SystemGovernment":"$government_Democracy;", "SystemGovernment_Localised":"Democracy", "SystemSecurity":"$SYSTEM_SECURITY_medium;", "SystemSecurity_Localised":"Medium Security", "JumpDist":20.326, "FuelUsed":1.260775, "FuelLevel":12.872868, "Factions":[ { "Name":"Independent HR 3316 Liberals", "FactionState":"Outbreak", "Government":"Democracy", "Influence":0.550000 }, { "Name":"Jet Natural Partners", "FactionState":"None", "Government":"Corporate", "Influence":0.150000 }, { "Name":"Camorra of HR 3316", "FactionState":"None", "Government":"Anarchy", "Influence":0.090000 }, { "Name":"HR 3316 Nobles", "FactionState":"None", "Government":"Feudal", "Influence":0.210000 } ], "SystemFaction":"Independent HR 3316 Liberals", "FactionState":"Outbreak" }

// Examples of trending states:
// ... "Factions":[ { "Name":"Inupiates Patrons of Law", "FactionState":"Lockdown", "Government":"Patronage", "Influence":0.550000, "Allegiance":"Empire", "PendingStates":[ { "State":"Boom", "Trend":0 }, { "State":"CivilUnrest", "Trend":0 } ] }, ...
// ... "Factions":[ { "Name":"IV Comae Berenices Purple Creative", "FactionState":"CivilWar", "Government":"Corporate", "Influence":0.550000, "Allegiance":"Independent", "RecoveringStates":[ { "State":"Boom", "Trend":0 } ] }, ... 

export class Liftoff extends JournalEvent {
    Latitude: number;
    Longitude: number;
    PlayerControlled: boolean;
}
//{ "timestamp":"2016-07-22T10:53:19Z", "event":"Liftoff", "Latitude":63.468872, "Longitude":157.599380, "PlayerControlled":true } 


//written on startup or resurrection
export class Location extends JournalEvent {
    StarSystem: string;
    StarPos: [number,number,number];
    Body: string;
    BodyType: BodyTypes;
    Docked: boolean;
    Latitude?: number;
    Longitude?: number;
    StationName?: string;
    StationType?: string;
    SystemFaction: string;
    FactionState: string;
    SystemAllegiance: string;
    SystemEconomy: string;
    SystemEconomy_Localised: string;
    SystemGovernment: string;
    SystemGovernment_Localised: string;
    SystemSecurity: string;
    Security_Locaolised: string;
    Factions: {
        Name: string;
        FactionState: string;
        Government: string;
        Influence: number;
        PendingStates: {State: string, Trend: number}[];
    }[];
    Powers: string[];
    PowerplayState: "InPrepareRadius" | "Prepared" | "Exploited" | "Contested" | "Controlled" | "Turmoil" | "HomeSystem";
}
//{ "timestamp":"2016-07-21T13:14:25Z", "event":"Location", "Docked":true, "StationName":"Azeban City", "StationType":"Coriolis", "StarSystem":"Eranin", "StarPos":[-22.844,36.531,-1.188], "Allegiance":"Alliance", "Economy":"$economy_Agri;", "Government":"$government_Communism;", "Security":$SYSTEM_SECURITY_medium;, "Faction":"Eranin Peoples Party" }
//{ "timestamp":"2016-09-21T14:11:22Z", "event":"Location", "Docked":false, "StarSystem":"Alpha Centauri", "StarPos":[3.031,-0.094,3.156], "Allegiance":"Independent", "Economy":"$economy_Extraction;", "Economy_Localised":"Extraction", "Government":"$government_Cooperative;", "Government_Localised":"Cooperative", "Security":"$SYSTEM_SECURITY_medium;", "Security_Localised":"Medium Security", "Body":"Alpha Centauri B 1", "Powers":["Zachary Hudson"], "PowerplayState":"Exploited", "Faction":"Hutton Orbital Truckers Co-Operative", "FactionState":"Outbreak" }

export class StartJump {
    JumpType: "Hyperspace" | "Supercruise";
    StarSystem?: string;
    StarClass?: string;
}

export class SupercruiseEntry extends JournalEvent {
    StarSystem: string;
}
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"SupercruiseEntry", "StarSystem":"Yuetu" }

export class SupercruiseExit extends JournalEvent {
    StarSystem: string;
    Body: string;
    BodyType: BodyTypes;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SupercruiseExit", "StarSystem":"Yuetu", "Body":"Yuetu B" }

export class Touchdown extends JournalEvent {
    Latitude: number;
    Longitude: number;
    PlayerControlled: boolean;
}
//{ "timestamp":"2016-07-22T10:38:46Z", "event":"Touchdown", "Latitude":63.468872, "Longitude":157.599380, "PlayerControlled":true }

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
    SurfaceTemperature: number;
    //if rotating
    RotationPeriod?: number;
    AxialTilt?: number;
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
    Luminosity: StarLuminosityClasses;
    //planets/moons
    TidalLock?: boolean;
    TerraformState?: "Terraformable" | "Terraforming" | "Terraformed" | null;
    PlanetClass?: PlanetTypes;
    Atmosphere?: AtmosphereTypes;
    AtmosphereType?: string;
    AtmosphereComposition?: {
        Name: string;
        Percent: number;
    }[]
    Volcanism?: VolcanismTypes;
    SurfaceGravity?: number;
    SurfacePressure?: number;
    Landable?: boolean;
    Materials?: {Name:string; Percentage: number}[];
    ReserveLevel?: "Pristine" | "Major" | "Common" | "Low" | "Depleted" //if rings present
}
//{ "timestamp":"2017-02-06T14:52:52Z", "event":"Scan", "BodyName":"Col 285 Sector ME-G c11-35 4", "DistanceFromArrivalLS":1148.308350, "TidalLock":false, "TerraformState":"", "PlanetClass":"Gas giant with water based life", "Atmosphere":"", "AtmosphereComposition":[ { "Name":"Hydrogen", "Percent":73.598167 }, { "Name":"Helium", "Percent":26.328226 }, { "Name":"Oxygen", "Percent":0.073619 } ], "Volcanism":"", "MassEM":232.435898, "Radius":69313304.000000, "SurfaceGravity":19.283215, "SurfaceTemperature":162.995789, "SurfacePressure":0.000000, "Landable":false, "SemiMajorAxis":345012895744.000000, "Eccentricity":0.002221, "OrbitalInclination":-0.169053, "Periapsis":134.119934, "OrbitalPeriod":120247992.000000, "RotationPeriod":1023782.437500 } 


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

export class NavBeaconScan extends JournalEvent {
    NumBodies: number;
}

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
    Latitude?: number;
    Longitude?: number;
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

export class CommunityGoal extends JournalEvent {
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
        //if it has a fixed top band (e.g. top 10 CMDRS)
        TopRankSize?: number;
        PlayerInTopRank?: boolean;
        //If CG has reached first tier
        TierReached: string;
        Bonus: number;
    }[]
}
//{ "timestamp":"2017-08-14T13:20:28Z", "event":"CommunityGoal", "CurrentGoals":[ { "CGID":726, "Title":"Alliance Research Initiative – Trade", "SystemName":"Kaushpoos", "MarketName":"Neville Horizons", "Expiry":"2017-08-17T14:58:14Z", "IsComplete":false, "CurrentTotal":10062, "PlayerContribution":562, "NumContributors":101, "TopRankSize":10, "PlayerInTopRank":false, "TierReached":"Tier 1", "PlayerPercentileBand":50, "Bonus":200000 } ] }

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

export class EngineerContribution extends JournalEvent {
    Engineer: string;
    Type: "Commodity" | "materials" | "Credits" | "Bond" | "Bounty";
}
//{ "timestamp":"2017-05-24T10:41:51Z", "event":"EngineerContribution", "Engineer":"Elvira Martuuk", "Type":"Commodity", "Commodity":"soontillrelics", "Quantity":2, "TotalQuantity":3 } 

export class EngineerCraft extends JournalEvent {
    Engineer: string;
    Blueprint: string;
    Level: number;
    Ingredients: {Name: string; Count: number};
}
//{ "timestamp":"2016-06-10T14:32:03Z","event":"EngineerCraft", "Engineer":"Elvira Martuuk", "Blueprint":"FSD_LongRange", "Level":2, "Ingredients":[{"Name":"praseodymium", "Count"1}, {"Name":"disruptedwakeechoes", "Count":3 }, {"Name":"chemicalprocessors", "Count":2 }, {"Name":"arsenic", "Count":2} ] }

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
    TransferTime: number; //in seconds
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
    LocalisedName: string;
    Faction: string;
    MissionID: number;
    Influence: "None" | "Low" | "Med" | "High";
    Reputation: "None" | "Low" | "Med" | "High";
    Commodity?: string;
    Count?: number;
    Target?: string;
    TargetType?: string;
    TargetFaction?: string;
    KillCount: number;
    Expiry?: string; //ISO 8601
    DestinationSystem?: string;
    DestinationStation?: string;
    PassengerCount?: number;
    PassengerVIPs?: boolean;
    PassengerWanted?: boolean;
    PassengerType?: string;
}
//{ "timestamp":"2016-07-26T11:36:44Z", "event":"MissionAccepted", "Faction":"Tsu Network", "Name":"Mission_Collect", "MissionID":65343026, "Commodity":"$Fish_Name;", "Commodity_Localised":"Fish", "Count":2, "Expiry":"2016-07-27T15:56:23Z", "Influence":"Low", "Reputation":"High" }
//{ "timestamp":"2017-02-07T12:14:14Z", "event":"MissionAccepted", "Faction":"CX Com Galactic Co", "Name":"Mission_Massacre_Conflict_War", "TargetFaction":"CX Com Silver Partnership", "KillCount":2, "DestinationSystem":"CX Com", "DestinationStation":"Carrasco Orbital", "Expiry":"2017-02-08T09:22:41Z", "Influence":"High", "Reputation":"Med", "MissionID":65358259 } 


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

export class MissionRedirected extends JournalEvent {
    MissionID: number;
    MissionName: string;
    NewDestinationStation: string;
    OldDestinationStation: string;
    NewDestinationSystem: string;
    OldDestinationSystem: string;
}
//{ "timestamp": "2017-08-01T09:04:07Z", "event": "MissionRedirected", "MissionID": 65367315, "NewDestinationStation": "Metcalf Orbital", "OldDestinationStation": "Cuffey Orbital", "NewDestinationSystem": "Cemiess", "OldDestinationSystem": "Vequess" }

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
    Faction?: string; //not for bounties
    BrokerPercentage?: number;
    Factions?: {Faction:string; Amount: number} //for Bounties
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

export class SearchAndRescue extends JournalEvent {
    Name: string;
    Count: number;
    Reward: number;
}

export class SellDrones extends JournalEvent {
    Type: string;
    Count: number;
    SellPrice: number;
    TotalSale: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SellDrones", "Type":"Drones", "Count":1, "SellPrice":91, "TotalSale":91 }

export class SellShipOnRebuy extends JournalEvent {
    ShipType: string;
    System: string;
    SellShipId: number;
    ShipPrice: number;
}
//{ "timestamp":"2017-07-20T08:56:39Z", "event":"SellShipOnRebuy", "ShipType":"Dolphin", "System":"Shinrarta Dezhra", "SellShipId":4, "ShipPrice":4110183 }

export class SetUserShipName extends JournalEvent {
    Ship: string;
    ShipID: number;
    UserShipName: string;
    UserShipId: string;
}
//{ "timestamp":"2017-01-24T10:42:38Z", "event":"SetUserShipName", "Ship":"cobramkiii", "ShipID":2, "UserShipName":"Enterprise", "UserShipId":"NCC 1701" } 

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
    TransferTime: number;
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

export class AfmuRepairs extends JournalEvent {
    Module: string;
    Module_Localised: string;
    FullyRepaired: boolean;
    Health: number; //0.0-1.0
}
//{ "timestamp":"2017-08-14T15:41:50Z", "event":"AfmuRepairs", "Module":"$modularcargobaydoor_name;", "Module_Localised":"Cargo Hatch", "FullyRepaired":true, "Health":1.000000 }

export class ApproachSettlement extends JournalEvent {
    Name: string;
}

export class ChangeCrewRole extends JournalEvent {
    Role: CrewRoles;
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

export class CrewLaunchFighter extends JournalEvent {
    Crew: string;
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

export class DockFighter extends JournalEvent { }

export class DockSRV extends JournalEvent { }

export class EndCrewSession extends JournalEvent {
    OnCrime: boolean;
}

export class FuelScoop extends JournalEvent {
    Scooped: number;
    Total: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"FuelScoop", "Scooped":0.498700, "Total":16.000000 }

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
    Federation: number;
    Empire: number;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Promotion", "Explore":2 }

export class QuitACrew extends JournalEvent {
    Captain: string;
}

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

export class Scanned extends JournalEvent {
    ScanType: "Cargo" | "Crime" | "Cabin" | "Data" | "Unknown";
}

export class SelfDestruct extends JournalEvent { }

export class SendText extends JournalEvent {
    To: string;
    Message: string;
}
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SendText", "To":"HRC-2", "Message":"zoom" }

export class Synthesis extends JournalEvent {
    Name: string;
    Materials: {Name: string; Count:number}[]
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

export class WingInvite extends JournalEvent {
    Name: string;
}

export class WingJoin extends JournalEvent {
    Others: string[];
}

export class WingLeave extends JournalEvent { }

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