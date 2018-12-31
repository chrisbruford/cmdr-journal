import { JournalEvent } from "./journal-event.model";

export class SquadronDemotion extends JournalEvent {
    SquadronName: string;
    OldRank: number;
    NewRank: number;
}