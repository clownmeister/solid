import { TradingStrategy } from "./TradingStrategy";
import { Challenge } from "./Challenge";

export class Trader {
    name: string;
    strategy: TradingStrategy;
    currentChallenge: Challenge | null;
    passedTrades: number;

    constructor(name: string, strategy: TradingStrategy) {
        this.name = name;
        this.strategy = strategy;
        this.currentChallenge = null;
        this.passedTrades = 0;
    }

    assignChallenge(challenge: Challenge): void {
        this.currentChallenge = challenge;
    }

    executeTrade(): void {
        if (!this.currentChallenge) {
            console.log(`${this.name} has no challenge assigned.`);
            return;
        }
        console.log(`${this.name} is executing a trade using ${this.strategy.constructor.name}.`);
        this.strategy.executeTrade();

        // Simulate a successful trade for demonstration
        this.passedTrades++;
        this.currentChallenge.checkEligibility(this);
    }
}
