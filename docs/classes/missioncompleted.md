[cmdr-journal](../README.md) > [MissionCompleted](../classes/missioncompleted.md)



# Class: MissionCompleted


When Written: when a mission is completed

## Example

    {
        "timestamp":"2018-04-19T18:23:52Z",
        "event":"MissionCompleted",
        "Faction":"Knights of Karma",
        "Name":"MISSION_Scan_name",
        "MissionID":366822930,
        "Reward":2858960,
        "FactionEffects":[
            {
                "Faction":"Knights of Karma",
                "Effects":[
                    {
                        "Effect":"$MISSIONUTIL_Interaction_Summary_lockdown_down;",
                        "Effect_Localised":"$#MinorFaction; have less signs of imposing a security lockdown.",
                        "Trend":"DownGood"
                    }
                ],
                "Influence":[ { "SystemAddress":4786481006963, "Trend":"UpGood" } ],
                "Reputation":"UpGood"
            }
        ]
    }

### Example of MaterialsReward

    {
        "Name":"DisruptedWakeEchoes",
        "Name_Localised":"Atypical Disrupted Wake Echoes",
        "Category":"$MICRORESOURCE_CATEGORY_Encoded;",
        "Category_Localised":"Encoded",
        "Count":4
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ MissionCompleted**







## Index

### Properties

* [Commodity](missioncompleted.md#commodity)
* [CommodityReward](missioncompleted.md#commodityreward)
* [Commodity_Localised](missioncompleted.md#commodity_localised)
* [Count](missioncompleted.md#count)
* [DestinationStation](missioncompleted.md#destinationstation)
* [DestinationSystem](missioncompleted.md#destinationsystem)
* [Donation](missioncompleted.md#donation)
* [Faction](missioncompleted.md#faction)
* [FactionEffects](missioncompleted.md#factioneffects)
* [MaterialsReward](missioncompleted.md#materialsreward)
* [MissionID](missioncompleted.md#missionid)
* [Name](missioncompleted.md#name)
* [PermitsAwarded](missioncompleted.md#permitsawarded)
* [Reward](missioncompleted.md#reward)
* [Target](missioncompleted.md#target)
* [TargetFaction](missioncompleted.md#targetfaction)
* [TargetType](missioncompleted.md#targettype)
* [event](missioncompleted.md#event)
* [timestamp](missioncompleted.md#timestamp)



---
## Properties
<a id="commodity"></a>

### «Optional» Commodity

**●  Commodity**:  *`string`* 

*Defined in models/mission-completed.ts:48*





___

<a id="commodityreward"></a>

### «Optional» CommodityReward

**●  CommodityReward**:  *`object`[]* 

*Defined in models/mission-completed.ts:57*





___

<a id="commodity_localised"></a>

### «Optional» Commodity_Localised

**●  Commodity_Localised**:  *`string`* 

*Defined in models/mission-completed.ts:49*





___

<a id="count"></a>

### «Optional» Count

**●  Count**:  *`number`* 

*Defined in models/mission-completed.ts:50*





___

<a id="destinationstation"></a>

###  DestinationStation

**●  DestinationStation**:  *`string`* 

*Defined in models/mission-completed.ts:79*





___

<a id="destinationsystem"></a>

###  DestinationSystem

**●  DestinationSystem**:  *`string`* 

*Defined in models/mission-completed.ts:78*





___

<a id="donation"></a>

### «Optional» Donation

**●  Donation**:  *`number`* 

*Defined in models/mission-completed.ts:55*





___

<a id="faction"></a>

###  Faction

**●  Faction**:  *`string`* 

*Defined in models/mission-completed.ts:46*





___

<a id="factioneffects"></a>

### «Optional» FactionEffects

**●  FactionEffects**:  *`object`[]* 

*Defined in models/mission-completed.ts:65*





___

<a id="materialsreward"></a>

### «Optional» MaterialsReward

**●  MaterialsReward**:  *`object`[]* 

*Defined in models/mission-completed.ts:58*





___

<a id="missionid"></a>

###  MissionID

**●  MissionID**:  *`number`* 

*Defined in models/mission-completed.ts:47*





___

<a id="name"></a>

###  Name

**●  Name**:  *`string`* 

*Defined in models/mission-completed.ts:45*





___

<a id="permitsawarded"></a>

### «Optional» PermitsAwarded

**●  PermitsAwarded**:  *`string`[]* 

*Defined in models/mission-completed.ts:56*





___

<a id="reward"></a>

### «Optional» Reward

**●  Reward**:  *`number`* 

*Defined in models/mission-completed.ts:54*





___

<a id="target"></a>

### «Optional» Target

**●  Target**:  *`string`* 

*Defined in models/mission-completed.ts:51*





___

<a id="targetfaction"></a>

### «Optional» TargetFaction

**●  TargetFaction**:  *`string`* 

*Defined in models/mission-completed.ts:53*





___

<a id="targettype"></a>

### «Optional» TargetType

**●  TargetType**:  *`string`* 

*Defined in models/mission-completed.ts:52*





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


