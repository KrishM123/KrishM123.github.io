'use client';
import './globals.css'
import { metadata } from './metadata';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
