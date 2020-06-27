import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class SquadronCreated extends JournalEvent {
  event: JournalEvents.squadronCreated;
  SquadronName: string;
}
