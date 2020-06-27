import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class SharedBookmarkToSquadron extends JournalEvent {
  event: JournalEvents.sharedBookmarkToASquadron;
  SquadronName: string;
}
