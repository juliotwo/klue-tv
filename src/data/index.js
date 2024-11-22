import { FaSquarePhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { FiCheckCircle } from 'react-icons/fi';
import { BsFillPeopleFill, BsFillPersonCheckFill } from 'react-icons/bs';

export const contactData = [
  {
    href: 'tel:+5517067609',
    title: '+55 1706 7609',
    Icon: <FaSquarePhone />,
  },
  {
    href: 'mailto:info@capapay.mx',
    title: 'info@capapay.mx',
    Icon: <IoMdMail />,
  },
];

export const footerData = [
  {
    href: '/privacidad',
    title: 'Políticas de privacidad',
  },
  {
    href: '/terminos',
    title: 'Términos y condiciones',
  },
];

export const referencesData = [
  {
    image: '/images/profile-1.jpg',
    name: 'Martha Vela',
    reference:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum eligendi fugiat ratione minus consectetur molestias odio, atque eius voluptatum veritatis voluptate cumque rerum quos repellat excepturi asperiores, a aperiam.',
    company: 'Martha Solutions S.A.',
  },
  {
    image: '/images/profile-2.jpg',
    name: 'Mark Evans',
    reference:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum eligendi fugiat ratione minus consectetur molestias odio, atque eius voluptatum veritatis voluptate cumque rerum quos repellat excepturi asperiores, a aperiam.',
    company: 'Giraffe',
  },
  {
    image: '/images/profile-3.jpg',
    name: 'Jenny Cruz',
    reference:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum eligendi fugiat ratione minus consectetur molestias odio, atque eius voluptatum veritatis voluptate cumque rerum quos repellat excepturi asperiores, a aperiam.',
    company: 'PhotoLove',
  },
  {
    image: '/images/profile-4.jpg',
    name: 'Dylan Renner',
    reference:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cum eligendi fugiat ratione minus consectetur molestias odio, atque eius voluptatum veritatis voluptate cumque rerum quos repellat excepturi asperiores, a aperiam.',
    company: 'Vision Trust',
  },
];

export const paymentsData = [
  {
    title: 'E-commerce',
    image: '/images/business.jpg',
    description:
      '¿Vendes servicios y productos en línea? ¿Tu empresa acepta transacciones en línea? Nuestras soluciones de comercio electrónico le permiten a tu empresa procesar pagos sin problemas y mantenerse por delante de la competencia. Te brindamos la mejor solución en línea Nuestra plataforma de pago electrónico está diseñada para maximizar tus oportunidades comerciales, con un enfoque particular en la experiencia, satisfacción y retención del cliente. Acepta todas las formas de pago de forma rápida, fácil y segura Brindamos el más alto nivel de seguridad para proteger tu negocio y los datos de tus clientes contra el fraude.',
  },
  {
    title: 'Terminales de pago',
    image: '/images/card-bg-2.jpg',
    description:
      'Ya sea que estés iniciando un nuevo negocio o buscando mejorar tus operaciones diarias, CapaPay te brinda las herramientas para tener éxito. Nuestras terminales Punto de Venta, procesan prácticamente todos los tipos de transacciones del mercado. CapaPay tiene una solución POS para cada necesidad.',
  },
  {
    title: 'Cargos recurrentes',
    image: '/images/card-bg-3.jpg',
    description:
      'Los cargos recurrentes son otra herramienta de cobro incluida en nuestro catálogo de productos, con la cual podrás hacer cargos automáticos a los clientes de tu comercio. Esta herramienta está diseñada para que no tengas que recordarles a tus usuarios que realicen sus pagos de manera periódica y así tienes el control de los cargos pendientes por realizar a tus clientes.',
  },
];

export const howWorksData = [
  {
    title: 'Para obtener afiliación',
    items: [
      'Envíanos tu documentación',
      'Revisión y validación de documentos',
      'Firma de contrato de servicios',
    ],
  },
  {
    title: 'Proceso de integración',
    items: [
      'Enviamos documentos de integración',
      'Ejecución de pruebas',
      'Validación de script de certificación',
      'Setup en ambiente de producción',
    ],
  },
  {
    title: 'Liberación en producción',
    items: [
      'Inicio de operaciones',
      'Liquidación y compensación',
      'Soporte especializado',
    ],
  },
];

export const howWorksData2 = [
  {
    title: 'Propuesta de valor',
    Icon: <FiCheckCircle />,
    description:
      'Cambiamos lo complicado y lo hacemos fácil para ti y tu comercio, habilitamos los canales electrónicos que necesitas para que puedas hacer crecer tu negocio de manera inmediata, así podrás ofrecer la mejor experiencia a tus clientes, haces tus cobros y recibes tu dinero.',
  },
  {
    title: 'Atención personalizada',
    Icon: <BsFillPeopleFill />,
    description:
      'Todas tus dudas, inquietudes, preocupaciones serán atendidas por nuestro equipo de expertos.',
  },
  {
    title: 'Expertos en el área de pagos',
    Icon: <BsFillPersonCheckFill />,
    description:
      'Profesionales en el área de medios de pago a tu disposición para ayudarte con todo lo relacionado a las operaciones de tus clientes. Ofrecemos especialistas bancarios y profesionales con conocimientos en todas las áreas de medios de pagos, a tu disposición en todo momento.',
  },
];

export const banksImage = [
  '/images/amvo-logo.jpeg',
  '/images/cybersource-logo.jpeg',
  '/images/prosa-logo.jpeg',
  '/images/psi-logo.jpeg',
  '/images/cnbv-logo.png',
];
