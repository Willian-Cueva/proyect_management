import Recurso from "../components/Recurso";

export default function CasoPractico() {
  return (
    <main>
      {/* <div className="w-full flex justify-center"><embed src={doc} type="application/pdf" width="90%" height="750px" /></div> */}
      <div className="container">
        <h1 style={{ marginTop: "12px", marginBottom: "12px" }}>
          Caso Práctico - Sistema de Agenda
        </h1>
        <div className="row">
          <div className="row">
            <br />
            <h2>Inicio del proyecto</h2>
            <div>
              {/* <ImageBPMN src={imgPlanificacion} alt="Planificación" />
                <ImageBPMN src={imgMonitorieo} alt="Monitoreo" /> */}
            </div>
            <h3>Documento de visión del proyecto</h3>
            <p>
              Para dar inicio al Sistema de Agendas, primeramente se debe de
              realizar el “Documento de visión del proyecto”. El cual define el
              alcance y el objetivo de alto nivel del sistema de agendas. Para
              ello, se puede elaborar siguiendo la plantilla de IBM para el
              mismo:{" "}
              <Recurso
                href={
                  "https://www.ibm.com/docs/es/elm/6.0.3?topic=requirements-vision-document"
                }
              />
            </p>
            <br />
            <p>En dicha plantilla se debe detallar:</p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Resumen del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Objetivos del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Alcance del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Requisitos del cliente.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Entregables del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Restricciones del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Supuestos del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Criterios de éxito,
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Roles y responsabilidades.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>Cronograma.</p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>Presupuesto.</p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Estrategia de gestión de riesgos.
                </p>
                <hr />
              </li>
            </ul>

            <h3>Identificación de interesados (roles)</h3>
            <p>
              Luego de que se ha elaborado el documento inicial del sistema de
              agendas, ahora se necesita poder identificar las partes
              interesadas, para ello, se pueden hacer uso de muchas plantillas
              ya predefinidas, en este caso, se hizo uso de la plantilla:
              <Recurso
                href={
                  "https://es.smartsheet.com/free-stakeholder-analysis-templates"
                }
              />
              <br />
              En dicha plantilla se debe detallar:
            </p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Identificar a los interesados
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Clasificar a los interesados.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Definir roles y responsabilidades.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Identificar necesidades y requerimientos.
                </p>
                <hr />
              </li>
            </ul>
            <h3>Actas de Constitución de proyecto</h3>
            <p>
              Finalmente, una vez que ya se posee el documento de visión y la
              respectiva identificación de las partes interesadas del sistema de
              agendas, por último se elabora el “Acta de Constitución del
              proyecto”. Para ello, se puede emplear cualquier plantilla que
              cumpla con los interese del proyecto. En este caso, se hizo uso de
              la siguiente plantilla.
              <Recurso
                href={
                  "http://www.pmoinformatica.com/2013/06/plantilla-de-acta-de-proyecto.html"
                }
              />
              <br />
              En dicha plantilla se debe detallar:
            </p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Resumen del proyecto
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Objetivos del proyecto
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Alcance del proyecto.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Requerimientos funcionales y no funcionales.
                </p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>Cronograma.</p>
                <hr />
              </li>
              <li class="list-group-item">
                <p style={{ color: "rgba(255,255,255,0.8)" }}>Riesgos.</p>
                <hr />
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <hr />

        <div className="row">
          <div className="row">
            <br />
            <h2>Planificación</h2>
            <div>
              {/* <ImageBPMN src={imgPlanificacion} alt="Planificación" />
                <ImageBPMN src={imgMonitorieo} alt="Monitoreo" /> */}
            </div>
            <h3>Documento de visión del proyecto</h3>
            <p>
              Un Modelo del dominio se refiere a una representación conceptual
              de alto nivel que identifica objetos físicos y abstractos en un
              área de interés para un proyecto de software. Su objetivo
              principal es documentar las relaciones entre los objetos y las
              responsabilidades de las clases conceptuales, que son las clases
              que representan un concepto o un grupo de cosas en lugar de clases
              que definen un objeto de programación en sí mismo. Además, el
              modelo del dominio también es útil para definir los términos clave
              y los conceptos fundamentales de un dominio específico.
              <Recurso
                href={
                  "http://www.sparxsystems.com.ar/download/ayuda/index.html?domain_model_pattern.htm"
                }
              />
            </p>

            <h3>Modelo de requisitos</h3>
            <p>
              El lenguaje natural utilizado en la documentación de requisitos
              puede ser ambiguo, lo que puede generar problemas en el proceso de
              desarrollo de software. Para evitar esta ambigüedad, se recomienda
              utilizar plantillas de requisitos, que pueden adoptar la forma de
              una tabla con una fila para cada atributo del requisito. Las
              plantillas pueden incluir tanto atributos obligatorios como
              opcionales, y se debe definir previamente cuáles de estos últimos
              se utilizarán en cada proyecto específico, según la decisión de la
              dirección del proyecto.
              <Recurso
                href={
                  "https://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/456"
                }
              />
            </p>
            <h3>Plan de Costos</h3>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <h4>Modelo de sistema:</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  El propósito del documento "Diseño del Sistema de Información"
                  es registrar la descripción de la estructura del sistema y del
                  marco tecnológico que lo sustentará, así como la
                  especificación minuciosa de los elementos que conforman el
                  sistema de información.
                  <Recurso
                    href={
                      "https://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/458"
                    }
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Calendario de tareas:</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Existen varias herramientas para la gestión de las tareas por
                  medio de calendarios por lo que basándonos en la experiencia
                  recomendamos la plataforma bitrix24.
                  <Recurso
                    href={
                      "https://www.bitrix24.es/tools/tasks_and_projects/?gclid=CjwKCAiAjPyfBhBMEiwAB2CCIppvfp4K6tB6fiQTtxZOdhCuVIcZ1_CDHLEBhdvFExWwmSmyRFvGbRoCQCoQAvD_BwE"
                    }
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Plan de costos:</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Una plantilla utilizable para este plan de costos puede ser la
                  siguiente.
                  <Recurso
                    href={
                      "https://www.conicyt.cl/fondef/files/2012/09/anexo3_planilla_costo.xls"
                    }
                  />
                </p>
              </li>
            </ul>

            <h3>Cronograma del proyecto</h3>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <h4>Diagrama de Gantt:</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  El propósito del documento "Diseño del Sistema de Información"
                  Para la creación del diagrama de Gantt también de la misma
                  forma recomendamos utilizar bitrix24
                </p>
              </li>
              <li class="list-group-item">
                <h4>Cronograma de proyecto:</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  <Recurso
                    href={
                      "https://www.smartsheet.com/sites/default/files/2019-11/IC-Project-Schedule-Template-10689.xlsx?_ga=2.193714861.1253216956.1677735577-366635595.1677735577&_gl=1*1o31n68*_ga*MzY2NjM1NTk1LjE2Nzc3MzU1Nzc.*_ga_ZYH7XNXMZK*MTY3NzczNTU3Ny4xLjAuMTY3NzczNTU3Ny42MC4wLjA"
                    }
                  />
                </p>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <hr />

        <div className="row">
          <div className="row">
            <br />
            <h2>Ejecución</h2>
            <p>
              La fase de ejecución en Iconix es el momento en el que se lleva a
              cabo la implementación del software. En el caso del sistema de
              agenda, esta fase incluirá la programación del software y su
              posterior integración para crear un sistema funcional y completo.
              Es importante que se realicen pruebas unitarias y de integración
              para asegurar que el software cumpla con los requisitos y funcione
              correctamente.
            </p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <h4>Diagramas</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Como los Diagramas de robustez, Diagrama de secuencia, Modelo
                  de dominio, Modelo de clase, todos ellos se ejecutan en base
                  al estándar de UML.
                  <Recurso href={"https://www.uml.org/"} />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Código fuente</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Basándonos en el código Limpio (Clean Code) el cual es un
                  conjunto de principios y prácticas que se enfocan en escribir
                  código legible, eficiente y fácil de mantener.
                </p>
              </li>
              <li class="list-group-item">
                <h4>Pruebas unitarias y de integración</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Se va a regir con base en la IEEE 829 la cual es un estándar
                  que define los formatos y contenidos de los documentos de
                  prueba, incluyendo los planes de prueba, los casos de prueba y
                  los informes de resultados de las pruebas.
                  <Recurso href={"https://standards.ieee.org/ieee/829/3787/"} />
                </p>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <hr />

        <div className="row">
          <div className="row">
            <br />
            <h2>Monitoreo</h2>
            <h3>Cómo se controlan los avances de un proyecto de software</h3>
            <p>
              Para controlar los avances del sistema de agenda se utilizan
              diversas técnicas de seguimiento y control, como por ejemplo:
            </p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <h4>Cronograma</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Como los Diagramas de robustez, Diagrama de secuencia, Modelo
                  Se utiliza mayormente plantillas en Excel para ello hemos
                  encontrado una plantilla que hace uso del diagrama de Gantt en
                  el siguiente enlace:
                  <Recurso
                    href={
                      "https://es.smartsheet.com/free-blank-timeline-templates"
                    }
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Indicadores de rendimiento</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Para medir el progreso se pueden usar plantillas de Excel con
                  KPI que son indicadores clave de desempeño en este caso se
                  encontró una plantilla interesante en el siguiente enlace.
                  <Recurso
                    href={"https://es.justexw.com/plantillas/dashboard-kpi"}
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Reportes de seguimiento</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Para elaborar el reporte de seguimiento se puede realizar un
                  reporte de todos los avances que ha tenido a lo largo del
                  proyecto para ello no existe una plantilla como tal pero se
                  podría utilizar una herramienta como Monday la cual nos da
                  plantillas para realizar este tipo de reportes el enlace de
                  esta herramienta es el siguiente:
                  <Recurso href={"https://monday.com/lang/es/"} />
                </p>
              </li>
            </ul>
            <br />

            <h3>Cómo se controlan los gastos del proyecto</h3>
            <p>
              Para controlar los gastos del proyecto en un proyecto de software
              ICONIX, se utilizan técnicas de gestión de costos, como por
              ejemplo:
            </p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <h4>Estimación de costos</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Se puede utilizar la estimación basada en tamaño, donde este
                  método se basa en el tamaño de los elementos del sistema, como
                  los casos de uso y las funciones. El tamaño se puede medir en
                  puntos de función o en líneas de código. Se utiliza una
                  fórmula matemática para convertir el tamaño en tiempo y costo.
                  Se podria utilizar una plantilla a modificar de esta página
                  web:
                  <Recurso
                    href={
                      "https://es.smartsheet.com/job-work-estimate-templates"
                    }
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Seguimiento de gastos</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Para llevar un registro detallado de los gastos del proyecto
                  se podria utilizar una plantilla como la siguiente para tener
                  un correcto control de gastos, el enlace es el siguiente:
                  <Recurso
                    href={
                      "https://cashtrainers.com/plantilla-excel-presupuesto-gastos-para-proyectos"
                    }
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Control de cambios</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Se lleva un corrector control de cambios siempre y cuando cada
                  cambio sea dialogado y aceptado por interesados del proyecto
                  para ello se debe tener un control, para ello se encontró la
                  siguiente plantilla:
                  <Recurso
                    href={
                      "https://es.smartsheet.com/free-change-management-templates"
                    }
                  />
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="row">
            <br />
            <h2>Cierre</h2>
            <p>
              La fase de cierre en la metodología ICONIX es esencial para
              finalizar un proyecto de manera exitosa. Durante esta etapa, se
              llevan a cabo diversas actividades para asegurarse de que todos
              los aspectos del proyecto se hayan completado y que el sistema
              esté listo para ser entregado al cliente. Para el caso de prueba
              del sistema de agenda, los entregables en esta fase pueden incluir
              la documentación final del proyecto, incluyendo manuales de
              usuario y de mantenimiento, el código fuente final, los resultados
              de pruebas finales y el informe de cierre del proyecto. Además, se
              debe realizar una evaluación del proyecto para analizar los
              resultados y determinar si se han cumplido los objetivos
              establecidos. La fase de cierre es una parte crucial del proceso
              de desarrollo de software ya que asegura que se cumplan los
              requisitos del cliente y se entregue un producto de alta calidad y
              que cumpla con las expectativas.
            </p>
            <ul class="list-group" id="list">
              <li class="list-group-item">
                <h4>Documentación final del proyecto</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Un documento que describe los objetivos, alcance, resultados y
                  lecciones aprendidas del proyecto. El cual será realizado en
                  base a la norma ISO/IEC/IEEE 26514 para la documentación del
                  ciclo de vida del software.
                  <Recurso
                    href={
                      "https://www.iso.org/obp/ui/#iso:std:iso-iec-ieee:26514:ed-1:v1:en"
                    }
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Evaluación final del proyecto</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Un informe que evalúa el éxito del proyecto, incluyendo los
                  costos, la calidad, la satisfacción del cliente y el
                  cumplimiento de los objetivos. Donde se sigue la guía PMI
                  Practice Standard for Project Estimating para la estimación de
                  costos del proyecto y la guía PMI Practice Standard for
                  Project Risk Management para la gestión de riesgos.
                  <Recurso
                    href={
                      "https://www.pmi.org/-/media/pmi/documents/public/pdf/research/software-cost-estimation.pdf"
                    }
                  />
                  <Recurso
                    href={
                      "https://www.pmi.org/pmbok-guide-standards/foundational/risk-management"
                    }
                    text="Recurso 2"
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Entrega final del software</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  a versión final del software, que incluye el código fuente, la
                  documentación técnica y cualquier otro elemento necesario para
                  su implementación. En base a la norma ISO/IEC/IEEE 12207:2017
                  para la documentación del ciclo de vida del software y la guía
                  PMI Practice Standard for Configuration.
                  <Recurso
                    href={"https://standards.ieee.org/ieee/12207/5672/"}
                  />
                  <Recurso
                    href={
                      "https://www.pmi.org/pmbok-guide-standards/framework/practice-standard-project-configuration-management"
                    }
                    text="Recurso 2"
                  />
                </p>
              </li>

              <li class="list-group-item">
                <h4>Capacitación final</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Capacitación final para el personal del cliente y cualquier
                  otro usuario del software. En base a la guía PMI Practice
                  Standard for Project Communications Management para la gestión
                  de comunicaciones del proyecto y la guía PMI Practice Standard
                  for Project Management for Education and Training para la
                  capacitación del personal del proyecto.
                  <Recurso
                    href={
                      "https://www.pmi.org/learning/library/communications-management-9110"
                    }
                  />
                  <Recurso
                    href={"https://www.pmi.org/learning/training-development"}
                    text="Recurso 2"
                  />
                </p>
              </li>
              <li class="list-group-item">
                <h4>Soporte técnico</h4> <hr />
                <p style={{ color: "rgba(255,255,255,0.8)" }}>
                  Documentación de cualquier soporte técnico o mantenimiento que
                  se proporcionará al cliente después de la implementación. En
                  base a la guía PMI Practice Standard for Project Integration
                  Management para la integración de los componentes del proyecto
                  y la guía PMI Practice Standard for Project Stakeholder
                  Management para la gestión de las partes interesadas del
                  proyecto.
                  <Recurso
                    href={"https://www.pmi.org/pmbok-guide-standards/framework/practice-standard-project-configuration-management"}
                  />
                  <Recurso
                    href={
                      "https://www.pmi.org/learning/library/stakeholder-analysis-pivotal-practice-projects-8905"
                    }
                    text="Recurso 2"
                  />
                </p>
              </li>
            </ul>
          </div>
          <hr />
        </div>
      </div>
    </main>
  );
}
