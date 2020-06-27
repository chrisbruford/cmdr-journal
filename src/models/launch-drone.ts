import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when using any type of drone/limpet
 */

export class LaunchDrone extends JournalEvent {
  event: JournalEvents.launchDrone;
  Type:
    | "Hatchbreaker"
    | "FuelTransfer"
    | "Collection"
    | "Prospector"
    | "Repair"
    | "Research"
    | "Decontamination";
}
