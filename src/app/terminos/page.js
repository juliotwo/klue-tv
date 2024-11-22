import Label from '../../components/atoms/Label';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

export default function Terms() {
  return (
    <main>
      <Navbar />

      <Container className='my-20 md:my-24 flex flex-col items-center gap-3'>
        <Label>Términos y condiciones</Label>

        <div className='mt-10 flex flex-col gap-4 text-primary'>
          <p className='text-black font-bold'>
            Fecha de entrada en vigor: Septiembre 26, 2023
          </p>

          <p>
            Por favor, lea detenidamente estos Términos y Condiciones antes de
            utilizar el sitio web de CapaPay (&quot;nosotros&quot;,
            &quot;nuestro&quot; o &quot;CapaPay&quot;). Al acceder o utilizar
            nuestro sitio web, usted acepta cumplir con estos Términos y
            Condiciones. Si no está de acuerdo con alguno de los términos a
            continuación, le rogamos que no utilice nuestro sitio web.
          </p>

          <h6 className='text-black font-bold'>1. Uso del Sitio</h6>

          <p>
            1.1. Acceso y Registro: Para acceder a ciertas características de
            nuestro sitio web, puede ser necesario registrarse y proporcionar
            información personal. Usted es responsable de mantener la
            confidencialidad de su información de inicio de sesión y de todas
            las actividades que ocurran en su cuenta.
          </p>
          <p>
            1.2. Contenido del Usuario: Al cargar, publicar o enviar contenido a
            nuestro sitio web, usted garantiza que tiene los derechos necesarios
            sobre dicho contenido y otorga a CapaPay una licencia no exclusiva
            para usar, modificar, mostrar y distribuir dicho contenido en
            relación con nuestros servicios.
          </p>

          <h6 className='text-black font-bold'>
            2. Comportamiento del Usuario
          </h6>

          <p>
            2.1. Uso Adecuado: Usted se compromete a utilizar nuestro sitio web
            de manera adecuada y de acuerdo con todas las leyes y regulaciones
            aplicables. No debe utilizar nuestro sitio web para actividades
            ilegales, fraudulentas o perjudiciales.
          </p>
          <p>
            2.2. Prohibiciones: Queda prohibido el uso de nuestro sitio web para
            cualquier propósito que pueda dañar, sobrecargar o interrumpir el
            funcionamiento del mismo. También está prohibido el uso de cualquier
            dispositivo, software o rutina que interfiera o intente interferir
            en el funcionamiento adecuado del sitio.
          </p>

          <h6 className='text-black font-bold'>
            3. Contenido y Propiedad Intelectual
          </h6>

          <p>
            3.1. Derechos de Propiedad: Todos los derechos de propiedad
            intelectual en nuestro sitio web y su contenido (incluyendo textos,
            gráficos, logotipos, imágenes y software) son propiedad de CapaPay o
            de terceros con licencia. Usted acepta no copiar, reproducir,
            modificar, distribuir o utilizar de ninguna otra manera dicho
            contenido sin nuestro consentimiento.
          </p>
          <p>
            3.2. Marcas Comerciales: Todas las marcas comerciales, nombres
            comerciales y logotipos utilizados en nuestro sitio web son
            propiedad de CapaPay o de terceros. No se le concede ningún derecho
            para utilizar estas marcas sin nuestro consentimiento por escrito.
          </p>

          <h6 className='text-black font-bold'>4. Política de Privacidad</h6>

          <p>
            El uso de nuestro sitio web está sujeto a nuestra Política de
            Privacidad, que describe cómo recopilamos, utilizamos y protegemos
            su información personal. Lea nuestra Política de Privacidad para
            comprender cómo manejamos sus datos.
          </p>

          <h6 className='text-black font-bold'>5. Cambios en los Términos</h6>

          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Cualquier cambio se publicará en nuestro sitio
            web y entrará en vigor inmediatamente después de su publicación. Le
            recomendamos que revise periódicamente estos términos.
          </p>

          <h6 className='text-black font-bold'>6. Terminación</h6>

          <p>
            Nos reservamos el derecho de suspender o cancelar su acceso a
            nuestro sitio web en cualquier momento y por cualquier motivo, sin
            previo aviso.
          </p>

          <h6 className='text-black font-bold'>7. Ley Aplicable</h6>

          <p>
            Estos Términos y Condiciones se rigen por las leyes del México y
            cualquier disputa que surja de estos términos estará sujeta a la
            jurisdicción exclusiva de los tribunales de México.
          </p>

          <p>
            Gracias por confiar en CapaPay. Su privacidad es importante para
            nosotros, y nos comprometemos a protegerla de manera responsable.
          </p>

          <h6 className='text-black font-bold'>8. Contacto</h6>

          <p>
            Si tiene alguna pregunta o inquietud acerca de estos Términos y
            Condiciones, por favor contáctenos a través de info@capapay.mx.
          </p>

          <p>
            Gracias por utilizar CapaPay. Estos términos y condiciones están
            diseñados para garantizar un uso adecuado y justo de nuestro sitio
            web.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
