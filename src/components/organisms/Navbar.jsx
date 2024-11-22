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
  }
]

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full bg-primary">
        <Container className="flex justify-between h-14 sm:h-10 items-center">
          <div className="flex flex-row w-full xl:w-auto items-center justify-between sm:justify-start gap-8 text-xs">
            <Link href='/' className="text-white flex gap-2 items-center justify-center font-medium">
              <FaHome className='text-xl text-secondary' /> Principal
            </Link>

            <div className='flex flex-col sm:flex-row sm:items-center sm:gap-8'>
              {map(contactData, (item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  target='_blank'
                  rel='nopener noreferrer'
                  className='text-white text-xs flex items-center gap-2'
                >
                  <span className='text-secondary text-lg'>{item.Icon}</span> {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className='items-center justify-center gap-8 text-sm hidden xl:flex'>
            {map(contactData, (item) => (
              <Link
                href={item.href}
                key={item.href}
                target='_blank'
                rel='nopener noreferrer'
                className='text-white text-xs flex items-center gap-2'
              >
                <span className='text-secondary text-lg'>{item.Icon}</span> {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </nav>
      {pathname === '/' && (
        <div className='bg-white h-40 border-b-4 border-secondary'>
          <Container className='h-full w-full flex flex-row items-center justify-between'>
            <Image src='/images/logo.png' alt='Logo' width={300} height={300} />


            <div className='flex-row items-center gap-8 text-sm xl:text-base hidden lg:flex'>
              {map(dataHeroNav, (item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`${pathname === item.href ? 'text-secondary' : 'text-primary'} hover:text-secondary`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navbar;
