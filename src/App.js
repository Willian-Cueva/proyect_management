import doc from "./assets/docs/proyect.pdf";
import Header from "./components/Header";
import ImageBPMN from "./components/ImageBPMN";

import imgPlanificacion from "./assets/img/planificacion.png";
import imgMonitorieo from "./assets/img/monitoreo.png";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <div className="w-full flex justify-center"><embed src={doc} type="application/pdf" width="90%" height="750px" /></div> */}
        <div className="container">
          <div className="row">
            <div className="row">
              <h2>Planificación</h2>
              <div>
                <p>
                  Este blog describe los pasos para la planificación de un
                  proyecto de software mediante la metodología ICONIX, que
                  incluye la definición de requerimientos, análisis, diseño,
                  implementación, pruebas, integración y mantenimiento. Es
                  importante destacar que esta metodología puede ser adaptada a
                  las necesidades específicas de cada proyecto, y se recomienda
                  el uso de herramientas de modelado y gestión de proyectos para
                  facilitar la planificación y el seguimiento del mismo.
                </p>
                <ImageBPMN src={imgPlanificacion} alt="Planificación" />
                <ImageBPMN src={imgMonitorieo} alt="Monitoreo" />
              </div>
              <h3>Plan de costos</h3>
              <p>
                Para obtener el plan de costos de un proyecto de software
                siguiendo la metodología ICONIX, se pueden seguir los siguientes
                pasos:
              </p>
              <ul class="list-group" id="list">
                <li class="list-group-item">
                  <h4>Identificar las tareas y los recursos necesarios:</h4>{" "}
                  <hr />
                  <p className="text-muted">
                    En primer lugar, se deben identificar las tareas necesarias
                    para completar el proyecto y los recursos necesarios para
                    llevar a cabo cada tarea. Esto puede incluir el personal, el
                    hardware, el software, el equipo de oficina, entre otros.
                  </p>
                </li>

                <li class="list-group-item">
                  <h4>Estimar el costo de cada recurso:</h4> Una vez que se han
                  identificado los recursos necesarios, se debe estimar el costo
                  de cada uno de ellos. Por ejemplo, el costo del personal puede
                  incluir los salarios, los impuestos, los beneficios, entre
                  otros. El costo del hardware puede incluir el costo de compra,
                  la instalación, el mantenimiento y la actualización.
                </li>
                <li class="list-group-item">
                  <h4>Crear un modelo del sistema:</h4> Con la información
                  anterior, se puede crear un modelo del sistema utilizando la
                  metodología ICONIX. Esto permitirá visualizar el sistema y las
                  tareas necesarias para completarlo.
                </li>
                <li class="list-group-item">
                  <h4>Crear un calendario de tareas:</h4> Con el modelo del
                  sistema, se puede crear un calendario de tareas que detalle
                  cuándo se debe completar cada tarea y qué recursos se
                  necesitan para completarla.
                </li>
                <li class="list-group-item">
                  <h4>Estimar la duración de cada tarea:</h4> Para estimar el
                  costo del proyecto, también es necesario estimar la duración
                  de cada tarea. Esto permitirá calcular el costo del personal y
                  otros recursos para cada tarea.
                </li>
                <li class="list-group-item">
                  <h4>Calcular el costo total del proyecto:</h4> Con la
                  información anterior, se puede calcular el costo total del
                  proyecto. Esto incluirá el costo de cada recurso necesario y
                  el costo del personal para cada tarea
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
