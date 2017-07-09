"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var JournalEvent = (function () {
    function JournalEvent() {
    }
    return JournalEvent;
}());
exports.JournalEvent = JournalEvent;
//model followed by example
//STARTUP
var ClearSavedGame = (function (_super) {
    __extends(ClearSavedGame, _super);
    function ClearSavedGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClearSavedGame;
}(JournalEvent));
exports.ClearSavedGame = ClearSavedGame;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ClearSavedGame", "Name":"HRC1" }
var NewCommander = (function (_super) {
    __extends(NewCommander, _super);
    function NewCommander() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewCommander;
}(JournalEvent));
exports.NewCommander = NewCommander;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"NewCommander", "Name":"HRC1", "Package":"ImperialBountyHunter" }
var LoadGame = (function (_super) {
    __extends(LoadGame, _super);
    function LoadGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoadGame;
}(JournalEvent));
exports.LoadGame = LoadGame;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"LoadGame", "Commander":"HRC1", "Ship":"CobraMkIII", "ShipID":1, "GameMode":"Group", "Group":"Mobius", "Credits":600120, "Loan":0  }
// % progress to next rank
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Progress;
}(JournalEvent));
exports.Progress = Progress;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Progress", "Combat":77, "Trade":9, "Explore":93, "Empire":0, "Federation":0, "CQC":0 }
// current rank on scale (0-8 except for Fed and Empire)
var Rank = (function (_super) {
    __extends(Rank, _super);
    function Rank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rank;
}(JournalEvent));
exports.Rank = Rank;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Rank", "Combat":2, "Trade":2, "Explore":5, "Empire":1, "Federation":3, "CQC":0 }
//TRAVEL
var Docked = (function (_super) {
    __extends(Docked, _super);
    function Docked() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Docked;
}(JournalEvent));
exports.Docked = Docked;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Docked", "StationName":"Kotov Refinery", "StationType":"Outpost", "StarSystem":"Wolf 289", "Faction":"Wolf 289 Gold Federal Industry", "FactionState":"CivilWar", "Allegiance":"Federation", "Economy":"$economy_Extraction", "Government":"$government_Corporate", "Security":"$SYSTEM_SECURITY_high_anarchy;" }
var DockingCancelled = (function (_super) {
    __extends(DockingCancelled, _super);
    function DockingCancelled() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockingCancelled;
}(JournalEvent));
exports.DockingCancelled = DockingCancelled;
var DockingDenied = (function (_super) {
    __extends(DockingDenied, _super);
    function DockingDenied() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockingDenied;
}(JournalEvent));
exports.DockingDenied = DockingDenied;
var DockingGranted = (function (_super) {
    __extends(DockingGranted, _super);
    function DockingGranted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockingGranted;
}(JournalEvent));
exports.DockingGranted = DockingGranted;
var DockingRequested = (function (_super) {
    __extends(DockingRequested, _super);
    function DockingRequested() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockingRequested;
}(JournalEvent));
exports.DockingRequested = DockingRequested;
var DockingTimeout = (function (_super) {
    __extends(DockingTimeout, _super);
    function DockingTimeout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockingTimeout;
}(JournalEvent));
exports.DockingTimeout = DockingTimeout;
var FSDJump = (function (_super) {
    __extends(FSDJump, _super);
    function FSDJump() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FSDJump;
}(JournalEvent));
exports.FSDJump = FSDJump;
//{ "timestamp":"2016-07-21T13:16:49Z", "event":"FSDJump", "StarSystem":"LP 98-132", "StarPos":[-26.781,37.031,-4.594], "Economy":"$economy_Extraction;", "Allegiance":"Federation", "Government":"$government_Anarchy;", "Security":"$SYSTEM_SECURITY_high_anarchy;", "JumpDist":5.230, "FuelUsed":0.355614, "FuelLevel":12.079949, "Faction":"Brotherhood of LP 98-132", "FactionState":"Outbreak" }
//{ "timestamp":"2016-09-21T14:15:41Z", "event":"FSDJump", "StarSystem":"Tau Bootis", "StarPos":[0.094,48.781,14.625], "Allegiance":"Federation", "Economy":"$economy_Agri;", "Economy_Localised":"Agriculture", "Government":"$government_Democracy;", "Government_Localised":"Democracy", "Security":"$SYSTEM_SECURITY_high;", "Security_Localised":"High Security", "Power":"Edmund Mahon", "PowerplayState":"Controlled", "JumpDist":38.182, "FuelUsed":8.000000, "FuelLevel":11.066821, "Faction":"Values Party of Tau Bootis" }
var Liftoff = (function (_super) {
    __extends(Liftoff, _super);
    function Liftoff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Liftoff;
}(JournalEvent));
exports.Liftoff = Liftoff;
//{ "timestamp":"2016-07-22T10:53:19Z", "event":"Liftoff", "Latitude":63.468872, "Longitude":157.599380 }
//written on startup or resurrection
var Location = (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Location;
}(JournalEvent));
exports.Location = Location;
//{ "timestamp":"2016-07-21T13:14:25Z", "event":"Location", "Docked":true, "StationName":"Azeban City", "StationType":"Coriolis", "StarSystem":"Eranin", "StarPos":[-22.844,36.531,-1.188], "Allegiance":"Alliance", "Economy":"$economy_Agri;", "Government":"$government_Communism;", "Security":$SYSTEM_SECURITY_medium;, "Faction":"Eranin Peoples Party" }
//{ "timestamp":"2016-09-21T14:11:22Z", "event":"Location", "Docked":false, "StarSystem":"Alpha Centauri", "StarPos":[3.031,-0.094,3.156], "Allegiance":"Independent", "Economy":"$economy_Extraction;", "Economy_Localised":"Extraction", "Government":"$government_Cooperative;", "Government_Localised":"Cooperative", "Security":"$SYSTEM_SECURITY_medium;", "Security_Localised":"Medium Security", "Body":"Alpha Centauri B 1", "Powers":["Zachary Hudson"], "PowerplayState":"Exploited", "Faction":"Hutton Orbital Truckers Co-Operative", "FactionState":"Outbreak" }
var SupercruiseEntry = (function (_super) {
    __extends(SupercruiseEntry, _super);
    function SupercruiseEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SupercruiseEntry;
}(JournalEvent));
exports.SupercruiseEntry = SupercruiseEntry;
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"SupercruiseEntry", "StarSystem":"Yuetu" }
var SupercruiseExit = (function (_super) {
    __extends(SupercruiseExit, _super);
    function SupercruiseExit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SupercruiseExit;
}(JournalEvent));
exports.SupercruiseExit = SupercruiseExit;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SupercruiseExit", "StarSystem":"Yuetu", "Body":"Yuetu B" }
var Touchdown = (function (_super) {
    __extends(Touchdown, _super);
    function Touchdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Touchdown;
}(JournalEvent));
exports.Touchdown = Touchdown;
//{ "timestamp":"2016-07-22T10:38:46Z", "event":"Touchdown", "Latitude":63.468872, "Longitude":157.599380 }
var Undocked = (function (_super) {
    __extends(Undocked, _super);
    function Undocked() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Undocked;
}(JournalEvent));
exports.Undocked = Undocked;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Undocked", "StationName":"Long Sight Base" }
//COMBAT
var Bounty = (function (_super) {
    __extends(Bounty, _super);
    function Bounty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bounty;
}(JournalEvent));
exports.Bounty = Bounty;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Bounty", "Rewards": [ {"Faction":"Federation", "Reward":1000 }, {"Faction":"Nuenets Corp.", "Reward": 10280} ],"Target":"Skimmer", "TotalReward":11280, "VictimFaction":"MMU" }
var CapShipBond = (function (_super) {
    __extends(CapShipBond, _super);
    function CapShipBond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CapShipBond;
}(JournalEvent));
exports.CapShipBond = CapShipBond;
var Died = (function (_super) {
    __extends(Died, _super);
    function Died() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Died;
}(JournalEvent));
exports.Died = Died;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Died", "KillerName":"$ShipName_Police_Independent;", "KillerShip":"viper", "KillerRank":"Deadly" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Died", "Killers":[ { "Name":"Cmdr HRC1", "Ship":"Vulture", "Rank":"Competent" }, { "Name":"Cmdr HRC2", "Ship":"Python", "Rank":"Master" } ] }
var EscapeInterdiction = (function (_super) {
    __extends(EscapeInterdiction, _super);
    function EscapeInterdiction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EscapeInterdiction;
}(JournalEvent));
exports.EscapeInterdiction = EscapeInterdiction;
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"EscapeInterdiction", "Interdictor":"Hrc1", "IsPlayer":true }
var FactionKillBond = (function (_super) {
    __extends(FactionKillBond, _super);
    function FactionKillBond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FactionKillBond;
}(JournalEvent));
exports.FactionKillBond = FactionKillBond;
//{"timestamp":"2016-06-10T14:32:03Z",  "event":"FactionKillBond",  "Reward": 500, "AwardingFaction":"Jarildekald Public Industry", "VictimFaction": "Lencali Freedom Party" }
var HeatDamage = (function (_super) {
    __extends(HeatDamage, _super);
    function HeatDamage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HeatDamage;
}(JournalEvent));
exports.HeatDamage = HeatDamage;
var HeatWarning = (function (_super) {
    __extends(HeatWarning, _super);
    function HeatWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HeatWarning;
}(JournalEvent));
exports.HeatWarning = HeatWarning;
//emitted in 20% steps
var HullDamage = (function (_super) {
    __extends(HullDamage, _super);
    function HullDamage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HullDamage;
}(JournalEvent));
exports.HullDamage = HullDamage;
// { "timestamp":"2016-07-25T14:46:23Z", "event":"HullDamage", "Health":0.798496 }
// { "timestamp":"2016-07-25T14:46:23Z", "event":"HullDamage", "Health":0.595611 }
// { "timestamp":"2016-07-25T14:46:23Z", "event":"HullDamage", "Health":0.392725 }
// { "timestamp":"2016-07-25T14:46:26Z", "event":"HullDamage", "Health":0.188219 }
var Interdicted = (function (_super) {
    __extends(Interdicted, _super);
    function Interdicted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Interdicted;
}(JournalEvent));
exports.Interdicted = Interdicted;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Interdicted", "Submitted":false, "Interdictor":"Dread Pirate Roberts", "IsPlayer":false, "Faction": "Timocani Purple Posse"  }
var Interdiction = (function (_super) {
    __extends(Interdiction, _super);
    function Interdiction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Interdiction;
}(JournalEvent));
exports.Interdiction = Interdiction;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Interdiction", "Success":true, "Interdicted":"Fred Flintstone", "IsPlayer":true, "CombatRank":5 }
var PVPKill = (function (_super) {
    __extends(PVPKill, _super);
    function PVPKill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PVPKill;
}(JournalEvent));
exports.PVPKill = PVPKill;
var ShieldState = (function (_super) {
    __extends(ShieldState, _super);
    function ShieldState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShieldState;
}(JournalEvent));
exports.ShieldState = ShieldState;
// { "timestamp":"2016-07-25T14:45:48Z", "event":"ShieldState", "ShieldsUp":false }
// { "timestamp":"2016-07-25T14:46:36Z", "event":"ShieldState", "ShieldsUp":true }
//EXPLORATION
//lots of these properties are optional depending on object scanned
var Scan = (function (_super) {
    __extends(Scan, _super);
    function Scan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Scan;
}(JournalEvent));
exports.Scan = Scan;
//{ "timestamp":"2016-09-22T10:40:44Z", "event":"Scan", "BodyName":"Bei Dou Sector JH-V b2-1 1", "DistanceFromArrivalLS":392.607605, "TidalLock":false, "TerraformState":"", "PlanetClass":"Icy body", "Atmosphere":"thin neon rich atmosphere", "Volcanism":"", "MassEM":0.190769, "Radius":4412562.000000, "SurfaceGravity":3.905130, "SurfaceTemperature":64.690628, "SurfacePressure":321.596558, "Landable":false, "SemiMajorAxis":117704065024.000000, "Eccentricity":0.000033, "Periapsis":5.692884, "OrbitalPeriod":43704092.000000, "RotationPeriod":104296.351563 }
var MaterialCollected = (function (_super) {
    __extends(MaterialCollected, _super);
    function MaterialCollected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MaterialCollected;
}(JournalEvent));
exports.MaterialCollected = MaterialCollected;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialCollected", "Category":"Raw", "Name":"sulphur", "Count":2 }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialCollected", "Category":"Encoded", "Name":"disruptedwakeechoes", "Count":1 }
var MaterialDiscarded = (function (_super) {
    __extends(MaterialDiscarded, _super);
    function MaterialDiscarded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MaterialDiscarded;
}(JournalEvent));
exports.MaterialDiscarded = MaterialDiscarded;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialDiscarded", "Category":"Raw", "Name":"sulphur", "Count": 5 }
var MaterialDiscovered = (function (_super) {
    __extends(MaterialDiscovered, _super);
    function MaterialDiscovered() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MaterialDiscovered;
}(JournalEvent));
exports.MaterialDiscovered = MaterialDiscovered;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MaterialDiscovered", "Category":"Manufactured", "Name":"focuscrystals", "DiscoveryNumber":3 }
var BuyExplorationData = (function (_super) {
    __extends(BuyExplorationData, _super);
    function BuyExplorationData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BuyExplorationData;
}(JournalEvent));
exports.BuyExplorationData = BuyExplorationData;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyExplorationData", "System":"Styx", "Cost":352 }
var SellExplorationData = (function (_super) {
    __extends(SellExplorationData, _super);
    function SellExplorationData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SellExplorationData;
}(JournalEvent));
exports.SellExplorationData = SellExplorationData;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SellExplorationData", "Systems":[ "HIP 78085", "Praea Euq NW-W b1-3" ], "Discovered":[ "HIP 78085 A", "Praea Euq NW-W b1-3", "Praea Euq NW-W b1-3 3 a", "Praea Euq NW-W b1-3 3" ], "BaseValue":10822, "Bonus":3959 }
var Screenshot = (function (_super) {
    __extends(Screenshot, _super);
    function Screenshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Screenshot;
}(JournalEvent));
exports.Screenshot = Screenshot;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Screenshot", "Filename":"_Screenshots/Screenshot_0151.bmp", "Width":1600, "Height":900, "System":"Shinrarta Dezhra", "Body":"Founders World" }
//TRADE
var BuyTradeData = (function (_super) {
    __extends(BuyTradeData, _super);
    function BuyTradeData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BuyTradeData;
}(JournalEvent));
exports.BuyTradeData = BuyTradeData;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyTradeData", "System":"i Bootis", "Cost":100 }
var CollectCargo = (function (_super) {
    __extends(CollectCargo, _super);
    function CollectCargo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CollectCargo;
}(JournalEvent));
exports.CollectCargo = CollectCargo;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CollectCargo", "Type":"agriculturalmedicines", "Stolen":false }
var EjectCargo = (function (_super) {
    __extends(EjectCargo, _super);
    function EjectCargo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EjectCargo;
}(JournalEvent));
exports.EjectCargo = EjectCargo;
// { "timestamp":"2016-06-10T14:32:03Z", "event":"EjectCargo", "Type":"tobacco", "Count":1, "Abandoned":true }
// { "timestamp":"2016-09-21T14:18:23Z", "event":"EjectCargo", "Type":"alliancelegaslativerecords", "Count":2, "Abandoned":true, "PowerplayOrigin":"Tau Bootis" }
var MarketBuy = (function (_super) {
    __extends(MarketBuy, _super);
    function MarketBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarketBuy;
}(JournalEvent));
exports.MarketBuy = MarketBuy;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MarketBuy", "Type":"foodcartridges", "Count":10, "BuyPrice":39, "TotalCost":390 }
var MarketSell = (function (_super) {
    __extends(MarketSell, _super);
    function MarketSell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarketSell;
}(JournalEvent));
exports.MarketSell = MarketSell;
// { "timestamp":"2016-06-10T14:32:03Z", "event":"MarketSell", "Type":"agriculturalmedicines", "Count":3, "SellPrice":1360, "TotalSale":4080, "AvgPricePaid":304 }
// { "event":"MarketSell", "Type":"mineraloil", "Count":9, "SellPrice":72, "TotalSale":648, "AvgPricePaid":0, "StolenGoods":true, "BlackMarket":true }
var MiningRefined = (function (_super) {
    __extends(MiningRefined, _super);
    function MiningRefined() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MiningRefined;
}(JournalEvent));
exports.MiningRefined = MiningRefined;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MiningRefined", "Type:"Gold" }
//STATION SERVICES
var BuyAmmo = (function (_super) {
    __extends(BuyAmmo, _super);
    function BuyAmmo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BuyAmmo;
}(JournalEvent));
exports.BuyAmmo = BuyAmmo;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"BuyAmmo", "Cost":80 }
var BuyDrones = (function (_super) {
    __extends(BuyDrones, _super);
    function BuyDrones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BuyDrones;
}(JournalEvent));
exports.BuyDrones = BuyDrones;
// { "timestamp":"2016-06-10T14:32:03Z", "event":"BuyDrones", "Type":"Drones", "Count":2, "SellPrice":101, "TotalCost":202 }
var CommunityGoalDiscard = (function (_super) {
    __extends(CommunityGoalDiscard, _super);
    function CommunityGoalDiscard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommunityGoalDiscard;
}(JournalEvent));
exports.CommunityGoalDiscard = CommunityGoalDiscard;
var CommunityGoalJoin = (function (_super) {
    __extends(CommunityGoalJoin, _super);
    function CommunityGoalJoin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommunityGoalJoin;
}(JournalEvent));
exports.CommunityGoalJoin = CommunityGoalJoin;
var CommunityGoalReward = (function (_super) {
    __extends(CommunityGoalReward, _super);
    function CommunityGoalReward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommunityGoalReward;
}(JournalEvent));
exports.CommunityGoalReward = CommunityGoalReward;
var CrewAssign = (function (_super) {
    __extends(CrewAssign, _super);
    function CrewAssign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrewAssign;
}(JournalEvent));
exports.CrewAssign = CrewAssign;
//{ "timestamp":"2016-08-09T08:45:31Z", "event":"CrewAssign", "Name":"Dannie Koller", "Role":"Active" }
var CrewFire = (function (_super) {
    __extends(CrewFire, _super);
    function CrewFire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrewFire;
}(JournalEvent));
exports.CrewFire = CrewFire;
//{ "timestamp":"2016-08-09T08:46:11Z", "event":"CrewFire", "Name":"Whitney Pruitt-Munoz" }
var CrewHire = (function (_super) {
    __extends(CrewHire, _super);
    function CrewHire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrewHire;
}(JournalEvent));
exports.CrewHire = CrewHire;
//{ "timestamp":"2016-08-09T08:46:29Z", "event":"CrewHire", "Name":"Margaret Parrish", "Faction":"The Dark Wheel", "Cost":15000, "CombatRank":1 }
var EngineerApply = (function (_super) {
    __extends(EngineerApply, _super);
    function EngineerApply() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EngineerApply;
}(JournalEvent));
exports.EngineerApply = EngineerApply;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerApply", "Engineer":"Elvira Martuuk", "Blueprint":"ShieldGenerator_Reinforced", "Level":1 }
var EngineerCraft = (function (_super) {
    __extends(EngineerCraft, _super);
    function EngineerCraft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EngineerCraft;
}(JournalEvent));
exports.EngineerCraft = EngineerCraft;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerCraft", "Engineer":"Elvira Martuuk", "Blueprint":"FSD_LongRange", "Level":2, "Ingredients":{"praseodymium":1, "disruptedwakeechoes":3, "chemicalprocessors":2, "arsenic":2 } }
var EngineerProgress = (function (_super) {
    __extends(EngineerProgress, _super);
    function EngineerProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EngineerProgress;
}(JournalEvent));
exports.EngineerProgress = EngineerProgress;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Progress":"Unlocked", "Engineer":"Elvira Martuuk" }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"EngineerProgress", "Engineer":"Elvira Martuuk", "Rank":2 }
var FetchRemoteModule = (function (_super) {
    __extends(FetchRemoteModule, _super);
    function FetchRemoteModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FetchRemoteModule;
}(JournalEvent));
exports.FetchRemoteModule = FetchRemoteModule;
var MassModuleStore = (function (_super) {
    __extends(MassModuleStore, _super);
    function MassModuleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MassModuleStore;
}(JournalEvent));
exports.MassModuleStore = MassModuleStore;
var MissionAbandoned = (function (_super) {
    __extends(MissionAbandoned, _super);
    function MissionAbandoned() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissionAbandoned;
}(JournalEvent));
exports.MissionAbandoned = MissionAbandoned;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"MissionAbandoned", "Name":"Mission_Collect_name", "MissionID":65343025 }
var MissionAccepted = (function (_super) {
    __extends(MissionAccepted, _super);
    function MissionAccepted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissionAccepted;
}(JournalEvent));
exports.MissionAccepted = MissionAccepted;
//{ "timestamp":"2016-07-26T11:36:44Z", "event":"MissionAccepted", "Faction":"Tsu Network", "Name":"Mission_Collect", "MissionID":65343026, "Commodity":"$Fish_Name;", "Commodity_Localised":"Fish", "Count":2, "Expiry":"2016-07-27T15:56:23Z" }
var MissionCompleted = (function (_super) {
    __extends(MissionCompleted, _super);
    function MissionCompleted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissionCompleted;
}(JournalEvent));
exports.MissionCompleted = MissionCompleted;
//{ "timestamp":"2016-09-30T08:37:38Z", "event":"MissionCompleted", "Faction":"Maljenni Inc", "Name":"Mission_Delivery_name", "MissionID":65347208, "Commodity":"$Cobalt_Name;", "Commodity_Localised":"Cobalt", "Count":14, "DestinationSystem":"Maljenni", "DestinationStation":"Bowersox Enterprise", "Reward":0, "CommodityReward":[ { "Name": "ArticulationMotors", "Count": 2 } ] }
var MissionFailed = (function (_super) {
    __extends(MissionFailed, _super);
    function MissionFailed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MissionFailed;
}(JournalEvent));
exports.MissionFailed = MissionFailed;
var ModuleBuy = (function (_super) {
    __extends(ModuleBuy, _super);
    function ModuleBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleBuy;
}(JournalEvent));
exports.ModuleBuy = ModuleBuy;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleBuy", "Slot":"MediumHardpoint2", "SellItem":"hpt_pulselaser_fixed_medium", "SellPrice":0, "BuyItem":"hpt_multicannon_gimbal_medium", "BuyPrice":50018, "Ship":"cobramkiii","ShipID":1  }
var ModuleRetrieve = (function (_super) {
    __extends(ModuleRetrieve, _super);
    function ModuleRetrieve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleRetrieve;
}(JournalEvent));
exports.ModuleRetrieve = ModuleRetrieve;
var ModuleSell = (function (_super) {
    __extends(ModuleSell, _super);
    function ModuleSell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleSell;
}(JournalEvent));
exports.ModuleSell = ModuleSell;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleSell", "Slot":"Slot06_Size2", "SellItem":"int_cargorack_size1_class1", "SellPrice":877, "Ship":"asp", "ShipID":1 }
var ModuleSellRemote = (function (_super) {
    __extends(ModuleSellRemote, _super);
    function ModuleSellRemote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleSellRemote;
}(JournalEvent));
exports.ModuleSellRemote = ModuleSellRemote;
var ModuleStore = (function (_super) {
    __extends(ModuleStore, _super);
    function ModuleStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleStore;
}(JournalEvent));
exports.ModuleStore = ModuleStore;
var ModuleSwap = (function (_super) {
    __extends(ModuleSwap, _super);
    function ModuleSwap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModuleSwap;
}(JournalEvent));
exports.ModuleSwap = ModuleSwap;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleSwap", "FromSlot":"MediumHardpoint1", "ToSlot":"MediumHardpoint2", "FromItem":"hpt_pulselaser_fixed_medium", "ToItem":"hpt_multicannon_gimbal_medium", "Ship":"cobramkiii", "ShipID":1  }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"ModuleSwap", "FromSlot":"SmallHardpoint2", "ToSlot":"SmallHardpoint1", "FromItem":"hpt_pulselaserburst_fixed_small_scatter", "ToItem":"Null", "Ship":"cobramkiii", "ShipID":1  }
var PayFines = (function (_super) {
    __extends(PayFines, _super);
    function PayFines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PayFines;
}(JournalEvent));
exports.PayFines = PayFines;
var PayLegacyFines = (function (_super) {
    __extends(PayLegacyFines, _super);
    function PayLegacyFines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PayLegacyFines;
}(JournalEvent));
exports.PayLegacyFines = PayLegacyFines;
var RedeemVoucher = (function (_super) {
    __extends(RedeemVoucher, _super);
    function RedeemVoucher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RedeemVoucher;
}(JournalEvent));
exports.RedeemVoucher = RedeemVoucher;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RedeemVoucher", "Type":"bounty", "Amount":1000 }
var refuelAll = (function (_super) {
    __extends(refuelAll, _super);
    function refuelAll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return refuelAll;
}(JournalEvent));
exports.refuelAll = refuelAll;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RefuelAll", "Cost":317, "Amount":6.322901 }
var RefuelPartial = (function (_super) {
    __extends(RefuelPartial, _super);
    function RefuelPartial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RefuelPartial;
}(JournalEvent));
exports.RefuelPartial = RefuelPartial;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RefuelPartial", "Cost":83, "Amount":1.649000 }
var Repair = (function (_super) {
    __extends(Repair, _super);
    function Repair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Repair;
}(JournalEvent));
exports.Repair = Repair;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Repair", "Item":"int_powerplant_size3_class5", "Cost":1100 }
var RepairAll = (function (_super) {
    __extends(RepairAll, _super);
    function RepairAll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RepairAll;
}(JournalEvent));
exports.RepairAll = RepairAll;
var RestockVehicle = (function (_super) {
    __extends(RestockVehicle, _super);
    function RestockVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RestockVehicle;
}(JournalEvent));
exports.RestockVehicle = RestockVehicle;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RestockVehicle", "Type":"SRV", "Loadout":"starter", "Cost":1030, "Count":1 }
var ScientificResearch = (function (_super) {
    __extends(ScientificResearch, _super);
    function ScientificResearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScientificResearch;
}(JournalEvent));
exports.ScientificResearch = ScientificResearch;
var SellDrones = (function (_super) {
    __extends(SellDrones, _super);
    function SellDrones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SellDrones;
}(JournalEvent));
exports.SellDrones = SellDrones;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SellDrones", "Type":"Drones", "Count":1, "SellPrice":91, "TotalSale":91 }
var ShipyardBuy = (function (_super) {
    __extends(ShipyardBuy, _super);
    function ShipyardBuy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShipyardBuy;
}(JournalEvent));
exports.ShipyardBuy = ShipyardBuy;
//{ "timestamp":"2016-07-21T14:36:38Z", "event":"ShipyardBuy", "ShipType":"hauler", "ShipPrice":46262, "StoreOldShip":"SideWinder", "StoreShipID":2 }
var ShipyardNew = (function (_super) {
    __extends(ShipyardNew, _super);
    function ShipyardNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShipyardNew;
}(JournalEvent));
exports.ShipyardNew = ShipyardNew;
//{ "timestamp":"2016-07-21T14:36:38Z", "event":"ShipyardNew", "ShipType":"hauler", "ShipID":4 }
var ShipyardSell = (function (_super) {
    __extends(ShipyardSell, _super);
    function ShipyardSell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShipyardSell;
}(JournalEvent));
exports.ShipyardSell = ShipyardSell;
//{ "timestamp":"2016-07-21T15:12:19Z", "event":"ShipyardSell", "ShipType":"Adder", "SellShipID":6, "ShipPrice":79027, "System":"Eranin" }
var ShipyardTransfer = (function (_super) {
    __extends(ShipyardTransfer, _super);
    function ShipyardTransfer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShipyardTransfer;
}(JournalEvent));
exports.ShipyardTransfer = ShipyardTransfer;
//{ "timestamp":"2016-07-21T15:19:49Z", "event":"ShipyardTransfer", "ShipType":"SideWinder", "ShipID":7, "System":"Eranin", "Distance":85.639145, "TransferPrice":580 }
var ShipyardSwap = (function (_super) {
    __extends(ShipyardSwap, _super);
    function ShipyardSwap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShipyardSwap;
}(JournalEvent));
exports.ShipyardSwap = ShipyardSwap;
//{ "timestamp":"2016-07-21T14:36:06Z", "event":"ShipyardSwap", "ShipType":"sidewinder", "ShipID":10, "StoreOldShip":"Asp", "StoreShipID":2 }
//POWERPLAY
var PowerplayCollect = (function (_super) {
    __extends(PowerplayCollect, _super);
    function PowerplayCollect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayCollect;
}(JournalEvent));
exports.PowerplayCollect = PowerplayCollect;
var PowerplayDefect = (function (_super) {
    __extends(PowerplayDefect, _super);
    function PowerplayDefect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayDefect;
}(JournalEvent));
exports.PowerplayDefect = PowerplayDefect;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayDefect", "FromPower":"Zachary Hudson", "ToPower":"Li Yong-Rui" }
var PowerplayDeliver = (function (_super) {
    __extends(PowerplayDeliver, _super);
    function PowerplayDeliver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayDeliver;
}(JournalEvent));
exports.PowerplayDeliver = PowerplayDeliver;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayDeliver", "Power":"Li Yong-Rui", "Type":"siriusfranchisepackage", "Count":10 }
var PowerplayFastTrack = (function (_super) {
    __extends(PowerplayFastTrack, _super);
    function PowerplayFastTrack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayFastTrack;
}(JournalEvent));
exports.PowerplayFastTrack = PowerplayFastTrack;
var PowerplayJoin = (function (_super) {
    __extends(PowerplayJoin, _super);
    function PowerplayJoin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayJoin;
}(JournalEvent));
exports.PowerplayJoin = PowerplayJoin;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayJoin", "Power":"Zachary Hudson" }
var PowerplayLeave = (function (_super) {
    __extends(PowerplayLeave, _super);
    function PowerplayLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayLeave;
}(JournalEvent));
exports.PowerplayLeave = PowerplayLeave;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"PowerplayLeave", "Power":"Li Yong-Rui" }
var PowerplaySalary = (function (_super) {
    __extends(PowerplaySalary, _super);
    function PowerplaySalary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplaySalary;
}(JournalEvent));
exports.PowerplaySalary = PowerplaySalary;
var PowerplayVote = (function (_super) {
    __extends(PowerplayVote, _super);
    function PowerplayVote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayVote;
}(JournalEvent));
exports.PowerplayVote = PowerplayVote;
var PowerplayVoucher = (function (_super) {
    __extends(PowerplayVoucher, _super);
    function PowerplayVoucher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PowerplayVoucher;
}(JournalEvent));
exports.PowerplayVoucher = PowerplayVoucher;
//OTHER EVENTS
var ApproachSettlement = (function (_super) {
    __extends(ApproachSettlement, _super);
    function ApproachSettlement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApproachSettlement;
}(JournalEvent));
exports.ApproachSettlement = ApproachSettlement;
var CockpitBreached = (function (_super) {
    __extends(CockpitBreached, _super);
    function CockpitBreached() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CockpitBreached;
}(JournalEvent));
exports.CockpitBreached = CockpitBreached;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CockpitBreached" }
var CommitCrime = (function (_super) {
    __extends(CommitCrime, _super);
    function CommitCrime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommitCrime;
}(JournalEvent));
exports.CommitCrime = CommitCrime;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CommitCrime", "CrimeType":"assault", "Faction":"The Pilots Federation", "Victim":"Potapinski", "Bounty":210 }
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"CommitCrime", "CrimeType":"fireInNoFireZone", "Faction":"Jarildekald Public Industry", "Fine":100 }
//written when logfile exceeds 500k: log file is closed and a new one opened with this part num
var Continued = (function (_super) {
    __extends(Continued, _super);
    function Continued() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Continued;
}(JournalEvent));
exports.Continued = Continued;
var DatalinkScan = (function (_super) {
    __extends(DatalinkScan, _super);
    function DatalinkScan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DatalinkScan;
}(JournalEvent));
exports.DatalinkScan = DatalinkScan;
var DatalinkVoucher = (function (_super) {
    __extends(DatalinkVoucher, _super);
    function DatalinkVoucher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DatalinkVoucher;
}(JournalEvent));
exports.DatalinkVoucher = DatalinkVoucher;
var DataScanned = (function (_super) {
    __extends(DataScanned, _super);
    function DataScanned() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DataScanned;
}(JournalEvent));
exports.DataScanned = DataScanned;
var DockFighter = (function (_super) {
    __extends(DockFighter, _super);
    function DockFighter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockFighter;
}(JournalEvent));
exports.DockFighter = DockFighter;
var DockSRV = (function (_super) {
    __extends(DockSRV, _super);
    function DockSRV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DockSRV;
}(JournalEvent));
exports.DockSRV = DockSRV;
var FuelScoop = (function (_super) {
    __extends(FuelScoop, _super);
    function FuelScoop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FuelScoop;
}(JournalEvent));
exports.FuelScoop = FuelScoop;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"FuelScoop", "Scooped":0.498700, "Total":16.000000 }
var JetConeBoost = (function (_super) {
    __extends(JetConeBoost, _super);
    function JetConeBoost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JetConeBoost;
}(JournalEvent));
exports.JetConeBoost = JetConeBoost;
var JetConeDamage = (function (_super) {
    __extends(JetConeDamage, _super);
    function JetConeDamage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JetConeDamage;
}(JournalEvent));
exports.JetConeDamage = JetConeDamage;
var LaunchFighter = (function (_super) {
    __extends(LaunchFighter, _super);
    function LaunchFighter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LaunchFighter;
}(JournalEvent));
exports.LaunchFighter = LaunchFighter;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"LaunchFighter", "Loadout":"starter", "PlayerControlled":true }
var LaunchSRV = (function (_super) {
    __extends(LaunchSRV, _super);
    function LaunchSRV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LaunchSRV;
}(JournalEvent));
exports.LaunchSRV = LaunchSRV;
var Promotion = (function (_super) {
    __extends(Promotion, _super);
    function Promotion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Promotion;
}(JournalEvent));
exports.Promotion = Promotion;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Promotion", "Explore":2 }
var RebootRepair = (function (_super) {
    __extends(RebootRepair, _super);
    function RebootRepair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RebootRepair;
}(JournalEvent));
exports.RebootRepair = RebootRepair;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"RebootRepair", "Modules":[ "MainEngines", "TinyHardpoint1" ] }
var ReceiveText = (function (_super) {
    __extends(ReceiveText, _super);
    function ReceiveText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReceiveText;
}(JournalEvent));
exports.ReceiveText = ReceiveText;
var Resurrect = (function (_super) {
    __extends(Resurrect, _super);
    function Resurrect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Resurrect;
}(JournalEvent));
exports.Resurrect = Resurrect;
var SelfDestruct = (function (_super) {
    __extends(SelfDestruct, _super);
    function SelfDestruct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SelfDestruct;
}(JournalEvent));
exports.SelfDestruct = SelfDestruct;
var SendText = (function (_super) {
    __extends(SendText, _super);
    function SendText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SendText;
}(JournalEvent));
exports.SendText = SendText;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"SendText", "To":"HRC-2", "Message":"zoom" }
var Synthesis = (function (_super) {
    __extends(Synthesis, _super);
    function Synthesis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Synthesis;
}(JournalEvent));
exports.Synthesis = Synthesis;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"Synthesis", "Name":"Repair Basic", "Materials":{ "iron":2, "nickel":1 } }
var USSDrop = (function (_super) {
    __extends(USSDrop, _super);
    function USSDrop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return USSDrop;
}(JournalEvent));
exports.USSDrop = USSDrop;
//{ "timestamp":"2016-06-10T14:32:03Z", "event":"USSDrop", "USSType":"Disrupted wake echoes", "USSThreat": 0 }
var VehicleSwitch = (function (_super) {
    __extends(VehicleSwitch, _super);
    function VehicleSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VehicleSwitch;
}(JournalEvent));
exports.VehicleSwitch = VehicleSwitch;
// { "timestamp":"2016-06-10T14:32:03Z", "event":"VehicleSwitch", "To":"Fighter" }
// { "timestamp":"2016-06-10T14:32:03Z", "event":"VehicleSwitch", "To":"Mothership" }
var WingAdd = (function (_super) {
    __extends(WingAdd, _super);
    function WingAdd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WingAdd;
}(JournalEvent));
exports.WingAdd = WingAdd;
var WingJoin = (function (_super) {
    __extends(WingJoin, _super);
    function WingJoin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WingJoin;
}(JournalEvent));
exports.WingJoin = WingJoin;
var WingLeave = (function (_super) {
    __extends(WingLeave, _super);
    function WingLeave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WingLeave;
}(JournalEvent));
exports.WingLeave = WingLeave;
