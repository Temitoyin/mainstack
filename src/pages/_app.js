import '@/styles/globals.css'
import localFont from 'next/font/local';
const sohne = localFont({
  src: [
    {
      path: '../../public/fonts/Sohne-Extraleicht.otf',
      weight: '200',
    },
    {
      path: '../../public/fonts/Sohne-Leicht.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/Sohne-Buch.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Sohne-Kraftig.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Sohne-Halbfett.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/Sohne-Dreiviertelfett.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Sohne-Fett.otf',
      weight: '800',
    },
  ],
  variable: '--font-sohne'
});
export default function App({ Component, pageProps }) {
  return <main className={`${sohne.variable} font-sans`}>
    <Component {...pageProps} />
  </main> 
}
