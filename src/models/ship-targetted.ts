import { JournalEvent } from "./journal-event.model";
import { CombatRanks } from "../enums/combat-ranks.enum";

/**
 * When written: when the current player selects a new target
 *
 * The amount of data written depends on the extent to which the target ship has been scanned
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-03-30T13:56:13Z",
 *     "event":"ShipTargeted",
 *     "TargetLocked":true,
 *     "Ship":"cobramkiii",
 *     "Ship_Localised":"Cobra MkIII",
 *     "ScanStage":3,
 *     "PilotName":"$npc_name_decorate:#name=Jesse Kaukonen;",
 *     "PilotName_Localised":"Jesse Kaukonen",
 *     "PilotRank":"Mostly Harmless",
 *     "ShieldHealth":100.000000,
 *     "HullHealth":100.000000,
 *     "Faction":"Qa'wakana United Organisation",
 *     "LegalStatus":"Clean",
 *     "Subsystem":"$hpt_multicannon_fixed_small_name;",
 *     "Subsystem_Localised":"Multi-Cannon",
 *     "SubsystemHealth":100.000000
 * }
 * ```
 */

export class ShipTargetted extends JournalEvent {
  TargetLocked: boolean;
  /**
   * If target locked
   */
  Ship?: string;
  Ship_Localised?: string;
  ScanStage?: number;
  /**
   * If ScanStage >= 1
   */
  PilotName?: string;
  PilotName_Localised?: string;
  PilotRank?: CombatRanks;
  /**
   * If ScanStage >= 2
   */
  ShieldHealth?: number;
  HullHealth?: number;
  /**
   * If ScanStage >= 3
   */
  Faction?: string;
  LegalStatus?: string;
  Bounty?: number;
  SubSystem?: string;
  Subsystem_Localised?: string;
  SubsystemHealth?: number;
  Power: string;
}
