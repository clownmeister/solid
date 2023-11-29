# FTMO Trading Simulation

This project demonstrates a simple trading simulation applying SOLID principles in TypeScript. It simulates traders participating in challenges and being funded based on their performance.

## Setup

1. **Install Dependencies**:
   ```bash
   yarn install
   ```

2. **Start the app**:
   ```bash
   yarn dev
   ```
   
Project should be accessible at http://localhost:5173/

## SOLID Principles in the Project

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **S**ingle Responsibility | A class should have one, and only one, reason to change. | `Trader.ts` handles trader-related properties and actions. `Challenge.ts` manages challenge eligibility and checks. |
| **O**pen/Closed | Classes should be open for extension but closed for modification. | `Challenge.ts` can be extended for different types of challenges (e.g., `BeginnerChallenge`, `AdvancedChallenge`) without modifying the existing code. |
| **L**iskov Substitution | Derived classes must be substitutable for their base classes. | `TradingStrategy.ts` allows different strategies (e.g., `ScalpingStrategy`, `SwingTradingStrategy`) to be used interchangeably. |
| **I**nterface Segregation | Clients should not be forced to depend on interfaces they do not use. | `TradingApi.ts` provides a specific interface (`TradingApi`) that can be implemented for different trading platforms (e.g., `PolygonTradingApi`). |
| **D**ependency Inversion | High-level modules should not depend on low-level modules. Both should depend on abstractions. | `AccountFunding.ts` depends on the abstraction (`TradingApi`) rather than concrete implementations, allowing for flexibility and easier testing. |

## Project Structure

- `src/`
   - `index.ts`: Entry point for the simulation.
   - `/components`
      - `*.ts`
      - `index.ts`: Exports components for easy import.

## Running the Simulation

After compiling the TypeScript files, run the generated JavaScript in the `dist` folder using Node.js to see the simulation in action.

---

This project is a demonstration of SOLID principles in a TypeScript-based trading simulation environment.
