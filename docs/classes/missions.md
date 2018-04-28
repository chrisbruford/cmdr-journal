[cmdr-journal](../README.md) > [Missions](../classes/missions.md)



# Class: Missions


When written: at startup

## Example

    {
        "timestamp":"2017-10-02T10:37:58Z",
        "event":"Missions",
        "Active":[
            {
                "MissionID":65380900,
                "Name":"Mission_Courier_name",
                "PassengerMission":false,
                "Expires":82751
             }
        ],
        "Failed":[],
        "Complete":[]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Missions**







## Index

### Properties

* [Active](missions.md#active)
* [Complete](missions.md#complete)
* [Failed](missions.md#failed)
* [event](missions.md#event)
* [timestamp](missions.md#timestamp)



---
## Properties
<a id="active"></a>

###  Active

**●  Active**:  *[Mission](mission.md)[]* 

*Defined in models/missions.ts:36*





___

<a id="complete"></a>

###  Complete

**●  Complete**:  *[Mission](mission.md)[]* 

*Defined in models/missions.ts:38*





___

<a id="failed"></a>

###  Failed

**●  Failed**:  *[Mission](mission.md)[]* 

*Defined in models/missions.ts:37*





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


