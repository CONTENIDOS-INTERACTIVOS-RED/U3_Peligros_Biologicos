<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Objetivos, indicadores y planes de acción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5(data-aos="fade-left")
          p La adecuada gestión de los peligros biológicos en los lugares de trabajo requiere más que su identificación y evaluación. Es necesario formular objetivos claros, darles seguimiento mediante indicadores de desempeño e implementar planes de acción efectivos. Estas estrategias orientan los esfuerzos institucionales hacia la prevención de enfermedades laborales y aseguran el cumplimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), según los requisitos legales vigentes en Colombia.
          p.mb-0 Los peligros biológicos generan riesgos importantes, especialmente en sectores como la salud, la agroindustria, el manejo de residuos, los laboratorios y el saneamiento ambiental. Para controlar estos riesgos, es esencial transformar los resultados del diagnóstico en acciones planificadas, medibles y sostenidas en el tiempo. 
    
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 A continuación, se presenta un podcast que aborda el establecimiento de objetivos, la definición de indicadores y la elaboración de planes de acción en la gestión del riesgo biológico, con un enfoque basado en los criterios SMART y en buenas prácticas de bioseguridad laboral.
    
    .bg-full-width.bg-color-13.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/3.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 Ahora, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Gestión estratégica del riesgo biológico"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Ejemplo de plan de acción
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-14.text-white.text-center Actividad
            th.bg-color-14.text-white.text-center Responsable
            th.bg-color-14.text-white.text-center Fecha límite
            th.bg-color-14.text-white.text-center Indicador
            th.bg-color-14.text-white.text-center Evidencia
        tbody.bg-color-12
          tr
            th Capacitación en bioseguridad al personal clínico
            td Área de SST
            td 30/09/2029
            td % de personal capacitado
            td Listas de asistencia, informes
          tr
            th Implementar procedimiento para manejo de residuos biológicos
            td Coordinación HSEQ
            td 15/08/2029
            td % de áreas con protocolo implementado
            td Procedimientos aprobados, actas de socialización
          tr
            th Evaluar cumplimiento del protocolo de limpieza en laboratorios
            td Supervisor SST
            td Trimestral
            td Nº de auditorías y hallazgos reportados
            td Informes de auditoría

    h2(data-aos="fade-left").mb-5 Seguimiento y mejora continua

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-0 Una vez ejecutadas las acciones, es necesario hacer seguimiento constante a los resultados, evaluar los indicadores y realizar ajustes o mejoras. Este proceso forma parte del ciclo PHVA (Planear, Hacer, Verificar, Actuar), obligatorio dentro del SG-SST.
        p Además, los resultados deben ser comunicados a la alta dirección y al personal involucrado, promoviendo la participación y el compromiso con la bioseguridad.
    
        .bg-color-10.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Establecer objetivos, indicadores y planes de acción convierte el diagnóstico de riesgos biológicos en una estrategia concreta de prevención. Esta planificación protege la salud de los trabajadores, fortalece el cumplimiento legal y promueve entornos laborales más seguros, sostenibles y responsables, basados en una cultura de mejora continua.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

          p.d-flex.my-4
            img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
            | Organización Mundial de la Salud (OMS). (2014). Guía para la gestión de riesgos biológicos en el lugar de trabajo. OMS.



          p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://www.insst.es/agentes-biologicos-basebio " target="_blank" rel="noopener noreferrer") BaseBIO información sobre bacterias, virus, hongos, parásitos y priones - Portal INSST - INSST. (s. f.). Portal INSST. 
          p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://www.cdc.gov/niosh/index.html " target="_blank" rel="noopener noreferrer") National Institute for Occupational Safety and Health. (2025, 23 febrero). National Institute For Occupational Safety And Health (NIOSH). 

          p.d-flex.my-4
            img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
            a(href="https://youtu.be/mcVBMlAfrgc?si=BqZ3PamXd6Ylm3_z" target="_blank" rel="noopener noreferrer") Proinovative (2025, 3 de marzo) Webinar de Preguntas y Respuestas Fondos para laboratorios,organismos de inspección y certificación. [Video] YouTube.  

 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes elementos NO forma parte del método BIOGAVAL para la evaluación del riesgo biológico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Agente biológico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Probabilidad de exposición',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Edad del trabajador',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Eficacia de las medidas de control',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La edad del trabajador no es un componente del método BIOGAVAL. Este método utiliza los factores A (Agente), P (Probabilidad), E (Eficacia del control) y N (Número de expuestos).',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según la normativa colombiana, ¿cuál decreto reconoce el COVID-19 como enfermedad laboral en el sector salud?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Decreto 1072 de 2015',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Decreto 676 de 2020',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decreto 1477 de 2014',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ley 1562 de 2012',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El Decreto 676 de 2020 reconoce al COVID-19 como una enfermedad laboral para trabajadores del sector salud en Colombia.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es la principal ventaja del uso del método BIOGAVAL en la gestión del riesgo biológico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evita por completo los accidentes biológicos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Es obligatorio según el SG-SST.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Clasifica riesgos para priorizar acciones correctivas.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Se enfoca únicamente en agentes virales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El método BIOGAVAL permite clasificar el nivel de riesgo y priorizar medidas correctivas o preventivas según la exposición.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes no es una enfermedad típicamente asociada a riesgos biológicos laborales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tuberculosis',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Leptospirosis',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Hipertensión arterial',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Hepatitis B',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La hipertensión arterial no está causada por exposición a agentes biológicos; en cambio, las demás son enfermedades infecciosas laborales comunes.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el primer paso para gestionar eficazmente los peligros biológicos en el entorno laboral?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Implementar protocolos de limpieza.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Capacitar al personal.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Identificar y evaluar los riesgos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Proveer EPP a todos los trabajadores.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La gestión efectiva del riesgo comienza con la identificación y evaluación de los peligros biológicos presentes en el entorno laboral.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
