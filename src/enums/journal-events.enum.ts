export enum JournalEvents {
  //fileheader
  fileHeader = "Fileheader",

  //startup
  cargo = "Cargo",
  clearSavedGame = "ClearSavedGame",
  loadout = "Loadout",
  materials = "Materials",
  newCommander = "NewCommander",
  loadGame = "LoadGame",
  passengers = "Passengers",
  progress = "Progress",
  rank = "Rank",
  missions = "Missions",
  statistics = "Statistics",
  reputation = "Reputation",
  commander = "Commander",

  //TRAVEL
  docked = "Docked",
  dockingCancelled = "DockingCancelled",
  dockingDenied = "DockingDenied",
  dockingGranted = "DockingGranted",
  dockingRequested = "DockingRequested",
  dockingTimeout = "DockingTimeout",
  fsdTarget = "FSDTarget",
  fsdJump = "FSDJump",
  liftoff = "Liftoff",
  location = "Location",
  startJump = "StartJump",
  supercruiseEntry = "SupercruiseEntry",
  supercruiseExit = "SupercruiseExit",
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
  fighterDestroyed = "FighterDestroyed",
  fighterRebuilt = "FighterRebuilt",
  underAttack = "UnderAttack",
  shipTargetted = "ShipTargetted",
  systemsShutdown = "SystemsShutdown",
  srvDestroyed = "SRVDestroyed",

  //EXPLORATION
  scan = "Scan",
  materialCollected = "MaterialCollected",
  materialDiscarded = "MaterialDiscarded",
  materialDiscovered = "MaterialDiscovered",
  buyExplorationData = "BuyExplorationData",
  sellExplorationData = "SellExplorationData",
  screenshot = "Screenshot",
  discoveryScan = "DiscoveryScan",
  navBeaconScan = "NavBeaconScan",
  saaScanComplete = "SAAScanComplete",
  codexEntry = "CodexEntry",
  fssDiscoveryScan = "FSSDiscoveryScan",
  fssSignalDiscovered = "FSSSignalDiscovered",
  fssAllBodiesFound = "FSSAllBodiesFound",
  multiSellExplorationData = "MultiSellExplorationData",
  saaSignalsFound = "SAASignalsFound",

  //TRADE
  buyTradeData = "BuyTradeData",
  collectCargo = "CollectCargo",
  ejectCargo = "EjectCargo",
  marketBuy = "MarketBuy",
  marketSell = "MarketSell",
  market = "Market",
  miningRefined = "MiningRefined",
  materialTrade = "MaterialTrade",

  //STATION SERVICES
  buyAmmo = "BuyAmmo",
  buyDones = "BuyDrones",
  communityGoalDiscard = "CommunityGoalDiscard",
  communityGoalJoin = "CommunityGoalJoin",
  communityGoalReward = "CommunityGoalReward",
  communityGoal = "CommunityGoal",
  crewAssign = "CrewAssign",
  crewFire = "CrewFire",
  crewHire = "CrewHire",
  engineerContribution = "EngineerContribution",
  engineerLegacyConvert = "EngineerLegacyConvert",
  engineerCraft = "EngineerCraft",
  engineerProgress = "EngineerProgress",
  fetchRemoteModule = "FetchRemoteModule",
  massModuleStore = "MassModuleStore",
  missionAbandoned = "MissionAbandoned",
  missionAccepted = "MissionAccepted",
  missionCompleted = "MissionCompleted",
  missionFailed = "MissionFailed",
  moduleBuy = "ModuleBuy",
  moduleRetrieve = "ModuleRetrieve",
  moduleSell = "ModuleSell",
  moduleSellRemote = "ModuleSellRemote",
  moduleStore = "ModuleStore",
  moduleSwap = "ModuleSwap",
  payFines = "PayFines",
  payLegacyFines = "PayLegacyFines",
  payBounties = "PayBounties",
  redeemVoucher = "RedeemVoucher",
  refuelAll = "RefuelAll",
  refuelPartial = "RefuelPartial",
  repair = "Repair",
  repairAll = "RepairAll",
  restockVehicle = "RestockVehicle",
  scientificResearch = "ScientificResearch",
  sellDrones = "SellDrones",
  setUserShipName = "SetUserShipName",
  shipyard = "Shipyard",
  shipyardBuy = "ShipyardBuy",
  shipyardNew = "ShipyardNew",
  shipyardSell = "ShipyardSell",
  shipyardTransfer = "ShipyardTransfer",
  shipyardSwap = "ShipyardSwap",
  cargoDepot = "CargoDepot",
  outfitting = "Outfitting",
  technologyBroker = "TechnologyBroker",
  storedModules = "StoredModules",
  storedShips = "StoredShips",
  sellShipOnRebuy = "SellShipOnRebuy",

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
  powerplay = "Powerplay",

  //OTHER EVENTS
  approachSettlement = "ApproachSettlement",
  approachBody = "ApproachBody",
  leaveBody = "LeaveBody",
  cockpitBreached = "CockpitBreached",
  commitCrime = "CommitCrime",
  continued = "Continued",
  crewLaunchFighter = "CrewLaunchFighter",
  crewMemberJoins = "CrewMemberJoins",
  crewMemberQuits = "CrewMemberQuits",
  crewMemberRoleChange = "CrewMemberRoleChange",
  datalinkScan = "DatalinkScan",
  dataScanned = "DataScanned",
  dockFighter = "DockFighter",
  dockSRV = "DockSRV",
  endCrewSession = "EndCrewSession",
  fuelScoop = "FuelScoop",
  friends = "Friends",
  jetConeBoost = "JetConeBoost",
  jetConeDamage = "JetConeDamage",
  joinACrew = "JoinACrew",
  kickCrewMember = "KickCrewMember",
  launchFighter = "LaunchFighter",
  launchSRV = "LaunchSRV",
  promotion = "Promotion",
  quitACrew = "QuitACrew",
  rebootRepair = "RebootRepair",
  receiveText = "ReceiveText",
  resurrect = "Resurrect",
  scanned = "Scanned",
  selfDestruct = "SelfDestruct",
  sendText = "SendText",
  synthesis = "Synthesis",
  vehicleSwitch = "VehicleSwitch",
  wingAdd = "WingAdd",
  wingInvite = "WingInvite",
  wingJoin = "WingJoin",
  wingLeave = "WingLeave",
  launchDrone = "LaunchDrone",
  searchAndRescue = "SearchAndRescue",
  npcCrewPaidWage = "NpcCrewPaidWage",
  npcCrewRank = "NpcCrewRank",
  shutDown = "Shutdown",
  asteroidCracked = "AsteroidCracked",
  reservoirReplenished = "ReservoirReplenished",
  prospectedAsteroid = "ProspectedAsteroid",
  cargoTransfer = "CargoTransfer",

  //SQUADRONS
  appliedToSquadron = "AppliedToSquadron",
  disbanedSquadron = "DisbandedSquadron",
  invitedToSquadron = "InvitedToSquadron",
  joinedSquadron = "JoinedSquadron",
  kickedFromSquadron = "KickedFromSquadron",
  leftSquadron = "LeftSquadron",
  sharedBookmarkToASquadron = "sharedBookmarkToASquadron",
  squadronCreated = "SquadronCreated",
  squadronDemotion = "SquadronDemotion",
  squadronPromotion = "SquadronPromotion",
  wonATrophyForSquadron = "WonATrophyForSquadron",
  squadronStartup = "SquadronStartup",

  //CARRIERS
  carrierBankTransfer = "CarrierBankTransfer",
  carrierBuy = "CarrierBuy",
  carrierCancelDecommission = "CarrierCancelDecommission",
  carrierCrewServices = "CarrierCrewServices",
  carrierDecommission = "CarrierDecommission",
  carrierDepositFuel = "CarrierDepositFuel",
  carrierDockingPermission = "CarrierDockingPermission",
  carrierFinance = "CarrierFinance",
  carrierJumpCancelled = "CarrierJumpCancelled",
  carrierJumpRequest = "CarrierJumpRequest",
  carrierJump = "CarrierJump",
  carrierModulePack = "CarrierModulePack",
  carrierNameChanged = "CarrierNameChanged",
  carrierShipPack = "CarrierShipPack",
  carrierStats = "CarrierStats",
  carrierTradeOrder = "CarrierTradeOrder",
}
