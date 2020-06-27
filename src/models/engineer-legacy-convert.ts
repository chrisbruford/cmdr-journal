import { JournalEvent } from "./journal-event.model";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When written: when converting a pre-2.4 engineered module
 *
 * This is generated when converting, or previewing a conversion of a legacy
 * module to the new system. Due to the nature of the changes made for 3.0,
 * modules generated in the old system are not compatible with the new
 * crafting system, so players will be unable to craft with them. However,
 * players will be given the opportunity to convert their legacy modules to
 * the new format with the caveat that converted modules will be a recipe
 * level below what they were before the conversion. The
 * EngineerLegacyConvert journal entry is generated when converting a recipe,
 * or just previewing a conversion, so some of our creative third party
 * developers out there may be able to make tools to show how a ship loadout
 * compares before and after converting their modules. The entry itself is the
 * same as the EngineerCraft entry, minus the ingredients data (since no
 * materials are required to convert), but plus an "IsPreview" bool to indicate
 * whether this entry has been generated from a conversion, or just a preview.
 */

export class EngineerLegacyConvert extends JournalEvent {
  event: JournalEvents.engineerLegacyConvert;
  Engineer: string;
  EngineerID: number;
  Blueprint: string;
  BlueprintID: number;
  Level: number;
  Quality: number;
  ApplyExperimentalEffect?: string;
  Modifiers: {
    Label: string;
    Value: number;
    OriginalValue: number;
    LessIsGood: boolean;
    /**
     * These modification types have string values: WeaponMode, DamageType, CabinClass
     * (although I'm not sure if there are any blueprints that actually modify a cabin class!)
     */
    ValueStr?: string;
  }[];
  IsPreview: boolean;
}
