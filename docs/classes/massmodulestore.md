[cmdr-journal](../README.md) > [MassModuleStore](../classes/massmodulestore.md)



# Class: MassModuleStore


When written: when putting multiple modules into storage

## Example

    {
        "timestamp":"2018-03-27T18:31:00Z",
        "event":"MassModuleStore",
        "MarketID":3230399232,
        "Ship":"cobramkiii",
        "ShipID":92,
        "Items":[
            {
                "Slot":"MediumHardpoint1",
                "Name":"$hpt_railgun_fixed_medium_name;",
                "Name_Localised":"Rail Gun",
                "Hot":false,
                "EngineerModifications":"Weapon_Sturdy",
                "Level":4,
                "Quality":0.000000
            },
            {
                "Slot":"MediumHardpoint2",
                "Name":"$hpt_railgun_fixed_medium_name;",
                "Name_Localised":"Rail Gun",
                "Hot":false,
                "EngineerModifications":"Weapon_LongRange",
                "Level":5,
                "Quality":0.000000
            },
            {
                "Slot":"Slot01_Size4",
                "Name":"$int_shieldgenerator_size4_class5_strong_name;",
                "Name_Localised":"Prismatic Shield",
                "Hot":false,
                "EngineerModifications":"ShieldGenerator_Thermic",
                "Level":5,
                "Quality":0.000000
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ MassModuleStore**







## Index

### Properties

* [Items](massmodulestore.md#items)
* [MarketID](massmodulestore.md#marketid)
* [Ship](massmodulestore.md#ship)
* [ShipId](massmodulestore.md#shipid)
* [event](massmodulestore.md#event)
* [timestamp](massmodulestore.md#timestamp)



---
## Properties
<a id="items"></a>

###  Items

**●  Items**:  *`object`[]* 

*Defined in models/mass-module-store.ts:51*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/mass-module-store.ts:48*





___

<a id="ship"></a>

###  Ship

**●  Ship**:  *`string`* 

*Defined in models/mass-module-store.ts:49*





___

<a id="shipid"></a>

###  ShipId

**●  ShipId**:  *`number`* 

*Defined in models/mass-module-store.ts:50*





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


