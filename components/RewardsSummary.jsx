/**
 * RewardsSummary Component
 * 
 * Displays a summary table of all customers and their reward points
 * Allows expanding individual customers to see monthly breakdown
 */

 import React, { useState } from 'react';
 import MonthlyBreakdown from './MonthlyBreakdown';
 
 const RewardsSummary = ({ customerRewards }) => {
   // Track which customer rows are expanded
   const [expandedCustomer, setExpandedCustomer] = useState(null);
 
   /**
    * Toggle expansion of customer details
    */
   const handleRowClick = (customerId) => {
     setExpandedCustomer(expandedCustomer === customerId ? null : customerId);
   };
 
   /**
    * Sort customers by total points (descending)
    */
   const sortedRewards = [...customerRewards].sort((a, b) => b.totalPoints - a.totalPoints);
 
   return (
     <div className="rewards-summary">
       <div className="summary-header">
         <h2>Customer Rewards Summary</h2>
         <p className="summary-subtitle">
           Click on any customer to view monthly breakdown
         </p>
       </div>
 
       <div className="table-container">
         <table className="rewards-table">
           <thead>
             <tr>
               <th>Customer Name</th>
               <th>Customer ID</th>
               <th>Total Transactions</th>
               <th>Total Points</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
             {sortedRewards.map((customer) => (
               <React.Fragment key={customer.customerId}>
                 <tr 
                   className={`customer-row ${expandedCustomer === customer.customerId ? 'expanded' : ''}`}
                   onClick={() => handleRowClick(customer.customerId)}
                 >
                   <td className="customer-name">
                     <div className="name-wrapper">
                       <span className="name">{customer.customerName}</span>
                     </div>
                   </td>
                   <td className="customer-id">{customer.customerId}</td>
                   <td className="transaction-count">{customer.transactionCount}</td>
                   <td className="total-points">
                     <span className="points-badge">{customer.totalPoints.toLocaleString()}</span>
                   </td>
                   <td className="expand-icon">
                     <span className={`icon ${expandedCustomer === customer.customerId ? 'rotated' : ''}`}>
                       ▼
                     </span>
                   </td>
                 </tr>
                 {expandedCustomer === customer.customerId && (
                   <tr className="expanded-details">
                     <td colSpan="5">
                       <div className="details-container">
                         <MonthlyBreakdown monthlyPoints={customer.monthlyPoints} />
                       </div>
                     </td>
                   </tr>
                 )}
               </React.Fragment>
             ))}
           </tbody>
         </table>
       </div>
 
       {/* Summary Statistics */}
       <div className="summary-stats">
         <div className="stat-card">
           <div className="stat-label">Total Customers</div>
           <div className="stat-value">{customerRewards.length}</div>
         </div>
         <div className="stat-card">
           <div className="stat-label">Total Points Distributed</div>
           <div className="stat-value">
             {customerRewards.reduce((sum, c) => sum + c.totalPoints, 0).toLocaleString()}
           </div>
         </div>
         <div className="stat-card">
           <div className="stat-label">Total Transactions</div>
           <div className="stat-value">
             {customerRewards.reduce((sum, c) => sum + c.transactionCount, 0)}
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default RewardsSummary;