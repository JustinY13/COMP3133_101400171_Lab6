export class Customer {
    private firstName: string;
    private lastName: string;
    private _age: number;
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    public greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    public GetAge(): number {
        console.log(`Age: ${this._age}`);
        return this._age;
    } 
}
let customer = new Customer("John", "Smith", 25);
customer.greeter()
customer.GetAge();