type Commodity = {
  symbol: string;
  category: string;
  name: string;
};

export const COMMODITY_MAP = new Map<number, Commodity>([
  [128049152, { symbol: "Platinum", category: "Metals", name: "Platinum" }],
  [128049153, { symbol: "Palladium", category: "Metals", name: "Palladium" }],
  [128049154, { symbol: "Gold", category: "Metals", name: "Gold" }],
  [128049155, { symbol: "Silver", category: "Metals", name: "Silver" }],
  [
    128049156,
    { symbol: "Bertrandite", category: "Minerals", name: "Bertrandite" },
  ],
  [128049157, { symbol: "Indite", category: "Minerals", name: "Indite" }],
  [128049158, { symbol: "Gallite", category: "Minerals", name: "Gallite" }],
  [128049159, { symbol: "Coltan", category: "Minerals", name: "Coltan" }],
  [128049160, { symbol: "Uraninite", category: "Minerals", name: "Uraninite" }],
  [
    128049161,
    { symbol: "Lepidolite", category: "Minerals", name: "Lepidolite" },
  ],
  [128049162, { symbol: "Cobalt", category: "Metals", name: "Cobalt" }],
  [128049163, { symbol: "Rutile", category: "Minerals", name: "Rutile" }],
  [128049165, { symbol: "Bauxite", category: "Minerals", name: "Bauxite" }],
  [128049166, { symbol: "Water", category: "Chemicals", name: "Water" }],
  [128049168, { symbol: "Beryllium", category: "Metals", name: "Beryllium" }],
  [128049169, { symbol: "Indium", category: "Metals", name: "Indium" }],
  [128049170, { symbol: "Gallium", category: "Metals", name: "Gallium" }],
  [128049171, { symbol: "Tantalum", category: "Metals", name: "Tantalum" }],
  [128049172, { symbol: "Uranium", category: "Metals", name: "Uranium" }],
  [128049173, { symbol: "Lithium", category: "Metals", name: "Lithium" }],
  [128049174, { symbol: "Titanium", category: "Metals", name: "Titanium" }],
  [128049175, { symbol: "Copper", category: "Metals", name: "Copper" }],
  [128049176, { symbol: "Aluminium", category: "Metals", name: "Aluminium" }],
  [128049177, { symbol: "Algae", category: "Foods", name: "Algae" }],
  [
    128049178,
    {
      symbol: "FruitAndVegetables",
      category: "Foods",
      name: "Fruit and Vegetables",
    },
  ],
  [128049180, { symbol: "Grain", category: "Foods", name: "Grain" }],
  [128049182, { symbol: "Animalmeat", category: "Foods", name: "Animal Meat" }],
  [128049183, { symbol: "Fish", category: "Foods", name: "Fish" }],
  [
    128049184,
    { symbol: "FoodCartridges", category: "Foods", name: "Food Cartridges" },
  ],
  [
    128049185,
    { symbol: "SyntheticMeat", category: "Foods", name: "Synthetic Meat" },
  ],
  [128049188, { symbol: "Tea", category: "Foods", name: "Tea" }],
  [128049189, { symbol: "Coffee", category: "Foods", name: "Coffee" }],
  [128049190, { symbol: "Leather", category: "Textiles", name: "Leather" }],
  [
    128049191,
    { symbol: "NaturalFabrics", category: "Textiles", name: "Natural Fabrics" },
  ],
  [
    128049193,
    {
      symbol: "SyntheticFabrics",
      category: "Textiles",
      name: "Synthetic Fabrics",
    },
  ],
  [
    128049197,
    { symbol: "Polymers", category: "Industrial Materials", name: "Polymers" },
  ],
  [
    128049199,
    {
      symbol: "Semiconductors",
      category: "Industrial Materials",
      name: "Semiconductors",
    },
  ],
  [
    128049200,
    {
      symbol: "Superconductors",
      category: "Industrial Materials",
      name: "Superconductors",
    },
  ],
  [
    128049202,
    { symbol: "HydrogenFuel", category: "Chemicals", name: "Hydrogen Fuel" },
  ],
  [
    128049203,
    { symbol: "MineralOil", category: "Chemicals", name: "Mineral Oil" },
  ],
  [
    128049204,
    { symbol: "Explosives", category: "Chemicals", name: "Explosives" },
  ],
  [
    128049205,
    { symbol: "Pesticides", category: "Chemicals", name: "Pesticides" },
  ],
  [
    128049208,
    {
      symbol: "AgriculturalMedicines",
      category: "Medicines",
      name: "Agri-Medicines",
    },
  ],
  [
    128049209,
    {
      symbol: "PerformanceEnhancers",
      category: "Medicines",
      name: "Performance Enhancers",
    },
  ],
  [
    128049210,
    {
      symbol: "BasicMedicines",
      category: "Medicines",
      name: "Basic Medicines",
    },
  ],
  [
    128049212,
    { symbol: "BasicNarcotics", category: "Legal Drugs", name: "Narcotics" },
  ],
  [128049213, { symbol: "Tobacco", category: "Legal Drugs", name: "Tobacco" }],
  [128049214, { symbol: "Beer", category: "Legal Drugs", name: "Beer" }],
  [128049215, { symbol: "Wine", category: "Legal Drugs", name: "Wine" }],
  [128049216, { symbol: "Liquor", category: "Legal Drugs", name: "Liquor" }],
  [
    128049217,
    {
      symbol: "PowerGenerators",
      category: "Machinery",
      name: "Power Generators",
    },
  ],
  [
    128049218,
    {
      symbol: "WaterPurifiers",
      category: "Machinery",
      name: "Water Purifiers",
    },
  ],
  [
    128049220,
    {
      symbol: "HeliostaticFurnaces",
      category: "Machinery",
      name: "Microbial Furnaces",
    },
  ],
  [
    128049221,
    {
      symbol: "MineralExtractors",
      category: "Machinery",
      name: "Mineral Extractors",
    },
  ],
  [
    128049222,
    {
      symbol: "CropHarvesters",
      category: "Machinery",
      name: "Crop Harvesters",
    },
  ],
  [
    128049223,
    {
      symbol: "MarineSupplies",
      category: "Machinery",
      name: "Marine Equipment",
    },
  ],
  [
    128049225,
    {
      symbol: "ComputerComponents",
      category: "Technology",
      name: "Computer Components",
    },
  ],
  [
    128049226,
    {
      symbol: "HazardousEnvironmentSuits",
      category: "Technology",
      name: "H.E. Suits",
    },
  ],
  [128049227, { symbol: "Robotics", category: "Technology", name: "Robotics" }],
  [
    128049228,
    {
      symbol: "AutoFabricators",
      category: "Technology",
      name: "Auto-Fabricators",
    },
  ],
  [
    128049229,
    {
      symbol: "AnimalMonitors",
      category: "Technology",
      name: "Animal Monitors",
    },
  ],
  [
    128049230,
    {
      symbol: "AquaponicSystems",
      category: "Technology",
      name: "Aquaponic Systems",
    },
  ],
  [
    128049231,
    {
      symbol: "AdvancedCatalysers",
      category: "Technology",
      name: "Advanced Catalysers",
    },
  ],
  [
    128049232,
    {
      symbol: "TerrainEnrichmentSystems",
      category: "Technology",
      name: "Land Enrichment Systems",
    },
  ],
  [
    128049233,
    {
      symbol: "PersonalWeapons",
      category: "Weapons",
      name: "Personal Weapons",
    },
  ],
  [
    128049234,
    { symbol: "BattleWeapons", category: "Weapons", name: "Battle Weapons" },
  ],
  [
    128049235,
    { symbol: "ReactiveArmour", category: "Weapons", name: "Reactive Armour" },
  ],
  [
    128049236,
    {
      symbol: "NonLethalWeapons",
      category: "Weapons",
      name: "Non-Lethal Weapons",
    },
  ],
  [
    128049238,
    {
      symbol: "DomesticAppliances",
      category: "Consumer Items",
      name: "Domestic Appliances",
    },
  ],
  [
    128049240,
    {
      symbol: "ConsumerTechnology",
      category: "Consumer Items",
      name: "Consumer Technology",
    },
  ],
  [
    128049241,
    { symbol: "Clothing", category: "Consumer Items", name: "Clothing" },
  ],
  [128049243, { symbol: "Slaves", category: "Slavery", name: "Slaves" }],
  [128049244, { symbol: "Biowaste", category: "Waste", name: "Biowaste" }],
  [128049245, { symbol: "ToxicWaste", category: "Waste", name: "Toxic Waste" }],
  [
    128049246,
    { symbol: "ChemicalWaste", category: "Waste", name: "Chemical Waste" },
  ],
  [128049248, { symbol: "Scrap", category: "Waste", name: "Scrap" }],
  [
    128049669,
    {
      symbol: "ProgenitorCells",
      category: "Medicines",
      name: "Progenitor Cells",
    },
  ],
  [
    128049670,
    {
      symbol: "CombatStabilisers",
      category: "Medicines",
      name: "Combat Stabilisers",
    },
  ],
  [
    128049671,
    {
      symbol: "ResonatingSeparators",
      category: "Technology",
      name: "Resonating Separators",
    },
  ],
  [
    128049672,
    {
      symbol: "BioReducingLichen",
      category: "Technology",
      name: "Bioreducing Lichen",
    },
  ],
  [
    128064028,
    {
      symbol: "AtmosphericExtractors",
      category: "Machinery",
      name: "Atmospheric Processors",
    },
  ],
  [128066403, { symbol: "Drones", category: "NonMarketable", name: "Limpets" }],
  [
    128666752,
    { symbol: "USSCargoBlackBox", category: "Salvage", name: "Black Box" },
  ],
  [
    128666754,
    { symbol: "USSCargoTradeData", category: "Salvage", name: "Trade Data" },
  ],
  [
    128666755,
    {
      symbol: "USSCargoMilitaryPlans",
      category: "Salvage",
      name: "Military Plans",
    },
  ],
  [
    128666756,
    {
      symbol: "USSCargoAncientArtefact",
      category: "Salvage",
      name: "Ancient Artefact",
    },
  ],
  [
    128666757,
    {
      symbol: "USSCargoRareArtwork",
      category: "Salvage",
      name: "Rare Artwork",
    },
  ],
  [
    128666758,
    {
      symbol: "USSCargoExperimentalChemicals",
      category: "Salvage",
      name: "Experimental Chemicals",
    },
  ],
  [
    128666759,
    {
      symbol: "USSCargoRebelTransmissions",
      category: "Salvage",
      name: "Rebel Transmissions",
    },
  ],
  [
    128666760,
    {
      symbol: "USSCargoPrototypeTech",
      category: "Salvage",
      name: "Prototype Tech",
    },
  ],
  [
    128666761,
    {
      symbol: "USSCargoTechnicalBlueprints",
      category: "Salvage",
      name: "Technical Blueprints",
    },
  ],
  [
    128667728,
    { symbol: "ImperialSlaves", category: "Slavery", name: "Imperial Slaves" },
  ],
  [
    128668547,
    { symbol: "UnknownArtifact", category: "Salvage", name: "Thargoid Sensor" },
  ],
  [128668548, { symbol: "AiRelics", category: "Salvage", name: "AI Relics" }],
  [
    128668549,
    { symbol: "Hafnium178", category: "Metals", name: "Hafnium 178" },
  ],
  [128668550, { symbol: "Painite", category: "Minerals", name: "Painite" }],
  [
    128668551,
    { symbol: "Antiquities", category: "Salvage", name: "Antiquities" },
  ],
  [
    128668552,
    {
      symbol: "MilitaryIntelligence",
      category: "Salvage",
      name: "Military Intelligence",
    },
  ],
  [128671118, { symbol: "Osmium", category: "Metals", name: "Osmium" }],
  [
    128671443,
    {
      symbol: "SAP8CoreContainer",
      category: "Salvage",
      name: "SAP 8 Core Container",
    },
  ],
  [
    128671444,
    {
      symbol: "TrinketsOfFortune",
      category: "Consumer Items",
      name: "Trinkets of Hidden Fortune",
    },
  ],
  [
    128672123,
    {
      symbol: "WreckageComponents",
      category: "Salvage",
      name: "Wreckage Components",
    },
  ],
  [
    128672124,
    {
      symbol: "EncriptedDataStorage",
      category: "Salvage",
      name: "Encrypted Data Storage",
    },
  ],
  [
    128672125,
    {
      symbol: "OccupiedCryoPod",
      category: "Salvage",
      name: "Occupied Escape Pod",
    },
  ],
  [
    128672126,
    {
      symbol: "PersonalEffects",
      category: "Salvage",
      name: "Personal Effects",
    },
  ],
  [
    128672127,
    {
      symbol: "ComercialSamples",
      category: "Salvage",
      name: "Commercial Samples",
    },
  ],
  [
    128672128,
    { symbol: "TacticalData", category: "Salvage", name: "Tactical Data" },
  ],
  [
    128672129,
    { symbol: "AssaultPlans", category: "Salvage", name: "Assault Plans" },
  ],
  [
    128672130,
    {
      symbol: "EncryptedCorrespondence",
      category: "Salvage",
      name: "Encrypted Correspondence",
    },
  ],
  [
    128672131,
    { symbol: "DiplomaticBag", category: "Salvage", name: "Diplomatic Bag" },
  ],
  [
    128672132,
    {
      symbol: "ScientificResearch",
      category: "Salvage",
      name: "Scientific Research",
    },
  ],
  [
    128672133,
    {
      symbol: "ScientificSamples",
      category: "Salvage",
      name: "Scientific Samples",
    },
  ],
  [
    128672134,
    {
      symbol: "PoliticalPrisoner",
      category: "Salvage",
      name: "Political Prisoners",
    },
  ],
  [128672135, { symbol: "Hostage", category: "Salvage", name: "Hostages" }],
  [
    128672136,
    {
      symbol: "LargeExplorationDataCash",
      category: "Salvage",
      name: "Large Survey Data Cache",
    },
  ],
  [
    128672137,
    {
      symbol: "SmallExplorationDataCash",
      category: "Salvage",
      name: "Small Survey Data Cache",
    },
  ],
  [
    128672159,
    {
      symbol: "AntiqueJewellery",
      category: "Salvage",
      name: "Antique Jewellery",
    },
  ],
  [
    128672160,
    { symbol: "PreciousGems", category: "Salvage", name: "Precious Gems" },
  ],
  [
    128672161,
    { symbol: "EarthRelics", category: "Salvage", name: "Earth Relics" },
  ],
  [128672162, { symbol: "GeneBank", category: "Salvage", name: "Gene Bank" }],
  [
    128672163,
    { symbol: "TimeCapsule", category: "Salvage", name: "Time Capsule" },
  ],
  [128672294, { symbol: "Cryolite", category: "Minerals", name: "Cryolite" }],
  [128672295, { symbol: "Goslarite", category: "Minerals", name: "Goslarite" }],
  [
    128672296,
    { symbol: "Moissanite", category: "Minerals", name: "Moissanite" },
  ],
  [
    128672297,
    { symbol: "Pyrophyllite", category: "Minerals", name: "Pyrophyllite" },
  ],
  [128672298, { symbol: "Lanthanum", category: "Metals", name: "Lanthanum" }],
  [128672299, { symbol: "Thallium", category: "Metals", name: "Thallium" }],
  [128672300, { symbol: "Bismuth", category: "Metals", name: "Bismuth" }],
  [128672301, { symbol: "Thorium", category: "Metals", name: "Thorium" }],
  [
    128672302,
    {
      symbol: "CeramicComposites",
      category: "Industrial Materials",
      name: "Ceramic Composites",
    },
  ],
  [
    128672303,
    {
      symbol: "SyntheticReagents",
      category: "Chemicals",
      name: "Synthetic Reagents",
    },
  ],
  [
    128672304,
    { symbol: "NerveAgents", category: "Chemicals", name: "Nerve Agents" },
  ],
  [
    128672305,
    {
      symbol: "SurfaceStabilisers",
      category: "Chemicals",
      name: "Surface Stabilisers",
    },
  ],
  [
    128672306,
    {
      symbol: "BootlegLiquor",
      category: "Legal Drugs",
      name: "Bootleg Liquor",
    },
  ],
  [
    128672307,
    {
      symbol: "GeologicalEquipment",
      category: "Machinery",
      name: "Geological Equipment",
    },
  ],
  [
    128672308,
    {
      symbol: "ThermalCoolingUnits",
      category: "Machinery",
      name: "Thermal Cooling Units",
    },
  ],
  [
    128672309,
    {
      symbol: "BuildingFabricators",
      category: "Machinery",
      name: "Building Fabricators",
    },
  ],
  [
    128672310,
    { symbol: "MuTomImager", category: "Technology", name: "Muon Imager" },
  ],
  [
    128672311,
    {
      symbol: "StructuralRegulators",
      category: "Technology",
      name: "Structural Regulators",
    },
  ],
  [128672312, { symbol: "Landmines", category: "Weapons", name: "Landmines" }],
  [
    128672313,
    {
      symbol: "SkimerComponents",
      category: "Machinery",
      name: "Skimmer Components",
    },
  ],
  [
    128672314,
    {
      symbol: "EvacuationShelter",
      category: "Consumer Items",
      name: "Evacuation Shelter",
    },
  ],
  [
    128672315,
    {
      symbol: "GeologicalSamples",
      category: "Salvage",
      name: "Geological Samples",
    },
  ],
  [
    128672701,
    {
      symbol: "MetaAlloys",
      category: "Industrial Materials",
      name: "Meta-Alloys",
    },
  ],
  [128672775, { symbol: "Taaffeite", category: "Minerals", name: "Taaffeite" }],
  [128672776, { symbol: "Jadeite", category: "Minerals", name: "Jadeite" }],
  [
    128672810,
    {
      symbol: "UnstableDataCore",
      category: "Salvage",
      name: "Unstable Data Core",
    },
  ],
  [
    128672811,
    {
      symbol: "DamagedEscapePod",
      category: "Salvage",
      name: "Damaged Escape Pod",
    },
  ],
  [
    128673845,
    { symbol: "Praseodymium", category: "Metals", name: "Praseodymium" },
  ],
  [
    128673846,
    { symbol: "Bromellite", category: "Minerals", name: "Bromellite" },
  ],
  [128673847, { symbol: "Samarium", category: "Metals", name: "Samarium" }],
  [
    128673848,
    {
      symbol: "LowTemperatureDiamond",
      category: "Minerals",
      name: "Low Temperature Diamonds",
    },
  ],
  [
    128673850,
    {
      symbol: "HydrogenPeroxide",
      category: "Chemicals",
      name: "Hydrogen Peroxide",
    },
  ],
  [
    128673851,
    { symbol: "LiquidOxygen", category: "Chemicals", name: "Liquid oxygen" },
  ],
  [
    128673852,
    {
      symbol: "MethanolMonohydrateCrystals",
      category: "Minerals",
      name: "Methanol Monohydrate Crystals",
    },
  ],
  [
    128673853,
    {
      symbol: "LithiumHydroxide",
      category: "Minerals",
      name: "Lithium Hydroxide",
    },
  ],
  [
    128673854,
    {
      symbol: "MethaneClathrate",
      category: "Minerals",
      name: "Methane Clathrate",
    },
  ],
  [
    128673855,
    {
      symbol: "InsulatingMembrane",
      category: "Industrial Materials",
      name: "Insulating Membrane",
    },
  ],
  [
    128673856,
    {
      symbol: "CMMComposite",
      category: "Industrial Materials",
      name: "CMM Composite",
    },
  ],
  [
    128673857,
    {
      symbol: "CoolingHoses",
      category: "Industrial Materials",
      name: "Micro-weave Cooling Hoses",
    },
  ],
  [
    128673858,
    {
      symbol: "NeofabricInsulation",
      category: "Industrial Materials",
      name: "Neofabric Insulation",
    },
  ],
  [
    128673859,
    {
      symbol: "ArticulationMotors",
      category: "Machinery",
      name: "Articulation Motors",
    },
  ],
  [
    128673860,
    { symbol: "HNShockMount", category: "Machinery", name: "HN Shock Mount" },
  ],
  [
    128673861,
    {
      symbol: "EmergencyPowerCells",
      category: "Machinery",
      name: "Emergency Power Cells",
    },
  ],
  [
    128673862,
    {
      symbol: "PowerConverter",
      category: "Machinery",
      name: "Power Converter",
    },
  ],
  [
    128673863,
    {
      symbol: "PowerGridAssembly",
      category: "Machinery",
      name: "Energy Grid Assembly",
    },
  ],
  [
    128673864,
    {
      symbol: "PowerTransferConduits",
      category: "Machinery",
      name: "Power Transfer Bus",
    },
  ],
  [
    128673865,
    {
      symbol: "RadiationBaffle",
      category: "Machinery",
      name: "Radiation Baffle",
    },
  ],
  [
    128673866,
    {
      symbol: "ExhaustManifold",
      category: "Machinery",
      name: "Exhaust Manifold",
    },
  ],
  [
    128673867,
    {
      symbol: "ReinforcedMountingPlate",
      category: "Machinery",
      name: "Reinforced Mounting Plate",
    },
  ],
  [
    128673868,
    {
      symbol: "HeatsinkInterlink",
      category: "Machinery",
      name: "Heatsink Interlink",
    },
  ],
  [
    128673869,
    {
      symbol: "MagneticEmitterCoil",
      category: "Machinery",
      name: "Magnetic Emitter Coil",
    },
  ],
  [
    128673870,
    {
      symbol: "ModularTerminals",
      category: "Machinery",
      name: "Modular Terminals",
    },
  ],
  [
    128673871,
    { symbol: "Nanobreakers", category: "Technology", name: "Nanobreakers" },
  ],
  [
    128673872,
    {
      symbol: "TelemetrySuite",
      category: "Technology",
      name: "Telemetry Suite",
    },
  ],
  [
    128673873,
    {
      symbol: "MicroControllers",
      category: "Technology",
      name: "Micro Controllers",
    },
  ],
  [
    128673874,
    {
      symbol: "IonDistributor",
      category: "Machinery",
      name: "Ion Distributor",
    },
  ],
  [
    128673875,
    {
      symbol: "DiagnosticSensor",
      category: "Technology",
      name: "Hardware Diagnostic Sensor",
    },
  ],
  [
    128673876,
    { symbol: "UnknownArtifact2", category: "Salvage", name: "Thargoid Probe" },
  ],
  [
    128682044,
    {
      symbol: "ConductiveFabrics",
      category: "Textiles",
      name: "Conductive Fabrics",
    },
  ],
  [
    128682045,
    {
      symbol: "MilitaryGradeFabrics",
      category: "Textiles",
      name: "Military Grade Fabrics",
    },
  ],
  [
    128682046,
    {
      symbol: "AdvancedMedicines",
      category: "Medicines",
      name: "Advanced Medicines",
    },
  ],
  [
    128682047,
    {
      symbol: "MedicalDiagnosticEquipment",
      category: "Technology",
      name: "Medical Diagnostic Equipment",
    },
  ],
  [
    128682048,
    {
      symbol: "SurvivalEquipment",
      category: "Consumer Items",
      name: "Survival Equipment",
    },
  ],
  [128682049, { symbol: "DataCore", category: "Salvage", name: "Data Core" }],
  [
    128682051,
    { symbol: "MysteriousIdol", category: "Salvage", name: "Mysterious Idol" },
  ],
  [
    128682052,
    {
      symbol: "ProhibitedResearchMaterials",
      category: "Salvage",
      name: "Prohibited Research Materials",
    },
  ],
  [
    128682053,
    {
      symbol: "AntimatterContainmentUnit",
      category: "Salvage",
      name: "Antimatter Containment Unit",
    },
  ],
  [
    128682054,
    {
      symbol: "SpacePioneerRelics",
      category: "Salvage",
      name: "Space Pioneer Relics",
    },
  ],
  [
    128682055,
    { symbol: "FossilRemnants", category: "Salvage", name: "Fossil Remnants" },
  ],
  [
    128732183,
    { symbol: "AncientRelic", category: "Salvage", name: "Guardian Relic" },
  ],
  [
    128732184,
    { symbol: "AncientOrb", category: "Salvage", name: "Guardian Orb" },
  ],
  [
    128732185,
    { symbol: "AncientCasket", category: "Salvage", name: "Guardian Casket" },
  ],
  [
    128732186,
    { symbol: "AncientTablet", category: "Salvage", name: "Guardian Tablet" },
  ],
  [
    128732187,
    { symbol: "AncientUrn", category: "Salvage", name: "Guardian Urn" },
  ],
  [
    128732188,
    { symbol: "AncientTotem", category: "Salvage", name: "Guardian Totem" },
  ],
  [
    128737287,
    { symbol: "UnknownResin", category: "Salvage", name: "Thargoid Resin" },
  ],
  [
    128737288,
    {
      symbol: "UnknownBiologicalMatter",
      category: "Salvage",
      name: "Thargoid Biological Matter",
    },
  ],
  [
    128737289,
    {
      symbol: "UnknownTechnologySamples",
      category: "Salvage",
      name: "Thargoid Technology Samples",
    },
  ],
  [
    128740752,
    { symbol: "UnknownArtifact3", category: "Salvage", name: "Thargoid Link" },
  ],
  [
    128793127,
    { symbol: "ThargoidHeart", category: "Salvage", name: "Thargoid Heart" },
  ],
  [
    128793128,
    {
      symbol: "ThargoidTissueSampleType1",
      category: "Salvage",
      name: "Thargoid Cyclops Tissue Sample",
    },
  ],
  [
    128793129,
    {
      symbol: "ThargoidTissueSampleType2",
      category: "Salvage",
      name: "Thargoid Basilisk Tissue Sample",
    },
  ],
  [
    128793130,
    {
      symbol: "ThargoidTissueSampleType3",
      category: "Salvage",
      name: "Thargoid Medusa Tissue Sample",
    },
  ],
  [
    128824468,
    {
      symbol: "ThargoidScoutTissueSample",
      category: "Salvage",
      name: "Thargoid Scout Tissue Sample",
    },
  ],
  [
    128888499,
    { symbol: "AncientKey", category: "Salvage", name: "Ancient Key" },
  ],
  [
    128902652,
    {
      symbol: "ThargoidTissueSampleType4",
      category: "Salvage",
      name: "Thargoid Hydra Tissue Sample",
    },
  ],
  [
    128922517,
    {
      symbol: "M_TissueSample_Fluid",
      category: "Salvage",
      name: "Mollusc Fluid",
    },
  ],
  [
    128922518,
    {
      symbol: "M_TissueSample_Soft",
      category: "Salvage",
      name: "Mollusc Soft Tissue",
    },
  ],
  [
    128922519,
    {
      symbol: "M_TissueSample_Nerves",
      category: "Salvage",
      name: "Mollusc Brain Tissue",
    },
  ],
  [
    128922520,
    {
      symbol: "S_TissueSample_Cells",
      category: "Salvage",
      name: "Pod Core Tissue",
    },
  ],
  [
    128922521,
    {
      symbol: "S_TissueSample_Surface",
      category: "Salvage",
      name: "Pod Dead Tissue",
    },
  ],
  [
    128922522,
    {
      symbol: "S_TissueSample_Core",
      category: "Salvage",
      name: "Pod Surface Tissue",
    },
  ],
  [
    128922523,
    {
      symbol: "P_ParticulateSample",
      category: "Salvage",
      name: "Anomaly Particles",
    },
  ],
  [
    128922781,
    {
      symbol: "S9_TissueSample_Shell",
      category: "Salvage",
      name: "Pod Tissue",
    },
  ],
  [
    128922782,
    {
      symbol: "M3_TissueSample_Membrane",
      category: "Salvage",
      name: "Mollusc Membrane",
    },
  ],
  [
    128922783,
    {
      symbol: "M3_TissueSample_Mycelium",
      category: "Salvage",
      name: "Mollusc Mycelium",
    },
  ],
  [
    128922784,
    {
      symbol: "M3_TissueSample_Spores",
      category: "Salvage",
      name: "Mollusc Spores",
    },
  ],
  [
    128922785,
    {
      symbol: "S6_TissueSample_Mesoglea",
      category: "Salvage",
      name: "Pod Mesoglea",
    },
  ],
  [
    128922786,
    {
      symbol: "S6_TissueSample_Cells",
      category: "Salvage",
      name: "Pod Outer Tissue",
    },
  ],
  [
    128922787,
    {
      symbol: "S6_TissueSample_Coenosarc",
      category: "Salvage",
      name: "Pod Shell Tissue",
    },
  ],
  [
    128924325,
    { symbol: "Rhodplumsite", category: "Minerals", name: "Rhodplumsite" },
  ],
  [
    128924326,
    { symbol: "Serendibite", category: "Minerals", name: "Serendibite" },
  ],
  [128924327, { symbol: "Monazite", category: "Minerals", name: "Monazite" }],
  [
    128924328,
    { symbol: "Musgravite", category: "Minerals", name: "Musgravite" },
  ],
  [128924329, { symbol: "Benitoite", category: "Minerals", name: "Benitoite" }],
  [
    128924330,
    { symbol: "Grandidierite", category: "Minerals", name: "Grandidierite" },
  ],
  [
    128924331,
    { symbol: "Alexandrite", category: "Minerals", name: "Alexandrite" },
  ],
  [128924332, { symbol: "Opal", category: "Minerals", name: "Void Opals" }],
  [
    128924333,
    {
      symbol: "RockforthFertiliser",
      category: "Chemicals",
      name: "Rockforth Fertiliser",
    },
  ],
  [
    128924334,
    {
      symbol: "AgronomicTreatment",
      category: "Chemicals",
      name: "Agronomic Treatment",
    },
  ],
  [128961249, { symbol: "Tritium", category: "Chemicals", name: "Tritium  " }],
]);
