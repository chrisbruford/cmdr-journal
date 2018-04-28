import { JournalEvent } from "./journal-event.model";
import { CombatRanks } from "../enums/combat-ranks.enum";

/**
 * This is written when a crew member's combat rank increases
 */

export class NpcCrewRank extends JournalEvent {
    NpcCrewId: number;
    NpcCrewName: string;
    RankCombat: CombatRanks;
}