import map from 'lodash.map';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../atoms/Container';
import { footerData, contactData } from '@/data';

const Footer = () => {
  return (
    <>
      <div className='bg-white pt-10 pb-20 border-t border-gray-300'>
        <Container className='flex flex-col'>
          <Image src='/images/logo.png' alt='Logo' width={200} height={200} />
          <p className='text-sm font-light'>
            Tintoreto 92, Oficina 201, Col. Ciudad de los Deportes, Del. Benito
            Juárez, C.P. 03710, Ciudad de México, CDMX.
          </p>

          <div className='mt-4'>
            {map(contactData, (item) => (
              <Link
                href={item.href}
                key={item.href}
                target='_blank'
                rel='nopener noreferrer'
                className='text-xs font-medium flex items-center gap-3'
              >
                <span className='text-secondary text-sm'>{item.Icon}</span>{' '}
                {item.title}
              </Link>
            ))}
          </div>
          <div className='flex items-center justify-between w-full mt-4'>
            <div className='flex gap-5 items-center'>
              <Link
                target="_blank"
                href="https://www.facebook.com/cerrajeriamarijooficial?mibextid=LQQJ4d"
                >
              
              <Image
                alt='Facebook'
                //onClick={() => window.open(`https://www.facebook.com/cerrajeriamarijooficial?mibextid=LQQJ4d`)}
                width={40}
                height={40}
                className='cursor-pointer'
                src={'/images/facebook.png'}
              />
                </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/capapay_?igsh=NHcwOHdmeG9jM3Yz&utm_source=qr"
                >
              <Image
                //onClick={() => window.open(`https://www.instagram.com/capapay_?igsh=NHcwOHdmeG9jM3Yz&utm_source=qr`)}
                alt='Instagram'
                width={40}
                height={40}
                className='cursor-pointer'
                src={'/images/instagram.png'}
              />
                </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className='bg-black py-10 lg:py-6 text-white'>
        <Container className='flex flex-col lg:flex-row justify-between items-center'>
          <p className='text-sm font-light'>
            Copyright © CapaPay 2023 | Todos los Derechos Reservados
          </p>

          <div className='flex items-center gap-4 mt-5 lg:mt-0'>
            {map(footerData, (item) => (
              <Link
                href={item.href}
                key={item.href}
                className='text-xs font-medium flex items-center gap-3'
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
