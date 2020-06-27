import { JournalEvents } from "../enums";

export abstract class JournalEvent {
  event: JournalEvents;
  timestamp: string;
}
