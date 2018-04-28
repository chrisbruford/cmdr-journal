[cmdr-journal](../README.md) > [Scan](../classes/scan.md)



# Class: Scan


When Written: basic or detailed discovery scan of a star, planet or moon

This is also generated when scanning a navigation beacon in a populated system, to record info about all the bodies in the system

lots of these properties are optional depending on object scanned

Note that a basic scan (ie without having a Detailed Surface Scanner installed) will now save a reduced amount of information.

A basic scan on a planet will include body name, planet class, orbital data, rotation period, mass, radius, surface gravity; but will exclude tidal lock, terraform state, atmosphere, volcanism, surface pressure and temperature, available materials, and details of rings. The info for a star will be largely the same whether a basic scanner or detailed scanner is used.

The "Parents" property provides the body's hierarchical position within the system: in the example below, "Procyon B 3 a" is a moon of a planet (body 11), which is orbiting a star (body 2), which is has a parent body that's a Barycentre

## Example

    {
        "timestamp":"2018-02-02T10:43:05Z",
        "event":"Scan",
        "ScanType":"NavBeaconDetail",
        "BodyName":"Procyon B 3 a",
        "BodyID":12,
        "Parents":[ {"Planet":11}, {"Star":2}, {"Null":0} ],
        "DistanceFromArrivalLS":10048.152344,
        "TidalLock":true,
        "TerraformState":"",
        "PlanetClass":"Rocky body",
        "Atmosphere":"",
        "AtmosphereType":"None",
        "Volcanism":"",
        "MassEM":0.025342,
        "Radius":2011975.250000,
        "SurfaceGravity":2.495225,
        "SurfaceTemperature":318.448792,
        "SurfacePressure":0.000000,
        "Landable":true,
        "Materials":[
            { "Name":"iron", "Percent":19.315084 },
            { "Name":"sulphur", "Percent":17.321133 },
            { "Name":"nickel", "Percent":14.609120 },
            { "Name":"carbon", "Percent":14.565277 },
            { "Name":"phosphorus", "Percent":9.324941 },
            { "Name":"chromium", "Percent":8.686635 },
            { "Name":"manganese", "Percent":7.976933 },
            { "Name":"zinc", "Percent":5.249117 },
            { "Name":"tin", "Percent":1.200338 },
            { "Name":"tungsten", "Percent":1.060592 },
            { "Name":"technetium", "Percent":0.690823 }
        ],
        "Composition":{
            "Ice":0.000000,
            "Rock":0.861282,
            "Metal":0.138718
        },
        "SemiMajorAxis":89655728.000000,
        "Eccentricity":0.000000,
        "OrbitalInclination":4.566576,
        "Periapsis":309.656799,
        "OrbitalPeriod":344902.937500,
        "RotationPeriod":352425.468750,
        "AxialTilt":0.479157
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Scan**







## Index

### Properties

* [AbsoluteMagnitude](scan.md#absolutemagnitude)
* [Age_MY](scan.md#age_my)
* [Atmosphere](scan.md#atmosphere)
* [AtmosphereComposition](scan.md#atmospherecomposition)
* [AtmosphereType](scan.md#atmospheretype)
* [AxialTilt](scan.md#axialtilt)
* [BodyID](scan.md#bodyid)
* [Bodyname](scan.md#bodyname)
* [Composition](scan.md#composition)
* [DistanceFromArrivalLS](scan.md#distancefromarrivalls)
* [Eccentricity](scan.md#eccentricity)
* [Landable](scan.md#landable)
* [Luminosity](scan.md#luminosity)
* [Materials](scan.md#materials)
* [OrbitalInclination](scan.md#orbitalinclination)
* [OrbitalPeriod](scan.md#orbitalperiod)
* [Parents](scan.md#parents)
* [Periapsis](scan.md#periapsis)
* [PlanetClass](scan.md#planetclass)
* [Radius](scan.md#radius)
* [ReserveLevel](scan.md#reservelevel)
* [Rings](scan.md#rings)
* [RotationPeriod](scan.md#rotationperiod)
* [ScanType](scan.md#scantype)
* [SemiMajorAxis](scan.md#semimajoraxis)
* [StarType](scan.md#startype)
* [StellarMass](scan.md#stellarmass)
* [SurfaceGravity](scan.md#surfacegravity)
* [SurfacePressure](scan.md#surfacepressure)
* [SurfaceTemperature](scan.md#surfacetemperature)
* [TerraformState](scan.md#terraformstate)
* [TidalLock](scan.md#tidallock)
* [Volcanism](scan.md#volcanism)
* [event](scan.md#event)
* [timestamp](scan.md#timestamp)



---
## Properties
<a id="absolutemagnitude"></a>

### «Optional» AbsoluteMagnitude

**●  AbsoluteMagnitude**:  *`number`* 

*Defined in models/scan.ts:99*





___

<a id="age_my"></a>

### «Optional» Age_MY

**●  Age_MY**:  *`number`* 

*Defined in models/scan.ts:100*





___

<a id="atmosphere"></a>

### «Optional» Atmosphere

**●  Atmosphere**:  *[AtmosphereTypes](../enums/atmospheretypes.md)* 

*Defined in models/scan.ts:107*





___

<a id="atmospherecomposition"></a>

### «Optional» AtmosphereComposition

**●  AtmosphereComposition**:  *`object`[]* 

*Defined in models/scan.ts:109*





___

<a id="atmospheretype"></a>

### «Optional» AtmosphereType

**●  AtmosphereType**:  *`string`* 

*Defined in models/scan.ts:108*





___

<a id="axialtilt"></a>

### «Optional» AxialTilt

**●  AxialTilt**:  *`number`* 

*Defined in models/scan.ts:80*





___

<a id="bodyid"></a>

###  BodyID

**●  BodyID**:  *`number`* 

*Defined in models/scan.ts:74*





___

<a id="bodyname"></a>

###  Bodyname

**●  Bodyname**:  *`string`* 

*Defined in models/scan.ts:73*





___

<a id="composition"></a>

###  Composition

**●  Composition**:  *`object`* 

*Defined in models/scan.ts:119*


#### Type declaration




 Ice: `number`






 Metal: `number`






 Rock: `number`







___

<a id="distancefromarrivalls"></a>

###  DistanceFromArrivalLS

**●  DistanceFromArrivalLS**:  *`number`* 

*Defined in models/scan.ts:75*





___

<a id="eccentricity"></a>

### «Optional» Eccentricity

**●  Eccentricity**:  *`number`* 

*Defined in models/scan.ts:91*





___

<a id="landable"></a>

### «Optional» Landable

**●  Landable**:  *`boolean`* 

*Defined in models/scan.ts:116*





___

<a id="luminosity"></a>

###  Luminosity

**●  Luminosity**:  *[StarLuminosityClasses](../enums/starluminosityclasses.md)* 

*Defined in models/scan.ts:101*





___

<a id="materials"></a>

### «Optional» Materials

**●  Materials**:  *`object`[]* 

*Defined in models/scan.ts:117*





___

<a id="orbitalinclination"></a>

### «Optional» OrbitalInclination

**●  OrbitalInclination**:  *`number`* 

*Defined in models/scan.ts:92*





___

<a id="orbitalperiod"></a>

### «Optional» OrbitalPeriod

**●  OrbitalPeriod**:  *`number`* 

*Defined in models/scan.ts:94*





___

<a id="parents"></a>

### «Optional» Parents

**●  Parents**:  *`object`[]* 

*Defined in models/scan.ts:103*





___

<a id="periapsis"></a>

### «Optional» Periapsis

**●  Periapsis**:  *`number`* 

*Defined in models/scan.ts:93*





___

<a id="planetclass"></a>

### «Optional» PlanetClass

**●  PlanetClass**:  *[PlanetTypes](../enums/planettypes.md)* 

*Defined in models/scan.ts:106*





___

<a id="radius"></a>

### «Optional» Radius

**●  Radius**:  *`number`* 

*Defined in models/scan.ts:98*





___

<a id="reservelevel"></a>

### «Optional» ReserveLevel

**●  ReserveLevel**:  *"Pristine"⎮"Major"⎮"Common"⎮"Low"⎮"Depleted"* 

*Defined in models/scan.ts:118*





___

<a id="rings"></a>

### «Optional» Rings

**●  Rings**:  *`object`[]* 

*Defined in models/scan.ts:82*





___

<a id="rotationperiod"></a>

### «Optional» RotationPeriod

**●  RotationPeriod**:  *`number`* 

*Defined in models/scan.ts:79*





___

<a id="scantype"></a>

###  ScanType

**●  ScanType**:  *"Basic"⎮"Detailed"⎮"NavBeacon"⎮"NavBeaconDetail"* 

*Defined in models/scan.ts:77*





___

<a id="semimajoraxis"></a>

### «Optional» SemiMajorAxis

**●  SemiMajorAxis**:  *`number`* 

*Defined in models/scan.ts:90*





___

<a id="startype"></a>

### «Optional» StarType

**●  StarType**:  *[StarTypes](../enums/startypes.md)* 

*Defined in models/scan.ts:96*





___

<a id="stellarmass"></a>

### «Optional» StellarMass

**●  StellarMass**:  *`number`* 

*Defined in models/scan.ts:97*





___

<a id="surfacegravity"></a>

### «Optional» SurfaceGravity

**●  SurfaceGravity**:  *`number`* 

*Defined in models/scan.ts:114*





___

<a id="surfacepressure"></a>

### «Optional» SurfacePressure

**●  SurfacePressure**:  *`number`* 

*Defined in models/scan.ts:115*





___

<a id="surfacetemperature"></a>

###  SurfaceTemperature

**●  SurfaceTemperature**:  *`number`* 

*Defined in models/scan.ts:76*





___

<a id="terraformstate"></a>

### «Optional» TerraformState

**●  TerraformState**:  *"Terraformable"⎮"Terraforming"⎮"Terraformed"⎮`null`* 

*Defined in models/scan.ts:105*





___

<a id="tidallock"></a>

### «Optional» TidalLock

**●  TidalLock**:  *`boolean`* 

*Defined in models/scan.ts:104*





___

<a id="volcanism"></a>

### «Optional» Volcanism

**●  Volcanism**:  *[VolcanismTypes](../enums/volcanismtypes.md)* 

*Defined in models/scan.ts:113*





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


