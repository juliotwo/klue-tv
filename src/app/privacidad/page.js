import Label from '../../components/atoms/Label';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

export default function Policy() {
  return (
    <main>
      <Navbar />

      <Container className='my-20 md:my-24 flex flex-col items-center gap-3'>
        <Label>Políticas de privacidad</Label>

        <div className='mt-10 flex flex-col gap-4 text-primary'>
          <p className='text-black font-bold'>
            Fecha de entrada en vigor: Septiembre 26, 2023
          </p>

          <p>
            En CapaPay, nos tomamos muy en serio la protección de su privacidad
            y la seguridad de sus datos personales. Esta Política de Privacidad
            tiene como objetivo proporcionarle información clara y transparente
            sobre cómo recopilamos, utilizamos, compartimos y protegemos sus
            datos personales cuando visita nuestro sitio web o utiliza nuestros
            servicios. Le rogamos que lea atentamente esta política y que la
            revise periódicamente, ya que podemos actualizarla para reflejar
            cambios en nuestras prácticas de privacidad.
          </p>

          <h6 className='text-black font-bold'>
            1. Información que Recopilamos
          </h6>

          <p>
            {' '}
            1.1. Información Personal: Recopilamos información personal que
            usted nos proporciona directamente, como su nombre, dirección de
            correo electrónico, número de teléfono y otra información necesaria
            para brindarle nuestros servicios, como inscribirse en cursos o
            suscribirse a boletines informativos.
          </p>
          <p>
            1.2. Información de Uso: Recopilamos información sobre cómo utiliza
            nuestro sitio web, incluyendo datos de navegación, páginas
            visitadas, tiempo de visita y otra información similar.
          </p>
          <p>
            {' '}
            1.3. Información de Dispositivos: Podemos recopilar información
            sobre el dispositivo que utiliza para acceder a nuestro sitio web,
            como la dirección IP, el tipo de navegador, el sistema operativo y
            la identificación del dispositivo.
          </p>

          <h6 className='text-black font-bold'>2. Uso de la Información</h6>

          <p>
            Utilizamos la información que recopilamos para los siguientes fines:
          </p>
          <p>
            {' '}
            2.1. Prestación de Servicios: Utilizamos sus datos personales para
            brindarle nuestros servicios, como la inscripción en cursos, el
            procesamiento de pagos y el envío de contenido relevante.
          </p>
          <p>
            2.2. Comunicación: Podemos utilizar su información para enviarle
            comunicaciones relacionadas con nuestros servicios, como
            confirmaciones de inscripción, actualizaciones y boletines
            informativos.
          </p>
          <p>
            2.3. Mejora de Nuestros Servicios: Utilizamos la información
            recopilada para analizar y mejorar nuestros servicios, incluyendo la
            personalización de su experiencia en nuestro sitio web.
          </p>

          <h6 className='text-black font-bold'>3. Compartir Información</h6>

          <p>
            No vendemos ni alquilamos su información personal a terceros. Sin
            embargo, podemos compartir su información en las siguientes
            situaciones:
          </p>
          <p>
            3.1. Proveedores de Servicios: Trabajamos con terceros proveedores
            de servicios que nos ayudan a brindar nuestros servicios, como
            procesadores de pagos y servicios de alojamiento web. Estos
            proveedores tienen acceso limitado a su información y solo la
            utilizan para los fines acordados.
          </p>
          <p>
            3.2. Cumplimiento Legal: Podemos divulgar su información si estamos
            legalmente obligados a hacerlo para cumplir con requisitos legales,
            órdenes judiciales o procesos legales.
          </p>

          <h6 className='text-black font-bold'>4. Seguridad de los Datos</h6>

          <p>
            Tomamos medidas razonables para proteger sus datos personales y
            mantener su confidencialidad. Utilizamos medidas de seguridad
            técnicas y organizativas adecuadas para proteger su información
            contra pérdida, uso no autorizado o divulgación.
          </p>

          <h6 className='text-black font-bold'>5. Sus Derechos</h6>

          <p>
            Usted tiene derechos en relación con sus datos personales,
            incluyendo el acceso, rectificación, eliminación y oposición al
            procesamiento. Puede ejercer estos derechos enviándonos una
            solicitud por escrito a la dirección proporcionada en la sección de
            contacto.
          </p>

          <h6 className='text-black font-bold'>
            6. Cambios en la Política de Privacidad
          </h6>

          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Los cambios entrarán en vigencia tan pronto
            como se publiquen en nuestro sitio web. Le recomendamos que consulte
            esta política regularmente para estar al tanto de cualquier
            actualización.
          </p>

          <h6 className='text-black font-bold'>7. Contacto</h6>

          <p>
            Si tiene alguna pregunta o inquietud sobre nuestra Política de
            Privacidad o la forma en que tratamos sus datos personales, por
            favor contáctenos a través de info@capapay.mx.
          </p>

          <p>
            {' '}
            Gracias por confiar en CapaPay. Su privacidad es importante para
            nosotros, y nos comprometemos a protegerla de manera responsable.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
