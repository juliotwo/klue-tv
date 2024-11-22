import { FaCreditCard, FaLink, FaShoppingCart } from 'react-icons/fa';
import {
  FaEye,
  FaCalendarAlt,
  FaFileAlt,
  FaCogs,
  FaList,
  FaShieldAlt,
  FaBalanceScale,
} from 'react-icons/fa';

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
      <section className='flex items-center justify-between px-36 py-16 bg-gray-50'>
        <div className='max-w-lg'>
          <img src='/klu-tpv.png' alt='KluTPV Logo' className='h-28' />
          <h2 className='text-2xl text-gray-700'>
            ¡Únete a la transformación financiera!
          </h2>
          <p className='text-2xl text-gray-700'>
            Sé parte de los beneficios que trae consigo la innovación.
          </p>
        </div>
        <img src='/card-image.png' alt='Tarjetas' className='w-1/2' />
      </section>

      {/* Sobre Nosotros */}
      <section
        id='about'
        className='text-white px-32 flex-col h-80 text-center justify-center items-center content-center'
        style={{
          backgroundColor: '#203D5C',
        }}
      >
        <h2 className='text-3xl font-bold mb-4'>Sobre nosotros</h2>
        <p className='text-lg'>
          En Klu, impulsamos la transformación financiera de los negocios con
          soluciones innovadoras, accesibles y seguras. Ofrecemos herramientas
          adaptadas a las necesidades de cada empresa, como terminales de pago
          avanzadas, integraciones de e-commerce y servicios digitales, todo con
          un enfoque en transparencia, eficiencia y tecnología. Somos el aliado
          que ayuda a tu negocio a crecer en un mundo digital.
        </p>
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
      <section
        className=' py-12'
        style={{
          backgroundColor: '#F9FAFB',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 text-center'>
          {/* Título y subtítulo */}
          <h2 className='text-2xl font-semibold text-gray-800 md:text-3xl'>
            Beneficios
          </h2>
          <p className='mt-2 text-lg text-gray-600'>
            Enfocados a la flexibilidad del cliente
          </p>

          {/* Beneficios (Grid) */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-20'>
            {/* Beneficio 1 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaEye className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Monitoreo transaccional en tiempo real
              </h3>
            </div>

            {/* Beneficio 2 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaCogs className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Visualización y soporte en dispositivos asignados al comercio
              </h3>
            </div>

            {/* Beneficio 3 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaCalendarAlt className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Información de volúmenes diarios, semanales y mensuales
              </h3>
            </div>

            {/* Beneficio 4 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaFileAlt className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Extracción rápida de transacciones
              </h3>
            </div>

            {/* Beneficio 5 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaList className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Personalización total
              </h3>
              <p className='text-gray-600 text-sm mt-2'>
                Ajusta comisiones según el tipo y volumen de transacción
              </p>
            </div>

            {/* Beneficio 6 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaBalanceScale className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Transparencia total
              </h3>
              <p className='text-gray-600 text-sm mt-2'>
                Detalles claros sobre cada componente de las comisiones
              </p>
            </div>

            {/* Beneficio 7 */}
            <div className='flex flex-col items-center text-center'>
              <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                <FaShieldAlt className='w-6 h-6 text-gray-600' />
              </div>
              <h3 className='mt-4 text-lg font-medium text-gray-800'>
                Garantiza la seguridad
              </h3>
              <p className='text-gray-600 text-sm mt-2'>
                Cumplimos con las normativas y estándares de seguridad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className='bg-gray-50 py-6 pt-28'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Logo y enlaces */}
          <div className='flex flex-col md:flex-row md:items-center justify-between text-center md:text-left mb-20'>
            {/* Logo */}
            <div className='flex justify-center md:justify-start'>
              <img src='/klu-tpv.png' alt='KluTPV Logo' className='h-8' />
            </div>

            {/* Enlaces */}
            <div className='mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-6'>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-800 text-sm font-medium'
              >
                Aviso de privacidad
              </a>
              <a
                href='#'
                className='text-gray-600 hover:text-gray-800 text-sm font-medium'
              >
                Términos y condiciones
              </a>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:items-center justify-between text-center md:text-left'>
            <p className='text-sm text-gray-600'>
              Klutpv® 2024. Todos los derechos reservados.
            </p>
            <a
              href='mailto:soporte@klutpv.com'
              className='text-sm text-gray-600 hover:text-gray-800 mt-4 md:mt-0'
            >
              soporte@klutpv.com
            </a>
          </div>
          {/* Línea divisoria */}
          <div className='my-6 border-t border-gray-200'></div>

          {/* Información de contacto */}
          <div className='flex flex-col md:flex-row md:items-center justify-between text-center md:text-left'>
            <p className='text-sm text-gray-600 mt-4 md:mt-0'>
              Sierra Gorda 42, Lomas de Chapultepec, Miguel Hidalgo, 11000
              Ciudad de México, CDMX
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
