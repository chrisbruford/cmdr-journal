import { JournalEvent } from "./journal-event.model";

/**
 *
 * { "timestamp":"2020-03-27T09:42:04Z", 
 * "event":"CarrierStats",
 *  "CarrierID":3700005632,
 *  "Callsign":"L14-X1J",
 *  "Name":"Spirula",
 *  "DockingAccess":"all",
 *  "AllowNotorious":false,
 *  "FuelLevel":63,
 *  "JumpRangeCurr":81.079422,
 *  "JumpRangeMax":500.000000,
 *  "PendingDecommission":false,
 *  "SpaceUsage":{
 *    "TotalCapacity":25000,
 *    "Crew":5450,
 *    "Cargo":440,
 *    "CargoSpaceReserved":44,
 *    "ShipPacks":774,
 *    "ModulePacks":913,
 *    "FreeSpace":17379
 *    },
 *  "Finance":{
 *    "CarrierBalance":10000000,
 *    "ReserveBalance":1800000,
 *   "AvailableBalance":8171946,
 *    "ReservePercent":18, "TaxRate":3
 *    },
 *  "Crew":[ {
 *    "CrewRole":"BlackMarket",
 *    "Activated":true,
 *    "Enabled":true,
 *    "CrewName":"Aliza Baldwin"
 *    },{
 *    "CrewRole":"Captain", 
 *    Activated":true,
 *    "Enabled":true,
 *    "CrewName":"Herbert Benson"
 *    }, {
 *    "CrewRole":"Refuel",
 *    "Activated":true,
 *    "Enabled":false,
 *    "CrewName":"Maricela White"
 *    }, {
 *    "CrewRole":"Repair",
 *    "Activated":true,
 *    "Enabled":false,
 *    "CrewName":"Zayla Clements"
 *    }, {
 *    "CrewRole":"Rearm",
 *    "Activated":true,
 *    "Enabled":false,
 *    "CrewName":"Bill Lambert"
 *    }, {
 *    "CrewRole":"Commodities",
 *    "Activated":true, "Enabled":true,
 *    "CrewName":"Lizeth Morales"
 *    }, {
 *    "CrewRole":"VoucherRedemption",
 *    "Activated":true,
 *    "Enabled":false,
 *    "CrewName":"Phillip Gjoni"
 *    }, {
 *    "CrewRole":"Shipyard",
 *    "Activated":true,
 *    "Enabled":false,
 *    "CrewName":"Simon Rhodes"
 *    }, {
 *    "CrewRole":"Outfitting",
 *    "Activated":true,
 *    "Enabled":false,
 *    "CrewName":"Eugene Johnson"
 *    }, {
 *    "CrewRole":"CarrierFuel",
 *    "Activated":true,
 *    "Enabled":true,
 *    "CrewName":"Orlando York"
 *    } ],
 *  "ShipPacks":[ {
 *    "PackTheme":"Zorgon Peterson - Cargo",
 *    "PackTier":1
 *    } ],
 *  "ModulePacks":[ {
 *    "PackTheme":"ExplosiveWeaponry",
 *    "PackTier":2
 *    } ]
 *  } 
 */

export class CarrierStats extends JournalEvent {
    CarrierID: number;
    Callsign: string;
    Name: string;
    DockingAccess:
    | "all"
    | "none"
    | "friends"
    | "squadron"
    | "squadronfriends";
    AllowNotorious: boolean;
    FuelLevel: number;
    JumpRangeCurr: number;
    JumpRangeMax: number;
    PendingDecommission: boolean;
    SpaceUsage: {TotalCapacity: number; Crew: number; Cargo: number; CargoSpaceReserved: number; ShipPacks: number; ModulePacks: number; FreeSpace: number };
    Finance: {CarrierBalance: number; Reserve Balance: number; AvailableBalance: number; ReservePercent: number; TaxRate: number }:
    Crew: {CrewRole: string; Activated: boolean; Enabled: boolean; CrewName: string }[];
    ShipPacks?: {PackTheme: string; PackTier: number }[];
    ModulePacks?: {PackTheme: string; PackTier: number }[];
}
