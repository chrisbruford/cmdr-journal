[cmdr-journal](../README.md) > [Loadout](../classes/loadout.md)



# Class: Loadout


## Example

Most "modules" have been removed from this example as they simply repeat the same values many times

    {
        "timestamp": "2018-04-26T20:19:50Z",
        "event": "Loadout",
        "Ship": "Empire_Courier",
        "ShipID": 4,
        "ShipName": "s3x panther",
        "ShipIdent": "KV-003",
        "HullValue": 2481550,
        "ModulesValue": 4845048,
        "Rebuy": 366333,
        "Modules": [
            {
                "Slot": "MediumHardpoint1",
                "Item": "Hpt_MultiCannon_Fixed_Medium",
                "On": true,
                "Priority": 2,
                "AmmoInClip": 82,
                "AmmoInHopper": 2100,
                "Health": 1.000000,
                "Value": 31493,
                "Engineering": {
                    "Engineer": "Tod 'The Blaster' McQuinn",
                    "EngineerID": 300260,
                    "BlueprintID": 128673504,
                    "BlueprintName": "Weapon_Overcharged",
                    "Level": 5,
                    "Quality": 0.000000,
                    "ExperimentalEffect": "special_incendiary_rounds",
                    "ExperimentalEffect_Localised": "Incendiary Rounds",
                    "Modifiers": [
                        {
                            "Label": "PowerDraw",
                            "Value": 0.516246,
                            "OriginalValue": 0.460000,
                            "LessIsGood": 1
                        },
                        {
                            "Label": "DamagePerSecond",
                            "Value": 20.651014,
                            "OriginalValue": 15.642858,
                            "LessIsGood": 0
                        },
                        {
                            "Label": "Damage",
                            "Value": 3.043308,
                            "OriginalValue": 2.190000,
                            "LessIsGood": 0 },
                        {
                            "Label": "DistributorDraw",
                            "Value": 0.133285,
                            "OriginalValue": 0.110000,
                            "LessIsGood": 1 },
                        {
                            "Label": "ThermalLoad",
                            "Value": 0.540000,
                            "OriginalValue": 0.180000,
                            "LessIsGood": 1 },
                        {
                            "Label": "ArmourPenetration",
                            "Value": 37.304371,
                            "OriginalValue": 37.000000,
                            "LessIsGood": 0 },
                        {
                            "Label": "RateOfFire",
                            "Value": 6.785714,
                            "OriginalValue": 7.142857,
                            "LessIsGood": 0 },
                        {
                            "Label": "AmmoClipSize",
                            "Value": 82.000000,
                            "OriginalValue": 100.000000,
                            "LessIsGood": 0 },
                        {
                            "Label": "DamageType",
                            "ValueStr": "$Thermic;",
                            "ValueStr_Localised": "Thermal"
                         }
                    ]
                }
            },
            {
                "Slot": "TinyHardpoint1",
                "Item": "Hpt_CrimeScanner_Size0_Class3",
                "On": true,
                "Priority": 3,
                "Health": 1.000000,
                "Value": 118852 },
            {
                "Slot": "TinyHardpoint2",
                "Item": "Hpt_HeatSinkLauncher_Turret_Tiny",
                "On": true,
                "Priority": 2,
                "AmmoInClip": 1,
                "AmmoInHopper": 3,
                "Health": 1.000000,
                "Value": 3072,
                "Engineering": {
                    "Engineer": "Ram Tah",
                    "EngineerID": 300110,
                    "BlueprintID": 128731666,
                    "BlueprintName": "HeatSinkLauncher_HeatSinkCapacity",
                    "Level": 3,
                    "Quality": 0.000000,
                    "Modifiers": [
                        {
                            "Label": "Mass",
                            "Value": 3.507817,
                            "OriginalValue": 1.300000,
                            "LessIsGood": 1
                        },
                        {
                            "Label": "AmmoMaximum",
                            "Value": 3.000000,
                            "OriginalValue": 2.000000,
                            "LessIsGood": 0
                        },
                        {
                            "Label": "ReloadTime",
                            "Value": 18.647358,
                            "OriginalValue": 10.000000,
                            "LessIsGood": 1
                        }
                    ]
                }
            },
            {
                "Slot": "TinyHardpoint3",
                "Item": "Hpt_ShieldBooster_Size0_Class5",
                "On": true,
                "Priority": 3,
                "Health": 1.000000,
                "Value": 246578,
                "Engineering": {
                    "Engineer": "Didi Vatermann",
                    "EngineerID": 300000,
                    "BlueprintID": 128673783,
                    "BlueprintName": "ShieldBooster_HeavyDuty",
                    "Level": 4,
                    "Quality": 0.000000,
                    "Modifiers": [
                        {
                            "Label": "Mass",
                            "Value": 11.785304,
                            "OriginalValue": 3.500000,
                            "LessIsGood": 1 }, { "Label": "Integrity",
                            "Value": 52.320000,
                            "OriginalValue": 48.000000,
                            "LessIsGood": 0
                        },
                        {
                            "Label": "PowerDraw",
                            "Value": 1.433739,
                            "OriginalValue": 1.200000,
                            "LessIsGood": 1
                        },
                        {
                            "Label": "DefenceModifierShieldMultiplier",
                            "Value": 58.250175,
                            "OriginalValue": 20.000004,
                            "LessIsGood": 0
                        }
                    ]
                }
            },
            {
                "Slot": "TinyHardpoint4",
                "Item": "Hpt_HeatSinkLauncher_Turret_Tiny",
                "On": true,
                "Priority": 2,
                "AmmoInClip": 1,
                "AmmoInHopper": 2,
                "Health": 1.000000,
                "Value": 2901
            },
            {
                "Slot": "PaintJob",
                "Item": "PaintJob_Empire_Courier_BlackFriday_01",
                "On": true,
                "Priority": 1,
                "Health": 1.000000
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Loadout**







## Index

### Properties

* [HullValue](loadout.md#hullvalue)
* [Modules](loadout.md#modules)
* [ModulesValue](loadout.md#modulesvalue)
* [Rebuy](loadout.md#rebuy)
* [Ship](loadout.md#ship)
* [ShipID](loadout.md#shipid)
* [ShipIdent](loadout.md#shipident)
* [ShipName](loadout.md#shipname)
* [event](loadout.md#event)
* [timestamp](loadout.md#timestamp)



---
## Properties
<a id="hullvalue"></a>

### «Optional» HullValue

**●  HullValue**:  *`number`* 

*Defined in models/loadout.ts:203*





___

<a id="modules"></a>

###  Modules

**●  Modules**:  *`object`[]* 

*Defined in models/loadout.ts:206*





___

<a id="modulesvalue"></a>

### «Optional» ModulesValue

**●  ModulesValue**:  *`number`* 

*Defined in models/loadout.ts:204*





___

<a id="rebuy"></a>

###  Rebuy

**●  Rebuy**:  *`number`* 

*Defined in models/loadout.ts:205*





___

<a id="ship"></a>

###  Ship

**●  Ship**:  *`string`* 

*Defined in models/loadout.ts:199*





___

<a id="shipid"></a>

###  ShipID

**●  ShipID**:  *`number`* 

*Defined in models/loadout.ts:200*





___

<a id="shipident"></a>

###  ShipIdent

**●  ShipIdent**:  *`string`* 

*Defined in models/loadout.ts:202*





___

<a id="shipname"></a>

###  ShipName

**●  ShipName**:  *`string`* 

*Defined in models/loadout.ts:201*





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


