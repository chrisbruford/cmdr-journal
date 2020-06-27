import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

export class WonATrophyForSquadron extends JournalEvent {
  event: JournalEvents.wonATrophyForSquadron;
  SquadronName: string;
}
