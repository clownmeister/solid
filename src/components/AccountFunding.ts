import { Trader } from "./Trader";
import {TradingApi} from "./TradingApi";

export class AccountFunding {
    private tradingAPI: TradingApi;

    constructor(tradingAPI: TradingApi) {
        this.tradingAPI = tradingAPI;
    }

    fundAccount(trader: Trader): void {
        if (trader.currentChallenge && trader.currentChallenge.isEligible(trader)) {
            this.tradingAPI.connect();
            console.log(`Funding account for trader ${trader.name}...`);
        } else {
            console.log(`Trader ${trader.name} is not eligible for funding.`);
        }
    }
}
