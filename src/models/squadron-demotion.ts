import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class SquadronDemotion extends JournalEvent {
  event: JournalEvents.squadronDemotion;
  SquadronName: string;
  OldRank: number;
  NewRank: number;
}
