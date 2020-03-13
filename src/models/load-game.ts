import { JournalEvent } from "./journal-event.model";
import { GameMode } from "../enums/";

/**
 * When written: at startup, when loading from main menu into game
 * 
 * ## Example
 * ```javascript
 * { "timestamp":"2017-02-10T14:25:51Z", "event":"LoadGame", "Commander":"HRC-2", "FID": "F123456" ,"Ship":"FerDeLance", "ShipID":19, "ShipName":"jewel of parhoon", "ShipIdent":"hr-17f", "FuelLevel":3.964024, "FuelCapacity":8.000000, "GameMode":"Open", "Credits":2890718739, "Loan":0 } 
 * ```
 */

export class LoadGame extends JournalEvent {
    Commander: string;
    FID: string;
    Horizons: boolean;
    Ship: string;
    ShipID: number;
    StartLanded?: boolean;
    StartDead?: boolean;
    GameMode: GameMode;
    Group: string;
    Credits: number;
    Loan: number;
    ShipName: string;
    ShipIdent: string;
    FuelLevel: number;
    FuelCapacity: number;
}