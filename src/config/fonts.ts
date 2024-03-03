import { Nunito, Poppins, Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700', '800', '900'],
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '1000'],
});

export { nunito, poppins, roboto };
