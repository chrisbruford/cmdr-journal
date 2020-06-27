import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums";

export class AppliedToSquadron extends JournalEvent {
  event: JournalEvents.appliedToSquadron;
  SquadronName: string;
}
