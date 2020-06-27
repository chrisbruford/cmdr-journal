import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * The carrier name is changed.
 */

export class CarrierNameChanged extends JournalEvent {
  event: JournalEvents.carrierNameChanged;
  CarrierID: number;
  Callsign: string;
  Name: string;
}
