import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class KickedFromSquadron extends JournalEvent {
  event: JournalEvents.kickedFromSquadron;
  SquadronName: string;
}
