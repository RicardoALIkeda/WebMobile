// components/Navigation.js
import React from 'react';
import Link from 'next/link';
import Menu from './Menu';

export default function Navigation() {
  return (
    <div>
      <header>
        <h1>Lab GamesVR</h1>

      </header>
      <div className="content">
        {/* Place the existing content or components here */}
        {/* For example, you can include <Menu /> and other components */}
        <Menu />
      </div>
    </div>
  );
}
