import Player from "./Player";

export default class Mage extends Player {
    constructor(name: string) {
        super(name,100,20); // Appeler le constructeur de la classe parent avec le nom
    }

}