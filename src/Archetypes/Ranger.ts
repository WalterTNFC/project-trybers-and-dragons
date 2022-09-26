import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangerCreatedInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Ranger._rangerCreatedInstances += 1;
    return Ranger._rangerCreatedInstances;
  }
}