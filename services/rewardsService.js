/**
 * Rewards Service - Simulates API calls for fetching transaction data
 * 
 * This service simulates asynchronous API calls with realistic delays
 * to demonstrate handling of loading states and async operations in React.
 */

import { mockTransactions } from '../data/mockData';
import { calculateAllCustomerRewards } from '../utils/calculations';

/**
 * Simulates network delay for API calls
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after the specified delay
 */
const simulateNetworkDelay = (ms = 1500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Fetches all transactions with simulated API delay
 * 
 * In a real application, this would make an HTTP request to:
 * GET /api/transactions
 * 
 * @returns {Promise<Array>} - Promise resolving to array of transactions
 */
export const fetchTransactions = async () => {
  try {
    // Simulate network delay
    await simulateNetworkDelay(1500);

    // In production, this would be:
    // const response = await fetch('/api/transactions');
    // const data = await response.json();
    // return data;

    // For this assignment, return mock data
    return mockTransactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transactions');
  }
};

/**
 * Fetches calculated rewards data for all customers with simulated API delay
 * 
 * In a real application, this calculation might happen on the backend:
 * GET /api/rewards
 * 
 * @returns {Promise<Array>} - Promise resolving to array of customer rewards
 */
export const fetchCustomerRewards = async () => {
  try {
    // Simulate network delay
    await simulateNetworkDelay(1800);

    // Fetch transactions
    const transactions = mockTransactions;

    // Calculate rewards for all customers
    // In production, this calculation would likely happen on the backend
    const rewards = calculateAllCustomerRewards(transactions);

    return rewards;
  } catch (error) {
    console.error('Error fetching customer rewards:', error);
    throw new Error('Failed to fetch customer rewards');
  }
};

/**
 * Fetches rewards for a specific customer with simulated API delay
 * 
 * In a real application:
 * GET /api/rewards/:customerId
 * 
 * @param {string} customerId - Customer ID to fetch rewards for
 * @returns {Promise<Object>} - Promise resolving to customer reward data
 */
export const fetchCustomerRewardsById = async (customerId) => {
  try {
    // Simulate network delay
    await simulateNetworkDelay(1000);

    // Get all rewards and filter for specific customer
    const allRewards = await fetchCustomerRewards();
    const customerReward = allRewards.find(r => r.customerId === customerId);

    if (!customerReward) {
      throw new Error(`Customer ${customerId} not found`);
    }

    return customerReward;
  } catch (error) {
    console.error('Error fetching customer rewards by ID:', error);
    throw error;
  }
};

/**
 * Fetches transaction details with simulated API delay
 * 
 * In a real application:
 * GET /api/transactions/:transactionId
 * 
 * @param {number} transactionId - Transaction ID to fetch
 * @returns {Promise<Object>} - Promise resolving to transaction data
 */
export const fetchTransactionById = async (transactionId) => {
  try {
    // Simulate network delay
    await simulateNetworkDelay(800);

    const transaction = mockTransactions.find(t => t.id === transactionId);

    if (!transaction) {
      throw new Error(`Transaction ${transactionId} not found`);
    }

    return transaction;
  } catch (error) {
    console.error('Error fetching transaction by ID:', error);
    throw error;
  }
};
