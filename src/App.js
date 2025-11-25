/**
 * App Component - Root component for Customer Rewards Calculator
 * 
 * This application calculates and displays reward points for customers
 * based on their purchase transactions over a three-month period.
 * 
 * Created for Charter AgentOS Team Application
 * Developer: Hadam Dicko
 */

import React from 'react';
import CustomerRewards from './components/CustomerRewards';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomerRewards />
    </div>
  );
}

export default App;
