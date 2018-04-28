[cmdr-journal](../README.md) > [EngineerCraft](../classes/engineercraft.md)



# Class: EngineerCraft


When Written: when requesting an engineer upgrade

## Example

    {
        "timestamp":"2017-12-04T16:38:50Z",
        "event":"EngineerCraft",
        "Engineer":"Elvira Martuuk",
        "EngineerID":300160,
        "Blueprint":"ShieldGenerator_Kinetic",
        "BlueprintID":128673820,
        "Level":1,
        "Slot":"Slot02_Size4",
        "Quality":0.207000,
        "Module":"int_shieldgenerator_size3_class5",
        "Ingredients":[
            {
                "Name":"shieldcyclerecordings",
                "Name_Localised":"Distorted Shield Cycle Recordings",
                "Count":1
            }
        ],
        "Modifiers":[
            {
                "Label":"Mass",
                "Value":4.159000,
                "OriginalValue":5.000000,
                "LessIsGood":1
            },
            {
                "Label":"Integrity",
                "Value":73.150002,
                "OriginalValue":77.000000,
                "LessIsGood":0
            },
            {
                "Label":"PowerDraw",
                "Value":2.062620,
                "OriginalValue":2.520000,
                "LessIsGood":1
            },
            {
                "Label":"ShieldGenOptimalMass",
                "Value":161.699997,
                "OriginalValue":165.000000,
                "LessIsGood":0
            },
            {
                "Label":"ShieldGenStrength",
                "Value":122.172012,
                "OriginalValue":120.000008,
                "LessIsGood":0
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ EngineerCraft**







## Index

### Properties

* [ApplyExperimentalEffect](engineercraft.md#applyexperimentaleffect)
* [Blueprint](engineercraft.md#blueprint)
* [BlueprintID](engineercraft.md#blueprintid)
* [Engineer](engineercraft.md#engineer)
* [EngineerID](engineercraft.md#engineerid)
* [Ingredients](engineercraft.md#ingredients)
* [Level](engineercraft.md#level)
* [Modifiers](engineercraft.md#modifiers)
* [Quality](engineercraft.md#quality)
* [event](engineercraft.md#event)
* [timestamp](engineercraft.md#timestamp)



---
## Properties
<a id="applyexperimentaleffect"></a>

### «Optional» ApplyExperimentalEffect

**●  ApplyExperimentalEffect**:  *`string`* 

*Defined in models/engineer-craft.ts:69*





___

<a id="blueprint"></a>

###  Blueprint

**●  Blueprint**:  *`string`* 

*Defined in models/engineer-craft.ts:65*





___

<a id="blueprintid"></a>

###  BlueprintID

**●  BlueprintID**:  *`number`* 

*Defined in models/engineer-craft.ts:66*





___

<a id="engineer"></a>

###  Engineer

**●  Engineer**:  *`string`* 

*Defined in models/engineer-craft.ts:63*





___

<a id="engineerid"></a>

###  EngineerID

**●  EngineerID**:  *`number`* 

*Defined in models/engineer-craft.ts:64*





___

<a id="ingredients"></a>

###  Ingredients

**●  Ingredients**:  *`object`* 

*Defined in models/engineer-craft.ts:70*


#### Type declaration




 Count: `number`






 Name: `string`







___

<a id="level"></a>

###  Level

**●  Level**:  *`number`* 

*Defined in models/engineer-craft.ts:67*





___

<a id="modifiers"></a>

###  Modifiers

**●  Modifiers**:  *`object`[]* 

*Defined in models/engineer-craft.ts:71*





___

<a id="quality"></a>

###  Quality

**●  Quality**:  *`number`* 

*Defined in models/engineer-craft.ts:68*





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


