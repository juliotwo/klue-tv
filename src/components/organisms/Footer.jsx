const Footer = () => {
  return (
    <footer className='bg-gray-50 py-6 pt-28'>
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
              href='/privacidad'
              className='text-gray-600 hover:text-gray-800 text-sm font-medium'
            >
              Aviso de privacidad
            </a>
            <a
              href='/terminos'
              className='text-gray-600 hover:text-gray-800 text-sm font-medium'
            >
              Términos y condiciones
            </a>
            <a
              href='/cookies'
              className='text-gray-600 hover:text-gray-800 text-sm font-medium'
            >
              Aviso de cookies
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
            Sierra Gorda 42, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad
            de México, CDMX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
