/**
 * CustomerRewards Component
 * 
 * Main component that:
 * - Fetches customer rewards data asynchronously
 * - Handles loading and error states
 * - Displays rewards summary and monthly breakdown
 */

 import React, { useState, useEffect } from 'react';
 import { fetchCustomerRewards } from '../services/rewardsService';
 import RewardsSummary from './RewardsSummary';
 
 const CustomerRewards = () => {
   // Component state
   const [rewards, setRewards] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
 
   /**
    * Fetch rewards data on component mount
    * Simulates an API call with loading and error handling
    */
   useEffect(() => {
     const loadRewards = async () => {
       try {
         setLoading(true);
         setError(null);
 
         // Simulate API call to fetch rewards data
         const data = await fetchCustomerRewards();
         
         setRewards(data);
       } catch (err) {
         setError(err.message || 'Failed to load rewards data');
         console.error('Error loading rewards:', err);
       } finally {
         setLoading(false);
       }
     };
 
     loadRewards();
   }, []); // Empty dependency array means this runs once on mount
 
   /**
    * Retry loading data after an error
    */
   const handleRetry = () => {
     setError(null);
     setLoading(true);
     
     // Re-trigger the effect by forcing a re-render
     fetchCustomerRewards()
       .then(data => {
         setRewards(data);
         setLoading(false);
       })
       .catch(err => {
         setError(err.message || 'Failed to load rewards data');
         setLoading(false);
       });
   };
 
   /**
    * Render loading state
    */
   if (loading) {
     return (
       <div className="rewards-container">
         <div className="loading-state">
           <div className="spinner"></div>
           <p>Loading rewards data...</p>
           <small>Fetching customer transactions and calculating points</small>
         </div>
       </div>
     );
   }
 
   /**
    * Render error state
    */
   if (error) {
     return (
       <div className="rewards-container">
         <div className="error-state">
           <div className="error-icon">⚠️</div>
           <h3>Unable to Load Rewards</h3>
           <p>{error}</p>
           <button onClick={handleRetry} className="retry-button">
             Try Again
           </button>
         </div>
       </div>
     );
   }
 
   /**
    * Render empty state
    */
   if (rewards.length === 0) {
     return (
       <div className="rewards-container">
         <div className="empty-state">
           <div className="empty-icon">📊</div>
           <h3>No Rewards Data</h3>
           <p>There are no customer transactions to display.</p>
         </div>
       </div>
     );
   }
 
   /**
    * Render success state with rewards data
    */
   return (
     <div className="rewards-container">
       <header className="app-header">
         <h1>Customer Rewards Program</h1>
         <p className="app-description">
           Track reward points earned by customers over a three-month period
         </p>
         <div className="rules-info">
           <span className="rule">2 pts/$1 over $100</span>
           <span className="separator">•</span>
           <span className="rule">1 pt/$1 between $50-$100</span>
           <span className="separator">•</span>
           <span className="rule">0 pts under $50</span>
         </div>
       </header>
 
       <main>
         <RewardsSummary customerRewards={rewards} />
       </main>
 
       <footer className="app-footer">
         <p>Data represents transactions from September 2024 - November 2024</p>
       </footer>
     </div>
   );
 };
 
 export default CustomerRewards;