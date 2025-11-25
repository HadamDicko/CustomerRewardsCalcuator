/**
 * Rewards Points Calculation Utilities
 * 
 * Business Rules:
 * - A customer receives 2 points for every dollar spent over $100 in each transaction
 * - Plus 1 point for every dollar spent between $50 and $100 in each transaction
 * - Transactions under $50 earn 0 points
 * 
 * Example: $120 purchase
 * - $0-$50: 0 points
 * - $50-$100: 50 × 1 = 50 points
 * - $100-$120: 20 × 2 = 40 points
 * - Total: 90 points
 */

/**
 * Calculate reward points for a single transaction
 * @param {number} amount - Transaction amount in dollars
 * @returns {number} - Points earned for this transaction
 */
export const calculatePoints = (amount) => {
  let points = 0;

  // No points for purchases under $50
  if (amount < 50) {
    return 0;
  }

  // Calculate points for amount between $50 and $100
  // 1 point per dollar
  if (amount > 50) {
    const tier1Amount = Math.min(amount, 100) - 50;
    points += tier1Amount * 1;
  }

  // Calculate points for amount over $100
  // 2 points per dollar
  if (amount > 100) {
    const tier2Amount = amount - 100;
    points += tier2Amount * 2;
  }

  // Round to nearest integer to handle any floating point precision issues
  return Math.round(points);
};

/**
 * Calculate total points for an array of transactions
 * @param {Array} transactions - Array of transaction objects with amount property
 * @returns {number} - Total points earned
 */
export const calculateTotalPoints = (transactions) => {
  return transactions.reduce((total, transaction) => {
    return total + calculatePoints(transaction.amount);
  }, 0);
};

/**
 * Group transactions by month and calculate points for each month
 * @param {Array} transactions - Array of transaction objects
 * @returns {Object} - Object with month keys and point totals
 */
export const calculateMonthlyPoints = (transactions) => {
  const monthlyPoints = {};

  transactions.forEach(transaction => {
    const date = new Date(transaction.transactionDate);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!monthlyPoints[monthKey]) {
      monthlyPoints[monthKey] = {
        month: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
        points: 0,
        transactionCount: 0
      };
    }

    monthlyPoints[monthKey].points += calculatePoints(transaction.amount);
    monthlyPoints[monthKey].transactionCount += 1;
  });

  return monthlyPoints;
};

/**
 * Calculate rewards summary for a specific customer
 * @param {Array} transactions - Array of all transactions
 * @param {string} customerId - Customer ID to filter by
 * @returns {Object} - Object containing monthly breakdown and total points
 */
export const calculateCustomerRewards = (transactions, customerId) => {
  const customerTransactions = transactions.filter(
    t => t.customerId === customerId
  );

  const monthlyPoints = calculateMonthlyPoints(customerTransactions);
  const totalPoints = calculateTotalPoints(customerTransactions);

  return {
    customerId,
    customerName: customerTransactions[0]?.customerName || 'Unknown',
    monthlyPoints,
    totalPoints,
    transactionCount: customerTransactions.length
  };
};

/**
 * Calculate rewards for all customers
 * @param {Array} transactions - Array of all transactions
 * @returns {Array} - Array of customer reward objects
 */
export const calculateAllCustomerRewards = (transactions) => {
  // Get unique customer IDs
  const customerIds = [...new Set(transactions.map(t => t.customerId))];

  // Calculate rewards for each customer
  return customerIds.map(customerId => 
    calculateCustomerRewards(transactions, customerId)
  );
};
