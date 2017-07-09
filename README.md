# CMDR-JOURNAL

This is a simple library of Models, Enums and Types for the CMDR Journal exposed by Elite Dangerous

## Install

```
$ npm install cmdr-journal
```

## Usage

Import the package into your project

```javascript
//ECMAScript
let cmdrJournal = require('cmdr-journal');
```
```javascript
//TypeScript
import * as cmdrJournal from 'cmdr-journal';
```

Use the models and enums as you wish

```javascript
let interdiction = new cmdrJournal.Interdicton()
```
## A note

The classes available in this library reflect [the documentation as provided by Frontier](https://forums.frontier.co.uk/showthread.php/275151-Commanders-log-manual-and-data-sample) where you can also find examples and some additional descriptions.

Classes have been implemented according to their event value.

Enums have been implemented with sensible names (where possible) and string values that reflect the value as provided by Frontier.

<a name="index"></a>
## Index 

I've included a list of classes and enums here, although the aforementioned Documentation is likely a better resource

1. [Classes / Models](#classes)
    1. Startup events
        1. [JournalEvent](#JournalEvent)
        1. [ClearSavedGame](#ClearSavedGame)
        1. [NewCommander](#NewCommander)
        1. [LoadGame](#LoadGame)
        1. [Progress](#Progress)
        1. [Rank](#Rank)
    1. Travel
        1. [Docked](#Docked)
        1. [DockingCancelled](#DockingCancelled)
        1. [DockingDenied](#DockingDenied)
        1. [DockingGranted](#DockingGranted)
        1. [DockingRequested](#DockingRequested)
        1. [DockingTimeout](#DockingTimeout)
        1. [FSDJump](#FSDJump)
        1. [Liftoff](#Liftoff)
        1. [Location](#Location)
        1. [SupercruiseEntry](#SupercruiseEntry)
        1. [SupercruiseExit](#SupercruiseExit)
        1. [Touchdown](#Touchdown)
        1. [Undocked](#Undocked)
    1. Combat
        1. [Bounty](#Bounty)
        1. [CapShipBond](#CapShipBond)
        1. [Died](#Died)
        1. [EscapeInterdiction](#EscapeInterdiction)
        1. [FactionKillBond](#FactionKillBond)
        1. [HeatDamage](#HeatDamage)
        1. [HeatWarning](#HeatWarning)
        1. [HullDamage ](#HullDamage )
        1. [Interdicted](#Interdicted)
        1. [Interdiction](#Interdiction)
        1. [PVPKill](#PVPKill)
        1. [ShieldState](#ShieldState)
    1. Exploration
        1. [Scan](#Scan)
        1. [MaterialCollected](#MaterialCollected)
        1. [MaterialDiscarded](#MaterialDiscarded)
        1. [MaterialDiscovered](#MaterialDiscovered)
        1. [BuyExplorationData](#BuyExplorationData)
        1. [SellExplorationData](#SellExplorationData)
        1. [Screenshot](#Screenshot)
    1. Trade
        1. [BuyTradeData](#BuyTradeData)
        1. [CollectCargo](#CollectCargo)
        1. [EjectCargo](#EjectCargo)
        1. [MarketBuy](#MarketBuy)
        1. [MarketSell](#MarketSell)
        1. [MiningRefined](#MiningRefined)
    1. Station Services
        1. [BuyAmmo](#BuyAmmo)
        1. [BuyDrones](#BuyDrones)
        1. [CommunityGoalDiscard](#CommunityGoalDiscard)
        1. [CommunityGoalJoin](#CommunityGoalJoin)
        1. [CommunityGoalReward](#CommunityGoalReward)
        1. [CrewAssign](#CrewAssign)
        1. [CrewFire](#CrewFire)
        1. [CrewHire](#CrewHire)
        1. [EngineerApply](#EngineerApply)
        1. [EngineerCraft](#EngineerCraft)
        1. [EngineerProgress](#EngineerProgress)
        1. [FetchRemoteModule](#FetchRemoteModule)
        1. [MassModuleStore](#MassModuleStore)
        1. [MissionAbandoned](#MissionAbandoned)
        1. [MissionAccepted](#MissionAccepted)
        1. [MissionCompleted](#MissionCompleted)
        1. [MissionFailed](#MissionFailed)
        1. [ModuleBuy](#ModuleBuy)
        1. [ModuleRetrieve](#ModuleRetrieve)
        1. [ModuleSell](#ModuleSell)
        1. [ModuleSellRemote](#ModuleSellRemote)
        1. [ModuleStore](#ModuleStore)
        1. [ModuleSwap](#ModuleSwap)
        1. [PayFines](#PayFines)
        1. [PayLegacyFines](#PayLegacyFines)
        1. [RedeemVoucher](#RedeemVoucher)
        1. [refuelAll](#refuelAll)
        1. [RefuelPartial](#RefuelPartial)
        1. [Repair](#Repair)
        1. [RepairAll](#RepairAll)
        1. [RestockVehicle](#RestockVehicle)
        1. [ScientificResearch](#ScientificResearch)
        1. [SellDrones](#SellDrones)
        1. [ShipyardBuy](#ShipyardBuy)
        1. [ShipyardNew](#ShipyardNew)
        1. [ShipyardSell](#ShipyardSell)
        1. [ShipyardTransfer](#ShipyardTransfer)
        1. [ShipyardSwap](#ShipyardSwap)
    1. Powerplay
        1. [PowerplayCollect](#PowerplayCollect)
        1. [PowerplayDefect](#PowerplayDefect)
        1. [PowerplayDeliver](#PowerplayDeliver)
        1. [PowerplayFastTrack](#PowerplayFastTrack)
        1. [PowerplayJoin](#PowerplayJoin)
        1. [PowerplayLeave](#PowerplayLeave)
        1. [PowerplaySalary](#PowerplaySalary)
        1. [PowerplayVote](#PowerplayVote)
        1. [PowerplayVoucher](#PowerplayVoucher)
    1. Other events
        1. [ApproachSettlement](#ApproachSettlement)
        1. [CockpitBreached](#CockpitBreached)
        1. [CommitCrime](#CommitCrime)
        1. [Continued](#Continued)
        1. [DatalinkScan](#DatalinkScan)
        1. [DatalinkVoucher](#DatalinkVoucher)
        1. [DataScanned](#DataScanned)
        1. [DockFighter](#DockFighter)
        1. [DockSRV](#DockSRV)
        1. [FuelScoop](#FuelScoop)
        1. [JetConeBoost](#JetConeBoost)
        1. [JetConeDamage](#JetConeDamage)
        1. [LaunchFighter](#LaunchFighter)
        1. [LaunchSRV](#LaunchSRV)
        1. [Promotion](#Promotion)
        1. [RebootRepair](#RebootRepair)
        1. [ReceiveText](#ReceiveText)
        1. [Resurrect](#Resurrect)
        1. [SelfDestruct](#SelfDestruct)
        1. [SendText](#SendText)
        1. [Synthesis](#Synthesis)
        1. [USSDrop](#USSDrop)
        1. [VehicleSwitch](#VehicleSwitch)
        1. [WingAdd](#WingAdd)
        1. [WingJoin](#WingJoin)
        1. [WingLeave](#WingLeave)

1. [Enums](#enums)
    1. [JournalEvents](#JournalEvents)
    1. [AtmosphereTypes](#AtmosphereTypes)
    1. [BodyTypes](#BodyTypes)
    1. [PlanetTypes](#PlanetTypes)
    1. [StarTypes](#StarTypes)
    1. [Volcanism Types](#VolcanismTypes)
    1. [CombatRanks](#CombatRanks)
    1. [Crimes](#Crimes)


<a name="classes"></a>
## Classes / Models 

<a name="JournalEvent"></a>
### JournalEvent 

#### Properties

    event: string
    timestamp: string

[Back to index](#index)

<a name="ClearSavedGame"></a>
### ClearSavedGame extends JournalEvent 

#### Properties
    
    Name: string;

[Back to index](#index)

<a name="NewCommander"></a>
### NewCommander extends JournalEvent 

#### Properties

    Name: string;
    Package: string;

[Back to index](#index)

<a name="LoadGame"></a>
### LoadGame extends JournalEvent 

#### Properties

    Commander: string;
    Ship: string;
    ShipID: number;
    StartLanded?: boolean;
    StartDead?: boolean;
    GameMode: string;
    Group: string;
    Credits: number;
    Loan: number;

[Back to index](#index)

<a name="Progress"></a>
### Progress extends JournalEvent 

#### Properties

    Combat: number;
    Trade: number;
    Explore: number;
    Empire: number;
    Federation: number;
    CQC: number;

[Back to index](#index)

<a name="Rank"></a>
### Rank extends JournalEvent 

#### Properties

    Combat: number;
    Trade: number;
    Explore: number;
    Empire: number;
    Federation: number;
    CQC: number;

[Back to index](#index)

<a name="Docked"></a>
### Docked extends JournalEvent 

#### Properties

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

[Back to index](#index)

<a name="DockingCancelled"></a>
### DockingCancelled extends JournalEvent 

#### Properties

    StationName: string;

[Back to index](#index)

<a name="DockingDenied"></a>
### DockingDenied extends JournalEvent 

#### Properties

    StationName: string;
    Reason: "NoSpace" | "TooLarge" | "Hostile" | "Offences" | "Distance" | "ActiveFighter" | "NoReason"

[Back to index](#index)

<a name="DockingGranted"></a>
### DockingGranted extends JournalEvent 

#### Properties

    StationName: string;
    LandingPad: number;

[Back to index](#index)

<a name="DockingRequested"></a>
### DockingRequested extends JournalEvent 

#### Properties

    StationName: string;

[Back to index](#index)

<a name="DockingTimeout"></a>
### DockingTimeout extends JournalEvent 

#### Properties

    StationName: string;

[Back to index](#index)

<a name="FSDJump"></a>
### FSDJump extends JournalEvent 

#### Properties

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

[Back to index](#index)

<a name="Liftoff"></a>
### Liftoff extends JournalEvent 

#### Properties

    Latitude: number;
    Longitude: number;

[Back to index](#index)

<a name="Location"></a>
### Location extends JournalEvent 

#### Properties

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

[Back to index](#index)

<a name="SupercruiseEntry"></a>
### SupercruiseEntry extends JournalEvent 

#### Properties

    Starsystem: string;

[Back to index](#index)

<a name="SupercruiseExit"></a>
### SupercruiseExit extends JournalEvent 

#### Properties

    Starsystem: string;
    Body: string;
    BodyType: BodyTypes;

[Back to index](#index)

<a name="Touchdown"></a>
### Touchdown extends JournalEvent 

#### Properties

    Latitude: number;
    Longitude: number;

[Back to index](#index)

<a name="Undocked"></a>
### Undocked extends JournalEvent 

#### Properties

    StationName: string;


[Back to index](#index)

<a name="Bounty"></a>
### Bounty extends JournalEvent 

#### Properties

    Rewards: {Faction: string, Reward: number}[];
    VictimFaction: string;
    TotalReward: number;
    SharedWithOthers: number;
    Target: string;

[Back to index](#index)

<a name="CapShipBond"></a>
### CapShipBond extends JournalEvent 

#### Properties

    Reward: number;
    AwardingFaction: string;
    VictimFaction: string;
}

[Back to index](#index)

<a name="Died"></a>
### Died extends JournalEvent 

#### Properties

    KillerName?: string;
    KillerName_Localised?: string;
    KillerShip?: string;
    KillerRank?: string;

    Killers?: {KillerName: string; KillerName_Localised: string; KillerShip: string; KillerRank:string}[]

[Back to index](#index)

<a name="EscapeInterdiction"></a>
### EscapeInterdiction extends JournalEvent 

#### Properties

    Interdictor: string;
    IsPlayer: boolean;

[Back to index](#index)

<a name="FactionKillBond"></a>
### FactionKillBond extends JournalEvent 

#### Properties

    Reward: number;
    AwardingFaction: string;
    VictimFaction: string;

[Back to index](#index)

<a name="HeatDamage"></a>
### HeatDamage extends JournalEvent 

#### Properties

    none


[Back to index](#index)

<a name="HeatWarning"></a>
### HeatWarning extends JournalEvent 

#### Properties

    none


[Back to index](#index)

<a name="HullDamage "></a>
### HullDamage extends JournalEvent  

#### Properties

    Health: number;


[Back to index](#index)

<a name="Interdicted"></a>
### Interdicted extends JournalEvent 

#### Properties

    Submitted: boolean;
    Interdictor: string;
    IsPlayer: boolean;
    Faction: string;

[Back to index](#index)

<a name="Interdiction"></a>
### Interdiction extends JournalEvent 

#### Properties

    Success: boolean;
    Interdicted: string;
    IsPlayer: boolean;
    CombatRank: number;
    Faction: string;
    Power?: string;

[Back to index](#index)

<a name="PVPKill"></a>
### PVPKill extends JournalEvent 

#### Properties

    Victim: string;
    CombatRank: number

[Back to index](#index)

<a name="ShieldState"></a>
### ShieldState extends JournalEvent 

#### Properties

    ShieldsUp: boolean;

[Back to index](#index)

<a name="Scan"></a>
### Scan extends JournalEvent 

#### Properties

    Bodyname: string;
    DistanceFromArrivalLS: number;
    RotationPeriod: number;
    SurfaceTemperature: number;

    Rings?: {
        Name: string;
        RingClass: string;
        MassMT: number;
        InnerRad: number;
        OuterRad: number;
    }[];

    SemiMajorAxis?: number;
    Eccentricity?: number;
    OrbitalInclination?: number;
    Periapsis?: number;
    OrbitalPeriod?: number;

    StarType?: StarTypes;
    StellarMass?: number;
    Radius?: number;
    AbsoluteMagnitude?: number;
    Age_MY?: number;

    TidalLock?: boolean;
    TerraformState?: "Terraformable" | "Terraforming" | "Terraformed" | null;
    PlanetClass?: PlanetTypes;
    Atmosphere?: AtmosphereTypes;
    Volcanism?: VolcanismTypes;
    SurfaceGravity?: number;
    SurfacePressure?: number;
    Landable?: boolean;
    Materials?: {Name:string; Percentage: number};

[Back to index](#index)

<a name="MaterialCollected"></a>
### MaterialCollected extends JournalEvent 

#### Properties

    Category: "Raw" | "Encoded" | "Manufactured";
    Name: string;
    Count: number;

[Back to index](#index)

<a name="MaterialDiscarded"></a>
### MaterialDiscarded extends JournalEvent 

#### Properties

    Category: "Raw" | "Encoded" | "Manufactured";
    Name: string;
    Count: number;

[Back to index](#index)

<a name="MaterialDiscovered"></a>
### MaterialDiscovered extends JournalEvent 

#### Properties

    Category: "Raw" | "Encoded" | "Manufactured";
    Name: string;
    DiscoveryNumber: number;

[Back to index](#index)

<a name="BuyExplorationData"></a>
### BuyExplorationData extends JournalEvent 

#### Properties

    System: string;
    Cost: number;

[Back to index](#index)

<a name="SellExplorationData"></a>
### SellExplorationData extends JournalEvent 

#### Properties

    Systems: string[];
    Discovered: string[];
    BaseValue: number;
    Bonus: number;

[Back to index](#index)

<a name="Screenshot"></a>
### Screenshot extends JournalEvent 

#### Properties

    Filename: string;
    Width: number;
    Height: number;
    System: string;
    Body: string;

[Back to index](#index)

<a name="BuyTradeData"></a>
### BuyTradeData extends JournalEvent 

#### Properties

    System: string;
    Cost: number;

[Back to index](#index)

<a name="CollectCargo"></a>
### CollectCargo extends JournalEvent 

#### Properties

    Type: string;
    Stolen: boolean;

[Back to index](#index)

<a name="EjectCargo"></a>
### EjectCargo extends JournalEvent 

#### Properties

    Type: string;
    Count: number;
    Abandoned: boolean;
    PowerplayOrigin?: string;



[Back to index](#index)

<a name="MarketBuy"></a>
### MarketBuy extends JournalEvent 

#### Properties

    Type: string;
    Count: number;
    BuyPrice: number;
    TotalCost: number;

[Back to index](#index)

<a name="MarketSell"></a>
### MarketSell extends JournalEvent 

#### Properties

    Type: string;
    Count: number;
    SellPrice: number;
    TotalSale: number;
    AvgPricePaid: number;
    IllegalGoods?: boolean;
    StolenGoods?: boolean;
    BlackMarket?: boolean;


[Back to index](#index)

<a name="MiningRefined"></a>
### MiningRefined extends JournalEvent 

#### Properties

    Type: string;

[Back to index](#index)

<a name="BuyAmmo"></a>
### BuyAmmo extends JournalEvent 

#### Properties

    Cost: number;

[Back to index](#index)

<a name="BuyDrones"></a>
### BuyDrones extends JournalEvent 

#### Properties

    Type: string;
    Count: number;
    BuyPrice: number;
    TotalCost: number;

[Back to index](#index)

<a name="CommunityGoalDiscard"></a>
### CommunityGoalDiscard extends JournalEvent 

#### Properties

    Name: string;
    System: string;

[Back to index](#index)

<a name="CommunityGoalJoin"></a>
### CommunityGoalJoin extends JournalEvent 

#### Properties

    Name: string;
    System: string;

[Back to index](#index)

<a name="CommunityGoalReward"></a>
### CommunityGoalReward extends JournalEvent 

#### Properties

    Name: string;
    System: string;
    Reward: number;

[Back to index](#index)

<a name="CrewAssign"></a>
### CrewAssign extends JournalEvent 

#### Properties

    Name: string;
    Role: string;

[Back to index](#index)

<a name="CrewFire"></a>
### CrewFire extends JournalEvent 

#### Properties

    Name: string;

[Back to index](#index)

<a name="CrewHire"></a>
### CrewHire extends JournalEvent 

#### Properties

    Name: string;
    Faction: string;
    Cost: number;
    CombatRank: number;

[Back to index](#index)

<a name="EngineerApply"></a>
### EngineerApply extends JournalEvent 

#### Properties

    Engineer: string;
    Blueprint: string;
    Level: number;
    Override: boolean;

[Back to index](#index)

<a name="EngineerCraft"></a>
### EngineerCraft extends JournalEvent 

#### Properties

    Engineer: string;
    Blueprint: string;
    Level: number;
    Ingredients: {[key: string]: number};

[Back to index](#index)

<a name="EngineerProgress"></a>
### EngineerProgress extends JournalEvent 

#### Properties

    Engineer: string;
    Rank: number;
    Progress: "Invited" | "Acquainted" | "Unlocked" | "Barred"

[Back to index](#index)

<a name="FetchRemoteModule"></a>
### FetchRemoteModule extends JournalEvent 

#### Properties

    StorageSlot: string;
    StoredItem: string;
    ServerId: number;
    TransferCost: number;
    Ship: string;
    ShipId: number;
}

[Back to index](#index)

<a name="MassModuleStore"></a>
### MassModuleStore extends JournalEvent 

#### Properties

    Ship: string;
    ShipId: number;
    Items: {
        Slot: string;
        Name: string;
        EngineerModifications: string;
    }[]

[Back to index](#index)

<a name="MissionAbandoned"></a>
### MissionAbandoned extends JournalEvent 

#### Properties

    Name: string;
    MissionID: number;

[Back to index](#index)

<a name="MissionAccepted"></a>
### MissionAccepted extends JournalEvent 

#### Properties

    Name: string;
    Faction: string;
    MissionID: number;
    Commodity?: string;
    Count?: number;
    Target?: string;
    TargetType?: string;
    TargetFaction?: string;
    Expiry?: string;
    DestinationSystem?: string;
    DestinationStation?: string;
    PassengerCount?: number;
    PassengerVIPs?: boolean;
    PassengerWanted?: boolean;
    PassengerType?: string;

[Back to index](#index)

<a name="MissionCompleted"></a>
### MissionCompleted extends JournalEvent 

#### Properties

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

[Back to index](#index)

<a name="MissionFailed"></a>
### MissionFailed extends JournalEvent 

#### Properties

    Name: string;
    MissionID: number;

[Back to index](#index)

<a name="ModuleBuy"></a>
### ModuleBuy extends JournalEvent 

#### Properties

    Slot: string;
    BuyItem: string;
    BuyPrice: number;
    Ship: string;
    ShipID: number;

    SellItem?: string;
    SellPrice?: number;

[Back to index](#index)

<a name="ModuleRetrieve"></a>
### ModuleRetrieve extends JournalEvent 

#### Properties

    Slot: string;
    Ship: string;
    ShipID: number;
    RetrievedItem: string;
    EngineerModifications?: string;
    SwapOutItem: string;
    Cost: number;

[Back to index](#index)

<a name="ModuleSell"></a>
### ModuleSell extends JournalEvent 

#### Properties

    Slot: string;
    SellItem: string;
    SellPrice: number;
    Ship: string;
    ShipID: number;

[Back to index](#index)

<a name="ModuleSellRemote"></a>
### ModuleSellRemote extends JournalEvent 

#### Properties

    StorageSlot: string;
    SellItem: string;
    ServerId: number;
    SellPrice: number;
    Ship: string;
    ShipId: number;

[Back to index](#index)

<a name="ModuleStore"></a>
### ModuleStore extends JournalEvent 

#### Properties

    Slot: string;
    Ship: string;
    ShipID: number;
    StoredItem: string;
    EngineerModifications?: string;
    ReplacementItem?: string;
    Cost?: number

[Back to index](#index)

<a name="ModuleSwap"></a>
### ModuleSwap extends JournalEvent 

#### Properties

    FromSlot: string;
    ToSlot: string;
    FromItem: string;
    ToItem: string;
    Ship: string;
    ShipID: number;

[Back to index](#index)

<a name="PayFines"></a>
### PayFines extends JournalEvent 

#### Properties

    Amount: number;
    BrokerPercentage?: number;

[Back to index](#index)

<a name="PayLegacyFines"></a>
### PayLegacyFines extends JournalEvent 

#### Properties

    Amount: number;
    BrokerPercentage?: number;

[Back to index](#index)

<a name="RedeemVoucher"></a>
### RedeemVoucher extends JournalEvent 

#### Properties

    Type: string;
    Amount: number;
    BrokerPercentage?: number;    

[Back to index](#index)

<a name="refuelAll"></a>
### refuelAll extends JournalEvent 

#### Properties

    Cost: number;
    Amount: number;    

[Back to index](#index)

<a name="RefuelPartial"></a>
### RefuelPartial extends JournalEvent 

#### Properties

    Cost: number;
    Amount: number;

[Back to index](#index)

<a name="Repair"></a>
### Repair extends JournalEvent 

#### Properties

    Item: string;
    Cost: number;

[Back to index](#index)

<a name="RepairAll"></a>
### RepairAll extends JournalEvent 

#### Properties

    Cost: number;

[Back to index](#index)

<a name="RestockVehicle"></a>
### RestockVehicle extends JournalEvent 

#### Properties

    Type: string;
    Loadout: string;
    Cost: number;
    Count: number;

[Back to index](#index)

<a name="ScientificResearch"></a>
### ScientificResearch extends JournalEvent 

#### Properties

    Name: string;
    Category: string;
    Count: number;

[Back to index](#index)

<a name="SellDrones"></a>
### SellDrones extends JournalEvent 

#### Properties

    Type: string;
    Count: number;
    SellPrice: number;
    TotalSale: number;

[Back to index](#index)

<a name="ShipyardBuy"></a>
### ShipyardBuy extends JournalEvent 

#### Properties

    ShipType: string;
    ShipPrice: number;
    StoreOldShip?: string;
    StoreShipID: number;
    SellShipID: number;
    SellPrice: number;

[Back to index](#index)

<a name="ShipyardNew"></a>
### ShipyardNew extends JournalEvent 

#### Properties

    ShipType: string;
    ShipID: number;

[Back to index](#index)

<a name="ShipyardSell"></a>
### ShipyardSell extends JournalEvent 

#### Properties

    ShipType: string;
    SellShipID: number;
    ShipPrice: number;
    System?: string;

[Back to index](#index)

<a name="ShipyardTransfer"></a>
### ShipyardTransfer extends JournalEvent 

#### Properties

    ShipType: string;
    ShipID: number;
    System: string;
    Distance: number;
    TransferPrice: number;

[Back to index](#index)

<a name="ShipyardSwap"></a>
### ShipyardSwap extends JournalEvent 

#### Properties

    ShipType: string;
    ShipID: number;
    StoreOldShip?: string;
    StoreShipID?: number;
    SellOldShip?: string;
    SellShipID?: number;

[Back to index](#index)

<a name="PowerplayCollect"></a>
### PowerplayCollect extends JournalEvent 

#### Properties

    Power: string;
    Type: string;
    Count: number;

[Back to index](#index)

<a name="PowerplayDefect"></a>
### PowerplayDefect extends JournalEvent 

#### Properties

    FromPower: string;
    ToPower: string;

[Back to index](#index)

<a name="PowerplayDeliver"></a>
### PowerplayDeliver extends JournalEvent 

#### Properties

    Power: string;
    Type: string;
    Count: number;

[Back to index](#index)

<a name="PowerplayFastTrack"></a>
### PowerplayFastTrack extends JournalEvent 

#### Properties

    Power: string;
    Cost: number;

[Back to index](#index)

<a name="PowerplayJoin"></a>
### PowerplayJoin extends JournalEvent 

#### Properties

    Power: string;

[Back to index](#index)

<a name="PowerplayLeave"></a>
### PowerplayLeave extends JournalEvent 

#### Properties

    Power: string;

[Back to index](#index)

<a name="PowerplaySalary"></a>
### PowerplaySalary extends JournalEvent 

#### Properties

    Amount: number;
    Power: string;

[Back to index](#index)

<a name="PowerplayVote"></a>
### PowerplayVote extends JournalEvent 

#### Properties

    Power: string;
    Votes: number;
    System: string;

[Back to index](#index)

<a name="PowerplayVoucher"></a>
### PowerplayVoucher extends JournalEvent 

#### Properties

    Power: string;
    Systems: string[];



[Back to index](#index)

<a name="ApproachSettlement"></a>
### ApproachSettlement extends JournalEvent 

#### Properties

    Name: string;

[Back to index](#index)

<a name="CockpitBreached"></a>
### CockpitBreached extends JournalEvent 

#### Properties

    none


[Back to index](#index)

<a name="CommitCrime"></a>
### CommitCrime extends JournalEvent 

#### Properties

    CrimeType: string;
    Faction: string;
    Victim?: string;
    Fine?: string;
    Bounty?: string;

[Back to index](#index)

<a name="Continued"></a>
### Continued extends JournalEvent 

#### Properties

    Part: number;

[Back to index](#index)

<a name="DatalinkScan"></a>
### DatalinkScan extends JournalEvent 

#### Properties

    Message: string;

[Back to index](#index)

<a name="DatalinkVoucher"></a>
### DatalinkVoucher extends JournalEvent 

#### Properties

    Reward: number;
    VictimFaction: string;
    PayeeFaction: string;

[Back to index](#index)

<a name="DataScanned"></a>
### DataScanned extends JournalEvent 

#### Properties

    Type: string;

[Back to index](#index)

<a name="DockFighter"></a>
### DockFighter extends JournalEvent 

#### Properties
    none


[Back to index](#index)

<a name="DockSRV"></a>
### DockSRV extends JournalEvent 

#### Properties
    none


[Back to index](#index)

<a name="FuelScoop"></a>
### FuelScoop extends JournalEvent 

#### Properties

    Scooped: number;
    Total: number;

[Back to index](#index)

<a name="JetConeBoost"></a>
### JetConeBoost extends JournalEvent 

#### Properties

    BoostValue: number;

[Back to index](#index)

<a name="JetConeDamage"></a>
### JetConeDamage extends JournalEvent 

#### Properties

    Module: string;

[Back to index](#index)

<a name="LaunchFighter"></a>
### LaunchFighter extends JournalEvent 

#### Properties

    Loadout: string;
    PlayerController: boolean;

[Back to index](#index)

<a name="LaunchSRV"></a>
### LaunchSRV extends JournalEvent 

#### Properties

    Loadout: string;

[Back to index](#index)

<a name="Promotion"></a>
### Promotion extends JournalEvent 

#### Properties

    Combat?: number;
    Trade?: number;
    Explore?: number;
    CQC?: number;

[Back to index](#index)

<a name="RebootRepair"></a>
### RebootRepair extends JournalEvent 

#### Properties

    Modules: string[]

[Back to index](#index)

<a name="ReceiveText"></a>
### ReceiveText extends JournalEvent 

#### Properties

    From: string;
    Message: string;
    Channel: "wing" | "local" | "voicechat" | "friend" | "player" | "npc";

[Back to index](#index)

<a name="Resurrect"></a>
### Resurrect extends JournalEvent 

#### Properties

    Option: string;
    Cost: number;
    Bankrupt: boolean;

[Back to index](#index)

<a name="SelfDestruct"></a>
### SelfDestruct extends JournalEvent 

#### Properties

    none


[Back to index](#index)

<a name="SendText"></a>
### SendText extends JournalEvent 

#### Properties

    To: string;
    Message: string;

[Back to index](#index)

<a name="Synthesis"></a>
### Synthesis extends JournalEvent 

#### Properties

    Name: string;
    Materials: {[index:string]:number}

[Back to index](#index)

<a name="USSDrop"></a>
### USSDrop extends JournalEvent 

#### Properties

    USSType: string;
    USSThreat: number;

[Back to index](#index)

<a name="VehicleSwitch"></a>
### VehicleSwitch extends JournalEvent 

#### Properties

    To: "Mothership" | "Fighter"

[Back to index](#index)

<a name="WingAdd"></a>
### WingAdd extends JournalEvent 

#### Properties

    none


[Back to index](#index)

<a name="WingJoin"></a>
### WingJoin extends JournalEvent 

#### Properties

    Others: string[];

[Back to index](#index)

<a name="WingLeave"></a>
### WingLeave extends JournalEvent 

#### Properties

    none


<a name="enums"></a>
## Enums 

<a name="JournalEvents"></a>
### JournalEvents 

    //startup
    clearSavedGame = "ClearSavedGame",
    newCommander = "NewCommander",
    loadGame = "LoadGame",
    progress = "Progress",
    rank = "Rank",

    //TRAVEL
    docked = "Docked",
    dockingCancelled = "DockingCancelled",
    dockingDenied = "DockingDenied",
    dockingGranted = "DockingGranted",
    dockingRequested = "DockingRequested",
    dockingTimeout = "DockingTimeout",
    fsdJump = "FSDJump",
    liftoff = "Liftoff",
    location = "Location",
    superCruiseExit = "SuperCruiseExit",
    touchdown = "Touchdown",
    undocked = "Undocked",

    //COMBAT
    bounty = "Bounty",
    capShipBond = "CapShipBond",
    died = "Died",
    escapeInterdiction = "EscapeInterdiction",
    factionKillBond = "FactionKillBond",
    heatDamage = "HeatDamage",
    heatWarning = "HeatWarning",
    hullDamage = "HullDamage",
    interdicted = "Interdicted",
    interdiction = "Interdiction",
    pvpKill = "PVPKill",
    shieldState = "ShieldState",

    //EXPLORATION
    scan = "Scan",
    materialCollected = "MaterialCollected",
    materialDiscarded = "MaterialDiscarded",
    materialDiscovered = "MaterialDiscovered",
    buyExplorationData = "BuyExplorationData",
    sellExplorationData = "SellExplorationData",
    screenshot = "Screenshot",

    //TRADE
    buyTradeData = "BuyTradeData",
    collectCargo = "CollectCargo",
    ejectCargo = "EjectCargo",
    marketBuy = "MarketBuy",
    miningRefined = "MiningRefined",

    //STATION SERVICES
    buyAmmo = "BuyAmmo",
    buyDones = "BuyDrones",
    communityGoalDiscard = "CommunityGoalDiscard",
    communityGoalJoin = "CommunityGoalJoin",
    communityGoalReward = "CommunityGoalReward",
    crewAssign = "CrewAssign",
    crewFire = "CrewFire",
    crewHire = "CrewHire",
    engineerApply = "EngineerApply",
    engineerCraft = "EngineerCraft",
    engineerProgress = "EngineerProgress",
    fetchRemoteModule = "FetchRemoteModule",
    massModuleStore = "MassModuleStore",
    missionAbandoned = "MissionAbandoned",
    missionAccepted = "MissionAccepted",
    missionCompleted = "MissionCompleted",
    moduleBuy = "ModuleBuy",
    moduleRetrieve = "ModuleRetrieve",
    moduleSell = "ModuleSell",
    moduleSellRemote = "ModuleSellRemote",
    moduleStore = "ModuleStore",
    moduleSwap = "ModuleSwap",
    payFines = "PayFines",
    payLegacyFines = "PayLegacyFines",
    redeemVoucher = "RedeemVoucher",
    refuelAll = "refuelAll",
    refuelPartial = "refuelPartial",
    repair = "Repair",
    repairAll = "RepairAll",
    restockVehicle = "RestockVehicle",
    scientificResearch = "ScientificResearch",
    sellDrones = "SellDrones",
    shipyardBuy = "ShipyardBuy",
    shipyardNew = "ShipyardNew",
    shipyardSell = "ShipyardSell",
    shipyardTransfer = "ShipyardTransfer",
    shipyardSwap = "ShipyardSwap",

    //POWERPLAY
    powerplayCollect = "PowerplayCollect",
    powerplayDefect = "PowerplayDefect",
    powerplayDeliver = "PowerplayDeliver",
    powerplayFastTrack = "PowerplayFastTrack",
    powerplayJoin = "PowerplayJoin",
    powerplayLeave = "PowerplayLeave",
    powerplaySalary = "PowerplaySalary",
    powerplayVote = "PowerplayVote",
    powerplayVoucher = "PowerplayVoucher",

    //OTHER EVENTS
    approachSettlement = "ApproachSettlement",
    cockpitBreached = "CockpitBreached",
    commitCrime = "CommitCrime",
    continued = "Continued",
    datalinkScan = "DatalinkScan",
    dataScanned = "DataScanned",
    dockFighter = "DockFighter",
    dockSRV = "DockSRV",
    fuelScoop = "FuelScoop",
    jetConeBoost = "JetConeBoost",
    jetConeDamage = "JetConeDamage",
    launchFighter = "LaunchFighter",
    launchSRV = "LaunchSRV",
    promotion = "Promotion",
    rebootRepair = "RebootRepair",
    receiveText = "ReceiveText",
    resurrect = "Resurrect",
    selfDestruct = "SelfDestruct",
    sendText = "SendText",
    synthesis = "Synthesis",
    vehicleSwitch = "VehicleSwitch",
    wingAdd = "WingAdd",
    wingJoin = "WingJoin",
    wingLeave = "WingLeave"

[Back to index](#index)

<a name="AtmosphereTypes"></a>
### AtmosphereTypes 

    none = "No atmosphere",
    waterBasedLife = "Suitable for water-based life",
    ammoniaO2 = "Ammonia and oxygen",
    ammonia = "Ammonia",
    water = "Water",
    carbonDioxide = "Carbon dioxide",
    sulphurDioxide = "Sulphur dioxide",
    nitrogen = "Nitrogen",
    waterRich = "Water-rich",
    methaneRich = "Methane-rich",
    ammoniaRich = "Ammonia-rich",
    carbonDioxideRich = "Carbon dioxide-rich",
    methan = "Methane",
    helium = "Helium",
    silicateVapour = "Silicate vapour",
    metallicVapour = "Metallic vapour",
    neonRich = "Neon-rich",
    argonRich = "Argon-rich",
    neon = "Neon",
    argon = "Argon",
    oxygen = "Oxygen"

[Back to index](#index)

<a name="BodyTypes"></a>
### BodyTypes 

    null = "Null", //(eg the barycentre of a binary star system)
    star = "Star",
    planet = "Planet",
    planetaryRing = "PlanetaryRing",
    stellarRing = "StellarRing",
    station = "Station",
    asteroidCluster = "AsteroidCluster"

[Back to index](#index)

<a name="PlanetTypes"></a>
### PlanetTypes 

    metalRich = "Metal rich body",
    highMetal = "High metal content body",
    rocky = "Rocky body",
    icy = "Icy body",
    rockyIce = "Rocky ice body",
    elw = "Earthlike body",
    waterWorld = "Water world",
    ammonia = "Ammonia world",
    waterGiant = "Water giant",
    waterGiantLife = "Water giant with life",
    gasGiantWaterLife = "Gas giant with water based life",
    gasGiantAmmoniaLife = "Gas giant with ammonia based life",
    sudarskyClassI = "Sudarsky class I gas giant",
    sudarskyClassII = "Sudarsky class II gas giant",
    sudarskyClassIII = "Sudarsky class III gas giant",
    sudarskyClassIV = "Sudarsky class IV gas giant",
    sudarskyClassV = "Sudarsky class V gas giant",
    heliumRichGas = "Helium rich gas giant",
    heliumGas = "Helium gas giant"

[Back to index](#index)

<a name="StarTypes"></a>
### StarTypes 

    //main sequence
    O = "O",
    B = "B", 
    A = "A", 
    F = "F",
    G = "G", 
    K = "K",
    M = "M",
    L = "L", 
    T = "T",
    Y = "Y",
    //proto stars
    TTS = "TTS",
    AeBe = "AeBe",
    //Wolf Rayet
    W = "W",
    WN = "WN",
    WNC = "WNC", 
    WC = "WC", 
    WO = "WO",
    //Carbon
    CS = "CS",
    C = "C", 
    CN = "CN",
    CJ = "CJ", 
    CH = "CH", 
    CHd = "CHd",
    MS = "MS",
    S = "S",
    //white dwarfs
    D = "D", 
    DA = "DA",
    DAB = "DAB", 
    DAO = "DAO", 
    DAZ = "DAZ", 
    DAV = "DAV", 
    DB = "DB", 
    DBZ = "DBZ", 
    DBV = "DBV", 
    DO = "DO", 
    DOV = "DOV", 
    DQ = "DQ", 
    DC = "DC", 
    DCV = "DCV", 
    DX = "DX",
    //others
    N = "N", //neutron
    H = "H", //black hole
    X = "X", //exotic
    SupermassiveBlackHole = "SupermassiveBlackHole", //SgrA*
    A_BlueWhiteSuperGiant = "A_BlueWhiteSuperGiant",
    F_WhiteSuperGiant = "F_WhiteSuperGiant",
    M_RedSuperGiant = "M_RedSuperGiant",
    M_RedGiant = "M_RedGiant",
    K_OrangeGiant = "K_OrangeGiant",
    RoguePlanet = "RoguePlanet",
    Nebula = "Nebula",
    StellarRemnantNebula = "StellarRemnantNebula"

[Back to index](#index)

<a name="VolcanismTypes"></a>
### Volcanism Types 

    None = "None",
    WaterMagma = "Water Magma",
    SulphurDioxideMagma = "Sulphur Dioxide Magma",
    AmmoniaMagma = "Ammonia Magma",
    MethaneMagma = "Methane Magma",
    NitrogenMagma = "Nitrogen Magma",
    SilicateMagma = "Silicate Magma",
    MetallicMagma = "Metallic Magma",
    WaterGeysers = "Water Geysers",
    CarbonDioxideGeysers = "Carbon Dioxide Geysers",
    AmmoniaGeysers = "Ammonia Geysers",
    MethaneGeysers = "Methane Geysers",
    NitrogenGeysers = "Nitrogen Geysers",
    HeliumGeysers = "Helium Geysers",
    SilicateVapourGeysers = "Silicate Vapour Geysers"

[Back to index](#index)

<a name="CombatRanks"></a>
### CombatRanks 

    Harmless,
    "Mostly Harmless",
    Novice,
    Competent,
    Expert,
    Master,
    Dangerous,
    Deadly,
    Elite

[Back to index](#index)

<a name="Crimes"></a>
### Crimes 

    assault = "Assault",
    murder = "Murder",
    piracy = "Piracy",
    interdiction = "Interdiction",
    illegalCargo = "IllegalCargo",
    disobeyPolice = "DisobeyPolice",
    fireInNoFireZone = "FireInNoFireZone",
    fireInStation = "FireInStation",
    dumpingDangerous = "DumpingDangerous",
    dumpingNearStation = "DumpingNearStation",
    dockingMinorBlockingAirlock = "DockingMinor_BlockingAirlock",
    dockingMajorBlockingAirlock = "DockingMajor_BlockingAirlock",
    dockingMinorBlockingLandingPad = "DockingMinor_BlockingLandingPad",
    dockingMajorBlockingLandindPad = "DockingMajor_BlockingLandingPad",
    dockingMinorTrespass = "DockingMinor_Trespass",
    dockingMajorTrespass = "DockingMajor_Trespass",
    collidedAtSpeedInNoFireZone = "CollidedAtSpeedInNoFireZone",
    collidedAtSpeedInNoFireZoneHullDamage = "CollidedAtSpeedInNoFireZone_HullDamage"