import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class JoinedSquadron extends JournalEvent {
  event: JournalEvents.joinedSquadron;
  SquadronName: string;
}
