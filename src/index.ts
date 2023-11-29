import {AdvancedChallenge, SwingTradingStrategy, Trader} from "./components";
import { ScalpingStrategy } from "./components";
import { BeginnerChallenge } from "./components";
import { PolygonTradingApi } from "./components";
import { AccountFunding } from "./components";
import { overrideConsoleLog } from './utils/overrideConsoleLog';

//For preview
overrideConsoleLog();

// Setup for Lucian, who is just starting the challenge
const strategyLucian = new ScalpingStrategy();
const lucian = new Trader("Lucian", strategyLucian);
const beginnerChallengeLucian = new BeginnerChallenge();
lucian.assignChallenge(beginnerChallengeLucian);

// Setup for Daniel, who has already passed enough trades
const strategyDaniel = new SwingTradingStrategy();
const daniel = new Trader("Daniel", strategyDaniel);
daniel.passedTrades = 12; // Simulating that Daniel has already passed enough trades
const beginnerChallengeDaniel = new AdvancedChallenge();
daniel.assignChallenge(beginnerChallengeDaniel);

// Common trading API and account funding setup
const tradingAPI = new PolygonTradingApi();
const accountFunding = new AccountFunding(tradingAPI);

// Execute trades and check funding eligibility
lucian.executeTrade();
accountFunding.fundAccount(lucian);

daniel.executeTrade();
accountFunding.fundAccount(daniel);
