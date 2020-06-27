import { FSDJump } from "./fsd-jump";
import { Bounty } from "./bounty";
import { CarrierBuy } from "./carrier-buy";
import { SRVDestroyed } from "./srv-destroyed";
import { AppliedToSquadron } from "./applied-to-squadron";
import { ApproachBody } from "./approach-body";
import { ApproachSettlement } from "./approach-settlement";
import { AsteroidCracked } from "./asteroid-cracked";
import { Cargo } from "./cargo";
import { CargoDepot } from "./cargo-depot";
import { CargoTransfer } from "./cargo-transfer";
import { CarrierBankTransfer } from "./carrier-bank-transfer";
import { CarrierCancelDecommission } from "./carrier-cancel-decommission";
import { CarrierCrewServices } from "./carrier-crew-services";
import { CarrierDecommission } from "./carrier-decommission";
import { CarrierDepositFuel } from "./carrier-deposit-fuel";
import { CarrierDockingPermission } from "./carrier-docking-permission";
import { CarrierFinance } from "./carrier-finance";
import { CarrierJump } from "./carrier-jump";
import { CarrierJumpCancelled } from "./carrier-jump-cancelled";
import { CarrierJumpRequest } from "./carrier-jump-request";
import { CarrierModulePack } from "./carrier-module-pack";
import { CarrierNameChanged } from "./carrier-name-changed";
import { CarrierShipPack } from "./carrier-ship-pack";
import { CarrierStats } from "./carrier-stats";
import { CarrierTradeOrder } from "./carrier-trade-order";
import { ClearSavedGame } from "./clear-saved-game";
import { CodexEntry } from "./codex-entry";
import { CollectCargo } from "./collect-cargo";
import { Commander } from "./commander";
import { CommunityGoal } from "./community-goal";
import { CommunityGoalDiscard } from "./community-goal-discard";
import { CommunityGoalJoin } from "./community-goal-join";
import { CommunityGoalReward } from "./community-goal-reward";
import { CrewAssign } from "./crew-assign";
import { CrewFire } from "./crew-fire";
import { CrewHire } from "./crew-hire";
import { CrewLaunchFighter } from "./crew-launch-fighter";
import { CrimeVictim } from "./crime-victim";
import { DisbandedSquadron } from "./disbanded-squadron";
import { DiscoveryScan } from "./discovery-scan";
import { DockFighter } from "./dock-fighter";
import { DockSRV } from "./dock-srv";
import { Docked } from "./docked";
import { DockingCancelled } from "./docking-cancelled";
import { DockingGranted } from "./docking-granted";
import { DockingRequested } from "./docking-requested";
import { DockingTimeout } from "./docking-timeout";
import { EjectCargo } from "./eject-cargo";
import { EngineerContribution } from "./engineer-contribution";
import { EngineerCraft } from "./engineer-craft";
import { EngineerLegacyConvert } from "./engineer-legacy-convert";
import { EngineerProgress } from "./engineer-progress";
import { FighterDestroyed } from "./fighter-destroyed";
import { FighterRebuilt } from "./fighter-rebuilt";
import { FSDTarget } from "./fsd-target";
import { FSSAllBodiesFound } from "./fss-all-bodies-found";
import { FSSDiscoveryScan } from "./fss-discovery-scan";
import { FSSSignalDiscovered } from "./fss-signal-discovered";
import { FuelScoop } from "./fuel-scoop";
import { InvitedToSquadron } from "./invited-to-squadron";
import { JoinedSquadron } from "./joined-squadron";
import { KickedFromSquadron } from "./kicked-from-squadron";
import { Location } from "./location";
import { LaunchDrone } from "./launch-drone";
import { LaunchFighter } from "./launch-fighter";
import { LaunchSRV } from "./launch-srv";
import { LeaveBody } from "./leave-body";
import { LeftSquadron } from "./left-squadron";
import { Liftoff } from "./liftoff";
import { LoadGame } from "./load-game";
import { Loadout } from "./loadout";
import { Market } from "./market";
import { MarketBuy } from "./market-buy";
import { MarketSell } from "./market-sell";
import { MassModuleStore } from "./mass-module-store";
import { MaterialTrade } from "./material-trade";
import { MissionAbandoned } from "./mission-abandoned";
import { MissionAccepted } from "./mission-accepted";
import { MissionCompleted } from "./mission-completed";
import { MissionFailed } from "./mission-failed";
import { Missions } from "./missions";
import { ModuleBuy } from "./module-buy";
import { ModuleSell } from "./module-sell";
import { ModuleRetrieve } from "./module-retrieve";
import { ModuleStore } from "./module-store";
import { MultiSellExplorationData } from "./multi-sell-exploration-data";
import { ModuleSwap } from "./module-swap";
import { NavBeaconScan } from "./nav-beacon-scan";
import { NewCommander } from "./new-commander";
import { NpcCrewPaidWage } from "./npc-crew-paid-wage";
import { NpcCrewRank } from "./npc-crew-rank";
import { Outfitting } from "./outfitting";
import { PayBounties } from "./pay-bounties";
import { PayFines } from "./pay-fines";
import { Powerplay } from "./powerplay";
import { ProspectedAsteroid } from "./prospected-asteroid";
import { ReceiveText } from "./receive-text";
import { RedeemVoucher } from "./redeem-voucher";
import { Repair } from "./repair";
import { Reputation } from "./reputation";
import { ReservoirReplenished } from "./reservoir-replenished";
import { SAAScanComplete } from "./saa-scan-complete";
import { SAASignalsFound } from "./saa-signals-found";
import { Scan } from "./scan";
import { ScientificResearch } from "./scientific-research";
import { SearchAndRescue } from "./search-and-rescue";
import { SellExplorationData } from "./sell-exploration-data";
import { SellShipOnRebuy } from "./sell-ship-on-rebuy";
import { SendText } from "./send-text";
import { SharedBookmarkToSquadron } from "./shared-bookmark-to-squadron";
import { ShipTargetted } from "./ship-targetted";
import { Shipyard } from "./shipyard";
import { ShipyardBuy } from "./shipyard-buy";
import { ShipyardNew } from "./shipyard-new";
import { ShipyardSell } from "./shipyard-sell";
import { ShipyardSwap } from "./shipyard-swap";
import { ShipyardTransfer } from "./shipyard-transfer";
import { Shutdown } from "./shutdown";
import { SquadronCreated } from "./squadron-created";
import { SquadronDemotion } from "./squadron-demotion";
import { SquadronPromotion } from "./squadron-promotion";
import { SquadronStartup } from "./squadron-startup";
import { StartJump } from "./start-jump";
import { Statistics } from "./statistics";
import { StoredModules } from "./stored-modules";
import { StoredShips } from "./stored-ships";
import {
  SupercruiseEntry,
  Resurrect,
  Materials,
  Synthesis,
} from "./journal-event.models";
import { SupercruiseExit } from "./supercruise-exit";
import { TechnologyBroker } from "./technology-broker";
import { Touchdown } from "./touchdown";
import { UnderAttack } from "./under-attack";
import { Undocked } from "./undocked";
import { WonATrophyForSquadron } from "./WonATrophyForSquadron";
import { FileHeader } from "./file-header";
import { MaterialCollected } from "./material-collected";
import { MaterialDiscarded } from "./material-discarded";

