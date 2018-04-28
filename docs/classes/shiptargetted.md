[cmdr-journal](../README.md) > [ShipTargetted](../classes/shiptargetted.md)



# Class: ShipTargetted


When written: when the current player selects a new target

The amount of data written depends on the extent to which the target ship has been scanned

## Example

    {
        "timestamp":"2018-03-30T13:56:13Z",
        "event":"ShipTargeted",
        "TargetLocked":true,
        "Ship":"cobramkiii",
        "Ship_Localised":"Cobra MkIII",
        "ScanStage":3,
        "PilotName":"$npc_name_decorate:#name=Jesse Kaukonen;",
        "PilotName_Localised":"Jesse Kaukonen",
        "PilotRank":"Mostly Harmless",
        "ShieldHealth":100.000000,
        "HullHealth":100.000000,
        "Faction":"Qa'wakana United Organisation",
        "LegalStatus":"Clean",
        "Subsystem":"$hpt_multicannon_fixed_small_name;",
        "Subsystem_Localised":"Multi-Cannon",
        "SubsystemHealth":100.000000
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ShipTargetted**







## Index

### Properties

* [Bounty](shiptargetted.md#bounty)
* [Faction](shiptargetted.md#faction)
* [HullHealth](shiptargetted.md#hullhealth)
* [LegalStatus](shiptargetted.md#legalstatus)
* [PilotName](shiptargetted.md#pilotname)
* [PilotName_Localised](shiptargetted.md#pilotname_localised)
* [PilotRank](shiptargetted.md#pilotrank)
* [ScanStage](shiptargetted.md#scanstage)
* [ShieldHealth](shiptargetted.md#shieldhealth)
* [Ship](shiptargetted.md#ship)
* [Ship_Localised](shiptargetted.md#ship_localised)
* [SubSystem](shiptargetted.md#subsystem)
* [SubsystemHealth](shiptargetted.md#subsystemhealth)
* [Subsystem_Localised](shiptargetted.md#subsystem_localised)
* [TargetLocked](shiptargetted.md#targetlocked)
* [event](shiptargetted.md#event)
* [timestamp](shiptargetted.md#timestamp)



---
## Properties
<a id="bounty"></a>

### «Optional» Bounty

**●  Bounty**:  *`number`* 

*Defined in models/ship-targetted.ts:56*





___

<a id="faction"></a>

### «Optional» Faction

**●  Faction**:  *`string`* 

*Defined in models/ship-targetted.ts:54*



If ScanStage >= 3




___

<a id="hullhealth"></a>

### «Optional» HullHealth

**●  HullHealth**:  *`number`* 

*Defined in models/ship-targetted.ts:50*





___

<a id="legalstatus"></a>

### «Optional» LegalStatus

**●  LegalStatus**:  *`string`* 

*Defined in models/ship-targetted.ts:55*





___

<a id="pilotname"></a>

### «Optional» PilotName

**●  PilotName**:  *`string`* 

*Defined in models/ship-targetted.ts:43*



If ScanStage >= 1




___

<a id="pilotname_localised"></a>

### «Optional» PilotName_Localised

**●  PilotName_Localised**:  *`string`* 

*Defined in models/ship-targetted.ts:44*





___

<a id="pilotrank"></a>

### «Optional» PilotRank

**●  PilotRank**:  *[CombatRanks](../enums/combatranks.md)* 

*Defined in models/ship-targetted.ts:45*





___

<a id="scanstage"></a>

### «Optional» ScanStage

**●  ScanStage**:  *`number`* 

*Defined in models/ship-targetted.ts:39*





___

<a id="shieldhealth"></a>

### «Optional» ShieldHealth

**●  ShieldHealth**:  *`number`* 

*Defined in models/ship-targetted.ts:49*



If ScanStage >= 2




___

<a id="ship"></a>

### «Optional» Ship

**●  Ship**:  *`string`* 

*Defined in models/ship-targetted.ts:37*



If target locked




___

<a id="ship_localised"></a>

### «Optional» Ship_Localised

**●  Ship_Localised**:  *`string`* 

*Defined in models/ship-targetted.ts:38*





___

<a id="subsystem"></a>

### «Optional» SubSystem

**●  SubSystem**:  *`string`* 

*Defined in models/ship-targetted.ts:57*





___

<a id="subsystemhealth"></a>

### «Optional» SubsystemHealth

**●  SubsystemHealth**:  *`number`* 

*Defined in models/ship-targetted.ts:59*





___

<a id="subsystem_localised"></a>

### «Optional» Subsystem_Localised

**●  Subsystem_Localised**:  *`string`* 

*Defined in models/ship-targetted.ts:58*





___

<a id="targetlocked"></a>

###  TargetLocked

**●  TargetLocked**:  *`boolean`* 

*Defined in models/ship-targetted.ts:33*





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


