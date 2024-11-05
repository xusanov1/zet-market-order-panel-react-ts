import React from 'react';
import { TCardProps } from '@/types';
import './_style.scss';

export const StatCard: React.FC<TCardProps> = ({ title, number, icon, color }) => {
  
  return (
    <div style={{backgroundColor: color}} className="stat_card">
      <h3 className="title">{title}</h3>
      <p className="number">
        {number}
        <sub>count</sub>
      </p>
      <div className="icon_wrapper">
        <span className="icon">{icon}</span>
      </div>
    </div>
  );
};