export type JournalEventsUnion =
  | AppliedToSquadron
  | ApproachBody
  | ApproachSettlement
  | AsteroidCracked
  | Bounty
  | Cargo
  | CargoDepot
  | CargoTransfer
  | CarrierBankTransfer
  | CarrierBuy
  | CarrierCancelDecommission
  | CarrierCrewServices
  | CarrierDecommission
  | CarrierDepositFuel
  | CarrierDockingPermission
  | CarrierFinance
  | CarrierJump
  | CarrierJumpCancelled
  | CarrierJumpRequest
  | CarrierModulePack
  | CarrierNameChanged
  | CarrierShipPack
  | CarrierStats
  | CarrierTradeOrder
  | ClearSavedGame
  | CodexEntry
  | CollectCargo
  | Commander
  | CommunityGoal
  | CommunityGoalDiscard
  | CommunityGoalJoin
  | CommunityGoalReward
  | CrewAssign
  | CrewFire
  | CrewHire
  | CrewLaunchFighter
  | CrimeVictim
  | DisbandedSquadron
  | DiscoveryScan
  | DockFighter
  | DockSRV
  | Docked
  | DockingCancelled
  | DockingGranted
  | DockingRequested
  | DockingTimeout
  | EjectCargo
  | EngineerContribution
  | EngineerCraft
  | EngineerLegacyConvert
  | EngineerProgress
  | FighterDestroyed
  | FighterRebuilt
  | FileHeader
  | FSDJump
  | FSDTarget
  | FSSAllBodiesFound
  | FSSDiscoveryScan
  | FSSSignalDiscovered
  | FuelScoop
  | InvitedToSquadron
  | JoinedSquadron
  | KickedFromSquadron
  | LaunchDrone
  | LaunchFighter
  | LaunchSRV
  | LeaveBody
  | LeftSquadron
  | Liftoff
  | LoadGame
  | Loadout
  | Location
  | Market
  | MarketBuy
  | MarketSell
  | MassModuleStore
  | Materials
  | MaterialCollected
  | MaterialDiscarded
  | MaterialTrade
  | MissionAbandoned
  | MissionAccepted
  | MissionCompleted
  | MissionFailed
  | Missions
  | ModuleBuy
  | ModuleSell
  | ModuleRetrieve
  | ModuleStore
  | ModuleSwap
  | MultiSellExplorationData
  | NavBeaconScan
  | NewCommander
  | NpcCrewPaidWage
  | NpcCrewRank
  | Outfitting
  | PayBounties
  | PayFines
  | Powerplay
  | ProspectedAsteroid
  | ReceiveText
  | RedeemVoucher
  | Repair
  | Reputation
  | ReservoirReplenished
  | Resurrect
  | SAAScanComplete
  | SAASignalsFound
  | Scan
  | ScientificResearch
  | SearchAndRescue
  | SellExplorationData
  | SellShipOnRebuy
  | SendText
  | SharedBookmarkToSquadron
  | ShipTargetted
  | Shipyard
  | ShipyardBuy
  | ShipyardNew
  | ShipyardSell
  | ShipyardSwap
  | ShipyardTransfer
  | Shutdown
  | SquadronCreated
  | SquadronDemotion
  | SquadronPromotion
  | SquadronStartup
  | SRVDestroyed
  | StartJump
  | Statistics
  | StoredModules
  | StoredShips
  | SupercruiseEntry
  | SupercruiseExit
  | Synthesis
  | TechnologyBroker
  | Touchdown
  | UnderAttack
  | Undocked
  | WonATrophyForSquadron;
