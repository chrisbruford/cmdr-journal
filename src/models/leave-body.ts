import { JournalEvent } from "./journal-event.model";

/** 
 * When written: when flying away from a planet, and distance increases above the 'Orbital Cruise' altitude
 */

export class LeaveBody extends JournalEvent {
    StarSystem: string;
    SystemAddress: number;
    Body: string;
    BodyID: number;
}