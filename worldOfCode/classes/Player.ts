export default class Player {
    private _life: number;
    private _initialLife: number;
    private _strength: number;
    private _experience: number;
    private _weapons: string[];
    private _level: number;
    private _name: string;

    constructor(name: string, life : number, strength : number) {
        this._life = life;
        this._initialLife = life;
        this._strength = strength;
        this._experience = 0;
        this._weapons = [];
        this._level = 1;
        this._name = name;
    }

    public attack(target: Player): void {
        const randomValue = Math.floor(Math.random() * 11);
        const totalDamage = this._strength + randomValue;

        console.log(`${this._name} attaque ${target._name}!`);

        target.takeDamage(totalDamage);

        if (target._life <= 0) {
            console.log(`${target._name} est mort!`);
            this._experience += 80;

            if (this._experience > 100) {
                this._level++;
                const remainingExperience = this._experience - 100;
                this._experience = remainingExperience;
            }
            console.log(`Bravo ! ${this._name} a gagné !`);
            process.exit();
        }
    }

    private takeDamage(damage: number): void {
        
        if ((this._life -= damage) <= 0) {
            this._life = 0;
        }
        console.log(`${this._name} a pris ${damage} dégats!`);
    }

    public status(): void {
        console.log(`#############################`);
        console.log(`Joueur: ${this._name}`);
        console.log(`Point de vie: ${this._life}`);
        console.log(`Force: ${this._strength}`);
        console.log(`Experience: ${this._experience}`);
        console.log(`Armes: ${this._weapons}`);
        console.log(`Niveau: ${this._level}`);
        console.log(`#############################`);

    }

    public heal(): void {

        const recoveredValue = Math.floor(Math.random() * 11) + 5; 
        const maxRecoveredValue = this._initialLife - this._life;

        const actualRecoveredValue = Math.min(recoveredValue, maxRecoveredValue);

        this._life += actualRecoveredValue;

        console.log(`${this._name} s'est soigné ${actualRecoveredValue} points de vie.`);
    }
}
