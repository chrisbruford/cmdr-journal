import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when flying away from a planet, and distance increases above the 'Orbital Cruise' altitude
 */

export class LeaveBody extends JournalEvent {
  event: JournalEvents.leaveBody;
  StarSystem: string;
  SystemAddress: number;
  Body: string;
  BodyID: number;
}
