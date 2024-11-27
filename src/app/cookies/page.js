import Label from '../../components/atoms/Label';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

export default function Policy() {
  return (
    <main>
      <Navbar />

      <Container className='my-20 md:my-24 flex flex-col items-center gap-3'>
        <Label>Aviso de Cookies</Label>

        <div className='mt-10 flex flex-col gap-4 text-primary'>
          <p>
            <strong>Fecha de actualización:</strong> noviembre 2024
          </p>
          <p>
            En cumplimiento de lo dispuesto por la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares, su Reglamento de
            desarrollo, los Lineamientos del Aviso de Privacidad emitidos por el
            Instituto Nacional de Transparencia, Acceso a la Información y
            Protección de Datos Personales y resto de normativa aplicable, el
            responsable titular del sitio web de KLU TPV, S.A. DE C.V. (en
            adelante, “KLU”), pone a su disposición la siguiente información:
          </p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son archivos que permiten la recolección automática de
            información relativa a la visita de un usuario a una determinada
            página web y que se almacena en el navegador del usuario; esto
            permite al sitio web consultar la actividad previa del usuario. Las
            cookies tienen fechas de caducidad variadas, que pueden oscilar
            desde el tiempo que dure la sesión (cookies de sesión), hasta una
            fecha futura especificada a partir de la cual dejan de ser
            operativas (cookies persistentes).
          </p>

          <h2>2. ¿Para qué utilizamos cookies en nuestro sitio web?</h2>
          <p>
            Utilizamos “cookies”, “web beacons” y otros mecanismos de
            recolección automática de información (conjuntamente, “cookies”),
            para las finalidades a continuación indicadas:
          </p>
          <ul>
            <li>Habilitar funcionalidades del sitio web.</li>
            <li>
              Analizar el uso que los usuarios y/o visitantes del sitio efectúan
              del mismo.
            </li>
            <li>
              Recordar las preferencias de navegación de dichos usuarios y/o
              visitantes.
            </li>
            <li>
              Registrar los sitios que ha visitado y generar anuncios con
              contenido relevante para usted.
            </li>
            <li>
              Recabar datos estadísticos de navegación, origen y transacciones.
            </li>
          </ul>
          <p>
            Para alcanzar estas finalidades, usamos cookies generalmente
            clasificadas como:
          </p>
          <ul>
            <li>
              <strong>Cookies estrictamente necesarias:</strong> Son aquellas
              requeridas para la operación del sitio web. Este tipo de cookies
              incluyen aquellas que permiten registrarse de forma segura en
              sitios específicos del sitio web.
            </li>
            <li>
              <strong>Cookies analíticas:</strong> Son aquellas que nos permiten
              reconocer y contabilizar el número de usuarios de nuestro sitio
              web, así como analizar la navegación dentro del mismo. Estas
              cookies permiten mejorar la funcionalidad del sitio web,
              identificando zonas o información que los usuarios buscan dentro
              del mismo.
            </li>
            <li>
              <strong>Cookies funcionales:</strong> Son aquellas que permiten
              mejorar el funcionamiento del sitio web y facilitar su uso. Por
              ejemplo, mediante el registro de visitas previas o su registro
              anterior en nuestros servicios.
            </li>
            <li>
              <strong>Targeting/Marketing Cookies:</strong> Son aquellas que
              registran su visita al sitio web, las páginas que ha visitado y
              los enlaces que ha elegido. Estas cookies permiten la generación
              de anuncios basados en sus intereses o preferencias más
              relevantes.
            </li>
          </ul>
          <p>
            Podemos almacenar cookies estrictamente necesarias en su
            dispositivo, para que el sitio web funcione correctamente. En
            función del lugar desde el que nos visite, requeriremos de su
            consentimiento para el uso del resto de cookies antes indicadas.
          </p>

          <h2>3. ¿Las cookies recaban datos personales?</h2>
          <p>
            Cuando las cookies permiten la identificación del usuario
            (determinadas cookies analíticas y cookies de publicidad
            comportamental lo permiten), se considera que las cookies recaban
            datos personales. En tales casos, tratamos esta información como
            Responsable del Tratamiento de esos Datos Personales, para las
            finalidades antes descritas.
          </p>

          <h2>4. ¿Se pueden eliminar las cookies?</h2>
          <p>
            Sí. Usted puede rechazar la instalación de cookies y eliminar
            aquellas que ya están instaladas en su computadora. La forma de
            bloquear y eliminar las cookies puede diferir de un navegador de
            Internet a otro. A continuación, le proporcionamos links para
            configurar la gestión de cookies en los principales navegadores:
          </p>
          <ul>
            <li>
              <a
                href='https://support.google.com/chrome/answer/95647?hl=es'
                target='_blank'
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href='https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer'
                target='_blank'
              >
                Explorer
              </a>
            </li>
            <li>
              <a
                href='https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies'
                target='_blank'
              >
                Explorer - gestión de cookies
              </a>
            </li>
            <li>
              <a
                href='https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias'
                target='_blank'
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href='https://support.apple.com/es-mx/guide/safari/sfri11471/mac'
                target='_blank'
              >
                Safari
              </a>
            </li>
          </ul>
          <p>
            Si usted rechaza la instalación de cookies, podrá seguir usando
            nuestro sitio web, aunque algunas funciones o prestaciones del sitio
            podrán estar limitadas o no funcionar adecuadamente.
          </p>
          <p>
            El presente Aviso de Cookies forma parte del Aviso de privacidad,
            publicado en la página de KLU y regula el uso de mecanismos en
            medios remotos o locales de comunicación electrónica que permiten al
            responsable recabar datos considerados como personales de manera
            automática y simultánea al tiempo que el titular hace contacto con
            dichos medios.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
