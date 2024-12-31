import {Lusitana, Montserrat} from 'next/font/google'; // Biblioteca interna de nextjs que nos permita importar cualquier fuente de google fonts

export const montserrat = Montserrat({
  weight: '500', // Pesos de los fuentes
  subsets: ['latin'], // Caracteres en latin
});

export const lusitana = Lusitana({
  weight: '700', // Pesos de los fuentes
  subsets: ['latin'], // Caracteres en latin
});