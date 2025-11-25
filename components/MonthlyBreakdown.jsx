/**
 * MonthlyBreakdown Component
 * 
 * Displays a detailed breakdown of points earned per month for a customer
 */

 import React from 'react';

 const MonthlyBreakdown = ({ monthlyPoints }) => {
   // Convert monthly points object to sorted array
   const monthsArray = Object.entries(monthlyPoints || {})
     .map(([key, data]) => ({
       key,
       ...data
     }))
     .sort((a, b) => a.key.localeCompare(b.key));
 
   if (monthsArray.length === 0) {
     return (
       <div className="monthly-breakdown-empty">
         No monthly data available
       </div>
     );
   }
 
   return (
     <div className="monthly-breakdown">
       <h4>Monthly Breakdown</h4>
       <div className="months-grid">
         {monthsArray.map(({ key, month, points, transactionCount }) => (
           <div key={key} className="month-card">
             <div className="month-header">{month}</div>
             <div className="month-stats">
               <div className="stat">
                 <span className="stat-label">Points</span>
                 <span className="stat-value">{points.toLocaleString()}</span>
               </div>
               <div className="stat">
                 <span className="stat-label">Transactions</span>
                 <span className="stat-value">{transactionCount}</span>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default MonthlyBreakdown;