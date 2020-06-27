import { JournalEvent } from "./journal-event.model";
import { CombatRanks } from "../enums/combat-ranks.enum";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * This is written when a crew member's combat rank increases
 */

export class NpcCrewRank extends JournalEvent {
  event: JournalEvents.npcCrewRank;
  NpcCrewId: number;
  NpcCrewName: string;
  RankCombat: CombatRanks;
}
