[cmdr-journal](../README.md) > [CommunityGoal](../classes/communitygoal.md)



# Class: CommunityGoal


When written: when checking the status of a community goal

This event contains the current status of all community goals the player is currently subscribed to

## Example

    {
        "timestamp":"2017-08-14T13:20:28Z",
        "event":"CommunityGoal",
        "CurrentGoals": [
            {
                "CGID":726,
                "Title":"Alliance Research Initiative – Trade",
                "SystemName":"Kaushpoos",
                "MarketName":"Neville Horizons",
                "Expiry":"2017-08-17T14:58:14Z",
                "IsComplete":false,
                "CurrentTotal":10062,
                "PlayerContribution":562,
                "NumContributors":101,
                "TopRankSize":10,
                "PlayerInTopRank":false,
                "TierReached":"Tier 1",
                "PlayerPercentileBand":50,
                "Bonus":200000
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ CommunityGoal**







## Index

### Properties

* [CurrentGoals](communitygoal.md#currentgoals)
* [event](communitygoal.md#event)
* [timestamp](communitygoal.md#timestamp)



---
## Properties
<a id="currentgoals"></a>

###  CurrentGoals

**●  CurrentGoals**:  *`object`[]* 

*Defined in models/community-goal.ts:37*





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


