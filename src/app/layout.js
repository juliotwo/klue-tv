import { fontMontserrat, fontUrbanist } from '../fonts';
import '../styles/globals.css';

export const metadata = {
  title: 'KluTpv',
  description: "It's a card services company page",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${fontUrbanist.variable} ${fontMontserrat.variable} text-primary font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
