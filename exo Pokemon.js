class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() <= this.luck ;
    }

    attackPokemon (target) {
        let degats = this.attack - target.defense
        if (this.isLucky){
            target.hp = target.hp - degats
            console.log ( this.name + " a endommage " + target.name + " de " + degats + ". Il reste a " + target.name +" "+ target.hp + " hp")
        }
        else {
            console.log ( this.name + " a raté son attaque contre " + target.name + ".")
        }
    
    }
}


let Evoli = new Pokemon ("Evoli", 30, 20, 100, 0.3)

let Tiplouf = new Pokemon ("Tiplouf", 25, 15, 110, 0.4)

while( Evoli.hp>0 && Tiplouf.hp>0 ) {
    Evoli.attackPokemon(Tiplouf)
    if (Tiplouf.hp <= 0) {
        console.log ( " Tiplouf est mort")
        break
    }
    Tiplouf.attackPokemon(Evoli)
    if (Evoli.hp <= 0) {
        console.log ( " Evoli est mort")
        break
    }
}