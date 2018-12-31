import { JournalEvent } from "./journal-event.model";

export class AppliedToSquadron extends JournalEvent {
    SquadronName: string;
}