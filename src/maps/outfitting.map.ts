import { OutfittingID } from "../models";

/**
 * Map of outfitting IDs as provided by https://github.com/EDCD/FDevIDs/blob/master/outfitting.csv
 *
 * IMPORTANT NOTE: Map keys are LOWER-CASED due to inconsistency in Elite Dangerous reporting (sometimes lower, sometimes upper).
 * Hence when using, especially for string comparison, you must be aware that the Map key is not case-accurate to the variable
 * in-game reporting.
 *
 * Some noteable ommissions including PowerPlay modules. Hence do not assume all IDs have a mapped Object.
 */

export const OUTFITTING_MAP = new Map<string, OutfittingID>([
  [
    "SideWinder_Armour_Grade1",
    {
      id: 128049250,
      symbol: "SideWinder_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Sidewinder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "SideWinder_Armour_Grade2",
    {
      id: 128049251,
      symbol: "SideWinder_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Sidewinder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "SideWinder_Armour_Grade3",
    {
      id: 128049252,
      symbol: "SideWinder_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Sidewinder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "SideWinder_Armour_Mirrored",
    {
      id: 128049253,
      symbol: "SideWinder_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Sidewinder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "SideWinder_Armour_Reactive",
    {
      id: 128049254,
      symbol: "SideWinder_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Sidewinder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Eagle_Armour_Grade1",
    {
      id: 128049256,
      symbol: "Eagle_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Eagle_Armour_Grade2",
    {
      id: 128049257,
      symbol: "Eagle_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Eagle_Armour_Grade3",
    {
      id: 128049258,
      symbol: "Eagle_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Eagle_Armour_Mirrored",
    {
      id: 128049259,
      symbol: "Eagle_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Eagle_Armour_Reactive",
    {
      id: 128049260,
      symbol: "Eagle_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hauler_Armour_Grade1",
    {
      id: 128049262,
      symbol: "Hauler_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Hauler",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hauler_Armour_Grade2",
    {
      id: 128049263,
      symbol: "Hauler_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Hauler",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hauler_Armour_Grade3",
    {
      id: 128049264,
      symbol: "Hauler_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Hauler",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hauler_Armour_Mirrored",
    {
      id: 128049265,
      symbol: "Hauler_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Hauler",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hauler_Armour_Reactive",
    {
      id: 128049266,
      symbol: "Hauler_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Hauler",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Adder_Armour_Grade1",
    {
      id: 128049268,
      symbol: "Adder_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Adder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Adder_Armour_Grade2",
    {
      id: 128049269,
      symbol: "Adder_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Adder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Adder_Armour_Grade3",
    {
      id: 128049270,
      symbol: "Adder_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Adder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Adder_Armour_Mirrored",
    {
      id: 128049271,
      symbol: "Adder_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Adder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Adder_Armour_Reactive",
    {
      id: 128049272,
      symbol: "Adder_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Adder",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_Armour_Grade1",
    {
      id: 128049274,
      symbol: "Viper_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Viper MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_Armour_Grade2",
    {
      id: 128049275,
      symbol: "Viper_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Viper MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_Armour_Grade3",
    {
      id: 128049276,
      symbol: "Viper_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Viper MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_Armour_Mirrored",
    {
      id: 128049277,
      symbol: "Viper_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Viper MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_Armour_Reactive",
    {
      id: 128049278,
      symbol: "Viper_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Viper MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIII_Armour_Grade1",
    {
      id: 128049280,
      symbol: "CobraMkIII_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Cobra MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIII_Armour_Grade2",
    {
      id: 128049281,
      symbol: "CobraMkIII_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Cobra MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIII_Armour_Grade3",
    {
      id: 128049282,
      symbol: "CobraMkIII_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Cobra MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIII_Armour_Mirrored",
    {
      id: 128049283,
      symbol: "CobraMkIII_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Cobra MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIII_Armour_Reactive",
    {
      id: 128049284,
      symbol: "CobraMkIII_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Cobra MkIII",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type6_Armour_Grade1",
    {
      id: 128049286,
      symbol: "Type6_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Type-6 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type6_Armour_Grade2",
    {
      id: 128049287,
      symbol: "Type6_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Type-6 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type6_Armour_Grade3",
    {
      id: 128049288,
      symbol: "Type6_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Type-6 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type6_Armour_Mirrored",
    {
      id: 128049289,
      symbol: "Type6_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-6 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type6_Armour_Reactive",
    {
      id: 128049290,
      symbol: "Type6_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-6 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Dolphin_Armour_Grade1",
    {
      id: 128049292,
      symbol: "Dolphin_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Dolphin",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Dolphin_Armour_Grade2",
    {
      id: 128049293,
      symbol: "Dolphin_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Dolphin",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Dolphin_Armour_Grade3",
    {
      id: 128049294,
      symbol: "Dolphin_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Dolphin",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Dolphin_Armour_Mirrored",
    {
      id: 128049295,
      symbol: "Dolphin_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Dolphin",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Dolphin_Armour_Reactive",
    {
      id: 128049296,
      symbol: "Dolphin_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Dolphin",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type7_Armour_Grade1",
    {
      id: 128049298,
      symbol: "Type7_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Type-7 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type7_Armour_Grade2",
    {
      id: 128049299,
      symbol: "Type7_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Type-7 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type7_Armour_Grade3",
    {
      id: 128049300,
      symbol: "Type7_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Type-7 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type7_Armour_Mirrored",
    {
      id: 128049301,
      symbol: "Type7_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-7 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type7_Armour_Reactive",
    {
      id: 128049302,
      symbol: "Type7_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-7 Transporter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Armour_Grade1",
    {
      id: 128049304,
      symbol: "Asp_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Asp Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Armour_Grade2",
    {
      id: 128049305,
      symbol: "Asp_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Asp Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Armour_Grade3",
    {
      id: 128049306,
      symbol: "Asp_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Asp Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Armour_Mirrored",
    {
      id: 128049307,
      symbol: "Asp_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Asp Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Armour_Reactive",
    {
      id: 128049308,
      symbol: "Asp_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Asp Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Vulture_Armour_Grade1",
    {
      id: 128049310,
      symbol: "Vulture_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Vulture",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Vulture_Armour_Grade2",
    {
      id: 128049311,
      symbol: "Vulture_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Vulture",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Vulture_Armour_Grade3",
    {
      id: 128049312,
      symbol: "Vulture_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Vulture",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Vulture_Armour_Mirrored",
    {
      id: 128049313,
      symbol: "Vulture_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Vulture",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Vulture_Armour_Reactive",
    {
      id: 128049314,
      symbol: "Vulture_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Vulture",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Trader_Armour_Grade1",
    {
      id: 128049316,
      symbol: "Empire_Trader_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Clipper",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Trader_Armour_Grade2",
    {
      id: 128049317,
      symbol: "Empire_Trader_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Clipper",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Trader_Armour_Grade3",
    {
      id: 128049318,
      symbol: "Empire_Trader_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Clipper",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Trader_Armour_Mirrored",
    {
      id: 128049319,
      symbol: "Empire_Trader_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Clipper",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Trader_Armour_Reactive",
    {
      id: 128049320,
      symbol: "Empire_Trader_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Clipper",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_Armour_Grade1",
    {
      id: 128049322,
      symbol: "Federation_Dropship_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Dropship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_Armour_Grade2",
    {
      id: 128049323,
      symbol: "Federation_Dropship_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Dropship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_Armour_Grade3",
    {
      id: 128049324,
      symbol: "Federation_Dropship_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Federal Dropship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_Armour_Mirrored",
    {
      id: 128049325,
      symbol: "Federation_Dropship_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Dropship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_Armour_Reactive",
    {
      id: 128049326,
      symbol: "Federation_Dropship_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Dropship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Orca_Armour_Grade1",
    {
      id: 128049328,
      symbol: "Orca_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Orca",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Orca_Armour_Grade2",
    {
      id: 128049329,
      symbol: "Orca_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Orca",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Orca_Armour_Grade3",
    {
      id: 128049330,
      symbol: "Orca_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Orca",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Orca_Armour_Mirrored",
    {
      id: 128049331,
      symbol: "Orca_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Orca",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Orca_Armour_Reactive",
    {
      id: 128049332,
      symbol: "Orca_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Orca",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type9_Armour_Grade1",
    {
      id: 128049334,
      symbol: "Type9_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Type-9 Heavy",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type9_Armour_Grade2",
    {
      id: 128049335,
      symbol: "Type9_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Type-9 Heavy",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type9_Armour_Grade3",
    {
      id: 128049336,
      symbol: "Type9_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Type-9 Heavy",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type9_Armour_Mirrored",
    {
      id: 128049337,
      symbol: "Type9_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-9 Heavy",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Type9_Armour_Reactive",
    {
      id: 128049338,
      symbol: "Type9_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-9 Heavy",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Python_Armour_Grade1",
    {
      id: 128049340,
      symbol: "Python_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Python",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Python_Armour_Grade2",
    {
      id: 128049341,
      symbol: "Python_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Python",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Python_Armour_Grade3",
    {
      id: 128049342,
      symbol: "Python_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Python",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Python_Armour_Mirrored",
    {
      id: 128049343,
      symbol: "Python_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Python",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Python_Armour_Reactive",
    {
      id: 128049344,
      symbol: "Python_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Python",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "BelugaLiner_Armour_Grade1",
    {
      id: 128049346,
      symbol: "BelugaLiner_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Beluga Liner",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "BelugaLiner_Armour_Grade2",
    {
      id: 128049347,
      symbol: "BelugaLiner_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Beluga Liner",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "BelugaLiner_Armour_Grade3",
    {
      id: 128049348,
      symbol: "BelugaLiner_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Beluga Liner",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "BelugaLiner_Armour_Mirrored",
    {
      id: 128049349,
      symbol: "BelugaLiner_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Beluga Liner",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "BelugaLiner_Armour_Reactive",
    {
      id: 128049350,
      symbol: "BelugaLiner_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Beluga Liner",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "FerDeLance_Armour_Grade1",
    {
      id: 128049352,
      symbol: "FerDeLance_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Fer-de-Lance",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "FerDeLance_Armour_Grade2",
    {
      id: 128049353,
      symbol: "FerDeLance_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Fer-de-Lance",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "FerDeLance_Armour_Grade3",
    {
      id: 128049354,
      symbol: "FerDeLance_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Fer-de-Lance",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "FerDeLance_Armour_Mirrored",
    {
      id: 128049355,
      symbol: "FerDeLance_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Fer-de-Lance",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "FerDeLance_Armour_Reactive",
    {
      id: 128049356,
      symbol: "FerDeLance_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Fer-de-Lance",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Anaconda_Armour_Grade1",
    {
      id: 128049364,
      symbol: "Anaconda_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Anaconda",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Anaconda_Armour_Grade2",
    {
      id: 128049365,
      symbol: "Anaconda_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Anaconda",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Anaconda_Armour_Grade3",
    {
      id: 128049366,
      symbol: "Anaconda_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Anaconda",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Anaconda_Armour_Mirrored",
    {
      id: 128049367,
      symbol: "Anaconda_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Anaconda",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Anaconda_Armour_Reactive",
    {
      id: 128049368,
      symbol: "Anaconda_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Anaconda",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Corvette_Armour_Grade1",
    {
      id: 128049370,
      symbol: "Federation_Corvette_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Corvette",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Corvette_Armour_Grade2",
    {
      id: 128049371,
      symbol: "Federation_Corvette_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Corvette",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Corvette_Armour_Grade3",
    {
      id: 128049372,
      symbol: "Federation_Corvette_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Federal Corvette",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Corvette_Armour_Mirrored",
    {
      id: 128049373,
      symbol: "Federation_Corvette_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Corvette",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Corvette_Armour_Reactive",
    {
      id: 128049374,
      symbol: "Federation_Corvette_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Corvette",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Cutter_Armour_Grade1",
    {
      id: 128049376,
      symbol: "Cutter_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Cutter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Cutter_Armour_Grade2",
    {
      id: 128049377,
      symbol: "Cutter_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Cutter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Cutter_Armour_Grade3",
    {
      id: 128049378,
      symbol: "Cutter_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Cutter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Cutter_Armour_Mirrored",
    {
      id: 128049379,
      symbol: "Cutter_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Cutter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Cutter_Armour_Reactive",
    {
      id: 128049380,
      symbol: "Cutter_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Cutter",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Fixed_Small",
    {
      id: 128049381,
      symbol: "Hpt_PulseLaser_Fixed_Small",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Fixed_Medium",
    {
      id: 128049382,
      symbol: "Hpt_PulseLaser_Fixed_Medium",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Fixed_Large",
    {
      id: 128049383,
      symbol: "Hpt_PulseLaser_Fixed_Large",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Fixed_Huge",
    {
      id: 128049384,
      symbol: "Hpt_PulseLaser_Fixed_Huge",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Gimbal_Small",
    {
      id: 128049385,
      symbol: "Hpt_PulseLaser_Gimbal_Small",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "G",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Gimbal_Medium",
    {
      id: 128049386,
      symbol: "Hpt_PulseLaser_Gimbal_Medium",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Gimbal_Large",
    {
      id: 128049387,
      symbol: "Hpt_PulseLaser_Gimbal_Large",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Turret_Small",
    {
      id: 128049388,
      symbol: "Hpt_PulseLaser_Turret_Small",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "G",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Turret_Medium",
    {
      id: 128049389,
      symbol: "Hpt_PulseLaser_Turret_Medium",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Turret_Large",
    {
      id: 128049390,
      symbol: "Hpt_PulseLaser_Turret_Large",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Fixed_Small",
    {
      id: 128049400,
      symbol: "Hpt_PulseLaserBurst_Fixed_Small",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Fixed_Medium",
    {
      id: 128049401,
      symbol: "Hpt_PulseLaserBurst_Fixed_Medium",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Fixed_Large",
    {
      id: 128049402,
      symbol: "Hpt_PulseLaserBurst_Fixed_Large",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Fixed_Huge",
    {
      id: 128049403,
      symbol: "Hpt_PulseLaserBurst_Fixed_Huge",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Gimbal_Small",
    {
      id: 128049404,
      symbol: "Hpt_PulseLaserBurst_Gimbal_Small",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "G",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Gimbal_Medium",
    {
      id: 128049405,
      symbol: "Hpt_PulseLaserBurst_Gimbal_Medium",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Gimbal_Large",
    {
      id: 128049406,
      symbol: "Hpt_PulseLaserBurst_Gimbal_Large",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Turret_Small",
    {
      id: 128049407,
      symbol: "Hpt_PulseLaserBurst_Turret_Small",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "G",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Turret_Medium",
    {
      id: 128049408,
      symbol: "Hpt_PulseLaserBurst_Turret_Medium",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Turret_Large",
    {
      id: 128049409,
      symbol: "Hpt_PulseLaserBurst_Turret_Large",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Fixed_Small",
    {
      id: 128049428,
      symbol: "Hpt_BeamLaser_Fixed_Small",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Fixed_Medium",
    {
      id: 128049429,
      symbol: "Hpt_BeamLaser_Fixed_Medium",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Fixed_Large",
    {
      id: 128049430,
      symbol: "Hpt_BeamLaser_Fixed_Large",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Fixed_Huge",
    {
      id: 128049431,
      symbol: "Hpt_BeamLaser_Fixed_Huge",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Gimbal_Small",
    {
      id: 128049432,
      symbol: "Hpt_BeamLaser_Gimbal_Small",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Gimbal_Medium",
    {
      id: 128049433,
      symbol: "Hpt_BeamLaser_Gimbal_Medium",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Gimbal_Large",
    {
      id: 128049434,
      symbol: "Hpt_BeamLaser_Gimbal_Large",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Turret_Small",
    {
      id: 128049435,
      symbol: "Hpt_BeamLaser_Turret_Small",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Turret_Medium",
    {
      id: 128049436,
      symbol: "Hpt_BeamLaser_Turret_Medium",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_BeamLaser_Turret_Large",
    {
      id: 128049437,
      symbol: "Hpt_BeamLaser_Turret_Large",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Fixed_Small",
    {
      id: 128049438,
      symbol: "Hpt_Cannon_Fixed_Small",
      category: "hardpoint",
      name: "Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Fixed_Medium",
    {
      id: 128049439,
      symbol: "Hpt_Cannon_Fixed_Medium",
      category: "hardpoint",
      name: "Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Fixed_Large",
    {
      id: 128049440,
      symbol: "Hpt_Cannon_Fixed_Large",
      category: "hardpoint",
      name: "Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Fixed_Huge",
    {
      id: 128049441,
      symbol: "Hpt_Cannon_Fixed_Huge",
      category: "hardpoint",
      name: "Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Gimbal_Small",
    {
      id: 128049442,
      symbol: "Hpt_Cannon_Gimbal_Small",
      category: "hardpoint",
      name: "Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Gimbal_Medium",
    {
      id: 128049443,
      symbol: "Hpt_Cannon_Gimbal_Medium",
      category: "hardpoint",
      name: "Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Gimbal_Huge",
    {
      id: 128049444,
      symbol: "Hpt_Cannon_Gimbal_Huge",
      category: "hardpoint",
      name: "Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Turret_Small",
    {
      id: 128049445,
      symbol: "Hpt_Cannon_Turret_Small",
      category: "hardpoint",
      name: "Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Turret_Medium",
    {
      id: 128049446,
      symbol: "Hpt_Cannon_Turret_Medium",
      category: "hardpoint",
      name: "Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Turret_Large",
    {
      id: 128049447,
      symbol: "Hpt_Cannon_Turret_Large",
      category: "hardpoint",
      name: "Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Fixed_Small",
    {
      id: 128049448,
      symbol: "Hpt_Slugshot_Fixed_Small",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Fixed_Medium",
    {
      id: 128049449,
      symbol: "Hpt_Slugshot_Fixed_Medium",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Fixed_Large",
    {
      id: 128049450,
      symbol: "Hpt_Slugshot_Fixed_Large",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Gimbal_Small",
    {
      id: 128049451,
      symbol: "Hpt_Slugshot_Gimbal_Small",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Gimbal_Medium",
    {
      id: 128049452,
      symbol: "Hpt_Slugshot_Gimbal_Medium",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Turret_Small",
    {
      id: 128049453,
      symbol: "Hpt_Slugshot_Turret_Small",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Turret_Medium",
    {
      id: 128049454,
      symbol: "Hpt_Slugshot_Turret_Medium",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Small",
    {
      id: 128049455,
      symbol: "Hpt_MultiCannon_Fixed_Small",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Medium",
    {
      id: 128049456,
      symbol: "Hpt_MultiCannon_Fixed_Medium",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Large",
    {
      id: 128049457,
      symbol: "Hpt_MultiCannon_Fixed_Large",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Huge",
    {
      id: 128049458,
      symbol: "Hpt_MultiCannon_Fixed_Huge",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Gimbal_Small",
    {
      id: 128049459,
      symbol: "Hpt_MultiCannon_Gimbal_Small",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "G",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Gimbal_Medium",
    {
      id: 128049460,
      symbol: "Hpt_MultiCannon_Gimbal_Medium",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Gimbal_Large",
    {
      id: 128049461,
      symbol: "Hpt_MultiCannon_Gimbal_Large",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Turret_Small",
    {
      id: 128049462,
      symbol: "Hpt_MultiCannon_Turret_Small",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "G",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Turret_Medium",
    {
      id: 128049463,
      symbol: "Hpt_MultiCannon_Turret_Medium",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Turret_Large",
    {
      id: 128049464,
      symbol: "Hpt_MultiCannon_Turret_Large",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_PlasmaAccelerator_Fixed_Medium",
    {
      id: 128049465,
      symbol: "Hpt_PlasmaAccelerator_Fixed_Medium",
      category: "hardpoint",
      name: "Plasma Accelerator",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_PlasmaAccelerator_Fixed_Large",
    {
      id: 128049466,
      symbol: "Hpt_PlasmaAccelerator_Fixed_Large",
      category: "hardpoint",
      name: "Plasma Accelerator",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_PlasmaAccelerator_Fixed_Huge",
    {
      id: 128049467,
      symbol: "Hpt_PlasmaAccelerator_Fixed_Huge",
      category: "hardpoint",
      name: "Plasma Accelerator",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_Railgun_Fixed_Small",
    {
      id: 128049488,
      symbol: "Hpt_Railgun_Fixed_Small",
      category: "hardpoint",
      name: "Rail Gun",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Railgun_Fixed_Medium",
    {
      id: 128049489,
      symbol: "Hpt_Railgun_Fixed_Medium",
      category: "hardpoint",
      name: "Rail Gun",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_BasicMissileRack_Fixed_Small",
    {
      id: 128049492,
      symbol: "Hpt_BasicMissileRack_Fixed_Small",
      category: "hardpoint",
      name: "Seeker Missile Rack",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_BasicMissileRack_Fixed_Medium",
    {
      id: 128049493,
      symbol: "Hpt_BasicMissileRack_Fixed_Medium",
      category: "hardpoint",
      name: "Seeker Missile Rack",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_BasicMissileRack_Fixed_Large",
    {
      id: 128049494,
      symbol: "Hpt_BasicMissileRack_Fixed_Large",
      category: "hardpoint",
      name: "Seeker Missile Rack",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_MineLauncher_Fixed_Small",
    {
      id: 128049500,
      symbol: "Hpt_MineLauncher_Fixed_Small",
      category: "hardpoint",
      name: "Mine Launcher",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_MineLauncher_Fixed_Medium",
    {
      id: 128049501,
      symbol: "Hpt_MineLauncher_Fixed_Medium",
      category: "hardpoint",
      name: "Mine Launcher",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_AdvancedTorpPylon_Fixed_Small",
    {
      id: 128049509,
      symbol: "Hpt_AdvancedTorpPylon_Fixed_Small",
      category: "hardpoint",
      name: "Torpedo Pylon",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_AdvancedTorpPylon_Fixed_Medium",
    {
      id: 128049510,
      symbol: "Hpt_AdvancedTorpPylon_Fixed_Medium",
      category: "hardpoint",
      name: "Torpedo Pylon",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 2,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_AdvancedTorpPylon_Fixed_Large",
    {
      id: 128049511,
      symbol: "Hpt_AdvancedTorpPylon_Fixed_Large",
      category: "hardpoint",
      name: "Torpedo Pylon",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 3,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ChaffLauncher_Tiny",
    {
      id: 128049513,
      symbol: "Hpt_ChaffLauncher_Tiny",
      category: "utility",
      name: "Chaff Launcher",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_ElectronicCountermeasure_Tiny",
    {
      id: 128049516,
      symbol: "Hpt_ElectronicCountermeasure_Tiny",
      category: "utility",
      name: "Electronic Countermeasure",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_HeatSinkLauncher_Turret_Tiny",
    {
      id: 128049519,
      symbol: "Hpt_HeatSinkLauncher_Turret_Tiny",
      category: "utility",
      name: "Heat Sink Launcher",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_PlasmaPointDefence_Turret_Tiny",
    {
      id: 128049522,
      symbol: "Hpt_PlasmaPointDefence_Turret_Tiny",
      category: "utility",
      name: "Point Defence",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_MiningLaser_Fixed_Small",
    {
      id: 128049525,
      symbol: "Hpt_MiningLaser_Fixed_Small",
      category: "hardpoint",
      name: "Mining Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_MiningLaser_Fixed_Medium",
    {
      id: 128049526,
      symbol: "Hpt_MiningLaser_Fixed_Medium",
      category: "hardpoint",
      name: "Mining Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DockingComputer_Standard",
    {
      id: 128049549,
      symbol: "Int_DockingComputer_Standard",
      category: "internal",
      name: "Standard Docking Computer",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size2_Class1",
    {
      id: 128064033,
      symbol: "Int_Powerplant_Size2_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size2_Class2",
    {
      id: 128064034,
      symbol: "Int_Powerplant_Size2_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size2_Class3",
    {
      id: 128064035,
      symbol: "Int_Powerplant_Size2_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size2_Class4",
    {
      id: 128064036,
      symbol: "Int_Powerplant_Size2_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size2_Class5",
    {
      id: 128064037,
      symbol: "Int_Powerplant_Size2_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size3_Class1",
    {
      id: 128064038,
      symbol: "Int_Powerplant_Size3_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size3_Class2",
    {
      id: 128064039,
      symbol: "Int_Powerplant_Size3_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size3_Class3",
    {
      id: 128064040,
      symbol: "Int_Powerplant_Size3_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size3_Class4",
    {
      id: 128064041,
      symbol: "Int_Powerplant_Size3_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size3_Class5",
    {
      id: 128064042,
      symbol: "Int_Powerplant_Size3_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size4_Class1",
    {
      id: 128064043,
      symbol: "Int_Powerplant_Size4_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size4_Class2",
    {
      id: 128064044,
      symbol: "Int_Powerplant_Size4_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size4_Class3",
    {
      id: 128064045,
      symbol: "Int_Powerplant_Size4_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size4_Class4",
    {
      id: 128064046,
      symbol: "Int_Powerplant_Size4_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size4_Class5",
    {
      id: 128064047,
      symbol: "Int_Powerplant_Size4_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size5_Class1",
    {
      id: 128064048,
      symbol: "Int_Powerplant_Size5_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size5_Class2",
    {
      id: 128064049,
      symbol: "Int_Powerplant_Size5_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size5_Class3",
    {
      id: 128064050,
      symbol: "Int_Powerplant_Size5_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size5_Class4",
    {
      id: 128064051,
      symbol: "Int_Powerplant_Size5_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size5_Class5",
    {
      id: 128064052,
      symbol: "Int_Powerplant_Size5_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size6_Class1",
    {
      id: 128064053,
      symbol: "Int_Powerplant_Size6_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size6_Class2",
    {
      id: 128064054,
      symbol: "Int_Powerplant_Size6_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size6_Class3",
    {
      id: 128064055,
      symbol: "Int_Powerplant_Size6_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size6_Class4",
    {
      id: 128064056,
      symbol: "Int_Powerplant_Size6_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size6_Class5",
    {
      id: 128064057,
      symbol: "Int_Powerplant_Size6_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size7_Class1",
    {
      id: 128064058,
      symbol: "Int_Powerplant_Size7_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size7_Class2",
    {
      id: 128064059,
      symbol: "Int_Powerplant_Size7_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size7_Class3",
    {
      id: 128064060,
      symbol: "Int_Powerplant_Size7_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size7_Class4",
    {
      id: 128064061,
      symbol: "Int_Powerplant_Size7_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size7_Class5",
    {
      id: 128064062,
      symbol: "Int_Powerplant_Size7_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size8_Class1",
    {
      id: 128064063,
      symbol: "Int_Powerplant_Size8_Class1",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size8_Class2",
    {
      id: 128064064,
      symbol: "Int_Powerplant_Size8_Class2",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size8_Class3",
    {
      id: 128064065,
      symbol: "Int_Powerplant_Size8_Class3",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size8_Class4",
    {
      id: 128064066,
      symbol: "Int_Powerplant_Size8_Class4",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Powerplant_Size8_Class5",
    {
      id: 128064067,
      symbol: "Int_Powerplant_Size8_Class5",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class1",
    {
      id: 128064068,
      symbol: "Int_Engine_Size2_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class2",
    {
      id: 128064069,
      symbol: "Int_Engine_Size2_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class3",
    {
      id: 128064070,
      symbol: "Int_Engine_Size2_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class4",
    {
      id: 128064071,
      symbol: "Int_Engine_Size2_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class5",
    {
      id: 128064072,
      symbol: "Int_Engine_Size2_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size3_Class1",
    {
      id: 128064073,
      symbol: "Int_Engine_Size3_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size3_Class2",
    {
      id: 128064074,
      symbol: "Int_Engine_Size3_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size3_Class3",
    {
      id: 128064075,
      symbol: "Int_Engine_Size3_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size3_Class4",
    {
      id: 128064076,
      symbol: "Int_Engine_Size3_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size3_Class5",
    {
      id: 128064077,
      symbol: "Int_Engine_Size3_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size4_Class1",
    {
      id: 128064078,
      symbol: "Int_Engine_Size4_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size4_Class2",
    {
      id: 128064079,
      symbol: "Int_Engine_Size4_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size4_Class3",
    {
      id: 128064080,
      symbol: "Int_Engine_Size4_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size4_Class4",
    {
      id: 128064081,
      symbol: "Int_Engine_Size4_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size4_Class5",
    {
      id: 128064082,
      symbol: "Int_Engine_Size4_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size5_Class1",
    {
      id: 128064083,
      symbol: "Int_Engine_Size5_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size5_Class2",
    {
      id: 128064084,
      symbol: "Int_Engine_Size5_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size5_Class3",
    {
      id: 128064085,
      symbol: "Int_Engine_Size5_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size5_Class4",
    {
      id: 128064086,
      symbol: "Int_Engine_Size5_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size5_Class5",
    {
      id: 128064087,
      symbol: "Int_Engine_Size5_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size6_Class1",
    {
      id: 128064088,
      symbol: "Int_Engine_Size6_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size6_Class2",
    {
      id: 128064089,
      symbol: "Int_Engine_Size6_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size6_Class3",
    {
      id: 128064090,
      symbol: "Int_Engine_Size6_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size6_Class4",
    {
      id: 128064091,
      symbol: "Int_Engine_Size6_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size6_Class5",
    {
      id: 128064092,
      symbol: "Int_Engine_Size6_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size7_Class1",
    {
      id: 128064093,
      symbol: "Int_Engine_Size7_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size7_Class2",
    {
      id: 128064094,
      symbol: "Int_Engine_Size7_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size7_Class3",
    {
      id: 128064095,
      symbol: "Int_Engine_Size7_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size7_Class4",
    {
      id: 128064096,
      symbol: "Int_Engine_Size7_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size7_Class5",
    {
      id: 128064097,
      symbol: "Int_Engine_Size7_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size8_Class1",
    {
      id: 128064098,
      symbol: "Int_Engine_Size8_Class1",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size8_Class2",
    {
      id: 128064099,
      symbol: "Int_Engine_Size8_Class2",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size8_Class3",
    {
      id: 128064100,
      symbol: "Int_Engine_Size8_Class3",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size8_Class4",
    {
      id: 128064101,
      symbol: "Int_Engine_Size8_Class4",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size8_Class5",
    {
      id: 128064102,
      symbol: "Int_Engine_Size8_Class5",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size2_Class1",
    {
      id: 128064103,
      symbol: "Int_Hyperdrive_Size2_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size2_Class2",
    {
      id: 128064104,
      symbol: "Int_Hyperdrive_Size2_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size2_Class3",
    {
      id: 128064105,
      symbol: "Int_Hyperdrive_Size2_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size2_Class4",
    {
      id: 128064106,
      symbol: "Int_Hyperdrive_Size2_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size2_Class5",
    {
      id: 128064107,
      symbol: "Int_Hyperdrive_Size2_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size3_Class1",
    {
      id: 128064108,
      symbol: "Int_Hyperdrive_Size3_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size3_Class2",
    {
      id: 128064109,
      symbol: "Int_Hyperdrive_Size3_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size3_Class3",
    {
      id: 128064110,
      symbol: "Int_Hyperdrive_Size3_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size3_Class4",
    {
      id: 128064111,
      symbol: "Int_Hyperdrive_Size3_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size3_Class5",
    {
      id: 128064112,
      symbol: "Int_Hyperdrive_Size3_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size4_Class1",
    {
      id: 128064113,
      symbol: "Int_Hyperdrive_Size4_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size4_Class2",
    {
      id: 128064114,
      symbol: "Int_Hyperdrive_Size4_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size4_Class3",
    {
      id: 128064115,
      symbol: "Int_Hyperdrive_Size4_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size4_Class4",
    {
      id: 128064116,
      symbol: "Int_Hyperdrive_Size4_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size4_Class5",
    {
      id: 128064117,
      symbol: "Int_Hyperdrive_Size4_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size5_Class1",
    {
      id: 128064118,
      symbol: "Int_Hyperdrive_Size5_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size5_Class2",
    {
      id: 128064119,
      symbol: "Int_Hyperdrive_Size5_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size5_Class3",
    {
      id: 128064120,
      symbol: "Int_Hyperdrive_Size5_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size5_Class4",
    {
      id: 128064121,
      symbol: "Int_Hyperdrive_Size5_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size5_Class5",
    {
      id: 128064122,
      symbol: "Int_Hyperdrive_Size5_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size6_Class1",
    {
      id: 128064123,
      symbol: "Int_Hyperdrive_Size6_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size6_Class2",
    {
      id: 128064124,
      symbol: "Int_Hyperdrive_Size6_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size6_Class3",
    {
      id: 128064125,
      symbol: "Int_Hyperdrive_Size6_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size6_Class4",
    {
      id: 128064126,
      symbol: "Int_Hyperdrive_Size6_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size6_Class5",
    {
      id: 128064127,
      symbol: "Int_Hyperdrive_Size6_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size7_Class1",
    {
      id: 128064128,
      symbol: "Int_Hyperdrive_Size7_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size7_Class2",
    {
      id: 128064129,
      symbol: "Int_Hyperdrive_Size7_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size7_Class3",
    {
      id: 128064130,
      symbol: "Int_Hyperdrive_Size7_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size7_Class4",
    {
      id: 128064131,
      symbol: "Int_Hyperdrive_Size7_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size7_Class5",
    {
      id: 128064132,
      symbol: "Int_Hyperdrive_Size7_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size8_Class1",
    {
      id: 128064133,
      symbol: "Int_Hyperdrive_Size8_Class1",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size8_Class2",
    {
      id: 128064134,
      symbol: "Int_Hyperdrive_Size8_Class2",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size8_Class3",
    {
      id: 128064135,
      symbol: "Int_Hyperdrive_Size8_Class3",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size8_Class4",
    {
      id: 128064136,
      symbol: "Int_Hyperdrive_Size8_Class4",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size8_Class5",
    {
      id: 128064137,
      symbol: "Int_Hyperdrive_Size8_Class5",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size1_Class1",
    {
      id: 128064138,
      symbol: "Int_LifeSupport_Size1_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size1_Class2",
    {
      id: 128064139,
      symbol: "Int_LifeSupport_Size1_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size1_Class3",
    {
      id: 128064140,
      symbol: "Int_LifeSupport_Size1_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size1_Class4",
    {
      id: 128064141,
      symbol: "Int_LifeSupport_Size1_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size1_Class5",
    {
      id: 128064142,
      symbol: "Int_LifeSupport_Size1_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size2_Class1",
    {
      id: 128064143,
      symbol: "Int_LifeSupport_Size2_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size2_Class2",
    {
      id: 128064144,
      symbol: "Int_LifeSupport_Size2_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size2_Class3",
    {
      id: 128064145,
      symbol: "Int_LifeSupport_Size2_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size2_Class4",
    {
      id: 128064146,
      symbol: "Int_LifeSupport_Size2_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size2_Class5",
    {
      id: 128064147,
      symbol: "Int_LifeSupport_Size2_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size3_Class1",
    {
      id: 128064148,
      symbol: "Int_LifeSupport_Size3_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size3_Class2",
    {
      id: 128064149,
      symbol: "Int_LifeSupport_Size3_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size3_Class3",
    {
      id: 128064150,
      symbol: "Int_LifeSupport_Size3_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size3_Class4",
    {
      id: 128064151,
      symbol: "Int_LifeSupport_Size3_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size3_Class5",
    {
      id: 128064152,
      symbol: "Int_LifeSupport_Size3_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size4_Class1",
    {
      id: 128064153,
      symbol: "Int_LifeSupport_Size4_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size4_Class2",
    {
      id: 128064154,
      symbol: "Int_LifeSupport_Size4_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size4_Class3",
    {
      id: 128064155,
      symbol: "Int_LifeSupport_Size4_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size4_Class4",
    {
      id: 128064156,
      symbol: "Int_LifeSupport_Size4_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size4_Class5",
    {
      id: 128064157,
      symbol: "Int_LifeSupport_Size4_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size5_Class1",
    {
      id: 128064158,
      symbol: "Int_LifeSupport_Size5_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size5_Class2",
    {
      id: 128064159,
      symbol: "Int_LifeSupport_Size5_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size5_Class3",
    {
      id: 128064160,
      symbol: "Int_LifeSupport_Size5_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size5_Class4",
    {
      id: 128064161,
      symbol: "Int_LifeSupport_Size5_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size5_Class5",
    {
      id: 128064162,
      symbol: "Int_LifeSupport_Size5_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size6_Class1",
    {
      id: 128064163,
      symbol: "Int_LifeSupport_Size6_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size6_Class2",
    {
      id: 128064164,
      symbol: "Int_LifeSupport_Size6_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size6_Class3",
    {
      id: 128064165,
      symbol: "Int_LifeSupport_Size6_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size6_Class4",
    {
      id: 128064166,
      symbol: "Int_LifeSupport_Size6_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size6_Class5",
    {
      id: 128064167,
      symbol: "Int_LifeSupport_Size6_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size7_Class1",
    {
      id: 128064168,
      symbol: "Int_LifeSupport_Size7_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size7_Class2",
    {
      id: 128064169,
      symbol: "Int_LifeSupport_Size7_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size7_Class3",
    {
      id: 128064170,
      symbol: "Int_LifeSupport_Size7_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size7_Class4",
    {
      id: 128064171,
      symbol: "Int_LifeSupport_Size7_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size7_Class5",
    {
      id: 128064172,
      symbol: "Int_LifeSupport_Size7_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size8_Class1",
    {
      id: 128064173,
      symbol: "Int_LifeSupport_Size8_Class1",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size8_Class2",
    {
      id: 128064174,
      symbol: "Int_LifeSupport_Size8_Class2",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size8_Class3",
    {
      id: 128064175,
      symbol: "Int_LifeSupport_Size8_Class3",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size8_Class4",
    {
      id: 128064176,
      symbol: "Int_LifeSupport_Size8_Class4",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size8_Class5",
    {
      id: 128064177,
      symbol: "Int_LifeSupport_Size8_Class5",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size1_Class1",
    {
      id: 128064178,
      symbol: "Int_PowerDistributor_Size1_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size1_Class2",
    {
      id: 128064179,
      symbol: "Int_PowerDistributor_Size1_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size1_Class3",
    {
      id: 128064180,
      symbol: "Int_PowerDistributor_Size1_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size1_Class4",
    {
      id: 128064181,
      symbol: "Int_PowerDistributor_Size1_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size1_Class5",
    {
      id: 128064182,
      symbol: "Int_PowerDistributor_Size1_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size2_Class1",
    {
      id: 128064183,
      symbol: "Int_PowerDistributor_Size2_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size2_Class2",
    {
      id: 128064184,
      symbol: "Int_PowerDistributor_Size2_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size2_Class3",
    {
      id: 128064185,
      symbol: "Int_PowerDistributor_Size2_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size2_Class4",
    {
      id: 128064186,
      symbol: "Int_PowerDistributor_Size2_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size2_Class5",
    {
      id: 128064187,
      symbol: "Int_PowerDistributor_Size2_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size3_Class1",
    {
      id: 128064188,
      symbol: "Int_PowerDistributor_Size3_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size3_Class2",
    {
      id: 128064189,
      symbol: "Int_PowerDistributor_Size3_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size3_Class3",
    {
      id: 128064190,
      symbol: "Int_PowerDistributor_Size3_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size3_Class4",
    {
      id: 128064191,
      symbol: "Int_PowerDistributor_Size3_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size3_Class5",
    {
      id: 128064192,
      symbol: "Int_PowerDistributor_Size3_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size4_Class1",
    {
      id: 128064193,
      symbol: "Int_PowerDistributor_Size4_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size4_Class2",
    {
      id: 128064194,
      symbol: "Int_PowerDistributor_Size4_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size4_Class3",
    {
      id: 128064195,
      symbol: "Int_PowerDistributor_Size4_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size4_Class4",
    {
      id: 128064196,
      symbol: "Int_PowerDistributor_Size4_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size4_Class5",
    {
      id: 128064197,
      symbol: "Int_PowerDistributor_Size4_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size5_Class1",
    {
      id: 128064198,
      symbol: "Int_PowerDistributor_Size5_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size5_Class2",
    {
      id: 128064199,
      symbol: "Int_PowerDistributor_Size5_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size5_Class3",
    {
      id: 128064200,
      symbol: "Int_PowerDistributor_Size5_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size5_Class4",
    {
      id: 128064201,
      symbol: "Int_PowerDistributor_Size5_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size5_Class5",
    {
      id: 128064202,
      symbol: "Int_PowerDistributor_Size5_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size6_Class1",
    {
      id: 128064203,
      symbol: "Int_PowerDistributor_Size6_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size6_Class2",
    {
      id: 128064204,
      symbol: "Int_PowerDistributor_Size6_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size6_Class3",
    {
      id: 128064205,
      symbol: "Int_PowerDistributor_Size6_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size6_Class4",
    {
      id: 128064206,
      symbol: "Int_PowerDistributor_Size6_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size6_Class5",
    {
      id: 128064207,
      symbol: "Int_PowerDistributor_Size6_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size7_Class1",
    {
      id: 128064208,
      symbol: "Int_PowerDistributor_Size7_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size7_Class2",
    {
      id: 128064209,
      symbol: "Int_PowerDistributor_Size7_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size7_Class3",
    {
      id: 128064210,
      symbol: "Int_PowerDistributor_Size7_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size7_Class4",
    {
      id: 128064211,
      symbol: "Int_PowerDistributor_Size7_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size7_Class5",
    {
      id: 128064212,
      symbol: "Int_PowerDistributor_Size7_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size8_Class1",
    {
      id: 128064213,
      symbol: "Int_PowerDistributor_Size8_Class1",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size8_Class2",
    {
      id: 128064214,
      symbol: "Int_PowerDistributor_Size8_Class2",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size8_Class3",
    {
      id: 128064215,
      symbol: "Int_PowerDistributor_Size8_Class3",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size8_Class4",
    {
      id: 128064216,
      symbol: "Int_PowerDistributor_Size8_Class4",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size8_Class5",
    {
      id: 128064217,
      symbol: "Int_PowerDistributor_Size8_Class5",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size1_Class1",
    {
      id: 128064218,
      symbol: "Int_Sensors_Size1_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size1_Class2",
    {
      id: 128064219,
      symbol: "Int_Sensors_Size1_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size1_Class3",
    {
      id: 128064220,
      symbol: "Int_Sensors_Size1_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size1_Class4",
    {
      id: 128064221,
      symbol: "Int_Sensors_Size1_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size1_Class5",
    {
      id: 128064222,
      symbol: "Int_Sensors_Size1_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size2_Class1",
    {
      id: 128064223,
      symbol: "Int_Sensors_Size2_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size2_Class2",
    {
      id: 128064224,
      symbol: "Int_Sensors_Size2_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size2_Class3",
    {
      id: 128064225,
      symbol: "Int_Sensors_Size2_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size2_Class4",
    {
      id: 128064226,
      symbol: "Int_Sensors_Size2_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size2_Class5",
    {
      id: 128064227,
      symbol: "Int_Sensors_Size2_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size3_Class1",
    {
      id: 128064228,
      symbol: "Int_Sensors_Size3_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size3_Class2",
    {
      id: 128064229,
      symbol: "Int_Sensors_Size3_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size3_Class3",
    {
      id: 128064230,
      symbol: "Int_Sensors_Size3_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size3_Class4",
    {
      id: 128064231,
      symbol: "Int_Sensors_Size3_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size3_Class5",
    {
      id: 128064232,
      symbol: "Int_Sensors_Size3_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size4_Class1",
    {
      id: 128064233,
      symbol: "Int_Sensors_Size4_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size4_Class2",
    {
      id: 128064234,
      symbol: "Int_Sensors_Size4_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size4_Class3",
    {
      id: 128064235,
      symbol: "Int_Sensors_Size4_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size4_Class4",
    {
      id: 128064236,
      symbol: "Int_Sensors_Size4_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size4_Class5",
    {
      id: 128064237,
      symbol: "Int_Sensors_Size4_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size5_Class1",
    {
      id: 128064238,
      symbol: "Int_Sensors_Size5_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size5_Class2",
    {
      id: 128064239,
      symbol: "Int_Sensors_Size5_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size5_Class3",
    {
      id: 128064240,
      symbol: "Int_Sensors_Size5_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size5_Class4",
    {
      id: 128064241,
      symbol: "Int_Sensors_Size5_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size5_Class5",
    {
      id: 128064242,
      symbol: "Int_Sensors_Size5_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size6_Class1",
    {
      id: 128064243,
      symbol: "Int_Sensors_Size6_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size6_Class2",
    {
      id: 128064244,
      symbol: "Int_Sensors_Size6_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size6_Class3",
    {
      id: 128064245,
      symbol: "Int_Sensors_Size6_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size6_Class4",
    {
      id: 128064246,
      symbol: "Int_Sensors_Size6_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size6_Class5",
    {
      id: 128064247,
      symbol: "Int_Sensors_Size6_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size7_Class1",
    {
      id: 128064248,
      symbol: "Int_Sensors_Size7_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size7_Class2",
    {
      id: 128064249,
      symbol: "Int_Sensors_Size7_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size7_Class3",
    {
      id: 128064250,
      symbol: "Int_Sensors_Size7_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size7_Class4",
    {
      id: 128064251,
      symbol: "Int_Sensors_Size7_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size7_Class5",
    {
      id: 128064252,
      symbol: "Int_Sensors_Size7_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size8_Class1",
    {
      id: 128064253,
      symbol: "Int_Sensors_Size8_Class1",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size8_Class2",
    {
      id: 128064254,
      symbol: "Int_Sensors_Size8_Class2",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size8_Class3",
    {
      id: 128064255,
      symbol: "Int_Sensors_Size8_Class3",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size8_Class4",
    {
      id: 128064256,
      symbol: "Int_Sensors_Size8_Class4",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size8_Class5",
    {
      id: 128064257,
      symbol: "Int_Sensors_Size8_Class5",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size1_Class1",
    {
      id: 128064258,
      symbol: "Int_ShieldGenerator_Size1_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size1_Class2",
    {
      id: 128064259,
      symbol: "Int_ShieldGenerator_Size1_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size1_Class3",
    {
      id: 128064260,
      symbol: "Int_ShieldGenerator_Size1_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size1_Class5",
    {
      id: 128064262,
      symbol: "Int_ShieldGenerator_Size1_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class1",
    {
      id: 128064263,
      symbol: "Int_ShieldGenerator_Size2_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class2",
    {
      id: 128064264,
      symbol: "Int_ShieldGenerator_Size2_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class3",
    {
      id: 128064265,
      symbol: "Int_ShieldGenerator_Size2_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class4",
    {
      id: 128064266,
      symbol: "Int_ShieldGenerator_Size2_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class5",
    {
      id: 128064267,
      symbol: "Int_ShieldGenerator_Size2_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class1",
    {
      id: 128064268,
      symbol: "Int_ShieldGenerator_Size3_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class2",
    {
      id: 128064269,
      symbol: "Int_ShieldGenerator_Size3_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class3",
    {
      id: 128064270,
      symbol: "Int_ShieldGenerator_Size3_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class4",
    {
      id: 128064271,
      symbol: "Int_ShieldGenerator_Size3_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class5",
    {
      id: 128064272,
      symbol: "Int_ShieldGenerator_Size3_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class1",
    {
      id: 128064273,
      symbol: "Int_ShieldGenerator_Size4_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class2",
    {
      id: 128064274,
      symbol: "Int_ShieldGenerator_Size4_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class3",
    {
      id: 128064275,
      symbol: "Int_ShieldGenerator_Size4_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class4",
    {
      id: 128064276,
      symbol: "Int_ShieldGenerator_Size4_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class5",
    {
      id: 128064277,
      symbol: "Int_ShieldGenerator_Size4_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class1",
    {
      id: 128064278,
      symbol: "Int_ShieldGenerator_Size5_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class2",
    {
      id: 128064279,
      symbol: "Int_ShieldGenerator_Size5_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class3",
    {
      id: 128064280,
      symbol: "Int_ShieldGenerator_Size5_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class4",
    {
      id: 128064281,
      symbol: "Int_ShieldGenerator_Size5_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class5",
    {
      id: 128064282,
      symbol: "Int_ShieldGenerator_Size5_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class1",
    {
      id: 128064283,
      symbol: "Int_ShieldGenerator_Size6_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class2",
    {
      id: 128064284,
      symbol: "Int_ShieldGenerator_Size6_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class3",
    {
      id: 128064285,
      symbol: "Int_ShieldGenerator_Size6_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class4",
    {
      id: 128064286,
      symbol: "Int_ShieldGenerator_Size6_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class5",
    {
      id: 128064287,
      symbol: "Int_ShieldGenerator_Size6_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class1",
    {
      id: 128064288,
      symbol: "Int_ShieldGenerator_Size7_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class2",
    {
      id: 128064289,
      symbol: "Int_ShieldGenerator_Size7_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class3",
    {
      id: 128064290,
      symbol: "Int_ShieldGenerator_Size7_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class4",
    {
      id: 128064291,
      symbol: "Int_ShieldGenerator_Size7_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class5",
    {
      id: 128064292,
      symbol: "Int_ShieldGenerator_Size7_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class1",
    {
      id: 128064293,
      symbol: "Int_ShieldGenerator_Size8_Class1",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class2",
    {
      id: 128064294,
      symbol: "Int_ShieldGenerator_Size8_Class2",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class3",
    {
      id: 128064295,
      symbol: "Int_ShieldGenerator_Size8_Class3",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class4",
    {
      id: 128064296,
      symbol: "Int_ShieldGenerator_Size8_Class4",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class5",
    {
      id: 128064297,
      symbol: "Int_ShieldGenerator_Size8_Class5",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size1_Class1",
    {
      id: 128064298,
      symbol: "Int_ShieldCellBank_Size1_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size1_Class2",
    {
      id: 128064299,
      symbol: "Int_ShieldCellBank_Size1_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size1_Class3",
    {
      id: 128064300,
      symbol: "Int_ShieldCellBank_Size1_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size1_Class4",
    {
      id: 128064301,
      symbol: "Int_ShieldCellBank_Size1_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size1_Class5",
    {
      id: 128064302,
      symbol: "Int_ShieldCellBank_Size1_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size2_Class1",
    {
      id: 128064303,
      symbol: "Int_ShieldCellBank_Size2_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size2_Class2",
    {
      id: 128064304,
      symbol: "Int_ShieldCellBank_Size2_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size2_Class3",
    {
      id: 128064305,
      symbol: "Int_ShieldCellBank_Size2_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size2_Class4",
    {
      id: 128064306,
      symbol: "Int_ShieldCellBank_Size2_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size2_Class5",
    {
      id: 128064307,
      symbol: "Int_ShieldCellBank_Size2_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size3_Class1",
    {
      id: 128064308,
      symbol: "Int_ShieldCellBank_Size3_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size3_Class2",
    {
      id: 128064309,
      symbol: "Int_ShieldCellBank_Size3_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size3_Class3",
    {
      id: 128064310,
      symbol: "Int_ShieldCellBank_Size3_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size3_Class4",
    {
      id: 128064311,
      symbol: "Int_ShieldCellBank_Size3_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size3_Class5",
    {
      id: 128064312,
      symbol: "Int_ShieldCellBank_Size3_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size4_Class1",
    {
      id: 128064313,
      symbol: "Int_ShieldCellBank_Size4_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size4_Class2",
    {
      id: 128064314,
      symbol: "Int_ShieldCellBank_Size4_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size4_Class3",
    {
      id: 128064315,
      symbol: "Int_ShieldCellBank_Size4_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size4_Class4",
    {
      id: 128064316,
      symbol: "Int_ShieldCellBank_Size4_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size4_Class5",
    {
      id: 128064317,
      symbol: "Int_ShieldCellBank_Size4_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size5_Class1",
    {
      id: 128064318,
      symbol: "Int_ShieldCellBank_Size5_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size5_Class2",
    {
      id: 128064319,
      symbol: "Int_ShieldCellBank_Size5_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size5_Class3",
    {
      id: 128064320,
      symbol: "Int_ShieldCellBank_Size5_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size5_Class4",
    {
      id: 128064321,
      symbol: "Int_ShieldCellBank_Size5_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size5_Class5",
    {
      id: 128064322,
      symbol: "Int_ShieldCellBank_Size5_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size6_Class1",
    {
      id: 128064323,
      symbol: "Int_ShieldCellBank_Size6_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size6_Class2",
    {
      id: 128064324,
      symbol: "Int_ShieldCellBank_Size6_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size6_Class3",
    {
      id: 128064325,
      symbol: "Int_ShieldCellBank_Size6_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size6_Class4",
    {
      id: 128064326,
      symbol: "Int_ShieldCellBank_Size6_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size6_Class5",
    {
      id: 128064327,
      symbol: "Int_ShieldCellBank_Size6_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size7_Class1",
    {
      id: 128064328,
      symbol: "Int_ShieldCellBank_Size7_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size7_Class2",
    {
      id: 128064329,
      symbol: "Int_ShieldCellBank_Size7_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size7_Class3",
    {
      id: 128064330,
      symbol: "Int_ShieldCellBank_Size7_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size7_Class4",
    {
      id: 128064331,
      symbol: "Int_ShieldCellBank_Size7_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size7_Class5",
    {
      id: 128064332,
      symbol: "Int_ShieldCellBank_Size7_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size8_Class1",
    {
      id: 128064333,
      symbol: "Int_ShieldCellBank_Size8_Class1",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size8_Class2",
    {
      id: 128064334,
      symbol: "Int_ShieldCellBank_Size8_Class2",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size8_Class3",
    {
      id: 128064335,
      symbol: "Int_ShieldCellBank_Size8_Class3",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size8_Class4",
    {
      id: 128064336,
      symbol: "Int_ShieldCellBank_Size8_Class4",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldCellBank_Size8_Class5",
    {
      id: 128064337,
      symbol: "Int_ShieldCellBank_Size8_Class5",
      category: "internal",
      name: "Shield Cell Bank",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size1_Class1",
    {
      id: 128064338,
      symbol: "Int_CargoRack_Size1_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size2_Class1",
    {
      id: 128064339,
      symbol: "Int_CargoRack_Size2_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size3_Class1",
    {
      id: 128064340,
      symbol: "Int_CargoRack_Size3_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size4_Class1",
    {
      id: 128064341,
      symbol: "Int_CargoRack_Size4_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size5_Class1",
    {
      id: 128064342,
      symbol: "Int_CargoRack_Size5_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size6_Class1",
    {
      id: 128064343,
      symbol: "Int_CargoRack_Size6_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size7_Class1",
    {
      id: 128064344,
      symbol: "Int_CargoRack_Size7_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size8_Class1",
    {
      id: 128064345,
      symbol: "Int_CargoRack_Size8_Class1",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size1_Class3",
    {
      id: 128064346,
      symbol: "Int_FuelTank_Size1_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size2_Class3",
    {
      id: 128064347,
      symbol: "Int_FuelTank_Size2_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size3_Class3",
    {
      id: 128064348,
      symbol: "Int_FuelTank_Size3_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size4_Class3",
    {
      id: 128064349,
      symbol: "Int_FuelTank_Size4_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size5_Class3",
    {
      id: 128064350,
      symbol: "Int_FuelTank_Size5_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size6_Class3",
    {
      id: 128064351,
      symbol: "Int_FuelTank_Size6_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size7_Class3",
    {
      id: 128064352,
      symbol: "Int_FuelTank_Size7_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size8_Class3",
    {
      id: 128064353,
      symbol: "Int_FuelTank_Size8_Class3",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon",
    {
      id: 128066402,
      symbol: "Int_DroneControl_ResourceSiphon",
      category: "internal",
      name: "Limpet Control",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size1_Class1",
    {
      id: 128066532,
      symbol: "Int_DroneControl_ResourceSiphon_Size1_Class1",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size1_Class2",
    {
      id: 128066533,
      symbol: "Int_DroneControl_ResourceSiphon_Size1_Class2",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size1_Class3",
    {
      id: 128066534,
      symbol: "Int_DroneControl_ResourceSiphon_Size1_Class3",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size1_Class4",
    {
      id: 128066535,
      symbol: "Int_DroneControl_ResourceSiphon_Size1_Class4",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size1_Class5",
    {
      id: 128066536,
      symbol: "Int_DroneControl_ResourceSiphon_Size1_Class5",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size3_Class1",
    {
      id: 128066537,
      symbol: "Int_DroneControl_ResourceSiphon_Size3_Class1",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size3_Class2",
    {
      id: 128066538,
      symbol: "Int_DroneControl_ResourceSiphon_Size3_Class2",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size3_Class3",
    {
      id: 128066539,
      symbol: "Int_DroneControl_ResourceSiphon_Size3_Class3",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size3_Class4",
    {
      id: 128066540,
      symbol: "Int_DroneControl_ResourceSiphon_Size3_Class4",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size3_Class5",
    {
      id: 128066541,
      symbol: "Int_DroneControl_ResourceSiphon_Size3_Class5",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size5_Class1",
    {
      id: 128066542,
      symbol: "Int_DroneControl_ResourceSiphon_Size5_Class1",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size5_Class2",
    {
      id: 128066543,
      symbol: "Int_DroneControl_ResourceSiphon_Size5_Class2",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size5_Class3",
    {
      id: 128066544,
      symbol: "Int_DroneControl_ResourceSiphon_Size5_Class3",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size5_Class4",
    {
      id: 128066545,
      symbol: "Int_DroneControl_ResourceSiphon_Size5_Class4",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size5_Class5",
    {
      id: 128066546,
      symbol: "Int_DroneControl_ResourceSiphon_Size5_Class5",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size7_Class1",
    {
      id: 128066547,
      symbol: "Int_DroneControl_ResourceSiphon_Size7_Class1",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size7_Class2",
    {
      id: 128066548,
      symbol: "Int_DroneControl_ResourceSiphon_Size7_Class2",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size7_Class3",
    {
      id: 128066549,
      symbol: "Int_DroneControl_ResourceSiphon_Size7_Class3",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size7_Class4",
    {
      id: 128066550,
      symbol: "Int_DroneControl_ResourceSiphon_Size7_Class4",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_ResourceSiphon_Size7_Class5",
    {
      id: 128066551,
      symbol: "Int_DroneControl_ResourceSiphon_Size7_Class5",
      category: "internal",
      name: "Hatch Breaker Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_CargoScanner_Size0_Class1",
    {
      id: 128662520,
      symbol: "Hpt_CargoScanner_Size0_Class1",
      category: "utility",
      name: "Cargo Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_CargoScanner_Size0_Class2",
    {
      id: 128662521,
      symbol: "Hpt_CargoScanner_Size0_Class2",
      category: "utility",
      name: "Cargo Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_CargoScanner_Size0_Class3",
    {
      id: 128662522,
      symbol: "Hpt_CargoScanner_Size0_Class3",
      category: "utility",
      name: "Cargo Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_CargoScanner_Size0_Class4",
    {
      id: 128662523,
      symbol: "Hpt_CargoScanner_Size0_Class4",
      category: "utility",
      name: "Cargo Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_CargoScanner_Size0_Class5",
    {
      id: 128662524,
      symbol: "Hpt_CargoScanner_Size0_Class5",
      category: "utility",
      name: "Cargo Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_CloudScanner_Size0_Class1",
    {
      id: 128662525,
      symbol: "Hpt_CloudScanner_Size0_Class1",
      category: "utility",
      name: "Frame Shift Wake Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_CloudScanner_Size0_Class2",
    {
      id: 128662526,
      symbol: "Hpt_CloudScanner_Size0_Class2",
      category: "utility",
      name: "Frame Shift Wake Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_CloudScanner_Size0_Class3",
    {
      id: 128662527,
      symbol: "Hpt_CloudScanner_Size0_Class3",
      category: "utility",
      name: "Frame Shift Wake Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_CloudScanner_Size0_Class4",
    {
      id: 128662528,
      symbol: "Hpt_CloudScanner_Size0_Class4",
      category: "utility",
      name: "Frame Shift Wake Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_CloudScanner_Size0_Class5",
    {
      id: 128662529,
      symbol: "Hpt_CloudScanner_Size0_Class5",
      category: "utility",
      name: "Frame Shift Wake Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_CrimeScanner_Size0_Class1",
    {
      id: 128662530,
      symbol: "Hpt_CrimeScanner_Size0_Class1",
      category: "utility",
      name: "Kill Warrant Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_CrimeScanner_Size0_Class2",
    {
      id: 128662531,
      symbol: "Hpt_CrimeScanner_Size0_Class2",
      category: "utility",
      name: "Kill Warrant Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_CrimeScanner_Size0_Class3",
    {
      id: 128662532,
      symbol: "Hpt_CrimeScanner_Size0_Class3",
      category: "utility",
      name: "Kill Warrant Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_CrimeScanner_Size0_Class4",
    {
      id: 128662533,
      symbol: "Hpt_CrimeScanner_Size0_Class4",
      category: "utility",
      name: "Kill Warrant Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_CrimeScanner_Size0_Class5",
    {
      id: 128662534,
      symbol: "Hpt_CrimeScanner_Size0_Class5",
      category: "utility",
      name: "Kill Warrant Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_StellarBodyDiscoveryScanner_Standard",
    {
      id: 128662535,
      symbol: "Int_StellarBodyDiscoveryScanner_Standard",
      category: "internal",
      name: "Basic Discovery Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "removed"
    }
  ],
  [
    "Int_StellarBodyDiscoveryScanner_Intermediate",
    {
      id: 128663560,
      symbol: "Int_StellarBodyDiscoveryScanner_Intermediate",
      category: "internal",
      name: "Intermediate Discovery Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "removed"
    }
  ],
  [
    "Int_StellarBodyDiscoveryScanner_Advanced",
    {
      id: 128663561,
      symbol: "Int_StellarBodyDiscoveryScanner_Advanced",
      category: "internal",
      name: "Advanced Discovery Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: "removed"
    }
  ],
  [
    "Int_DetailedSurfaceScanner_Tiny",
    {
      id: 128666634,
      symbol: "Int_DetailedSurfaceScanner_Tiny",
      category: "internal",
      name: "Detailed Surface Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Int_PowerPlant_Size2_Class1_free",
    {
      id: 128666635,
      symbol: "Int_PowerPlant_Size2_Class1_free",
      category: "standard",
      name: "Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class1_free",
    {
      id: 128666636,
      symbol: "Int_Engine_Size2_Class1_free",
      category: "standard",
      name: "Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Hyperdrive_Size2_Class1_free",
    {
      id: 128666637,
      symbol: "Int_Hyperdrive_Size2_Class1_free",
      category: "standard",
      name: "Frame Shift Drive",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_LifeSupport_Size1_Class1_free",
    {
      id: 128666638,
      symbol: "Int_LifeSupport_Size1_Class1_free",
      category: "standard",
      name: "Life Support",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PowerDistributor_Size1_Class1_free",
    {
      id: 128666639,
      symbol: "Int_PowerDistributor_Size1_Class1_free",
      category: "standard",
      name: "Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Sensors_Size1_Class1_free",
    {
      id: 128666640,
      symbol: "Int_Sensors_Size1_Class1_free",
      category: "standard",
      name: "Sensors",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class1_free",
    {
      id: 128666641,
      symbol: "Int_ShieldGenerator_Size2_Class1_free",
      category: "internal",
      name: "Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_StellarBodyDiscoveryScanner_Standard_free",
    {
      id: 128666642,
      symbol: "Int_StellarBodyDiscoveryScanner_Standard_free",
      category: "internal",
      name: "Basic Discovery Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_CargoRack_Size2_Class1_free",
    {
      id: 128666643,
      symbol: "Int_CargoRack_Size2_Class1_free",
      category: "internal",
      name: "Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size1_Class1",
    {
      id: 128666644,
      symbol: "Int_FuelScoop_Size1_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size2_Class1",
    {
      id: 128666645,
      symbol: "Int_FuelScoop_Size2_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size3_Class1",
    {
      id: 128666646,
      symbol: "Int_FuelScoop_Size3_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size4_Class1",
    {
      id: 128666647,
      symbol: "Int_FuelScoop_Size4_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size5_Class1",
    {
      id: 128666648,
      symbol: "Int_FuelScoop_Size5_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size6_Class1",
    {
      id: 128666649,
      symbol: "Int_FuelScoop_Size6_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size7_Class1",
    {
      id: 128666650,
      symbol: "Int_FuelScoop_Size7_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size8_Class1",
    {
      id: 128666651,
      symbol: "Int_FuelScoop_Size8_Class1",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size1_Class2",
    {
      id: 128666652,
      symbol: "Int_FuelScoop_Size1_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size2_Class2",
    {
      id: 128666653,
      symbol: "Int_FuelScoop_Size2_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size3_Class2",
    {
      id: 128666654,
      symbol: "Int_FuelScoop_Size3_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size4_Class2",
    {
      id: 128666655,
      symbol: "Int_FuelScoop_Size4_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size5_Class2",
    {
      id: 128666656,
      symbol: "Int_FuelScoop_Size5_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size6_Class2",
    {
      id: 128666657,
      symbol: "Int_FuelScoop_Size6_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size7_Class2",
    {
      id: 128666658,
      symbol: "Int_FuelScoop_Size7_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size8_Class2",
    {
      id: 128666659,
      symbol: "Int_FuelScoop_Size8_Class2",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size1_Class3",
    {
      id: 128666660,
      symbol: "Int_FuelScoop_Size1_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size2_Class3",
    {
      id: 128666661,
      symbol: "Int_FuelScoop_Size2_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size3_Class3",
    {
      id: 128666662,
      symbol: "Int_FuelScoop_Size3_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size4_Class3",
    {
      id: 128666663,
      symbol: "Int_FuelScoop_Size4_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size5_Class3",
    {
      id: 128666664,
      symbol: "Int_FuelScoop_Size5_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size6_Class3",
    {
      id: 128666665,
      symbol: "Int_FuelScoop_Size6_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size7_Class3",
    {
      id: 128666666,
      symbol: "Int_FuelScoop_Size7_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size8_Class3",
    {
      id: 128666667,
      symbol: "Int_FuelScoop_Size8_Class3",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size1_Class4",
    {
      id: 128666668,
      symbol: "Int_FuelScoop_Size1_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size2_Class4",
    {
      id: 128666669,
      symbol: "Int_FuelScoop_Size2_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size3_Class4",
    {
      id: 128666670,
      symbol: "Int_FuelScoop_Size3_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size4_Class4",
    {
      id: 128666671,
      symbol: "Int_FuelScoop_Size4_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size5_Class4",
    {
      id: 128666672,
      symbol: "Int_FuelScoop_Size5_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size6_Class4",
    {
      id: 128666673,
      symbol: "Int_FuelScoop_Size6_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size7_Class4",
    {
      id: 128666674,
      symbol: "Int_FuelScoop_Size7_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size8_Class4",
    {
      id: 128666675,
      symbol: "Int_FuelScoop_Size8_Class4",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size1_Class5",
    {
      id: 128666676,
      symbol: "Int_FuelScoop_Size1_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size2_Class5",
    {
      id: 128666677,
      symbol: "Int_FuelScoop_Size2_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size3_Class5",
    {
      id: 128666678,
      symbol: "Int_FuelScoop_Size3_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size4_Class5",
    {
      id: 128666679,
      symbol: "Int_FuelScoop_Size4_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size5_Class5",
    {
      id: 128666680,
      symbol: "Int_FuelScoop_Size5_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size6_Class5",
    {
      id: 128666681,
      symbol: "Int_FuelScoop_Size6_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size7_Class5",
    {
      id: 128666682,
      symbol: "Int_FuelScoop_Size7_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FuelScoop_Size8_Class5",
    {
      id: 128666683,
      symbol: "Int_FuelScoop_Size8_Class5",
      category: "internal",
      name: "Fuel Scoop",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size1_Class1",
    {
      id: 128666684,
      symbol: "Int_Refinery_Size1_Class1",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size2_Class1",
    {
      id: 128666685,
      symbol: "Int_Refinery_Size2_Class1",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size3_Class1",
    {
      id: 128666686,
      symbol: "Int_Refinery_Size3_Class1",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size4_Class1",
    {
      id: 128666687,
      symbol: "Int_Refinery_Size4_Class1",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size1_Class2",
    {
      id: 128666688,
      symbol: "Int_Refinery_Size1_Class2",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size2_Class2",
    {
      id: 128666689,
      symbol: "Int_Refinery_Size2_Class2",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size3_Class2",
    {
      id: 128666690,
      symbol: "Int_Refinery_Size3_Class2",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size4_Class2",
    {
      id: 128666691,
      symbol: "Int_Refinery_Size4_Class2",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size1_Class3",
    {
      id: 128666692,
      symbol: "Int_Refinery_Size1_Class3",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size2_Class3",
    {
      id: 128666693,
      symbol: "Int_Refinery_Size2_Class3",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size3_Class3",
    {
      id: 128666694,
      symbol: "Int_Refinery_Size3_Class3",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size4_Class3",
    {
      id: 128666695,
      symbol: "Int_Refinery_Size4_Class3",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size1_Class4",
    {
      id: 128666696,
      symbol: "Int_Refinery_Size1_Class4",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size2_Class4",
    {
      id: 128666697,
      symbol: "Int_Refinery_Size2_Class4",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size3_Class4",
    {
      id: 128666698,
      symbol: "Int_Refinery_Size3_Class4",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size4_Class4",
    {
      id: 128666699,
      symbol: "Int_Refinery_Size4_Class4",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size1_Class5",
    {
      id: 128666700,
      symbol: "Int_Refinery_Size1_Class5",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size2_Class5",
    {
      id: 128666701,
      symbol: "Int_Refinery_Size2_Class5",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size3_Class5",
    {
      id: 128666702,
      symbol: "Int_Refinery_Size3_Class5",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Refinery_Size4_Class5",
    {
      id: 128666703,
      symbol: "Int_Refinery_Size4_Class5",
      category: "internal",
      name: "Refinery",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size1_Class1",
    {
      id: 128666704,
      symbol: "Int_FSDInterdictor_Size1_Class1",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size2_Class1",
    {
      id: 128666705,
      symbol: "Int_FSDInterdictor_Size2_Class1",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size3_Class1",
    {
      id: 128666706,
      symbol: "Int_FSDInterdictor_Size3_Class1",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size4_Class1",
    {
      id: 128666707,
      symbol: "Int_FSDInterdictor_Size4_Class1",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size1_Class2",
    {
      id: 128666708,
      symbol: "Int_FSDInterdictor_Size1_Class2",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size2_Class2",
    {
      id: 128666709,
      symbol: "Int_FSDInterdictor_Size2_Class2",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size3_Class2",
    {
      id: 128666710,
      symbol: "Int_FSDInterdictor_Size3_Class2",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size4_Class2",
    {
      id: 128666711,
      symbol: "Int_FSDInterdictor_Size4_Class2",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size1_Class3",
    {
      id: 128666712,
      symbol: "Int_FSDInterdictor_Size1_Class3",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size2_Class3",
    {
      id: 128666713,
      symbol: "Int_FSDInterdictor_Size2_Class3",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size3_Class3",
    {
      id: 128666714,
      symbol: "Int_FSDInterdictor_Size3_Class3",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size4_Class3",
    {
      id: 128666715,
      symbol: "Int_FSDInterdictor_Size4_Class3",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size1_Class4",
    {
      id: 128666716,
      symbol: "Int_FSDInterdictor_Size1_Class4",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size2_Class4",
    {
      id: 128666717,
      symbol: "Int_FSDInterdictor_Size2_Class4",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size3_Class4",
    {
      id: 128666718,
      symbol: "Int_FSDInterdictor_Size3_Class4",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size4_Class4",
    {
      id: 128666719,
      symbol: "Int_FSDInterdictor_Size4_Class4",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size1_Class5",
    {
      id: 128666720,
      symbol: "Int_FSDInterdictor_Size1_Class5",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size2_Class5",
    {
      id: 128666721,
      symbol: "Int_FSDInterdictor_Size2_Class5",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size3_Class5",
    {
      id: 128666722,
      symbol: "Int_FSDInterdictor_Size3_Class5",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_FSDInterdictor_Size4_Class5",
    {
      id: 128666723,
      symbol: "Int_FSDInterdictor_Size4_Class5",
      category: "internal",
      name: "Frame Shift Drive Interdictor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_DumbfireMissileRack_Fixed_Small",
    {
      id: 128666724,
      symbol: "Hpt_DumbfireMissileRack_Fixed_Small",
      category: "hardpoint",
      name: "Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_DumbfireMissileRack_Fixed_Medium",
    {
      id: 128666725,
      symbol: "Hpt_DumbfireMissileRack_Fixed_Medium",
      category: "hardpoint",
      name: "Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FuelTank_Size1_Class3_free",
    {
      id: 128667018,
      symbol: "Int_FuelTank_Size1_Class3_free",
      category: "standard",
      name: "Fuel Tank",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size1_Class1",
    {
      id: 128667598,
      symbol: "Int_Repairer_Size1_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size2_Class1",
    {
      id: 128667599,
      symbol: "Int_Repairer_Size2_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size3_Class1",
    {
      id: 128667600,
      symbol: "Int_Repairer_Size3_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size4_Class1",
    {
      id: 128667601,
      symbol: "Int_Repairer_Size4_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size5_Class1",
    {
      id: 128667602,
      symbol: "Int_Repairer_Size5_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size6_Class1",
    {
      id: 128667603,
      symbol: "Int_Repairer_Size6_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size7_Class1",
    {
      id: 128667604,
      symbol: "Int_Repairer_Size7_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size8_Class1",
    {
      id: 128667605,
      symbol: "Int_Repairer_Size8_Class1",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size1_Class2",
    {
      id: 128667606,
      symbol: "Int_Repairer_Size1_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size2_Class2",
    {
      id: 128667607,
      symbol: "Int_Repairer_Size2_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size3_Class2",
    {
      id: 128667608,
      symbol: "Int_Repairer_Size3_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size4_Class2",
    {
      id: 128667609,
      symbol: "Int_Repairer_Size4_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size5_Class2",
    {
      id: 128667610,
      symbol: "Int_Repairer_Size5_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size6_Class2",
    {
      id: 128667611,
      symbol: "Int_Repairer_Size6_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size7_Class2",
    {
      id: 128667612,
      symbol: "Int_Repairer_Size7_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size8_Class2",
    {
      id: 128667613,
      symbol: "Int_Repairer_Size8_Class2",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size1_Class3",
    {
      id: 128667614,
      symbol: "Int_Repairer_Size1_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size2_Class3",
    {
      id: 128667615,
      symbol: "Int_Repairer_Size2_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size3_Class3",
    {
      id: 128667616,
      symbol: "Int_Repairer_Size3_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size4_Class3",
    {
      id: 128667617,
      symbol: "Int_Repairer_Size4_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size5_Class3",
    {
      id: 128667618,
      symbol: "Int_Repairer_Size5_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size6_Class3",
    {
      id: 128667619,
      symbol: "Int_Repairer_Size6_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size7_Class3",
    {
      id: 128667620,
      symbol: "Int_Repairer_Size7_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size8_Class3",
    {
      id: 128667621,
      symbol: "Int_Repairer_Size8_Class3",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size1_Class4",
    {
      id: 128667622,
      symbol: "Int_Repairer_Size1_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size2_Class4",
    {
      id: 128667623,
      symbol: "Int_Repairer_Size2_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size3_Class4",
    {
      id: 128667624,
      symbol: "Int_Repairer_Size3_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size4_Class4",
    {
      id: 128667625,
      symbol: "Int_Repairer_Size4_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size5_Class4",
    {
      id: 128667626,
      symbol: "Int_Repairer_Size5_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size6_Class4",
    {
      id: 128667627,
      symbol: "Int_Repairer_Size6_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size7_Class4",
    {
      id: 128667628,
      symbol: "Int_Repairer_Size7_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size8_Class4",
    {
      id: 128667629,
      symbol: "Int_Repairer_Size8_Class4",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size1_Class5",
    {
      id: 128667630,
      symbol: "Int_Repairer_Size1_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size2_Class5",
    {
      id: 128667631,
      symbol: "Int_Repairer_Size2_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size3_Class5",
    {
      id: 128667632,
      symbol: "Int_Repairer_Size3_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size4_Class5",
    {
      id: 128667633,
      symbol: "Int_Repairer_Size4_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size5_Class5",
    {
      id: 128667634,
      symbol: "Int_Repairer_Size5_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size6_Class5",
    {
      id: 128667635,
      symbol: "Int_Repairer_Size6_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size7_Class5",
    {
      id: 128667636,
      symbol: "Int_Repairer_Size7_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Repairer_Size8_Class5",
    {
      id: 128667637,
      symbol: "Int_Repairer_Size8_Class5",
      category: "internal",
      name: "Auto Field-Maintenance Unit",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_ShieldBooster_Size0_Class1",
    {
      id: 128668532,
      symbol: "Hpt_ShieldBooster_Size0_Class1",
      category: "utility",
      name: "Shield Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_ShieldBooster_Size0_Class2",
    {
      id: 128668533,
      symbol: "Hpt_ShieldBooster_Size0_Class2",
      category: "utility",
      name: "Shield Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_ShieldBooster_Size0_Class3",
    {
      id: 128668534,
      symbol: "Hpt_ShieldBooster_Size0_Class3",
      category: "utility",
      name: "Shield Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_ShieldBooster_Size0_Class4",
    {
      id: 128668535,
      symbol: "Hpt_ShieldBooster_Size0_Class4",
      category: "utility",
      name: "Shield Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_ShieldBooster_Size0_Class5",
    {
      id: 128668536,
      symbol: "Hpt_ShieldBooster_Size0_Class5",
      category: "utility",
      name: "Shield Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size1_Class1",
    {
      id: 128668537,
      symbol: "Int_HullReinforcement_Size1_Class1",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size1_Class2",
    {
      id: 128668538,
      symbol: "Int_HullReinforcement_Size1_Class2",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size2_Class1",
    {
      id: 128668539,
      symbol: "Int_HullReinforcement_Size2_Class1",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size2_Class2",
    {
      id: 128668540,
      symbol: "Int_HullReinforcement_Size2_Class2",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size3_Class1",
    {
      id: 128668541,
      symbol: "Int_HullReinforcement_Size3_Class1",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size3_Class2",
    {
      id: 128668542,
      symbol: "Int_HullReinforcement_Size3_Class2",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size4_Class1",
    {
      id: 128668543,
      symbol: "Int_HullReinforcement_Size4_Class1",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size4_Class2",
    {
      id: 128668544,
      symbol: "Int_HullReinforcement_Size4_Class2",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size5_Class1",
    {
      id: 128668545,
      symbol: "Int_HullReinforcement_Size5_Class1",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_HullReinforcement_Size5_Class2",
    {
      id: 128668546,
      symbol: "Int_HullReinforcement_Size5_Class2",
      category: "internal",
      name: "Hull Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Cannon_Gimbal_Large",
    {
      id: 128671120,
      symbol: "Hpt_Cannon_Gimbal_Large",
      category: "hardpoint",
      name: "Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "DiamondBack_Armour_Grade1",
    {
      id: 128671218,
      symbol: "DiamondBack_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Diamondback Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBack_Armour_Grade2",
    {
      id: 128671219,
      symbol: "DiamondBack_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Diamondback Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBack_Armour_Grade3",
    {
      id: 128671220,
      symbol: "DiamondBack_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Diamondback Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBack_Armour_Mirrored",
    {
      id: 128671221,
      symbol: "DiamondBack_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Diamondback Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBack_Armour_Reactive",
    {
      id: 128671222,
      symbol: "DiamondBack_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Diamondback Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Courier_Armour_Grade1",
    {
      id: 128671224,
      symbol: "Empire_Courier_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Courier",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Courier_Armour_Grade2",
    {
      id: 128671225,
      symbol: "Empire_Courier_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Courier",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Courier_Armour_Grade3",
    {
      id: 128671226,
      symbol: "Empire_Courier_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Courier",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Courier_Armour_Mirrored",
    {
      id: 128671227,
      symbol: "Empire_Courier_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Courier",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Courier_Armour_Reactive",
    {
      id: 128671228,
      symbol: "Empire_Courier_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Courier",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size1_Class1",
    {
      id: 128671229,
      symbol: "Int_DroneControl_Collection_Size1_Class1",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size1_Class2",
    {
      id: 128671230,
      symbol: "Int_DroneControl_Collection_Size1_Class2",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size1_Class3",
    {
      id: 128671231,
      symbol: "Int_DroneControl_Collection_Size1_Class3",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size1_Class4",
    {
      id: 128671232,
      symbol: "Int_DroneControl_Collection_Size1_Class4",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size1_Class5",
    {
      id: 128671233,
      symbol: "Int_DroneControl_Collection_Size1_Class5",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size3_Class1",
    {
      id: 128671234,
      symbol: "Int_DroneControl_Collection_Size3_Class1",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size3_Class2",
    {
      id: 128671235,
      symbol: "Int_DroneControl_Collection_Size3_Class2",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size3_Class3",
    {
      id: 128671236,
      symbol: "Int_DroneControl_Collection_Size3_Class3",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size3_Class4",
    {
      id: 128671237,
      symbol: "Int_DroneControl_Collection_Size3_Class4",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size3_Class5",
    {
      id: 128671238,
      symbol: "Int_DroneControl_Collection_Size3_Class5",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size5_Class1",
    {
      id: 128671239,
      symbol: "Int_DroneControl_Collection_Size5_Class1",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size5_Class2",
    {
      id: 128671240,
      symbol: "Int_DroneControl_Collection_Size5_Class2",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size5_Class3",
    {
      id: 128671241,
      symbol: "Int_DroneControl_Collection_Size5_Class3",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size5_Class4",
    {
      id: 128671242,
      symbol: "Int_DroneControl_Collection_Size5_Class4",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size5_Class5",
    {
      id: 128671243,
      symbol: "Int_DroneControl_Collection_Size5_Class5",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size7_Class1",
    {
      id: 128671244,
      symbol: "Int_DroneControl_Collection_Size7_Class1",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size7_Class2",
    {
      id: 128671245,
      symbol: "Int_DroneControl_Collection_Size7_Class2",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size7_Class3",
    {
      id: 128671246,
      symbol: "Int_DroneControl_Collection_Size7_Class3",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size7_Class4",
    {
      id: 128671247,
      symbol: "Int_DroneControl_Collection_Size7_Class4",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Collection_Size7_Class5",
    {
      id: 128671248,
      symbol: "Int_DroneControl_Collection_Size7_Class5",
      category: "internal",
      name: "Collector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size1_Class1",
    {
      id: 128671249,
      symbol: "Int_DroneControl_FuelTransfer_Size1_Class1",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size1_Class2",
    {
      id: 128671250,
      symbol: "Int_DroneControl_FuelTransfer_Size1_Class2",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size1_Class3",
    {
      id: 128671251,
      symbol: "Int_DroneControl_FuelTransfer_Size1_Class3",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size1_Class4",
    {
      id: 128671252,
      symbol: "Int_DroneControl_FuelTransfer_Size1_Class4",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size1_Class5",
    {
      id: 128671253,
      symbol: "Int_DroneControl_FuelTransfer_Size1_Class5",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size3_Class1",
    {
      id: 128671254,
      symbol: "Int_DroneControl_FuelTransfer_Size3_Class1",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size3_Class2",
    {
      id: 128671255,
      symbol: "Int_DroneControl_FuelTransfer_Size3_Class2",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size3_Class3",
    {
      id: 128671256,
      symbol: "Int_DroneControl_FuelTransfer_Size3_Class3",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size3_Class4",
    {
      id: 128671257,
      symbol: "Int_DroneControl_FuelTransfer_Size3_Class4",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size3_Class5",
    {
      id: 128671258,
      symbol: "Int_DroneControl_FuelTransfer_Size3_Class5",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size5_Class1",
    {
      id: 128671259,
      symbol: "Int_DroneControl_FuelTransfer_Size5_Class1",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size5_Class2",
    {
      id: 128671260,
      symbol: "Int_DroneControl_FuelTransfer_Size5_Class2",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size5_Class3",
    {
      id: 128671261,
      symbol: "Int_DroneControl_FuelTransfer_Size5_Class3",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size5_Class4",
    {
      id: 128671262,
      symbol: "Int_DroneControl_FuelTransfer_Size5_Class4",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size5_Class5",
    {
      id: 128671263,
      symbol: "Int_DroneControl_FuelTransfer_Size5_Class5",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size7_Class1",
    {
      id: 128671264,
      symbol: "Int_DroneControl_FuelTransfer_Size7_Class1",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size7_Class2",
    {
      id: 128671265,
      symbol: "Int_DroneControl_FuelTransfer_Size7_Class2",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size7_Class3",
    {
      id: 128671266,
      symbol: "Int_DroneControl_FuelTransfer_Size7_Class3",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size7_Class4",
    {
      id: 128671267,
      symbol: "Int_DroneControl_FuelTransfer_Size7_Class4",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_FuelTransfer_Size7_Class5",
    {
      id: 128671268,
      symbol: "Int_DroneControl_FuelTransfer_Size7_Class5",
      category: "internal",
      name: "Fuel Transfer Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size1_Class1",
    {
      id: 128671269,
      symbol: "Int_DroneControl_Prospector_Size1_Class1",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size1_Class2",
    {
      id: 128671270,
      symbol: "Int_DroneControl_Prospector_Size1_Class2",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size1_Class3",
    {
      id: 128671271,
      symbol: "Int_DroneControl_Prospector_Size1_Class3",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size1_Class4",
    {
      id: 128671272,
      symbol: "Int_DroneControl_Prospector_Size1_Class4",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size1_Class5",
    {
      id: 128671273,
      symbol: "Int_DroneControl_Prospector_Size1_Class5",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size3_Class1",
    {
      id: 128671274,
      symbol: "Int_DroneControl_Prospector_Size3_Class1",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size3_Class2",
    {
      id: 128671275,
      symbol: "Int_DroneControl_Prospector_Size3_Class2",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size3_Class3",
    {
      id: 128671276,
      symbol: "Int_DroneControl_Prospector_Size3_Class3",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size3_Class4",
    {
      id: 128671277,
      symbol: "Int_DroneControl_Prospector_Size3_Class4",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size3_Class5",
    {
      id: 128671278,
      symbol: "Int_DroneControl_Prospector_Size3_Class5",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size5_Class1",
    {
      id: 128671279,
      symbol: "Int_DroneControl_Prospector_Size5_Class1",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size5_Class2",
    {
      id: 128671280,
      symbol: "Int_DroneControl_Prospector_Size5_Class2",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size5_Class3",
    {
      id: 128671281,
      symbol: "Int_DroneControl_Prospector_Size5_Class3",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size5_Class4",
    {
      id: 128671282,
      symbol: "Int_DroneControl_Prospector_Size5_Class4",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size5_Class5",
    {
      id: 128671283,
      symbol: "Int_DroneControl_Prospector_Size5_Class5",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size7_Class1",
    {
      id: 128671284,
      symbol: "Int_DroneControl_Prospector_Size7_Class1",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size7_Class2",
    {
      id: 128671285,
      symbol: "Int_DroneControl_Prospector_Size7_Class2",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size7_Class3",
    {
      id: 128671286,
      symbol: "Int_DroneControl_Prospector_Size7_Class3",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size7_Class4",
    {
      id: 128671287,
      symbol: "Int_DroneControl_Prospector_Size7_Class4",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Prospector_Size7_Class5",
    {
      id: 128671288,
      symbol: "Int_DroneControl_Prospector_Size7_Class5",
      category: "internal",
      name: "Prospector Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Gimbal_Large",
    {
      id: 128671321,
      symbol: "Hpt_Slugshot_Gimbal_Large",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_Slugshot_Turret_Large",
    {
      id: 128671322,
      symbol: "Hpt_Slugshot_Turret_Large",
      category: "hardpoint",
      name: "Fragment Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size1_Class5_Strong",
    {
      id: 128671323,
      symbol: "Int_ShieldGenerator_Size1_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class5_Strong",
    {
      id: 128671324,
      symbol: "Int_ShieldGenerator_Size2_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class5_Strong",
    {
      id: 128671325,
      symbol: "Int_ShieldGenerator_Size3_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class5_Strong",
    {
      id: 128671326,
      symbol: "Int_ShieldGenerator_Size4_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class5_Strong",
    {
      id: 128671327,
      symbol: "Int_ShieldGenerator_Size5_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class5_Strong",
    {
      id: 128671328,
      symbol: "Int_ShieldGenerator_Size6_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class5_Strong",
    {
      id: 128671329,
      symbol: "Int_ShieldGenerator_Size7_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class5_Strong",
    {
      id: 128671330,
      symbol: "Int_ShieldGenerator_Size8_Class5_Strong",
      category: "internal",
      name: "Prismatic Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: "ELITE_SPECIFIC_V_POWER_100000"
    }
  ],
  [
    "Int_ShieldGenerator_Size1_Class3_Fast",
    {
      id: 128671331,
      symbol: "Int_ShieldGenerator_Size1_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size2_Class3_Fast",
    {
      id: 128671332,
      symbol: "Int_ShieldGenerator_Size2_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size3_Class3_Fast",
    {
      id: 128671333,
      symbol: "Int_ShieldGenerator_Size3_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size4_Class3_Fast",
    {
      id: 128671334,
      symbol: "Int_ShieldGenerator_Size4_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size5_Class3_Fast",
    {
      id: 128671335,
      symbol: "Int_ShieldGenerator_Size5_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size6_Class3_Fast",
    {
      id: 128671336,
      symbol: "Int_ShieldGenerator_Size6_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size7_Class3_Fast",
    {
      id: 128671337,
      symbol: "Int_ShieldGenerator_Size7_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ShieldGenerator_Size8_Class3_Fast",
    {
      id: 128671338,
      symbol: "Int_ShieldGenerator_Size8_Class3_Fast",
      category: "internal",
      name: "Bi-Weave Shield Generator",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_PlasmaAccelerator_Fixed_Large_Advanced",
    {
      id: 128671339,
      symbol: "Hpt_PlasmaAccelerator_Fixed_Large_Advanced",
      category: "hardpoint",
      name: "Advanced Plasma Accelerator",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: "ELITE_SPECIFIC_V_POWER_100050"
    }
  ],
  [
    "Hpt_MiningLaser_Fixed_Small_Advanced",
    {
      id: 128671340,
      symbol: "Hpt_MiningLaser_Fixed_Small_Advanced",
      category: "hardpoint",
      name: "Mining Lance",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_SPECIFIC_V_POWER_100080"
    }
  ],
  [
    "Hpt_Railgun_Fixed_Medium_Burst",
    {
      id: 128671341,
      symbol: "Hpt_Railgun_Fixed_Medium_Burst",
      category: "hardpoint",
      name: "Imperial Hammer Rail Gun",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_SPECIFIC_V_POWER_100020"
    }
  ],
  [
    "Hpt_PulseLaser_Fixed_Medium_Disruptor",
    {
      id: 128671342,
      symbol: "Hpt_PulseLaser_Fixed_Medium_Disruptor",
      category: "hardpoint",
      name: "Pulse Disruptor Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_SPECIFIC_V_POWER_100040"
    }
  ],
  [
    "Hpt_Slugshot_Fixed_Large_Range",
    {
      id: 128671343,
      symbol: "Hpt_Slugshot_Fixed_Large_Range",
      category: "hardpoint",
      name: "Pacifier Frag-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: "ELITE_SPECIFIC_V_POWER_100060"
    }
  ],
  [
    "Hpt_DrunkMissileRack_Fixed_Medium",
    {
      id: 128671344,
      symbol: "Hpt_DrunkMissileRack_Fixed_Medium",
      category: "hardpoint",
      name: "Pack-Hound Missile Rack",
      mount: "Fixed",
      guidance: "Swarm",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_SPECIFIC_V_POWER_100070"
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Small_Strong",
    {
      id: 128671345,
      symbol: "Hpt_MultiCannon_Fixed_Small_Strong",
      category: "hardpoint",
      name: "Enforcer Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: "ELITE_SPECIFIC_V_POWER_100090"
    }
  ],
  [
    "Hpt_BeamLaser_Fixed_Small_Heat",
    {
      id: 128671346,
      symbol: "Hpt_BeamLaser_Fixed_Small_Heat",
      category: "hardpoint",
      name: "Retributor Beam Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_SPECIFIC_V_POWER_100010"
    }
  ],
  [
    "Hpt_MineLauncher_Fixed_Small_Impulse",
    {
      id: 128671448,
      symbol: "Hpt_MineLauncher_Fixed_Small_Impulse",
      category: "hardpoint",
      name: "Shock Mine Launcher",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Fixed_Small_Scatter",
    {
      id: 128671449,
      symbol: "Hpt_PulseLaserBurst_Fixed_Small_Scatter",
      category: "hardpoint",
      name: "Cytoscrambler Burst Laser",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: "ELITE_SPECIFIC_V_POWER_100100"
    }
  ],
  [
    "DiamondBackXL_Armour_Grade1",
    {
      id: 128671832,
      symbol: "DiamondBackXL_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Diamondback Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBackXL_Armour_Grade2",
    {
      id: 128671833,
      symbol: "DiamondBackXL_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Diamondback Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBackXL_Armour_Grade3",
    {
      id: 128671834,
      symbol: "DiamondBackXL_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Diamondback Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBackXL_Armour_Mirrored",
    {
      id: 128671835,
      symbol: "DiamondBackXL_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Diamondback Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "DiamondBackXL_Armour_Reactive",
    {
      id: 128671836,
      symbol: "DiamondBackXL_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Diamondback Explorer",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Eagle_Armour_Grade1",
    {
      id: 128672140,
      symbol: "Empire_Eagle_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Eagle_Armour_Grade2",
    {
      id: 128672141,
      symbol: "Empire_Eagle_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Imperial Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Eagle_Armour_Grade3",
    {
      id: 128672142,
      symbol: "Empire_Eagle_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Eagle_Armour_Mirrored",
    {
      id: 128672143,
      symbol: "Empire_Eagle_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Empire_Eagle_Armour_Reactive",
    {
      id: 128672144,
      symbol: "Empire_Eagle_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Imperial Eagle",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_MkII_Armour_Grade1",
    {
      id: 128672147,
      symbol: "Federation_Dropship_MkII_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Assault Ship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_MkII_Armour_Grade2",
    {
      id: 128672148,
      symbol: "Federation_Dropship_MkII_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Assault Ship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_MkII_Armour_Grade3",
    {
      id: 128672149,
      symbol: "Federation_Dropship_MkII_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Federal Assault Ship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_MkII_Armour_Mirrored",
    {
      id: 128672150,
      symbol: "Federation_Dropship_MkII_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Assault Ship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Dropship_MkII_Armour_Reactive",
    {
      id: 128672151,
      symbol: "Federation_Dropship_MkII_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Assault Ship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Gunship_Armour_Grade1",
    {
      id: 128672154,
      symbol: "Federation_Gunship_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Gunship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Gunship_Armour_Grade2",
    {
      id: 128672155,
      symbol: "Federation_Gunship_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Federal Gunship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Gunship_Armour_Grade3",
    {
      id: 128672156,
      symbol: "Federation_Gunship_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Federal Gunship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Gunship_Armour_Mirrored",
    {
      id: 128672157,
      symbol: "Federation_Gunship_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Gunship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Federation_Gunship_Armour_Reactive",
    {
      id: 128672158,
      symbol: "Federation_Gunship_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Federal Gunship",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_MkIV_Armour_Grade1",
    {
      id: 128672257,
      symbol: "Viper_MkIV_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Viper MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_MkIV_Armour_Grade2",
    {
      id: 128672258,
      symbol: "Viper_MkIV_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Viper MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_MkIV_Armour_Grade3",
    {
      id: 128672259,
      symbol: "Viper_MkIV_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Viper MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_MkIV_Armour_Mirrored",
    {
      id: 128672260,
      symbol: "Viper_MkIV_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Viper MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Viper_MkIV_Armour_Reactive",
    {
      id: 128672261,
      symbol: "Viper_MkIV_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Viper MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIV_Armour_Grade1",
    {
      id: 128672264,
      symbol: "CobraMkIV_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Cobra MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIV_Armour_Grade2",
    {
      id: 128672265,
      symbol: "CobraMkIV_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Cobra MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIV_Armour_Grade3",
    {
      id: 128672266,
      symbol: "CobraMkIV_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Cobra MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIV_Armour_Mirrored",
    {
      id: 128672267,
      symbol: "CobraMkIV_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Cobra MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "CobraMkIV_Armour_Reactive",
    {
      id: 128672268,
      symbol: "CobraMkIV_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Cobra MkIV",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Independant_Trader_Armour_Grade1",
    {
      id: 128672271,
      symbol: "Independant_Trader_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Keelback",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Independant_Trader_Armour_Grade2",
    {
      id: 128672272,
      symbol: "Independant_Trader_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Keelback",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Independant_Trader_Armour_Grade3",
    {
      id: 128672273,
      symbol: "Independant_Trader_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Keelback",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Independant_Trader_Armour_Mirrored",
    {
      id: 128672274,
      symbol: "Independant_Trader_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Keelback",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Independant_Trader_Armour_Reactive",
    {
      id: 128672275,
      symbol: "Independant_Trader_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Keelback",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Scout_Armour_Grade1",
    {
      id: 128672278,
      symbol: "Asp_Scout_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Asp Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Scout_Armour_Grade2",
    {
      id: 128672279,
      symbol: "Asp_Scout_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Asp Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Scout_Armour_Grade3",
    {
      id: 128672280,
      symbol: "Asp_Scout_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Asp Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Scout_Armour_Mirrored",
    {
      id: 128672281,
      symbol: "Asp_Scout_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Asp Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Asp_Scout_Armour_Reactive",
    {
      id: 128672282,
      symbol: "Asp_Scout_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Asp Scout",
      class: 1,
      rating: "I",
      entitlement: ""
    }
  ],
  [
    "Int_BuggyBay_Size2_Class1",
    {
      id: 128672288,
      symbol: "Int_BuggyBay_Size2_Class1",
      category: "internal",
      name: "Planetary Vehicle Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_BuggyBay_Size2_Class2",
    {
      id: 128672289,
      symbol: "Int_BuggyBay_Size2_Class2",
      category: "internal",
      name: "Planetary Vehicle Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "G",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_BuggyBay_Size4_Class1",
    {
      id: 128672290,
      symbol: "Int_BuggyBay_Size4_Class1",
      category: "internal",
      name: "Planetary Vehicle Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_BuggyBay_Size4_Class2",
    {
      id: 128672291,
      symbol: "Int_BuggyBay_Size4_Class2",
      category: "internal",
      name: "Planetary Vehicle Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "G",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_BuggyBay_Size6_Class1",
    {
      id: 128672292,
      symbol: "Int_BuggyBay_Size6_Class1",
      category: "internal",
      name: "Planetary Vehicle Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_BuggyBay_Size6_Class2",
    {
      id: 128672293,
      symbol: "Int_BuggyBay_Size6_Class2",
      category: "internal",
      name: "Planetary Vehicle Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "G",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_PlanetApproachSuite",
    {
      id: 128672317,
      symbol: "Int_PlanetApproachSuite",
      category: "internal",
      name: "Planetary Approach Suite",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_CorrosionProofCargoRack_Size1_Class1",
    {
      id: 128681641,
      symbol: "Int_CorrosionProofCargoRack_Size1_Class1",
      category: "internal",
      name: "Corrosion Resistant Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_CorrosionProofCargoRack_Size1_Class2",
    {
      id: 128681992,
      symbol: "Int_CorrosionProofCargoRack_Size1_Class2",
      category: "internal",
      name: "Corrosion Resistant Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_BeamLaser_Gimbal_Huge",
    {
      id: 128681994,
      symbol: "Hpt_BeamLaser_Gimbal_Huge",
      category: "hardpoint",
      name: "Beam Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaser_Gimbal_Huge",
    {
      id: 128681995,
      symbol: "Hpt_PulseLaser_Gimbal_Huge",
      category: "hardpoint",
      name: "Pulse Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Gimbal_Huge",
    {
      id: 128681996,
      symbol: "Hpt_MultiCannon_Gimbal_Huge",
      category: "hardpoint",
      name: "Multi-Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size3_Class5_Fast",
    {
      id: 128682013,
      symbol: "Int_Engine_Size3_Class5_Fast",
      category: "standard",
      name: "Enhanced Performance Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_Engine_Size2_Class5_Fast",
    {
      id: 128682014,
      symbol: "Int_Engine_Size2_Class5_Fast",
      category: "standard",
      name: "Enhanced Performance Thrusters",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Hpt_PulseLaserBurst_Gimbal_Huge",
    {
      id: 128727920,
      symbol: "Hpt_PulseLaserBurst_Gimbal_Huge",
      category: "hardpoint",
      name: "Burst Laser",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size4_Class1",
    {
      id: 128727922,
      symbol: "Int_PassengerCabin_Size4_Class1",
      category: "internal",
      name: "Economy Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size4_Class2",
    {
      id: 128727923,
      symbol: "Int_PassengerCabin_Size4_Class2",
      category: "internal",
      name: "Business Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size4_Class3",
    {
      id: 128727924,
      symbol: "Int_PassengerCabin_Size4_Class3",
      category: "internal",
      name: "First Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size5_Class4",
    {
      id: 128727925,
      symbol: "Int_PassengerCabin_Size5_Class4",
      category: "internal",
      name: "Luxury Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size6_Class1",
    {
      id: 128727926,
      symbol: "Int_PassengerCabin_Size6_Class1",
      category: "internal",
      name: "Economy Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size6_Class2",
    {
      id: 128727927,
      symbol: "Int_PassengerCabin_Size6_Class2",
      category: "internal",
      name: "Business Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size6_Class3",
    {
      id: 128727928,
      symbol: "Int_PassengerCabin_Size6_Class3",
      category: "internal",
      name: "First Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size6_Class4",
    {
      id: 128727929,
      symbol: "Int_PassengerCabin_Size6_Class4",
      category: "internal",
      name: "Luxury Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_FighterBay_Size5_Class1",
    {
      id: 128727930,
      symbol: "Int_FighterBay_Size5_Class1",
      category: "internal",
      name: "Fighter Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_FighterBay_Size6_Class1",
    {
      id: 128727931,
      symbol: "Int_FighterBay_Size6_Class1",
      category: "internal",
      name: "Fighter Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_FighterBay_Size7_Class1",
    {
      id: 128727932,
      symbol: "Int_FighterBay_Size7_Class1",
      category: "internal",
      name: "Fighter Hangar",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_DumbfireMissileRack_Fixed_Medium_Lasso",
    {
      id: 128732552,
      symbol: "Hpt_DumbfireMissileRack_Fixed_Medium_Lasso",
      category: "hardpoint",
      name: "Rocket Propelled FSD Disruptor",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_SPECIFIC_V_POWER_100120"
    }
  ],
  [
    "Int_PassengerCabin_Size2_Class1",
    {
      id: 128734690,
      symbol: "Int_PassengerCabin_Size2_Class1",
      category: "internal",
      name: "Economy Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size3_Class1",
    {
      id: 128734691,
      symbol: "Int_PassengerCabin_Size3_Class1",
      category: "internal",
      name: "Economy Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size3_Class2",
    {
      id: 128734692,
      symbol: "Int_PassengerCabin_Size3_Class2",
      category: "internal",
      name: "Business Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size5_Class1",
    {
      id: 128734693,
      symbol: "Int_PassengerCabin_Size5_Class1",
      category: "internal",
      name: "Economy Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size5_Class2",
    {
      id: 128734694,
      symbol: "Int_PassengerCabin_Size5_Class2",
      category: "internal",
      name: "Business Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_PassengerCabin_Size5_Class3",
    {
      id: 128734695,
      symbol: "Int_PassengerCabin_Size5_Class3",
      category: "internal",
      name: "First Class Passenger Cabin",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size1_Class1",
    {
      id: 128737270,
      symbol: "Int_ModuleReinforcement_Size1_Class1",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size1_Class2",
    {
      id: 128737271,
      symbol: "Int_ModuleReinforcement_Size1_Class2",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size2_Class1",
    {
      id: 128737272,
      symbol: "Int_ModuleReinforcement_Size2_Class1",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size2_Class2",
    {
      id: 128737273,
      symbol: "Int_ModuleReinforcement_Size2_Class2",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size3_Class1",
    {
      id: 128737274,
      symbol: "Int_ModuleReinforcement_Size3_Class1",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size3_Class2",
    {
      id: 128737275,
      symbol: "Int_ModuleReinforcement_Size3_Class2",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size4_Class1",
    {
      id: 128737276,
      symbol: "Int_ModuleReinforcement_Size4_Class1",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size4_Class2",
    {
      id: 128737277,
      symbol: "Int_ModuleReinforcement_Size4_Class2",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size5_Class1",
    {
      id: 128737278,
      symbol: "Int_ModuleReinforcement_Size5_Class1",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_ModuleReinforcement_Size5_Class2",
    {
      id: 128737279,
      symbol: "Int_ModuleReinforcement_Size5_Class2",
      category: "internal",
      name: "Module Reinforcement Package",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_MiningLaser_Turret_Small",
    {
      id: 128740819,
      symbol: "Hpt_MiningLaser_Turret_Small",
      category: "hardpoint",
      name: "Mining Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_MiningLaser_Turret_Medium",
    {
      id: 128740820,
      symbol: "Hpt_MiningLaser_Turret_Medium",
      category: "hardpoint",
      name: "Mining Laser",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_AntiUnknownShutdown_Tiny",
    {
      id: 128771884,
      symbol: "Hpt_AntiUnknownShutdown_Tiny",
      category: "utility",
      name: "Shutdown Field Neutraliser",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "F",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_DroneControl_Repair_Size1_Class1",
    {
      id: 128777327,
      symbol: "Int_DroneControl_Repair_Size1_Class1",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size1_Class2",
    {
      id: 128777328,
      symbol: "Int_DroneControl_Repair_Size1_Class2",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size1_Class3",
    {
      id: 128777329,
      symbol: "Int_DroneControl_Repair_Size1_Class3",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size1_Class4",
    {
      id: 128777330,
      symbol: "Int_DroneControl_Repair_Size1_Class4",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size1_Class5",
    {
      id: 128777331,
      symbol: "Int_DroneControl_Repair_Size1_Class5",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size3_Class1",
    {
      id: 128777332,
      symbol: "Int_DroneControl_Repair_Size3_Class1",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size3_Class2",
    {
      id: 128777333,
      symbol: "Int_DroneControl_Repair_Size3_Class2",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size3_Class3",
    {
      id: 128777334,
      symbol: "Int_DroneControl_Repair_Size3_Class3",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size3_Class4",
    {
      id: 128777335,
      symbol: "Int_DroneControl_Repair_Size3_Class4",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size3_Class5",
    {
      id: 128777336,
      symbol: "Int_DroneControl_Repair_Size3_Class5",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size5_Class1",
    {
      id: 128777337,
      symbol: "Int_DroneControl_Repair_Size5_Class1",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size5_Class2",
    {
      id: 128777338,
      symbol: "Int_DroneControl_Repair_Size5_Class2",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size5_Class3",
    {
      id: 128777339,
      symbol: "Int_DroneControl_Repair_Size5_Class3",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size5_Class4",
    {
      id: 128777340,
      symbol: "Int_DroneControl_Repair_Size5_Class4",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size5_Class5",
    {
      id: 128777341,
      symbol: "Int_DroneControl_Repair_Size5_Class5",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size7_Class1",
    {
      id: 128777342,
      symbol: "Int_DroneControl_Repair_Size7_Class1",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size7_Class2",
    {
      id: 128777343,
      symbol: "Int_DroneControl_Repair_Size7_Class2",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size7_Class3",
    {
      id: 128777344,
      symbol: "Int_DroneControl_Repair_Size7_Class3",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size7_Class4",
    {
      id: 128777345,
      symbol: "Int_DroneControl_Repair_Size7_Class4",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Repair_Size7_Class5",
    {
      id: 128777346,
      symbol: "Int_DroneControl_Repair_Size7_Class5",
      category: "internal",
      name: "Repair Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Type9_Military_Armour_Grade1",
    {
      id: 128785621,
      symbol: "Type9_Military_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Type-10 Defender",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Type9_Military_Armour_Grade2",
    {
      id: 128785622,
      symbol: "Type9_Military_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Type-10 Defender",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Type9_Military_Armour_Grade3",
    {
      id: 128785623,
      symbol: "Type9_Military_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Type-10 Defender",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Type9_Military_Armour_Mirrored",
    {
      id: 128785624,
      symbol: "Type9_Military_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-10 Defender",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Type9_Military_Armour_Reactive",
    {
      id: 128785625,
      symbol: "Type9_Military_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Type-10 Defender",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_FlakMortar_Fixed_Medium",
    {
      id: 128785626,
      symbol: "Hpt_FlakMortar_Fixed_Medium",
      category: "hardpoint",
      name: "Remote Release Flak Launcher",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATDumbfireMissile_Fixed_Medium",
    {
      id: 128788699,
      symbol: "Hpt_ATDumbfireMissile_Fixed_Medium",
      category: "hardpoint",
      name: "AX Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATDumbfireMissile_Fixed_Large",
    {
      id: 128788700,
      symbol: "Hpt_ATDumbfireMissile_Fixed_Large",
      category: "hardpoint",
      name: "AX Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATMultiCannon_Fixed_Medium",
    {
      id: 128788701,
      symbol: "Hpt_ATMultiCannon_Fixed_Medium",
      category: "hardpoint",
      name: "AX Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATMultiCannon_Fixed_Large",
    {
      id: 128788702,
      symbol: "Hpt_ATMultiCannon_Fixed_Large",
      category: "hardpoint",
      name: "AX Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATDumbfireMissile_Turret_Medium",
    {
      id: 128788704,
      symbol: "Hpt_ATDumbfireMissile_Turret_Medium",
      category: "hardpoint",
      name: "AX Missile Rack",
      mount: "Turreted",
      guidance: "Dumbfire",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATDumbfireMissile_Turret_Large",
    {
      id: 128788705,
      symbol: "Hpt_ATDumbfireMissile_Turret_Large",
      category: "hardpoint",
      name: "AX Missile Rack",
      mount: "Turreted",
      guidance: "Dumbfire",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_FlakMortar_Turret_Medium",
    {
      id: 128793058,
      symbol: "Hpt_FlakMortar_Turret_Medium",
      category: "hardpoint",
      name: "Remote Release Flak Launcher",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATMultiCannon_Turret_Medium",
    {
      id: 128793059,
      symbol: "Hpt_ATMultiCannon_Turret_Medium",
      category: "hardpoint",
      name: "AX Multi-Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "F",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_ATMultiCannon_Turret_Large",
    {
      id: 128793060,
      symbol: "Hpt_ATMultiCannon_Turret_Large",
      category: "hardpoint",
      name: "AX Multi-Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_XenoScanner_Basic_Tiny",
    {
      id: 128793115,
      symbol: "Hpt_XenoScanner_Basic_Tiny",
      category: "utility",
      name: "Xeno Scanner",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_DroneControl_UnkVesselResearch",
    {
      id: 128793116,
      symbol: "Int_DroneControl_UnkVesselResearch",
      category: "internal",
      name: "Research Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size1_Class1",
    {
      id: 128793117,
      symbol: "Int_MetaAlloyHullReinforcement_Size1_Class1",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size1_Class2",
    {
      id: 128793118,
      symbol: "Int_MetaAlloyHullReinforcement_Size1_Class2",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size2_Class1",
    {
      id: 128793119,
      symbol: "Int_MetaAlloyHullReinforcement_Size2_Class1",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size2_Class2",
    {
      id: 128793120,
      symbol: "Int_MetaAlloyHullReinforcement_Size2_Class2",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size3_Class1",
    {
      id: 128793121,
      symbol: "Int_MetaAlloyHullReinforcement_Size3_Class1",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size3_Class2",
    {
      id: 128793122,
      symbol: "Int_MetaAlloyHullReinforcement_Size3_Class2",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size4_Class1",
    {
      id: 128793123,
      symbol: "Int_MetaAlloyHullReinforcement_Size4_Class1",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size4_Class2",
    {
      id: 128793124,
      symbol: "Int_MetaAlloyHullReinforcement_Size4_Class2",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size5_Class1",
    {
      id: 128793125,
      symbol: "Int_MetaAlloyHullReinforcement_Size5_Class1",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_MetaAlloyHullReinforcement_Size5_Class2",
    {
      id: 128793126,
      symbol: "Int_MetaAlloyHullReinforcement_Size5_Class2",
      category: "internal",
      name: "Meta Alloy Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_METAHULL"
    }
  ],
  [
    "Int_DroneControl_Decontamination_Size1_Class1",
    {
      id: 128793941,
      symbol: "Int_DroneControl_Decontamination_Size1_Class1",
      category: "internal",
      name: "Decontamination Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_DroneControl_Decontamination_Size3_Class1",
    {
      id: 128793942,
      symbol: "Int_DroneControl_Decontamination_Size3_Class1",
      category: "internal",
      name: "Decontamination Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_DroneControl_Decontamination_Size5_Class1",
    {
      id: 128793943,
      symbol: "Int_DroneControl_Decontamination_Size5_Class1",
      category: "internal",
      name: "Decontamination Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_DroneControl_Decontamination_Size7_Class1",
    {
      id: 128793944,
      symbol: "Int_DroneControl_Decontamination_Size7_Class1",
      category: "internal",
      name: "Decontamination Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_MkII_Armour_Grade1",
    {
      id: 128816569,
      symbol: "Krait_MkII_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Krait MkII",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_MkII_Armour_Grade2",
    {
      id: 128816570,
      symbol: "Krait_MkII_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Krait MkII",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_MkII_Armour_Grade3",
    {
      id: 128816571,
      symbol: "Krait_MkII_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Krait MkII",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_MkII_Armour_Mirrored",
    {
      id: 128816572,
      symbol: "Krait_MkII_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Krait MkII",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_MkII_Armour_Reactive",
    {
      id: 128816573,
      symbol: "Krait_MkII_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Krait MkII",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_Armour_Grade1",
    {
      id: 128816576,
      symbol: "TypeX_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Alliance Chieftain",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_Armour_Grade2",
    {
      id: 128816577,
      symbol: "TypeX_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Alliance Chieftain",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_Armour_Grade3",
    {
      id: 128816578,
      symbol: "TypeX_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Chieftain",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_Armour_Mirrored",
    {
      id: 128816579,
      symbol: "TypeX_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Chieftain",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_Armour_Reactive",
    {
      id: 128816580,
      symbol: "TypeX_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Chieftain",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_2_Armour_Grade1",
    {
      id: 128816583,
      symbol: "TypeX_2_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Alliance Crusader",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_2_Armour_Grade2",
    {
      id: 128816584,
      symbol: "TypeX_2_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Alliance Crusader",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_2_Armour_Grade3",
    {
      id: 128816585,
      symbol: "TypeX_2_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Crusader",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_2_Armour_Mirrored",
    {
      id: 128816586,
      symbol: "TypeX_2_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Crusader",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_2_Armour_Reactive",
    {
      id: 128816587,
      symbol: "TypeX_2_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Crusader",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_3_Armour_Grade1",
    {
      id: 128816590,
      symbol: "TypeX_3_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Alliance Challenger",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_3_Armour_Grade2",
    {
      id: 128816591,
      symbol: "TypeX_3_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Alliance Challenger",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_3_Armour_Grade3",
    {
      id: 128816592,
      symbol: "TypeX_3_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Challenger",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_3_Armour_Mirrored",
    {
      id: 128816593,
      symbol: "TypeX_3_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Challenger",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "TypeX_3_Armour_Reactive",
    {
      id: 128816594,
      symbol: "TypeX_3_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Alliance Challenger",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_Guardian_GaussCannon_Fixed_Medium",
    {
      id: 128833687,
      symbol: "Hpt_Guardian_GaussCannon_Fixed_Medium",
      category: "hardpoint",
      name: "Guardian Gauss Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_GAUSS_FIXED_MEDIUM"
    }
  ],
  [
    "Int_CorrosionProofCargoRack_Size4_Class1",
    {
      id: 128833944,
      symbol: "Int_CorrosionProofCargoRack_Size4_Class1",
      category: "internal",
      name: "Corrosion Resistant Cargo Rack",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_CORROSIONCARGO_SIZE4"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size1_Class1",
    {
      id: 128833945,
      symbol: "Int_GuardianHullReinforcement_Size1_Class1",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size1_Class2",
    {
      id: 128833946,
      symbol: "Int_GuardianHullReinforcement_Size1_Class2",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size2_Class1",
    {
      id: 128833947,
      symbol: "Int_GuardianHullReinforcement_Size2_Class1",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size2_Class2",
    {
      id: 128833948,
      symbol: "Int_GuardianHullReinforcement_Size2_Class2",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size3_Class1",
    {
      id: 128833949,
      symbol: "Int_GuardianHullReinforcement_Size3_Class1",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size3_Class2",
    {
      id: 128833950,
      symbol: "Int_GuardianHullReinforcement_Size3_Class2",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size4_Class1",
    {
      id: 128833951,
      symbol: "Int_GuardianHullReinforcement_Size4_Class1",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size4_Class2",
    {
      id: 128833952,
      symbol: "Int_GuardianHullReinforcement_Size4_Class2",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size5_Class1",
    {
      id: 128833953,
      symbol: "Int_GuardianHullReinforcement_Size5_Class1",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianHullReinforcement_Size5_Class2",
    {
      id: 128833954,
      symbol: "Int_GuardianHullReinforcement_Size5_Class2",
      category: "internal",
      name: "Guardian Hull Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_HULLREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size1_Class1",
    {
      id: 128833955,
      symbol: "Int_GuardianModuleReinforcement_Size1_Class1",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size1_Class2",
    {
      id: 128833956,
      symbol: "Int_GuardianModuleReinforcement_Size1_Class2",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size2_Class1",
    {
      id: 128833957,
      symbol: "Int_GuardianModuleReinforcement_Size2_Class1",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size2_Class2",
    {
      id: 128833958,
      symbol: "Int_GuardianModuleReinforcement_Size2_Class2",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size3_Class1",
    {
      id: 128833959,
      symbol: "Int_GuardianModuleReinforcement_Size3_Class1",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size3_Class2",
    {
      id: 128833960,
      symbol: "Int_GuardianModuleReinforcement_Size3_Class2",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size4_Class1",
    {
      id: 128833961,
      symbol: "Int_GuardianModuleReinforcement_Size4_Class1",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size4_Class2",
    {
      id: 128833962,
      symbol: "Int_GuardianModuleReinforcement_Size4_Class2",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size5_Class1",
    {
      id: 128833963,
      symbol: "Int_GuardianModuleReinforcement_Size5_Class1",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianModuleReinforcement_Size5_Class2",
    {
      id: 128833964,
      symbol: "Int_GuardianModuleReinforcement_Size5_Class2",
      category: "internal",
      name: "Guardian Module Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_MODULEREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size1_Class1",
    {
      id: 128833965,
      symbol: "Int_GuardianShieldReinforcement_Size1_Class1",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size1_Class2",
    {
      id: 128833966,
      symbol: "Int_GuardianShieldReinforcement_Size1_Class2",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size2_Class1",
    {
      id: 128833967,
      symbol: "Int_GuardianShieldReinforcement_Size2_Class1",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size2_Class2",
    {
      id: 128833968,
      symbol: "Int_GuardianShieldReinforcement_Size2_Class2",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size3_Class1",
    {
      id: 128833969,
      symbol: "Int_GuardianShieldReinforcement_Size3_Class1",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size3_Class2",
    {
      id: 128833970,
      symbol: "Int_GuardianShieldReinforcement_Size3_Class2",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size4_Class1",
    {
      id: 128833971,
      symbol: "Int_GuardianShieldReinforcement_Size4_Class1",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size4_Class2",
    {
      id: 128833972,
      symbol: "Int_GuardianShieldReinforcement_Size4_Class2",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size5_Class1",
    {
      id: 128833973,
      symbol: "Int_GuardianShieldReinforcement_Size5_Class1",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianShieldReinforcement_Size5_Class2",
    {
      id: 128833974,
      symbol: "Int_GuardianShieldReinforcement_Size5_Class2",
      category: "internal",
      name: "Guardian Shield Reinforcement",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHIELDREINFORCEMENT"
    }
  ],
  [
    "Int_GuardianFSDBooster_Size1",
    {
      id: 128833975,
      symbol: "Int_GuardianFSDBooster_Size1",
      category: "internal",
      name: "Guardian FSD Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_FSDBOOSTER"
    }
  ],
  [
    "Int_GuardianFSDBooster_Size2",
    {
      id: 128833976,
      symbol: "Int_GuardianFSDBooster_Size2",
      category: "internal",
      name: "Guardian FSD Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_FSDBOOSTER"
    }
  ],
  [
    "Int_GuardianFSDBooster_Size3",
    {
      id: 128833977,
      symbol: "Int_GuardianFSDBooster_Size3",
      category: "internal",
      name: "Guardian FSD Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_FSDBOOSTER"
    }
  ],
  [
    "Int_GuardianFSDBooster_Size4",
    {
      id: 128833978,
      symbol: "Int_GuardianFSDBooster_Size4",
      category: "internal",
      name: "Guardian FSD Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_FSDBOOSTER"
    }
  ],
  [
    "Int_GuardianFSDBooster_Size5",
    {
      id: 128833979,
      symbol: "Int_GuardianFSDBooster_Size5",
      category: "internal",
      name: "Guardian FSD Booster",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "H",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_FSDBOOSTER"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size1",
    {
      id: 128833980,
      symbol: "Int_GuardianPowerDistributor_Size1",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size2",
    {
      id: 128833981,
      symbol: "Int_GuardianPowerDistributor_Size2",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size3",
    {
      id: 128833982,
      symbol: "Int_GuardianPowerDistributor_Size3",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size4",
    {
      id: 128833983,
      symbol: "Int_GuardianPowerDistributor_Size4",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size5",
    {
      id: 128833984,
      symbol: "Int_GuardianPowerDistributor_Size5",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size6",
    {
      id: 128833985,
      symbol: "Int_GuardianPowerDistributor_Size6",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size7",
    {
      id: 128833986,
      symbol: "Int_GuardianPowerDistributor_Size7",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerDistributor_Size8",
    {
      id: 128833987,
      symbol: "Int_GuardianPowerDistributor_Size8",
      category: "internal",
      name: "Guardian Hybrid Power Distributor",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERDISTRIBUTOR"
    }
  ],
  [
    "Int_GuardianPowerplant_Size2",
    {
      id: 128833988,
      symbol: "Int_GuardianPowerplant_Size2",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Int_GuardianPowerplant_Size3",
    {
      id: 128833989,
      symbol: "Int_GuardianPowerplant_Size3",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Int_GuardianPowerplant_Size4",
    {
      id: 128833990,
      symbol: "Int_GuardianPowerplant_Size4",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 4,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Int_GuardianPowerplant_Size5",
    {
      id: 128833991,
      symbol: "Int_GuardianPowerplant_Size5",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Int_GuardianPowerplant_Size6",
    {
      id: 128833992,
      symbol: "Int_GuardianPowerplant_Size6",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 6,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Int_GuardianPowerplant_Size7",
    {
      id: 128833993,
      symbol: "Int_GuardianPowerplant_Size7",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Int_GuardianPowerplant_Size8",
    {
      id: 128833994,
      symbol: "Int_GuardianPowerplant_Size8",
      category: "internal",
      name: "Guardian Hybrid Power Plant",
      mount: "",
      guidance: "",
      ship: "",
      class: 8,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_POWERPLANT"
    }
  ],
  [
    "Hpt_CausticMissile_Fixed_Medium",
    {
      id: 128833995,
      symbol: "Hpt_CausticMissile_Fixed_Medium",
      category: "hardpoint",
      name: "Enzyme Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_CAUSTIC_MEDIUM"
    }
  ],
  [
    "Hpt_FlechetteLauncher_Fixed_Medium",
    {
      id: 128833996,
      symbol: "Hpt_FlechetteLauncher_Fixed_Medium",
      category: "hardpoint",
      name: "Remote Release Flechette Launcher",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_FLECHETTE_FIXED_MEDIUM"
    }
  ],
  [
    "Hpt_FlechetteLauncher_Turret_Medium",
    {
      id: 128833997,
      symbol: "Hpt_FlechetteLauncher_Turret_Medium",
      category: "hardpoint",
      name: "Remote Release Flechette Launcher",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_FLECHETTE_TURRET_MEDIUM"
    }
  ],
  [
    "Hpt_Guardian_PlasmaLauncher_Fixed_Medium",
    {
      id: 128833998,
      symbol: "Hpt_Guardian_PlasmaLauncher_Fixed_Medium",
      category: "hardpoint",
      name: "Guardian Plasma Charger",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_PLASMA_FIXED_MEDIUM"
    }
  ],
  [
    "Hpt_Guardian_PlasmaLauncher_Turret_Medium",
    {
      id: 128833999,
      symbol: "Hpt_Guardian_PlasmaLauncher_Turret_Medium",
      category: "hardpoint",
      name: "Guardian Plasma Charger",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_PLASMA_TURRET_MEDIUM"
    }
  ],
  [
    "Hpt_Guardian_ShardCannon_Fixed_Medium",
    {
      id: 128834000,
      symbol: "Hpt_Guardian_ShardCannon_Fixed_Medium",
      category: "hardpoint",
      name: "Guardian Shard Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHARD_FIXED_MEDIUM"
    }
  ],
  [
    "Hpt_Guardian_ShardCannon_Turret_medium",
    {
      id: 128834001,
      symbol: "Hpt_Guardian_ShardCannon_Turret_medium",
      category: "hardpoint",
      name: "Guardian Shard Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHARD_TURRET_MEDIUM"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Fixed_Medium",
    {
      id: 128834002,
      symbol: "Hpt_PlasmaShockCannon_Fixed_Medium",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_FIXED_MEDIUM"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Gimbal_Medium",
    {
      id: 128834003,
      symbol: "Hpt_PlasmaShockCannon_Gimbal_Medium",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_GIMBAL_MEDIUM"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Turret_Medium",
    {
      id: 128834004,
      symbol: "Hpt_PlasmaShockCannon_Turret_Medium",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_TURRET_MEDIUM"
    }
  ],
  [
    "Hpt_Guardian_ShardCannon_Fixed_Large",
    {
      id: 128834778,
      symbol: "Hpt_Guardian_ShardCannon_Fixed_Large",
      category: "hardpoint",
      name: "Guardian Shard Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHARD_FIXED_LARGE"
    }
  ],
  [
    "Hpt_Guardian_ShardCannon_Turret_Large",
    {
      id: 128834779,
      symbol: "Hpt_Guardian_ShardCannon_Turret_Large",
      category: "hardpoint",
      name: "Guardian Shard Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHARD_TURRET_LARGE"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Fixed_Large",
    {
      id: 128834780,
      symbol: "Hpt_PlasmaShockCannon_Fixed_Large",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_FIXED_LARGE"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Gimbal_Large",
    {
      id: 128834781,
      symbol: "Hpt_PlasmaShockCannon_Gimbal_Large",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_GIMBAL_LARGE"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Turret_Large",
    {
      id: 128834782,
      symbol: "Hpt_PlasmaShockCannon_Turret_Large",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_TURRET_LARGE"
    }
  ],
  [
    "Hpt_Guardian_PlasmaLauncher_Fixed_Large",
    {
      id: 128834783,
      symbol: "Hpt_Guardian_PlasmaLauncher_Fixed_Large",
      category: "hardpoint",
      name: "Guardian Plasma Charger",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 3,
      rating: "C",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_PLASMA_FIXED_LARGE"
    }
  ],
  [
    "Hpt_Guardian_PlasmaLauncher_Turret_Large",
    {
      id: 128834784,
      symbol: "Hpt_Guardian_PlasmaLauncher_Turret_Large",
      category: "hardpoint",
      name: "Guardian Plasma Charger",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 3,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_PLASMA_TURRET_LARGE"
    }
  ],
  [
    "Int_DroneControl_Recon_Size1_Class1",
    {
      id: 128837858,
      symbol: "Int_DroneControl_Recon_Size1_Class1",
      category: "internal",
      name: "Recon Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Krait_Light_Armour_Grade1",
    {
      id: 128839283,
      symbol: "Krait_Light_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Krait Phantom",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_Light_Armour_Grade2",
    {
      id: 128839284,
      symbol: "Krait_Light_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Krait Phantom",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_Light_Armour_Grade3",
    {
      id: 128839285,
      symbol: "Krait_Light_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Krait Phantom",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_Light_Armour_Mirrored",
    {
      id: 128839286,
      symbol: "Krait_Light_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Krait Phantom",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Krait_Light_Armour_Reactive",
    {
      id: 128839287,
      symbol: "Krait_Light_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Krait Phantom",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_DroneControl_Recon_Size3_Class1",
    {
      id: 128841592,
      symbol: "Int_DroneControl_Recon_Size3_Class1",
      category: "internal",
      name: "Recon Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 3,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Recon_Size5_Class1",
    {
      id: 128841593,
      symbol: "Int_DroneControl_Recon_Size5_Class1",
      category: "internal",
      name: "Recon Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 5,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DroneControl_Recon_Size7_Class1",
    {
      id: 128841594,
      symbol: "Int_DroneControl_Recon_Size7_Class1",
      category: "internal",
      name: "Recon Limpet Controller",
      mount: "",
      guidance: "",
      ship: "",
      class: 7,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_DumbfireMissileRack_Fixed_Large",
    {
      id: 128891602,
      symbol: "Hpt_DumbfireMissileRack_Fixed_Large",
      category: "hardpoint",
      name: "Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 3,
      rating: "A",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Turret_Small",
    {
      id: 128891603,
      symbol: "Hpt_PlasmaShockCannon_Turret_Small",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_TURRET_SMALL"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Gimbal_Small",
    {
      id: 128891604,
      symbol: "Hpt_PlasmaShockCannon_Gimbal_Small",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Gimballed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_GIMBAL_SMALL"
    }
  ],
  [
    "Hpt_PlasmaShockCannon_Fixed_Small",
    {
      id: 128891605,
      symbol: "Hpt_PlasmaShockCannon_Fixed_Small",
      category: "hardpoint",
      name: "Shock Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_PLASMASHOCK_FIXED_SMALL"
    }
  ],
  [
    "Hpt_Guardian_PlasmaLauncher_Turret_Small",
    {
      id: 128891606,
      symbol: "Hpt_Guardian_PlasmaLauncher_Turret_Small",
      category: "hardpoint",
      name: "Guardian Plasma Charger",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_PLASMA_TURRET_SMALL"
    }
  ],
  [
    "Hpt_Guardian_PlasmaLauncher_Fixed_Small",
    {
      id: 128891607,
      symbol: "Hpt_Guardian_PlasmaLauncher_Fixed_Small",
      category: "hardpoint",
      name: "Guardian Plasma Charger",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_PLASMA_FIXED_SMALL"
    }
  ],
  [
    "Hpt_Guardian_ShardCannon_Turret_Small",
    {
      id: 128891608,
      symbol: "Hpt_Guardian_ShardCannon_Turret_Small",
      category: "hardpoint",
      name: "Guardian Shard Cannon",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHARD_TURRET_SMALL"
    }
  ],
  [
    "Hpt_Guardian_ShardCannon_Fixed_Small",
    {
      id: 128891609,
      symbol: "Hpt_Guardian_ShardCannon_Fixed_Small",
      category: "hardpoint",
      name: "Guardian Shard Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_SHARD_FIXED_SMALL"
    }
  ],
  [
    "Hpt_Guardian_GaussCannon_Fixed_Small",
    {
      id: 128891610,
      symbol: "Hpt_Guardian_GaussCannon_Fixed_Small",
      category: "hardpoint",
      name: "Guardian Gauss Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: "ELITE_HORIZONS_V_GUARDIAN_GAUSS_FIXED_SMALL"
    }
  ],
  [
    "Hpt_Mining_SubSurfDispMisle_Fixed_Small",
    {
      id: 128915454,
      symbol: "Hpt_Mining_SubSurfDispMisle_Fixed_Small",
      category: "hardpoint",
      name: "Sub-Surface Displacement Missile",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_SubSurfDispMisle_Turret_Small",
    {
      id: 128915455,
      symbol: "Hpt_Mining_SubSurfDispMisle_Turret_Small",
      category: "hardpoint",
      name: "Sub-Surface Displacement Missile",
      mount: "Turreted",
      guidance: "Seeker",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_SubSurfDispMisle_Fixed_Medium",
    {
      id: 128915456,
      symbol: "Hpt_Mining_SubSurfDispMisle_Fixed_Medium",
      category: "hardpoint",
      name: "Sub-Surface Displacement Missile",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_SubSurfDispMisle_Turret_Medium",
    {
      id: 128915457,
      symbol: "Hpt_Mining_SubSurfDispMisle_Turret_Medium",
      category: "hardpoint",
      name: "Sub-Surface Displacement Missile",
      mount: "Turreted",
      guidance: "Seeker",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_AbrBlstr_Fixed_Small",
    {
      id: 128915458,
      symbol: "Hpt_Mining_AbrBlstr_Fixed_Small",
      category: "hardpoint",
      name: "Abrasion Blaster",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_AbrBlstr_Turret_Small",
    {
      id: 128915459,
      symbol: "Hpt_Mining_AbrBlstr_Turret_Small",
      category: "hardpoint",
      name: "Abrasion Blaster",
      mount: "Turreted",
      guidance: "",
      ship: "",
      class: 1,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_SeismChrgWarhd_Fixed_Medium",
    {
      id: 128915460,
      symbol: "Hpt_Mining_SeismChrgWarhd_Fixed_Medium",
      category: "hardpoint",
      name: "Seismic Charge Launcher",
      mount: "Fixed",
      guidance: "Seeker",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_Mining_SeismChrgWarhd_Turret_Medium",
    {
      id: 128915461,
      symbol: "Hpt_Mining_SeismChrgWarhd_Turret_Medium",
      category: "hardpoint",
      name: "Seismic Charge Launcher",
      mount: "Turreted",
      guidance: "Seeker",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_MRAScanner_Size0_Class1",
    {
      id: 128915718,
      symbol: "Hpt_MRAScanner_Size0_Class1",
      category: "utility",
      name: "Pulse Wave Analyser",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_MRAScanner_Size0_Class2",
    {
      id: 128915719,
      symbol: "Hpt_MRAScanner_Size0_Class2",
      category: "utility",
      name: "Pulse Wave Analyser",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "D",
      entitlement: ""
    }
  ],
  [
    "Hpt_MRAScanner_Size0_Class3",
    {
      id: 128915720,
      symbol: "Hpt_MRAScanner_Size0_Class3",
      category: "utility",
      name: "Pulse Wave Analyser",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "C",
      entitlement: ""
    }
  ],
  [
    "Hpt_MRAScanner_Size0_Class4",
    {
      id: 128915721,
      symbol: "Hpt_MRAScanner_Size0_Class4",
      category: "utility",
      name: "Pulse Wave Analyser",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_MRAScanner_Size0_Class5",
    {
      id: 128915722,
      symbol: "Hpt_MRAScanner_Size0_Class5",
      category: "utility",
      name: "Pulse Wave Analyser",
      mount: "",
      guidance: "",
      ship: "",
      class: 0,
      rating: "A",
      entitlement: ""
    }
  ],
  [
    "Mamba_Armour_Grade1",
    {
      id: 128915981,
      symbol: "Mamba_Armour_Grade1",
      category: "standard",
      name: "Lightweight Alloy",
      mount: "",
      guidance: "",
      ship: "Mamba",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Mamba_Armour_Grade2",
    {
      id: 128915982,
      symbol: "Mamba_Armour_Grade2",
      category: "standard",
      name: "Reinforced Alloy",
      mount: "",
      guidance: "",
      ship: "Mamba",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Mamba_Armour_Grade3",
    {
      id: 128915983,
      symbol: "Mamba_Armour_Grade3",
      category: "standard",
      name: "Military Grade Composite",
      mount: "",
      guidance: "",
      ship: "Mamba",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Mamba_Armour_Mirrored",
    {
      id: 128915984,
      symbol: "Mamba_Armour_Mirrored",
      category: "standard",
      name: "Mirrored Surface Composite",
      mount: "",
      guidance: "",
      ship: "Mamba",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Mamba_Armour_Reactive",
    {
      id: 128915985,
      symbol: "Mamba_Armour_Reactive",
      category: "standard",
      name: "Reactive Surface Composite",
      mount: "",
      guidance: "",
      ship: "Mamba",
      class: 1,
      rating: "I",
      entitlement: "ELITE_HORIZONS_V_PLANETARY_LANDINGS"
    }
  ],
  [
    "Int_SupercruiseAssist",
    {
      id: 128932273,
      symbol: "Int_SupercruiseAssist",
      category: "internal",
      name: "Supercruise Assist",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Int_DockingComputer_Advanced",
    {
      id: 128935155,
      symbol: "Int_DockingComputer_Advanced",
      category: "internal",
      name: "Advanced Docking Computer",
      mount: "",
      guidance: "",
      ship: "",
      class: 1,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Medium_Advanced",
    {
      id: 128935980,
      symbol: "Hpt_MultiCannon_Fixed_Medium_Advanced",
      category: "hardpoint",
      name: "Advanced Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 2,
      rating: "E",
      entitlement: ""
    }
  ],
  [
    "Hpt_MultiCannon_Fixed_Small_Advanced",
    {
      id: 128935981,
      symbol: "Hpt_MultiCannon_Fixed_Small_Advanced",
      category: "hardpoint",
      name: "Advanced Multi-Cannon",
      mount: "Fixed",
      guidance: "",
      ship: "",
      class: 1,
      rating: "F",
      entitlement: ""
    }
  ],
  [
    "Hpt_DumbfireMissileRack_Fixed_Small_Advanced",
    {
      id: 128935982,
      symbol: "Hpt_DumbfireMissileRack_Fixed_Small_Advanced",
      category: "hardpoint",
      name: "Advanced Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 1,
      rating: "B",
      entitlement: ""
    }
  ],
  [
    "Hpt_DumbfireMissileRack_Fixed_Medium_Advanced",
    {
      id: 128935983,
      symbol: "Hpt_DumbfireMissileRack_Fixed_Medium_Advanced",
      category: "hardpoint",
      name: "Advanced Missile Rack",
      mount: "Fixed",
      guidance: "Dumbfire",
      ship: "",
      class: 2,
      rating: "B",
      entitlement: ""
    }
  ]
]);
