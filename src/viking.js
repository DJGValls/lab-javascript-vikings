console.log("hello world")

// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name= name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else if(this.health <= 0){ 
            return `${this.name} has died in act of combat`;

        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else if(this.health <= 0){ 
            return `A Saxon has died in combat`;

        }
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let randomNumberOfVikings = Math.floor(Math.random() * this.vikingArmy.length);
        let randomNumberOfSaxons = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[randomNumberOfVikings];
        let randomSaxon = this.saxonArmy[randomNumberOfSaxons];
        let randomSaxonReceiveDamage = randomSaxon.receiveDamage(randomViking.strength);

        if(randomSaxon.health < 1){
            this.saxonArmy.splice(randomNumberOfSaxons, 1);
        }
        return randomSaxonReceiveDamage;
    }

    saxonAttack(){
        let randomNumberOfVikings = Math.floor(Math.random() * this.vikingArmy.length);
        let randomNumberOfSaxons = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = this.vikingArmy[randomNumberOfVikings];
        let randomSaxon = this.saxonArmy[randomNumberOfSaxons];
        let randomVikingReceiveDamage = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health < 1){
            this.vikingArmy.splice(randomNumberOfVikings, 1);
        }
        return randomVikingReceiveDamage;
    }

    showStatus(){

        if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
            return "Vikings and Saxons are still in the thick of battle.";
        }else if(this.saxonArmy.length = []) {
            return "Vikings have won the war of the century!";
        }else if (this.vikingArmy.length = []){
            return "Saxons have fought for their lives and survived another day...";
        }
    }

}
