
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


## Index

### Enumerations

* [AtmosphereTypes](enums/atmospheretypes.md)
* [BodyTypes](enums/bodytypes.md)
* [CabinClass](enums/cabinclass.md)
* [CombatRanks](enums/combatranks.md)
* [CrewRoles](enums/crewroles.md)
* [Crimes](enums/crimes.md)
* [DamageType](enums/damagetype.md)
* [EngineerIDs](enums/engineerids.md)
* [JournalEvents](enums/journalevents.md)
* [ModuleAttribute](enums/moduleattribute.md)
* [MusicTrackNames](enums/musictracknames.md)
* [PlanetTypes](enums/planettypes.md)
* [ReputationEffect](enums/reputationeffect.md)
* [StarLuminosityClasses](enums/starluminosityclasses.md)
* [StarTypes](enums/startypes.md)
* [StationServices](enums/stationservices.md)
* [VolcanismTypes](enums/volcanismtypes.md)
* [WeaponMode](enums/weaponmode.md)


### Classes

* [AfmuRepairs](classes/afmurepairs.md)
* [ApproachBody](classes/approachbody.md)
* [ApproachSettlement](classes/approachsettlement.md)
* [Bounty](classes/bounty.md)
* [BuyAmmo](classes/buyammo.md)
* [BuyDrones](classes/buydrones.md)
* [BuyExplorationData](classes/buyexplorationdata.md)
* [BuyTradeData](classes/buytradedata.md)
* [CapShipBond](classes/capshipbond.md)
* [Cargo](classes/cargo.md)
* [CargoDepot](classes/cargodepot.md)
* [ChangeCrewRole](classes/changecrewrole.md)
* [ClearSavedGame](classes/clearsavedgame.md)
* [CockpitBreached](classes/cockpitbreached.md)
* [CollectCargo](classes/collectcargo.md)
* [Commander](classes/commander.md)
* [CommitCrime](classes/commitcrime.md)
* [CommunityGoal](classes/communitygoal.md)
* [CommunityGoalDiscard](classes/communitygoaldiscard.md)
* [CommunityGoalJoin](classes/communitygoaljoin.md)
* [CommunityGoalReward](classes/communitygoalreward.md)
* [Continued](classes/continued.md)
* [CrewAssign](classes/crewassign.md)
* [CrewFire](classes/crewfire.md)
* [CrewHire](classes/crewhire.md)
* [CrewLaunchFighter](classes/crewlaunchfighter.md)
* [CrewMemberJoins](classes/crewmemberjoins.md)
* [CrewMemberQuits](classes/crewmemberquits.md)
* [CrewMemberRoleChange](classes/crewmemberrolechange.md)
* [DataScanned](classes/datascanned.md)
* [DatalinkScan](classes/datalinkscan.md)
* [DatalinkVoucher](classes/datalinkvoucher.md)
* [Died](classes/died.md)
* [DiscoveryScan](classes/discoveryscan.md)
* [DockFighter](classes/dockfighter.md)
* [DockSRV](classes/docksrv.md)
* [Docked](classes/docked.md)
* [DockingCancelled](classes/dockingcancelled.md)
* [DockingDenied](classes/dockingdenied.md)
* [DockingGranted](classes/dockinggranted.md)
* [DockingRequested](classes/dockingrequested.md)
* [DockingTimeout](classes/dockingtimeout.md)
* [EjectCargo](classes/ejectcargo.md)
* [EndCrewSession](classes/endcrewsession.md)
* [EngineerContribution](classes/engineercontribution.md)
* [EngineerCraft](classes/engineercraft.md)
* [EngineerLegacyConvert](classes/engineerlegacyconvert.md)
* [EngineerProgress](classes/engineerprogress.md)
* [EscapeInterdiction](classes/escapeinterdiction.md)
* [FSDJump](classes/fsdjump.md)
* [Faction](classes/faction.md)
* [FactionKillBond](classes/factionkillbond.md)
* [FetchRemoteModule](classes/fetchremotemodule.md)
* [FighterDestroyed](classes/fighterdestroyed.md)
* [FighterRebuilt](classes/fighterrebuilt.md)
* [FileHeader](classes/fileheader.md)
* [Friends](classes/friends.md)
* [FuelScoop](classes/fuelscoop.md)
* [HeatDamage](classes/heatdamage.md)
* [HeatWarning](classes/heatwarning.md)
* [HullDamage](classes/hulldamage.md)
* [Interdicted](classes/interdicted.md)
* [Interdiction](classes/interdiction.md)
* [JetConeBoost](classes/jetconeboost.md)
* [JetConeDamage](classes/jetconedamage.md)
* [JoinACrew](classes/joinacrew.md)
* [JournalEvent](classes/journalevent.md)
* [LaunchDrone](classes/launchdrone.md)
* [LaunchFighter](classes/launchfighter.md)
* [LaunchSRV](classes/launchsrv.md)
* [LeaveBody](classes/leavebody.md)
* [Liftoff](classes/liftoff.md)
* [LoadGame](classes/loadgame.md)
* [Loadout](classes/loadout.md)
* [Location](classes/location.md)
* [Market](classes/market.md)
* [MarketBuy](classes/marketbuy.md)
* [MarketSell](classes/marketsell.md)
* [MassModuleStore](classes/massmodulestore.md)
* [MaterialCollected](classes/materialcollected.md)
* [MaterialDiscarded](classes/materialdiscarded.md)
* [MaterialDiscovered](classes/materialdiscovered.md)
* [MaterialTrade](classes/materialtrade.md)
* [Materials](classes/materials.md)
* [MiningRefined](classes/miningrefined.md)
* [Mission](classes/mission.md)
* [MissionAbandoned](classes/missionabandoned.md)
* [MissionAccepted](classes/missionaccepted.md)
* [MissionCompleted](classes/missioncompleted.md)
* [MissionFailed](classes/missionfailed.md)
* [MissionRedirected](classes/missionredirected.md)
* [Missions](classes/missions.md)
* [ModuleBuy](classes/modulebuy.md)
* [ModuleInfo](classes/moduleinfo.md)
* [ModuleRetrieve](classes/moduleretrieve.md)
* [ModuleSell](classes/modulesell.md)
* [ModuleSellRemote](classes/modulesellremote.md)
* [ModuleStore](classes/modulestore.md)
* [ModuleSwap](classes/moduleswap.md)
* [Music](classes/music.md)
* [NavBeaconScan](classes/navbeaconscan.md)
* [NewCommander](classes/newcommander.md)
* [NpcCrewRank](classes/npccrewrank.md)
* [Outfitting](classes/outfitting.md)
* [PVPKill](classes/pvpkill.md)
* [Passengers](classes/passengers.md)
* [PayFines](classes/payfines.md)
* [PayLegacyFines](classes/paylegacyfines.md)
* [PowerplayCollect](classes/powerplaycollect.md)
* [PowerplayDefect](classes/powerplaydefect.md)
* [PowerplayDeliver](classes/powerplaydeliver.md)
* [PowerplayFastTrack](classes/powerplayfasttrack.md)
* [PowerplayJoin](classes/powerplayjoin.md)
* [PowerplayLeave](classes/powerplayleave.md)
* [PowerplaySalary](classes/powerplaysalary.md)
* [PowerplayVote](classes/powerplayvote.md)
* [PowerplayVoucher](classes/powerplayvoucher.md)
* [Progress](classes/progress.md)
* [Promotion](classes/promotion.md)
* [QuitACrew](classes/quitacrew.md)
* [Rank](classes/rank.md)
* [RebootRepair](classes/rebootrepair.md)
* [ReceiveText](classes/receivetext.md)
* [RedeemVoucher](classes/redeemvoucher.md)
* [RefuelPartial](classes/refuelpartial.md)
* [Repair](classes/repair.md)
* [RepairAll](classes/repairall.md)
* [RepairDrone](classes/repairdrone.md)
* [Reputation](classes/reputation.md)
* [RestockVehicle](classes/restockvehicle.md)
* [Resurrect](classes/resurrect.md)
* [SRVDestroyed](classes/srvdestroyed.md)
* [Scan](classes/scan.md)
* [Scanned](classes/scanned.md)
* [ScientificResearch](classes/scientificresearch.md)
* [Screenshot](classes/screenshot.md)
* [SearchAndRescue](classes/searchandrescue.md)
* [SelfDestruct](classes/selfdestruct.md)
* [SellDrones](classes/selldrones.md)
* [SellExplorationData](classes/sellexplorationdata.md)
* [SellShipOnRebuy](classes/sellshiponrebuy.md)
* [SendText](classes/sendtext.md)
* [SetUserShipName](classes/setusershipname.md)
* [ShieldState](classes/shieldstate.md)
* [ShipTargetted](classes/shiptargetted.md)
* [Shipyard](classes/shipyard.md)
* [ShipyardBuy](classes/shipyardbuy.md)
* [ShipyardNew](classes/shipyardnew.md)
* [ShipyardSell](classes/shipyardsell.md)
* [ShipyardSwap](classes/shipyardswap.md)
* [ShipyardTransfer](classes/shipyardtransfer.md)
* [Shutdown](classes/shutdown.md)
* [StartJump](classes/startjump.md)
* [Statistics](classes/statistics.md)
* [StoredModules](classes/storedmodules.md)
* [StoredShips](classes/storedships.md)
* [SupercruiseEntry](classes/supercruiseentry.md)
* [SupercruiseExit](classes/supercruiseexit.md)
* [Synthesis](classes/synthesis.md)
* [SystemsShutdown](classes/systemsshutdown.md)
* [TechnologyBroker](classes/technologybroker.md)
* [Touchdown](classes/touchdown.md)
* [USSDrop](classes/ussdrop.md)
* [UnderAttack](classes/underattack.md)
* [Undocked](classes/undocked.md)
* [VehicleSwitch](classes/vehicleswitch.md)
* [WingAdd](classes/wingadd.md)
* [WingInvite](classes/winginvite.md)
* [WingJoin](classes/wingjoin.md)
* [WingLeave](classes/wingleave.md)
* [kickCrewMember](classes/kickcrewmember.md)
* [refuelAll](classes/refuelall.md)



---
