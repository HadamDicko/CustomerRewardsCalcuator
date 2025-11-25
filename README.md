# Customer Rewards Calculator

A React application that calculates and displays customer reward points based on purchase transactions over a three-month period.

**Developed by:** Hadam Dicko  
**For:** Charter Team Application  
**Date:** November 2024

---

## Table of Contents

- [Overview](#overview)
- [Business Requirements](#business-requirements)
- [Technical Implementation](#technical-implementation)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Key Features](#key-features)
- [Design Decisions](#design-decisions)
- [Testing Approach](#testing-approach)
- [Future Enhancements](#future-enhancements)

---
<img width="3360" height="2100" alt="Screenshot 2025-11-25 at 12 00 44 PM" src="https://github.com/user-attachments/assets/d974fcfd-99d7-4380-886f-b42ee926cd1b" />

<img width="3354" height="1842" alt="Screenshot 2025-11-25 at 12 00 54 PM" src="https://github.com/user-attachments/assets/0a0d9655-f790-4418-a423-2c8e25b0bcdb" />

## Overview

This application demonstrates a customer rewards program where points are awarded based on purchase amounts. The system tracks transactions across multiple customers over a three-month period and provides both aggregate and detailed views of earned rewards.

### Rewards Calculation Logic

- **2 points** for every dollar spent over $100
- **1 point** for every dollar spent between $50 and $100
- **0 points** for purchases under $50

**Example Calculation:**
```
Purchase Amount: $120
- $0 to $50: 0 points
- $50 to $100: 50 × 1 = 50 points
- $100 to $120: 20 × 2 = 40 points
Total Points: 90 points
```

---

## Requirements

The application fulfills the following requirements:

1. Calculate reward points for each customer transaction
2. Display points earned per month for each customer
3. Display total points earned across all months
4. Simulate asynchronous API data fetching
5. Built with React JS (no TypeScript)
6. No Redux implementation
7. Comprehensive dataset demonstrating edge cases
8. Professional code quality and documentation

---

## Implementation

### Technology Stack

- **Framework:** React 18.3.1
- **Language:** JavaScript (ES6+)
- **Styling:** Pure CSS with CSS Variables
- **Build Tool:** Create React App
- **Version Control:** Git

### Key Technologies Used

- **React Hooks:** `useState`, `useEffect` for state management
- **Async/Await:** For simulated API calls
- **ES6+ Features:** Arrow functions, destructuring, template literals, spread operator
- **CSS Grid & Flexbox:** For responsive layouts
- **CSS Animations:** For smooth transitions and loading states

---

## Project Structure

```
rewards-calculator/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CustomerRewards.jsx      # Main container component
│   │   ├── RewardsSummary.jsx       # Summary table component
│   │   └── MonthlyBreakdown.jsx     # Monthly detail component
│   ├── data/
│   │   └── mockData.js              # Transaction dataset
│   ├── services/
│   │   └── rewardsService.js        # API simulation layer
│   ├── utils/
│   │   └── calculations.js          # Points calculation logic
│   ├── App.js                       # Root component
│   ├── App.css                      # Main styles
│   ├── index.js                     # Application entry point
│   └── index.css                    # Global styles
├── package.json
└── README.md
```

### Component Architecture

```
App
└── CustomerRewards (Smart Component)
    └── RewardsSummary
        └── MonthlyBreakdown (per customer)
```

**Component Responsibilities:**

- **CustomerRewards:** Data fetching, loading/error states, orchestration
- **RewardsSummary:** Display customer list, handle row expansion, summary statistics
- **MonthlyBreakdown:** Show detailed monthly point breakdown for individual customers

---

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd rewards-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm --version
   node --version
   ```

---

## ▶ Running the Application

### Development Mode

```bash
npm start
```

- Opens browser at `http://localhost:3000`
- Hot-reloading enabled for development
- Shows initial loading state (simulated 1.8s API call)

### Production Build

```bash
npm run build
```

Creates optimized production build in `build/` directory.

### Running Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

---

## Key Features

### 1. Asynchronous Data Loading

The application simulates real-world API calls using `setTimeout` with a 1.5-1.8 second delay:

```javascript
const simulateNetworkDelay = (ms = 1500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
```

This demonstrates proper handling of:
- Loading states with spinner animation
- Error states with retry functionality
- Success states with data rendering

### 2. Comprehensive Dataset

The mock dataset (`mockData.js`) includes **30 transactions** across **6 customers** demonstrating:

- **Edge Case 1:** Purchases exactly at $50 threshold (0 points)
- **Edge Case 2:** Purchases exactly at $100 threshold (50 points)
- **Edge Case 3:** Purchases just over $100 (tests tier 2 calculation)
- **Edge Case 4:** High-value purchases ($250-$300)
- **Edge Case 5:** Low-value purchases under $50 (0 points)
- **Variety:** Different spending patterns per customer

**Customer Profiles:**
- John Smith: High-value, frequent purchaser
- Sarah Johnson: Moderate spender
- Michael Chen: Consistent mid-range buyer
- Emily Davis: Low-value purchaser (tests $0 points)
- Robert Martinez: Occasional high-value buyer
- Lisa Anderson: Threshold-testing purchases

### 3. Interactive UI Features

- **Expandable Rows:** Click any customer to view monthly breakdown
- **Smooth Animations:** Fade-in effects, slide-down transitions
- **Responsive Design:** Works on desktop, tablet, and mobile
- **Loading States:** Professional spinner with descriptive text
- **Error Handling:** Graceful error display with retry button
- **Summary Statistics:** Aggregate totals at bottom of table

### 4. Professional Styling

- **Color Scheme:** Professional blues and grays
- **Typography:** System fonts optimized for readability
- **Spacing System:** Consistent spacing using CSS variables
- **Hover States:** Interactive feedback on clickable elements
- **Accessibility:** Semantic HTML, proper contrast ratios
- **Print-Friendly:** CSS print styles for reports

### 5. Code Quality

- **Modular Architecture:** Separation of concerns (data, logic, UI, services)
- **Comprehensive Comments:** Every file includes purpose documentation
- **Reusable Functions:** DRY principles throughout
- **Error Handling:** Try-catch blocks in async operations
- **Consistent Naming:** Clear, descriptive variable and function names

---

## Design Decisions

### Why Pure CSS Over a Framework?

**Decision:** Use vanilla CSS with CSS Variables instead of Tailwind/Material-UI

**Rationale:**
- Demonstrates understanding of CSS fundamentals
- No external dependencies beyond React
- Full control over styling without learning curve
- Lightweight bundle size
- Shows ability to create professional UIs from scratch

### Why No Redux?

**Decision:** Use React's built-in state management (useState)

**Rationale:**
- Application state is simple and localized
- Redux would add unnecessary complexity for this scope
- Demonstrates understanding of when Redux is/isn't needed
- Follows requirement specification

### Component Structure

**Decision:** Three-layer component hierarchy

**Rationale:**
- **CustomerRewards (Smart):** Handles data fetching and business logic
- **RewardsSummary (Presentation):** Displays data, manages UI interactions
- **MonthlyBreakdown (Presentation):** Focused, reusable display component
- Clear separation of concerns
- Easy to test and maintain

### Calculation Logic Placement

**Decision:** Separate `utils/calculations.js` file

**Rationale:**
- Pure functions, easy to test independently
- Reusable across components
- Business logic separated from UI logic
- Could be easily unit tested (not implemented but designed for testability)

### Service Layer Architecture

**Decision:** Dedicated `services/rewardsService.js` for API simulation

**Rationale:**
- Mimics real-world API integration patterns
- Easy to swap with real API calls later
- Centralizes data fetching logic
- Demonstrates understanding of API patterns

---

## Testing Approach

While unit tests are not implemented in this submission, the code is structured for testability:

### Testable Components

**calculations.js:**
```javascript
// Easy to test - pure functions
describe('calculatePoints', () => {
  test('returns 0 for purchases under $50', () => {
    expect(calculatePoints(45)).toBe(0);
  });
  
  test('returns 90 for $120 purchase', () => {
    expect(calculatePoints(120)).toBe(90);
  });
});
```

**rewardsService.js:**
```javascript
// Can be tested with mocked delays
describe('fetchCustomerRewards', () => {
  test('returns customer rewards after delay', async () => {
    const rewards = await fetchCustomerRewards();
    expect(rewards).toHaveLength(6);
  });
});
```

**Components:**
```javascript
// Can be tested with React Testing Library
describe('RewardsSummary', () => {
  test('renders all customers', () => {
    render(<RewardsSummary customerRewards={mockData} />);
    expect(screen.getByText('John Smith')).toBeInTheDocument();
  });
});
```

---

## Future Enhancements

If this were a production application, I would consider:

### Technical Improvements

1. **Unit Testing**
   - Jest for utility functions
   - React Testing Library for components
   - Aim for >80% code coverage

2. **TypeScript**
   - Add type safety
   - Better IDE autocomplete
   - Catch errors at compile time

3. **State Management**
   - Consider Redux/Context for larger scale
   - Add caching layer for API responses

4. **Performance Optimization**
   - Implement React.memo for expensive renders
   - Virtualize long customer lists
   - Code splitting for faster initial load

5. **Accessibility**
   - Add ARIA labels
   - Keyboard navigation for expandable rows
   - Screen reader testing

### Feature Additions

1. **Filtering & Search**
   - Search customers by name/ID
   - Filter by point ranges
   - Date range filtering

2. **Sorting**
   - Sort by name, points, transactions
   - Multi-column sorting

3. **Data Export**
   - Export to CSV/PDF
   - Print-optimized reports

4. **Charts & Visualizations**
   - Line chart showing points over time
   - Bar chart comparing customers
   - Pie chart for transaction distribution

5. **Real API Integration**
   - Connect to actual backend
   - Implement authentication
   - Add error retry logic with exponential backoff

6. **User Preferences**
   - Save sort preferences
   - Customizable display options
   - Dark mode toggle

---

## 👨‍💻 About the Developer

**Hadam Dicko**  
Computer Science Student | Army Reserve First-Line Leader  
Southern Illinois University Edwardsville - Class of 2025

**Contact:**
- Email: dickohadam@gmail.com
- LinkedIn: [linkedin.com/in/hadam-dicko](https://www.linkedin.com/in/hadam-dicko)
- GitHub: [github.com/HadamDicko](https://github.com/HadamDicko)
- Portfolio: [brduhfipruarghtrasb.my.canva.site/hadamdicko](https://brduhfipruarghtrasb.my.canva.site/hadamdicko)

**Technical Background:**
- React, JavaScript, Java, Python, C++
- Experience with Cherwell, ServiceNow
- Security Clearance: Secret Level
- Military Leadership: Property Book Sergeant, 648th RSG

---

## License

This project was created as part of a job application assignment for Charter Communications AgentOS Team.

---

**Last Updated:** November 24, 2024
