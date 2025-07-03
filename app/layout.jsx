import './globals.css';
export const metadata = {
  title: 'TradeX Estimating',
  description: 'Quote, Estimate, Schedule and Track',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
