import { Expose } from "class-transformer";

export class Funds {
    public constructor(init?: Partial<Funds>) {
        Object.assign(this, init);
    }

    @Expose({ name: "notes1000" })
    private _notes1000: number = 0;

    @Expose({ name: "notes500" })
    private _notes500: number = 0;

    @Expose({ name: "notes200" })
    private _notes200: number = 0;

    @Expose({ name: "notes100" })
    private _notes100: number = 0;

    @Expose({ name: "notes50" })
    private _notes50: number = 0;

    @Expose({ name: "coins20" })
    private _coins20: number = 0;

    @Expose({ name: "coins10" })
    private _coins10: number = 0;

    @Expose({ name: "coins5" })
    private _coins5: number = 0;

    @Expose({ name: "coins2" })
    private _coins2: number = 0;

    @Expose({ name: "coins1" })
    private _coins1: number = 0;

    public get notes1000(): number {
        return this._notes1000;
    }

    public set notes1000(notes1000: number) {
        this._notes1000 = Math.max(notes1000, 0);
    }

    public get notes500(): number {
        return this._notes500;
    }

    public set notes500(notes500: number) {
        this._notes500 = Math.max(notes500, 0);
    }

    public get notes200(): number {
        return this._notes200;
    }

    public set notes200(notes200: number) {
        this._notes200 = Math.max(notes200, 0);
    }

    public get notes100(): number {
        return this._notes100;
    }

    public set notes100(notes100: number) {
        this._notes100 = Math.max(notes100, 0);
    }

    public get notes50(): number {
        return this._notes50;
    }

    public set notes50(notes50: number) {
        this._notes50 = Math.max(notes50, 0);
    }

    public get coins20(): number {
        return this._coins20;
    }

    public set coins20(coins20: number) {
        this._coins20 = Math.max(coins20, 0);
    }

    public get coins10(): number {
        return this._coins10;
    }

    public set coins10(coins10: number) {
        this._coins10 = Math.max(coins10, 0);
    }

    public get coins5(): number {
        return this._coins5;
    }

    public set coins5(coins5: number) {
        this._coins5 = Math.max(coins5, 0);
    }

    public get coins2(): number {
        return this._coins2;
    }

    public set coins2(coins2: number) {
        this._coins2 = Math.max(coins2, 0);
    }

    public get coins1(): number {
        return this._coins1;
    }

    public set coins1(coins1: number) {
        this._coins1 = Math.max(coins1, 0);
    }

    public add(values: Partial<Funds>): void {
        const funds = new Funds(values);

        this.notes1000 += funds.notes1000;
        this.notes500 += funds.notes500;
        this.notes200 += funds.notes200;
        this.notes100 += funds.notes100;
        this.notes50 += funds.notes50;
        //
        this.coins20 += funds.coins20;
        this.coins10 += funds.coins10;
        this.coins5 += funds.coins5;
        this.coins2 += funds.coins2;
        this.coins1 += funds.coins1;
    }

    public subtract(values: Partial<Funds>): void {
       const funds = new Funds(values);
        
        this.notes1000 -= funds.notes1000;
        this.notes500 -= funds.notes500;
        this.notes200 -= funds.notes200;
        this.notes100 -= funds.notes100;
        this.notes50 -= funds.notes50;
        //
        this.coins20 -= funds.coins20;
        this.coins10 -= funds.coins10;
        this.coins5 -= funds.coins5;
        this.coins2 -= funds.coins2;
        this.coins1 -= funds.coins1;
    }

    public equals(funds: Partial<Funds>): boolean {
        return (this.notes1000 === funds.notes1000) &&
            (this.notes500 === funds.notes500) &&
            (this.notes200 === funds.notes200) &&
            (this.notes100 === funds.notes100) &&
            (this.notes50 === funds.notes50) &&
            (this.coins20 === funds.coins20) &&
            (this.coins10 === funds.coins10) &&
            (this.coins5 === funds.coins5) &&
            (this.coins2 === funds.coins2) &&
            (this.coins1 === funds.coins1);
    }

    public getTotal(): number {
        return (this.notes1000 * 1000) +
                (this.notes500 * 500) +
                (this.notes200 * 200) + 
                (this.notes100 * 100) +
                (this.notes50 * 50) +
                (this.coins20 * 20) +
                (this.coins10 * 10) +
                (this.coins5 * 5) +
                (this.coins2 * 2) +
                this.coins1;
    }

    public toString(): string {
        const values: string[] = [ 
            `Total: ${this.getTotal()}`,
            `\n\tNotes: ${this.notes1000}x1000, ${this.notes500}x500, ${this.notes200}x200, ${this.notes100}x100, ${this.notes50}x50`,
            `\n\tCoins: ${this.coins20}x20, ${this.coins10}x10, ${this.coins5}x5, ${this.coins2}x2, ${this.coins1}x1` 
        ];

        return values.join('');
    }
}