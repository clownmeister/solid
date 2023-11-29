export interface TradingApi {
    connect(): void;
    getMarketData(): void;
}

// Just searched some random api name
export class PolygonTradingApi implements TradingApi {
    connect(): void {
        console.log("Connecting to trading platform...");
    }

    getMarketData(): void {
        console.log("Fetching market data...");
    }
}
