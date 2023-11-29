import { Trader } from "./Trader";

export abstract class Challenge {
    //Use checkEligibility to log this event, update any relevant system states,
    // and perform any necessary notifications or additional checks.
    abstract checkEligibility(trader: Trader): void;

    //Use isEligible in different parts of the system where you need to know
    // if the trader is eligible without triggering the full process of checkEligibility.
    abstract isEligible(trader: Trader): boolean;
}

export class BeginnerChallenge extends Challenge {
    checkEligibility(trader: Trader): void {
        console.log(`Checking eligibility for Beginner Challenge for trader ${trader.name}...`);
        // Add logic to determine if the trader is eligible
    }

    isEligible(trader: Trader): boolean {
        // For example, a trader is eligible if they have more than 5 successful trades
        return trader.passedTrades > 5;
    }
}

export class AdvancedChallenge extends Challenge {
    checkEligibility(trader: Trader): void {
        console.log(`Checking eligibility for Advanced Challenge for trader ${trader.name}...`);
        // Add logic to determine if the trader is eligible
    }

    isEligible(trader: Trader): boolean {
        // For example, a trader is eligible if they have more than 10 successful trades
        return trader.passedTrades > 10;
    }
}
