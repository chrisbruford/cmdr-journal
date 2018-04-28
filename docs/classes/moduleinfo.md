[cmdr-journal](../README.md) > [ModuleInfo](../classes/moduleinfo.md)



# Class: ModuleInfo


When written: when looking at the cockpit RHS modules info panel, if data has changed

This also writes a ModulesInfo.json file alongside the journal, listing the modules in the same order as displayed

## Example:

    {
    "timestamp":"2018-01-10T14:35:08Z",
    "event":"ModuleInfo",
    "Modules":[
    {
    "Slot":"MainEngines",
    "Item":"int_engine_size3_class5",
    "Power":3.720000,
    "Priority":0
    },

    {
    "Slot":"MediumHardpoint1",
    "Item":"hpt_beamlaser_turret_medium",
    "Power":0.930000,
    "Priority":0
    },

    {
    "Slot":"Slot03_Size2",
    "Item":"int_shieldgenerator_size2_class1",
    "Power":0.900000,
    "Priority":2
    },

    {
    "Slot":"MediumHardpoint2",
    "Item":"hpt_multicannon_gimbal_medium",
    "Power":0.640000,
    "Priority":0
    },

    {
    "Slot":"CargoHatch",
    "Item":"modularcargobaydoor",
    "Power":0.600000,
    "Priority":2
    },

    {
    "Slot":"MediumHardpoint3",
    "Item":"hpt_pulselaser_gimbal_medium",
    "Power":0.600000,
    "Priority":0
    },

    {
    "Slot":"PowerDistributor",
    "Item":"int_powerdistributor_size3_class5",
    "Power":0.600000,
    "Priority":0
    },

    {
    "Slot":"FrameShiftDrive",
    "Item":"int_hyperdrive_size3_class5",
    "Power":0.450000,
    "Priority":0
    },

    {
    "Slot":"Slot04_Size2",
    "Item":"int_fuelscoop_size2_class5",
    "Power":0.390000,
    "Priority":0
    },

    {
    "Slot":"LifeSupport",
    "Item":"int_lifesupport_size1_class1",
    "Power":0.320000,
    "Priority":2
    },

    {
    "Slot":"Slot05_Size2",
    "Item":"int_buggybay_size2_class1",
    "Power":0.250000,
    "Priority":0
    },

    {
    "Slot":"Radar",
    "Item":"int_sensors_size2_class2",
    "Power":0.210000,
    "Priority":0
    },

    {
    "Slot":"ShipCockpit",
    "Item":"empire_courier_cockpit",
    "Power":0.000000
    },

    {
    "Slot":"PowerPlant",
    "Item":"int_powerplant_size4_class2",
    "Power":0.000000
    },

    {
    "Slot":"Slot01_Size3",
    "Item":"int_cargorack_size2_class1",
    "Power":0.000000
    },

    {
    "Slot":"Slot02_Size3",
    "Item":"int_cargorack_size2_class1",
    "Power":0.000000
    },

    {
    "Slot":"Slot06_Size1",
    "Item":"int_stellarbodydiscoveryscanner_standard",
    "Power":0.000000
    },

    {
    "Slot":"DataLinkScanner",
    "Item":"hpt_shipdatalinkscanner",
    "Power":0.000000,
    "Priority": 0
    }
    ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ModuleInfo**







## Index

### Properties

* [event](moduleinfo.md#event)
* [timestamp](moduleinfo.md#timestamp)



---
## Properties
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


