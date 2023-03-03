import React from 'react'
import ImageBPMN from '../components/ImageBPMN'
import imgPlanificacion from "../assets/img/planificacion.png"
import imgMonitorieo from "../assets/img/monitoreo.png"
import imgInicioProyecto from "../assets/img/inicioProyecto.jpeg"
import imgEjecucion from "../assets/img/ejecucion.jpeg"
import imgCierre from "../assets/img/cierre.jpeg"


export default function Guia() {
  return (
    <main>
        {/* <div className="w-full flex justify-center"><embed src={doc} type="application/pdf" width="90%" height="750px" /></div> */}
        <div className="container" >
            <h1 style={{marginTop: "12px",marginBottom: "12px"}}>Guía</h1>
          <div className="row">
            <div className="row">
              <br />
              <h2>Inicio del proyecto</h2>
              <h3>Acta de Constitución del Proyecto</h3>
              <p>
                En ICONIX, el Acta de Constitución del Proyecto se conoce como
                "Documento de Requerimientos". Esta es una versión detallada del
                documento de visión y establece formalmente los objetivos,
                alcance, roles y responsabilidades del proyecto. A continuación
                se detallan los elementos clave del Documento de Requerimientos:
              </p>
              <ul class="list-group" id="list">
                <li class="list-group-item">
                  <h4>Resumen del proyecto:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Esta sección debe incluir una breve descripción del
                    proyecto, su finalidad y los resultados que se esperan
                    obtener.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Objetivos del proyecto:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En esta sección se deben definir los objetivos concretos que
                    se esperan lograr al finalizar el proyecto.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Alcance del proyecto:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En esta sección se debe establecer el alcance del proyecto,
                    es decir, los límites y fronteras del mismo.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Requerimientos funcionales y no funcionales:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Aquí se deben listar todos los requerimientos del proyecto,
                    tanto funcionales como no funcionales.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Cronograma:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En esta sección se debe establecer el plan de trabajo,
                    incluyendo las fechas de inicio y fin del proyecto y las
                    fechas clave de cada etapa del mismo.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Riesgos:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Aquí se deben identificar los riesgos potenciales asociados
                    con el proyecto y establecer un plan de contingencia para
                    minimizarlos.
                  </p>
                </li>
              </ul>
              <h3>Identificación de interesados (roles)</h3>
              <p>
                En ICONIX, la identificación de interesados se realiza en la
                etapa de "Análisis de Requerimientos" y es fundamental para
                establecer quiénes son las partes interesadas en el proyecto y
                qué roles desempeñarán en el mismo. A continuación se detallan
                los pasos para identificar a los interesados y sus roles:
              </p>
              <ul class="list-group" id="list">
                <li class="list-group-item">
                  <h4>Identificar a los interesados:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En esta etapa se debe identificar a todas las partes
                    interesadas en el proyecto, desde el cliente hasta los
                    miembros del equipo y cualquier otra persona que pueda verse
                    afectada por el mismo.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Clasificar a los interesados:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Una vez identificados los interesados, es importante
                    clasificarlos según su grado de importancia y su influencia
                    en el proyecto.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Definir roles y responsabilidades:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En esta etapa se deben definir los roles y responsabilidades
                    de cada miembro del equipo y establecer una estructura de
                    gestión de proyectos clara.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Identificar necesidades y requerimientos:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Por último, es fundamental identificar las necesidades y
                    requerimientos de los diferentes interesados para asegurar
                    que se satisfagan todas las expectativas y se alcancen los
                    objetivos del proyecto.
                  </p>
                </li>
              </ul>
              <ImageBPMN src={imgInicioProyecto} alt="Inicio Proyecto"/>
            </div>
            <hr />
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
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En primer lugar, se deben identificar las tareas necesarias
                    para completar el proyecto y los recursos necesarios para
                    llevar a cabo cada tarea. Esto puede incluir el personal, el
                    hardware, el software, el equipo de oficina, entre otros.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Estimar el costo de cada recurso:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Una vez que se han identificado los recursos necesarios, se
                    debe estimar el costo de cada uno de ellos. Por ejemplo, el
                    costo del personal puede incluir los salarios, los
                    impuestos, los beneficios, entre otros. El costo del
                    hardware puede incluir el costo de compra, la instalación,
                    el mantenimiento y la actualización.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Crear un modelo del sistema:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Con la información anterior, se puede crear un modelo del
                    sistema utilizando la metodología ICONIX. Esto permitirá
                    visualizar el sistema y las tareas necesarias para
                    completarlo.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Crear un calendario de tareas:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Con el modelo del sistema, se puede crear un calendario de
                    tareas que detalle cuándo se debe completar cada tarea y qué
                    recursos se necesitan para completarla.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Estimar la duración de cada tarea:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Para estimar el costo del proyecto, también es necesario
                    estimar la duración de cada tarea. Esto permitirá calcular
                    el costo del personal y otros recursos para cada tarea.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Calcular el costo total del proyecto:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Con la información anterior, se puede calcular el costo
                    total del proyecto. Esto incluirá el costo de cada recurso
                    necesario y el costo del personal para cada tarea.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Revisar y ajustar el plan de costos:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Es importante revisar el plan de costos y ajustarlo según
                    sea necesario. Esto puede incluir la reducción de costos
                    innecesarios o la adición de recursos adicionales para
                    completar el proyecto a tiempo.
                  </p>
                </li>
              </ul>
              <p>
                Para obtener el plan de costos de un proyecto de software
                siguiendo la metodología ICONIX, se deben identificar las tareas
                y los recursos necesarios, estimar el costo de cada recurso,
                producir un modelo del sistema, crear un calendario de tareas,
                estimar la duración de cada tarea, calcular el costo total del
                proyecto y ajustar el plan de costos según sea necesario. Es
                relevante comprobar el plan de costos y ajustarlo según sea
                necesario para garantizar que el proyecto se complete dentro del
                presupuesto asignado.
              </p>
              <h3>Cronograma de Proyecto</h3>
              <p>
                Para obtener el cronograma de un proyecto de software siguiendo
                la metodología ICONIX, se pueden seguir los siguientes pasos:
              </p>
              <ul class="list-group" id="list">
                <li class="list-group-item">
                  <h4>Identificar las tareas:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    En primer lugar, se deben identificar todas las tareas
                    necesarias para completar el proyecto. Esto puede incluir la
                    creación de modelos, la elaboración de prototipos, la
                    implementación de código, la realización de pruebas y la
                    documentación del sistema.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Ordenar las tareas:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Una vez que se han identificado las tareas, se deben ordenar
                    en función de su dependencia. Esto permitirá establecer una
                    secuencia lógica de tareas y determinar cuáles tareas deben
                    completarse antes de que se puedan realizar otras.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Estimar la duración de cada tarea:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Para estimar la duración de cada tarea, se puede utilizar la
                    información obtenida en el paso anterior y la experiencia
                    previa de los miembros del equipo. Es importante tener en
                    cuenta que la duración de las tareas puede variar
                    dependiendo de la complejidad del proyecto y del nivel de
                    experiencia del equipo.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Asignar recursos:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Una vez que se han estimado las duraciones de las tareas, se
                    pueden asignar recursos para llevar a cabo cada tarea. Esto
                    puede incluir personal, hardware, software y otros recursos
                    necesarios.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Crear un diagrama de Gantt:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Con la información anterior, se puede crear un diagrama de
                    Gantt que visualice el cronograma del proyecto. El diagrama
                    de Gantt mostrará la secuencia lógica de las tareas y su
                    duración, así como el momento en que cada tarea comienza y
                    termina.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Revisar y ajustar el cronograma:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Es importante revisar y ajustar el cronograma según sea
                    necesario. Esto puede incluir la reasignación de recursos o
                    la modificación de la duración de las tareas.
                  </p>
                </li>
              </ul>
              <p>
                En resumen, para obtener el cronograma de un proyecto de
                software siguiendo la metodología ICONIX, se deben identificar
                las tareas, ordenarlas en función de su dependencia, estimar la
                duración de cada tarea, asignar recursos, crear un diagrama de
                Gantt y revisar y ajustar el cronograma según sea necesario. Es
                importante seguir el cronograma y realizar un seguimiento
                regular para garantizar que el proyecto se complete dentro del
                plazo establecido.
              </p>
              <ImageBPMN src={imgPlanificacion} alt="Planificación" />
            </div>
            <hr />
            <div className="row">
              <h2>Ejecución</h2>
              <div>
                <p>
                  La fase de ejecución es una de las etapas más importantes en
                  la metodología ICONIX, ya que en esta fase se lleva a cabo la
                  implementación del software y se verifican los resultados de
                  las fases anteriores. Los entregables de esta fase incluyen el
                  código fuente, la documentación técnica y los manuales de
                  usuario. Para desarrollar adecuadamente esta fase, es
                  importante seguir algunos pasos clave. En primer lugar, se
                  debe asegurar que el diseño y la arquitectura del software
                  estén bien definidos y documentados. A continuación, se debe
                  realizar una planificación cuidadosa del proceso de
                  implementación, estableciendo un cronograma y un plan de
                  pruebas detallado. Es importante seguir prácticas de
                  programación eficaces, como la revisión de código y el control
                  de versiones. Finalmente, se debe realizar una evaluación
                  exhaustiva del software para asegurar que cumple con los
                  requerimientos del cliente y que es funcional y de alta
                  calidad. Siguiendo estos pasos, se puede garantizar una
                  ejecución exitosa del software y la satisfacción del cliente.
                </p>
              </div>
              <ImageBPMN src={imgEjecucion} alt="Ejecución" />
            </div>
            <hr />
            <div className="row">
              <h2>Monitoreo</h2>
              <div>
                <p>
                  El monitoreo en un proyecto de software usando la metodología
                  ICONIX tiene como objetivo principal controlar y gestionar el
                  progreso del proyecto, asegurándose de que se estén cumpliendo
                  los objetivos establecidos, los plazos y los presupuestos
                  asignados.
                </p>
                
              </div>
              <h3>Cómo se controlan los avances de un proyecto de software</h3>
              <p>
                Para controlar los avances de un proyecto de software ICONIX, se
                utilizan diversas técnicas de seguimiento y control, como por
                ejemplo:
              </p>
              <ul class="list-group" id="list">
                <li class="list-group-item">
                  <h4>Cronograma:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se establece un cronograma de actividades y se actualiza
                    constantemente para controlar el progreso del proyecto.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Indicadores de rendimiento:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se establecen indicadores de rendimiento clave para medir el
                    progreso del proyecto y se utilizan para controlar el
                    desempeño del equipo de trabajo.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Reportes de seguimiento:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Con la información anterior, se puede crear un modelo del Se
                    elaboran reportes de seguimiento periódicos para comunicar
                    el progreso del proyecto a los stakeholders y para
                    identificar posibles problemas y riesgos.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Revisiones de diseño:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se realizan revisiones de diseño periódicas para asegurarse
                    de que el software se está desarrollando de acuerdo con los
                    requisitos del cliente.
                  </p>
                </li>
              </ul>
              <h3>Cómo se controlan los gastos del proyecto</h3>
              <p>
                Para controlar los gastos del proyecto en un proyecto de
                software ICONIX, se utilizan técnicas de gestión de costos, como
                por ejemplo:
              </p>
              <ul class="list-group" id="list">
                <li class="list-group-item">
                  <h4>Estimación de costos:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se realiza una estimación de costos detallada al inicio del
                    proyecto para establecer un presupuesto inicial.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Seguimiento de gastos:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se lleva un registro detallado de los gastos del proyecto y
                    se compara con el presupuesto establecido para identificar
                    desviaciones.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Análisis de costos-beneficios:</h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se realiza un análisis de costos-beneficios periódico para
                    evaluar si los costos del proyecto están justificados en
                    función de los beneficios que se esperan obtener.
                  </p>
                </li>
                <li class="list-group-item">
                  <h4>Control de cambios: </h4> <hr />
                  <p style={{ color: "rgba(255,255,255,0.8)" }}>
                    Se establece un proceso para controlar los cambios en el
                    alcance del proyecto y para asegurarse de que los cambios no
                    generen costos adicionales sin justificación.
                  </p>
                </li>
              </ul>
              <ImageBPMN src={imgMonitorieo} alt="Monitoreo" />
            </div>
            <hr />
            <div className="row">
              <h2>Cierre</h2>
              <div>
                <p>
                  La fase de cierre es la última etapa en la metodología ICONIX,
                  donde se realiza la entrega final del software al cliente y se
                  completa el proyecto. Los entregables de esta fase incluyen la
                  documentación completa del software, el código fuente, los
                  manuales de usuario, los planes de mantenimiento y los
                  resultados de pruebas finales. Para desarrollar adecuadamente
                  esta fase, es importante seguir algunos pasos clave. En primer
                  lugar, se debe llevar a cabo una revisión completa de todos
                  los entregables para garantizar que estén completos y de alta
                  calidad. A continuación, se debe realizar una sesión de
                  presentación al cliente para demostrar el funcionamiento del
                  software y para proporcionar capacitación si es necesario. Es
                  importante asegurarse de que el cliente esté satisfecho con el
                  software y que se hayan cumplido todos los requerimientos
                  acordados. Por último, se debe realizar un análisis
                  post-implementación para evaluar el éxito del proyecto y para
                  identificar áreas de mejora en futuros proyectos. Siguiendo
                  estos pasos, se puede garantizar una finalización exitosa del
                  proyecto y una satisfacción del cliente a largo plazo.
                </p>
                <ImageBPMN src={imgCierre} alt="Cierre" />
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
