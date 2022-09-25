import Race from './Race';

enum RacePointsLifeMax {
  Elf = 99,
}

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfCreatedInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = RacePointsLifeMax.Elf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    Elf._elfCreatedInstances += 1;
    return Elf._elfCreatedInstances;
  }
}