import Player from "./Player";

export default class Warrior extends Player {
    constructor(name: string) {
        super(name,120,10); // Appeler le constructeur de la classe parent avec le nom
    }

}