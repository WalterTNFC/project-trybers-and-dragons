import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _warriorCreatedInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    Warrior._warriorCreatedInstances += 1;
    return Warrior._warriorCreatedInstances;
  }
}