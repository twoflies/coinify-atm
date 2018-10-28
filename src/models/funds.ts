export class Funds {
    public constructor(init?:Partial<Funds>) {
        Object.assign(this, init);
    }

    notes1000: number = 0;

    notes500: number = 0;

    notes200: number = 0;

    notes100: number = 0;

    notes50: number = 0;

    coins20: number = 0;

    coins10: number = 0;

    coins5: number = 0;

    coins2: number = 0;

    coins1: number = 0;

    public add(funds: Funds): void {
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

    public subtract(funds: Funds): void {
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