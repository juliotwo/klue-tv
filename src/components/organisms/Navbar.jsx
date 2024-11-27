'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import map from 'lodash.map';
import { FaHome } from 'react-icons/fa';

import { contactData } from '@/data';
import Container from '../atoms/Container';

const dataHeroNav = [
  {
    href: '/',
    title: 'Principal',
  },
  {
    href: '/#about-us',
    title: 'Sobre nosotros',
  },
  {
    href: '/#how-works',
    title: '¿Cómo funciona?',
  },
  {
    href: '/#pay-methods',
    title: 'Medios de Pago',
  },
  {
    href: '/#contact',
    title: 'Contacto',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='bg-white shadow-md'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/* Logo */}
        <img src='/klu-tpv.png' alt='KluTPV Logo' className='h-8' />
        <nav>
          <ul className='flex space-x-6 text-gray-600'>
            <li>
              <a href='/#about' className='hover:text-black'>
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href='/#products' className='hover:text-black'>
                Productos
              </a>
            </li>
            <li>
              <a href='/#features' className='hover:text-black'>
                Características
              </a>
            </li>
            <li>
              <a href='/#benefits' className='hover:text-black'>
                Beneficios
              </a>
            </li>
            <li>
              <a href='/#contact' className='hover:text-black'>
                Contáctanos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
