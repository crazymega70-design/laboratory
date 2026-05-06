/**
 * Класс Item - базовый предмет
 */
class Item {
    /**
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /** 
     * @returns {string}
     */
    getInfo() {
        return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }

    /**
     * @param {number} newWeight
     */
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

/**
 * Класс Weapon - наследуется от Item
 */
class Weapon extends Item {
    /**
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     * @param {number} damage
     * @param {number} durability
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Использовать оружие
     */
    use() {
        if (this.durability > 0) {
            this.durability -= 10;
            if (this.durability < 0) this.durability = 0;
        }
    }

    /**
     * Починить оружие
     */
    repair() {
        this.durability = 100;
    }

    /**
     * @returns {string}
     */
    getInfo() {
        return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
}


// ===== ТЕСТ =====
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());

sword.setWeight(4.0);
console.log("Updated weight:", sword.weight);

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());

bow.use();
console.log("Durability after use:", bow.durability);

bow.repair();
console.log("Durability after repair:", bow.durability);