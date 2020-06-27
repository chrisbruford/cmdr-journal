import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class LeftSquadron extends JournalEvent {
  event: JournalEvents.leftSquadron;
  SquadronName: string;
}
