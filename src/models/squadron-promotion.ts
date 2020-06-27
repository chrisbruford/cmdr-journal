import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class SquadronPromotion extends JournalEvent {
  event: JournalEvents.squadronPromotion;
  SquadronName: string;
  OldRank: number;
  NewRank: number;
}
