[cmdr-journal](../README.md) > [EngineerLegacyConvert](../classes/engineerlegacyconvert.md)



# Class: EngineerLegacyConvert


When written: when converting a pre-2.4 engineered module

This is generated when converting, or previewing a conversion of a legacy module to the new system. Due to the nature of the changes made for 3.0, modules generated in the old system are not compatible with the new crafting system, so players will be unable to craft with them. However, players will be given the opportunity to convert their legacy modules to the new format with the caveat that converted modules will be a recipe level below what they were before the conversion. The EngineerLegacyConvert journal entry is generated when converting a recipe, or just previewing a conversion, so some of our creative third party developers out there may be able to make tools to show how a ship loadout compares before and after converting their modules. The entry itself is the same as the EngineerCraft entry, minus the ingredients data (since no materials are required to convert), but plus an "IsPreview" bool to indicate whether this entry has been generated from a conversion, or just a preview.

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ EngineerLegacyConvert**







## Index

### Properties

* [ApplyExperimentalEffect](engineerlegacyconvert.md#applyexperimentaleffect)
* [Blueprint](engineerlegacyconvert.md#blueprint)
* [BlueprintID](engineerlegacyconvert.md#blueprintid)
* [Engineer](engineerlegacyconvert.md#engineer)
* [EngineerID](engineerlegacyconvert.md#engineerid)
* [IsPreview](engineerlegacyconvert.md#ispreview)
* [Level](engineerlegacyconvert.md#level)
* [Modifiers](engineerlegacyconvert.md#modifiers)
* [Quality](engineerlegacyconvert.md#quality)
* [event](engineerlegacyconvert.md#event)
* [timestamp](engineerlegacyconvert.md#timestamp)



---
## Properties
<a id="applyexperimentaleffect"></a>

### «Optional» ApplyExperimentalEffect

**●  ApplyExperimentalEffect**:  *`string`* 

*Defined in models/engineer-legacy-convert.ts:29*





___

<a id="blueprint"></a>

###  Blueprint

**●  Blueprint**:  *`string`* 

*Defined in models/engineer-legacy-convert.ts:25*





___

<a id="blueprintid"></a>

###  BlueprintID

**●  BlueprintID**:  *`number`* 

*Defined in models/engineer-legacy-convert.ts:26*





___

<a id="engineer"></a>

###  Engineer

**●  Engineer**:  *`string`* 

*Defined in models/engineer-legacy-convert.ts:23*





___

<a id="engineerid"></a>

###  EngineerID

**●  EngineerID**:  *`number`* 

*Defined in models/engineer-legacy-convert.ts:24*





___

<a id="ispreview"></a>

###  IsPreview

**●  IsPreview**:  *`boolean`* 

*Defined in models/engineer-legacy-convert.ts:41*





___

<a id="level"></a>

###  Level

**●  Level**:  *`number`* 

*Defined in models/engineer-legacy-convert.ts:27*





___

<a id="modifiers"></a>

###  Modifiers

**●  Modifiers**:  *`object`[]* 

*Defined in models/engineer-legacy-convert.ts:30*





___

<a id="quality"></a>

###  Quality

**●  Quality**:  *`number`* 

*Defined in models/engineer-legacy-convert.ts:28*





___

<a id="event"></a>

###  event

**●  event**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[event](journalevent.md#event)*

*Defined in models/journal-event.model.ts:2*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[timestamp](journalevent.md#timestamp)*

*Defined in models/journal-event.model.ts:3*





___


