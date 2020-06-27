import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class DisbandedSquadron extends JournalEvent {
  event: JournalEvents.disbanedSquadron;
  SquadronName: string;
}
