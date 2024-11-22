import { FaCreditCard, FaLink, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='font-sans'>
      {/* Navbar */}
      <header className='bg-white shadow-md'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6'>
          {/* Logo */}
          <img src='/klu-tpv.png' alt='KluTPV Logo' className='h-8' />
          <nav>
            <ul className='flex space-x-6 text-gray-600'>
              <li>
                <a href='#about' className='hover:text-black'>
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href='#products' className='hover:text-black'>
                  Productos
                </a>
              </li>
              <li>
                <a href='#features' className='hover:text-black'>
                  Características
                </a>
              </li>
              <li>
                <a href='#benefits' className='hover:text-black'>
                  Beneficios
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:text-black'>
                  Contáctanos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='flex items-center justify-between px-6 py-16 bg-gray-50'>
        <div className='max-w-lg'>
          <img src='/klu-tpv.png' alt='KluTPV Logo' className='h-28' />
          <h2 className='text-2xl text-gray-700'>
            ¡Únete a la transformación financiera!
          </h2>
          <p className='text-2xl text-gray-700'>
            Sé parte de los beneficios que trae consigo la innovación.
          </p>
        </div>
        <img src='/card-image.png' alt='Tarjetas' className='w-96' />
      </section>

      {/* Sobre Nosotros */}
      <section id='about' className='bg-blue-900 text-white px-6 py-16'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-4'>Sobre nosotros</h2>
          <p className='text-lg leading-relaxed'>
            En Klu, impulsamos la transformación financiera de los negocios con
            soluciones innovadoras, accesibles y seguras. Ofrecemos herramientas
            adaptadas a las necesidades de cada empresa...
          </p>
        </div>
      </section>
      {/* Productos */}
      <section id='products' className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          {/* Título */}
          <div className='mb-12'>
            <h2 className='text-2xl text-gray-800 '>Productos</h2>
            <img
              src='/klu-tpv.png'
              alt='KluTPV Logo'
              className='h-10 mr-2 mt-6'
            />
            <h3 className='text-3xl font-bold text-gray-900 mt-3'>
              Todo lo que necesitas para tu negocio
            </h3>
          </div>

          {/* Tarjetas */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Tarjeta 1 */}
            <div className='p-6 bg-gray-50 shadow-md rounded-lg text-center'>
              <div className='flex justify-center items-center mb-4'>
                <div className='bg-yellow-300 p-3 rounded-full'>
                  <FaCreditCard className='h-6 w-6 text-yellow-600' />
                </div>
              </div>
              <h4 className='text-lg font-semibold text-gray-800'>
                Terminal Punto de Venta
              </h4>
              <p className='text-gray-600 mt-2'>
                Aceptación bancaria, permitiendo a tus clientes pagar con total
                comodidad. Ideal para negocios que buscan flexibilidad en sus
                métodos de cobro.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className='p-6 bg-gray-50 shadow-md rounded-lg text-center'>
              <div className='flex justify-center items-center mb-4'>
                <div className='bg-yellow-300 p-3 rounded-full'>
                  <FaLink className='h-6 w-6 text-yellow-600' />
                </div>
              </div>
              <h4 className='text-lg font-semibold text-gray-800'>
                Link de Pago
              </h4>
              <p className='text-gray-600 mt-2'>
                Envía enlaces personalizados a tus clientes para que realicen
                pagos desde cualquier lugar, sin necesidad de terminal física.
                Perfecto para freelancers o cobros remotos.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className='p-6 bg-gray-50 shadow-md rounded-lg text-center'>
              <div className='flex justify-center items-center mb-4'>
                <div className='bg-yellow-300 p-3 rounded-full'>
                  <FaShoppingCart className='h-6 w-6 text-yellow-600' />
                </div>
              </div>
              <h4 className='text-lg font-semibold text-gray-800'>
                E-commerce
              </h4>
              <p className='text-gray-600 mt-2'>
                Integra el checkout de Klu en tu sitio web, optimizando la
                experiencia de compra. Aumenta tus ventas online sin fricciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className='py-16 px-8 bg-white'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between'>
          {/* Lista de Características con la línea */}
          <div className='lg:w-1/2 flex'>
            {/* Línea decorativa */}
            <div className='hidden lg:block w-1 bg-gray-200 mr-8'></div>
            {/* Texto */}
            <div className='space-y-6'>
              <h2 className='text-2xl font-bold text-gray-900'>
                Características
              </h2>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Conectividad
                  </h3>
                  <p className='text-gray-600'>
                    Velocidad y confiabilidad en cada transacción, sin importar
                    el lugar.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Seguridad y rapidez
                  </h3>
                  <p className='text-gray-600'>
                    Tu dinero en tiempo récord y con seguridad en cada
                    operación.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Impresora Integrada
                  </h3>
                  <p className='text-gray-600'>
                    Recibos eficientes y profesionales directamente desde la
                    terminal.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Pago Contactless
                  </h3>
                  <p className='text-gray-600'>
                    Acepta pagos sin contacto para mayor agilidad.
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    Diseño prácticos
                  </h3>
                  <p className='text-gray-600'>
                    Terminales que se ajustan para cualquier entorno comercial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className='lg:w-1/2 mt-8 lg:mt-0 flex justify-center'>
            <Image
              src='/device.png'
              alt='Dispositivo de pago'
              width={500}
              height={500}
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id='benefits' className='px-6 py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>Beneficios</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-gray-700'>
              Monitoreo transaccional en tiempo real.
            </div>
            <div className='text-gray-700'>
              Visualización y soporte en dispositivos asignados al comercio.
            </div>
            <div className='text-gray-700'>
              Información de volúmenes diarios, semanales y mensuales.
            </div>
            <div className='text-gray-700'>
              Extracción rápida de transacciones.
            </div>
            <div className='text-gray-700'>
              Personalización total: Ajusta comisiones según el tipo de
              transacción.
            </div>
            <div className='text-gray-700'>
              Garantiza la seguridad: Cumplimos normativas de seguridad.
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id='contact' className='px-6 py-16 bg-blue-900 text-white'>
        <div className='container mx-auto text-center'>
          <h2 className='text-2xl font-bold mb-4'>Contáctanos</h2>
          <p>
            Escríbenos un correo a{' '}
            <a href='mailto:soporte@klutpv.com' className='underline'>
              soporte@klutpv.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white px-6 py-4'>
        <div className='container mx-auto text-center'>
          <p>&copy; 2024 KluTPV. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
