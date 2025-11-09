class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateBonus() {
        throw new Error("Method 'calculateBonus' harus diimplementasikan");
    }
}

class PermanentEmployee extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    calculateBonus() {
        return this.salary * 0.10; 
    }
}

class ContractEmployee extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    calculateBonus() {
        return this.salary * 0.05; 
    }
}

const budi = new PermanentEmployee("Budi", 8000000);
const sita = new ContractEmployee("Sita", 6000000);

console.log("Daftar Bonus Karyawan:");
console.log("----------------------");
console.log(`${budi.name} (Karyawan Tetap)`);
console.log(`Gaji: Rp ${budi.salary.toLocaleString()}`);
console.log(`Bonus: Rp ${budi.calculateBonus().toLocaleString()}`);
console.log();
console.log(`${sita.name} (Karyawan Kontrak)`);
console.log(`Gaji: Rp ${sita.salary.toLocaleString()}`);
console.log(`Bonus: Rp ${sita.calculateBonus().toLocaleString()}`);

const totalBonus = budi.calculateBonus() + sita.calculateBonus();
console.log("\nTotal Bonus Keseluruhan: Rp " + totalBonus.toLocaleString());