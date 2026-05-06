/**
 * @constructor
 */
function ItemFunc(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

ItemFunc.prototype.getInfo = function () {
    return `Item: ${this?.name}, Weight: ${this?.weight}, Rarity: ${this?.rarity}`;
};

ItemFunc.prototype.setWeight = function (newWeight) {
      this.weight = newWeight;
};


/**
 * @constructor
 */
function WeaponFunc(name, weight, rarity, damage, durability) {
    ItemFunc.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
}

// Наследование
WeaponFunc.prototype = Object.create(ItemFunc.prototype);
WeaponFunc.prototype.constructor = WeaponFunc;

WeaponFunc.prototype.use = function () {
    if (this?.durability > 0) {
        this.durability -= 10;
        if (this.durability < 0) this.durability = 0;
    }
};

WeaponFunc.prototype.repair = function () {
    this.durability = 100;
};

WeaponFunc.prototype.getInfo = function () {
    return `${ItemFunc.prototype.getInfo.call(this)}, Damage: ${this?.damage}, Durability: ${this?.durability}`;
};


// ===== ТЕСТ =====
const axe = new WeaponFunc("Battle Axe", 5.0, "legendary", 25, 80);

console.log(axe.getInfo());
axe.use();
console.log("After use:", axe?.durability);
axe.repair();
console.log("After repair:", axe?.durability);