import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * If the play session goes on a long time, and the journal gets very large, the file will be closed and a
 * new file started with an increased part number: the heading entry is added at the beginning of every
 * file. See also the "Continued" event
 */
export class FileHeader extends JournalEvent {
  event: JournalEvents.fileHeader;
  part: number;
  language: string;
  gameversion: string;
  build: string;
}
