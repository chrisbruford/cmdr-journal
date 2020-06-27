import { JournalEvent } from "./journal-event.model";
import { StarLuminosityClasses } from "../enums/star-luminosity-classes.enum";
import { StarTypes } from "../enums/star-types.enum";
import { PlanetTypes } from "../enums/planet-types.enum";
import { AtmosphereTypes } from "../enums/atmosphere-types.enum";
import { VolcanismTypes } from "../enums/volcanism-types.enum";
import { JournalEvents } from "../enums/journal-events.enum";

/**
 * When Written: basic or detailed discovery scan of a star, planet or moon
 *
 * This is also generated when scanning a navigation beacon in a populated system, to record info about all the bodies in the system
 *
 * lots of these properties are optional depending on object scanned
 *
 * Note that a basic scan (ie without having a Detailed Surface Scanner installed) will now save a reduced amount of information.
 *
 * A basic scan on a planet will include body name, planet class, orbital data, rotation period, mass, radius, surface gravity; but will exclude tidal lock, terraform state, atmosphere, volcanism, surface pressure and temperature, available materials, and details of rings. The info for a star will be largely the same whether a basic scanner or detailed scanner is used.
 *
 * The "Parents" property provides the body's hierarchical position within the system: in the example below, "Procyon B 3 a" is a moon of a planet (body 11), which is orbiting a star (body 2), which is has a parent body that's a Barycentre
 *
 * ## Example
 * ```javascript
 * {
 *     "timestamp":"2018-02-02T10:43:05Z",
 *     "event":"Scan",
 *     "ScanType":"NavBeaconDetail",
 *     "BodyName":"Procyon B 3 a",
 *     "BodyID":12,
 *     "Parents":[ {"Planet":11}, {"Star":2}, {"Null":0} ],
 *     "DistanceFromArrivalLS":10048.152344,
 *     "TidalLock":true,
 *     "TerraformState":"",
 *     "PlanetClass":"Rocky body",
 *     "Atmosphere":"",
 *     "AtmosphereType":"None",
 *     "Volcanism":"",
 *     "MassEM":0.025342,
 *     "Radius":2011975.250000,
 *     "SurfaceGravity":2.495225,
 *     "SurfaceTemperature":318.448792,
 *     "SurfacePressure":0.000000,
 *     "Landable":true,
 *     "Materials":[
 *         { "Name":"iron", "Percent":19.315084 },
 *         { "Name":"sulphur", "Percent":17.321133 },
 *         { "Name":"nickel", "Percent":14.609120 },
 *         { "Name":"carbon", "Percent":14.565277 },
 *         { "Name":"phosphorus", "Percent":9.324941 },
 *         { "Name":"chromium", "Percent":8.686635 },
 *         { "Name":"manganese", "Percent":7.976933 },
 *         { "Name":"zinc", "Percent":5.249117 },
 *         { "Name":"tin", "Percent":1.200338 },
 *         { "Name":"tungsten", "Percent":1.060592 },
 *         { "Name":"technetium", "Percent":0.690823 }
 *     ],
 *     "Composition":{
 *         "Ice":0.000000,
 *         "Rock":0.861282,
 *         "Metal":0.138718
 *     },
 *     "SemiMajorAxis":89655728.000000,
 *     "Eccentricity":0.000000,
 *     "OrbitalInclination":4.566576,
 *     "Periapsis":309.656799,
 *     "OrbitalPeriod":344902.937500,
 *     "RotationPeriod":352425.468750,
 *     "AxialTilt":0.479157
 * }
 * ```
 */

export class Scan extends JournalEvent {
  event: JournalEvents.scan;
  Bodyname: string;
  BodyID: number;
  SystemAddress: number;
  StarSystem: string;
  DistanceFromArrivalLS: number;
  SurfaceTemperature: number;
  ScanType: "Basic" | "Detailed" | "NavBeacon" | "NavBeaconDetail" | "AutoScan";
  WasDiscovered: boolean;
  WasMapped: boolean;
  //if rotating
  RotationPeriod?: number;
  AxialTilt?: number;
  //if planet/star has rings
  Rings?: {
    Name: string;
    RingClass: string;
    MassMT: number;
    InnerRad: number;
    OuterRad: number;
  }[];
  //orbital properties (not for star in single star system)
  SemiMajorAxis?: number;
  Eccentricity?: number;
  OrbitalInclination?: number;
  Periapsis?: number;
  OrbitalPeriod?: number;
  //stars
  StarType?: StarTypes;
  /** Star's heat classification 0-9 */
  Subclass: number;
  /** Solar masses */
  StellarMass?: number;
  Radius?: number;
  AbsoluteMagnitude?: number;
  Age_MY?: number;
  Luminosity: StarLuminosityClasses;
  //planets/moons
  Parents?: { BodyType: string; BodyID: number }[];
  TidalLock?: boolean;
  TerraformState?: "Terraformable" | "Terraforming" | "Terraformed" | null;
  PlanetClass?: PlanetTypes;
  Atmosphere?: AtmosphereTypes;
  AtmosphereType?: string;
  AtmosphereComposition?: {
    Name: string;
    Percent: number;
  }[];
  Volcanism?: VolcanismTypes;
  SurfaceGravity?: number;
  SurfacePressure?: number;
  Landable?: boolean;
  Materials?: { Name: string; Percentage: number }[];
  ReserveLevel?: "Pristine" | "Major" | "Common" | "Low" | "Depleted"; //if rings present
  Composition: {
    Ice: number;
    Rock: number;
    Metal: number;
  };
}
