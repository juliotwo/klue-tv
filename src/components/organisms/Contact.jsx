'use client';
import { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';
import Container from '@/components/atoms/Container';
import Link from 'next/link';

const Contact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!name || !phoneNumber || !email || !message) {
      return alert('Todos los campos son requeridos');
    }

    if (!regExpEmail.test(email)) {
      return alert('No es un email válido');
    }

    const emailToSend = `mailto:info@capapay.mx?subject=Contacto desde web | ${name}&body=${message}\nMi número de télefono es: ${phoneNumber}`;

    window.open(emailToSend, '_blank');
  };

  return (
    <div className='py-20 bg-primary text-white' id='contact'>
      <Container className='w-full grid lg:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <Label>Contacto</Label>

            <h4 className='mt-2 mb-6 text-lg font-bold'>
              Mejora el rendimiento de tus métodos de pago
            </h4>
            <h2 className='mb-10 text-xl sm:text-2xl lg:text-4xl font-light'>
              Deja tus datos y únete a la comunidad que confía en CapaPay
            </h2>

            <Link
              href='mailto:capapay@proton.me'
              target='_blank'
              rel='nopener noreferrer'
            >
              <Button className='sm:w-80 h-12 flex items-center justify-center gap-3'>
                <span className='text-xl'>
                  <IoIosAddCircleOutline />
                </span>
                Más información
              </Button>
            </Link>
          </div>

          {/* <div className='bg-primary flex flex-col items-center justify-center border border-secondary rounded-lg h-40 mt-10 xl:mt-0'>
                        <h3 className='mb-4 font-bold font-urbanist text-7xl text-secondary'>86%</h3>

                        <p className='font-light text-sm'>De aprobación</p>
                    </div> */}
        </div>

        <div className='flex flex-col justify-between'>
          <form className='flex flex-col gap-3 mb-10' onSubmit={handleSubmit}>
            <h4 className='mb-2 text-lg font-bold'>
              Cuéntanos de tu proyecto…
            </h4>
            <Input
              type='text'
              placeholder='Nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type='text'
              placeholder='Télefono'
              value={phoneNumber}
              onChange={(e) => {
                const regExpNumbers = /^\d+$/;

                if (regExpNumbers.test(e.target.value)) {
                  setPhoneNumber(e.target.value);
                }
              }}
              required
            />
            <Input
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              id='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm focus:ring-blue-500 focus:border-blue-500 resize-none'
              placeholder='Mensaje'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button type='submit'>Enviar</Button>
          </form>

          {/* <div className='bg-primary flex flex-col items-center justify-center border border-secondary rounded-lg h-40'>
            <h3 className='mb-4 font-bold font-urbanist text-7xl text-secondary'>
              22
            </h3>

            <p className='font-light text-sm'>Clientes sastisfechos</p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Contact;
