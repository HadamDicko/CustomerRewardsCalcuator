/**
 * Mock transaction data for rewards calculation
 * 
 * Dataset designed to demonstrate all calculation scenarios:
 * - Transactions below $50 (0 points)
 * - Transactions $50-$100 (1 point per dollar over $50)
 * - Transactions over $100 (2 points per dollar over $100 + 1 point per dollar $50-$100)
 * - Multiple customers across 3 months (September, October, November 2024)
 */

export const mockTransactions = [
  // Customer 1: John Smith - High spender, various transaction amounts
  {
    id: 1,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-09-05',
    amount: 120.00,
    description: 'Electronics Purchase'
  },
  {
    id: 2,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-09-15',
    amount: 75.50,
    description: 'Home Goods'
  },
  {
    id: 3,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-09-28',
    amount: 45.00,
    description: 'Office Supplies'
  },
  {
    id: 4,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-10-10',
    amount: 200.00,
    description: 'Furniture'
  },
  {
    id: 5,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-10-22',
    amount: 89.99,
    description: 'Clothing'
  },
  {
    id: 6,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-11-03',
    amount: 150.00,
    description: 'Electronics'
  },
  {
    id: 7,
    customerId: 'CUST001',
    customerName: 'John Smith',
    transactionDate: '2024-11-20',
    amount: 99.99,
    description: 'Kitchen Appliances'
  },

  // Customer 2: Sarah Johnson - Moderate spender
  {
    id: 8,
    customerId: 'CUST002',
    customerName: 'Sarah Johnson',
    transactionDate: '2024-09-08',
    amount: 65.00,
    description: 'Books'
  },
  {
    id: 9,
    customerId: 'CUST002',
    customerName: 'Sarah Johnson',
    transactionDate: '2024-09-20',
    amount: 130.00,
    description: 'Home Decor'
  },
  {
    id: 10,
    customerId: 'CUST002',
    customerName: 'Sarah Johnson',
    transactionDate: '2024-10-05',
    amount: 25.00,
    description: 'Groceries'
  },
  {
    id: 11,
    customerId: 'CUST002',
    customerName: 'Sarah Johnson',
    transactionDate: '2024-10-18',
    amount: 180.00,
    description: 'Electronics'
  },
  {
    id: 12,
    customerId: 'CUST002',
    customerName: 'Sarah Johnson',
    transactionDate: '2024-11-12',
    amount: 50.00,
    description: 'Clothing'
  },
  {
    id: 13,
    customerId: 'CUST002',
    customerName: 'Sarah Johnson',
    transactionDate: '2024-11-25',
    amount: 110.00,
    description: 'Holiday Shopping'
  },

  // Customer 3: Michael Chen - Consistent mid-range spender
  {
    id: 14,
    customerId: 'CUST003',
    customerName: 'Michael Chen',
    transactionDate: '2024-09-12',
    amount: 95.00,
    description: 'Sports Equipment'
  },
  {
    id: 15,
    customerId: 'CUST003',
    customerName: 'Michael Chen',
    transactionDate: '2024-09-25',
    amount: 105.00,
    description: 'Tools'
  },
  {
    id: 16,
    customerId: 'CUST003',
    customerName: 'Michael Chen',
    transactionDate: '2024-10-08',
    amount: 88.50,
    description: 'Garden Supplies'
  },
  {
    id: 17,
    customerId: 'CUST003',
    customerName: 'Michael Chen',
    transactionDate: '2024-10-28',
    amount: 102.00,
    description: 'Automotive'
  },
  {
    id: 18,
    customerId: 'CUST003',
    customerName: 'Michael Chen',
    transactionDate: '2024-11-15',
    amount: 92.00,
    description: 'Electronics Accessories'
  },

  // Customer 4: Emily Davis - Low spender (testing edge cases)
  {
    id: 19,
    customerId: 'CUST004',
    customerName: 'Emily Davis',
    transactionDate: '2024-09-18',
    amount: 30.00,
    description: 'Books'
  },
  {
    id: 20,
    customerId: 'CUST004',
    customerName: 'Emily Davis',
    transactionDate: '2024-09-30',
    amount: 49.99,
    description: 'Clothing'
  },
  {
    id: 21,
    customerId: 'CUST004',
    customerName: 'Emily Davis',
    transactionDate: '2024-10-12',
    amount: 55.00,
    description: 'Home Goods'
  },
  {
    id: 22,
    customerId: 'CUST004',
    customerName: 'Emily Davis',
    transactionDate: '2024-10-25',
    amount: 40.00,
    description: 'Office Supplies'
  },
  {
    id: 23,
    customerId: 'CUST004',
    customerName: 'Emily Davis',
    transactionDate: '2024-11-08',
    amount: 50.00,
    description: 'Kitchen Items'
  },
  {
    id: 24,
    customerId: 'CUST004',
    customerName: 'Emily Davis',
    transactionDate: '2024-11-22',
    amount: 35.00,
    description: 'Accessories'
  },

  // Customer 5: Robert Martinez - High value occasional buyer
  {
    id: 25,
    customerId: 'CUST005',
    customerName: 'Robert Martinez',
    transactionDate: '2024-09-02',
    amount: 250.00,
    description: 'TV Purchase'
  },
  {
    id: 26,
    customerId: 'CUST005',
    customerName: 'Robert Martinez',
    transactionDate: '2024-10-15',
    amount: 175.00,
    description: 'Computer Parts'
  },
  {
    id: 27,
    customerId: 'CUST005',
    customerName: 'Robert Martinez',
    transactionDate: '2024-11-10',
    amount: 300.00,
    description: 'Gaming Console Bundle'
  },

  // Customer 6: Lisa Anderson - Right at threshold values
  {
    id: 28,
    customerId: 'CUST006',
    customerName: 'Lisa Anderson',
    transactionDate: '2024-09-07',
    amount: 50.00,
    description: 'Exact $50 purchase'
  },
  {
    id: 29,
    customerId: 'CUST006',
    customerName: 'Lisa Anderson',
    transactionDate: '2024-10-07',
    amount: 100.00,
    description: 'Exact $100 purchase'
  },
  {
    id: 30,
    customerId: 'CUST006',
    customerName: 'Lisa Anderson',
    transactionDate: '2024-11-07',
    amount: 100.01,
    description: 'Just over $100 purchase'
  }
];

/**
 * Returns the month name from a date string
 */
export const getMonthName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
};

/**
 * Returns the month key (YYYY-MM) from a date string
 */
export const getMonthKey = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
};
