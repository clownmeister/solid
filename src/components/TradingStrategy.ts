export interface TradingStrategy {
    executeTrade(): void;
}

export class ScalpingStrategy implements TradingStrategy {
    executeTrade(): void {
        console.log("Executing scalping trade...");
    }
}

export class SwingTradingStrategy implements TradingStrategy {
    executeTrade(): void {
        console.log("Executing swing trade...");
    }
}
