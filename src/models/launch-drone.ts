import { JournalEvent } from "./journal-event.model";

/**
 * When written: when using any type of drone/limpet
 */

export class LaunchDrone extends JournalEvent {
    Type: "Hatchbreaker" | "FuelTransfer" | "Collection" | "Prospector" | "Repair" | "Research" | "Decontamination";
}