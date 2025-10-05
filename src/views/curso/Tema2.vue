<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evaluación del riesgo biológico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") La evaluación del riesgo biológico es un componente esencial en la gestión de la seguridad y salud en el trabajo, especialmente en actividades donde los trabajadores están expuestos a agentes de origen biológico como virus, bacterias, hongos, parásitos o priones. Estos agentes pueden provocar enfermedades infecciosas de diversa gravedad, desde leves hasta potencialmente mortales. Por tanto, una evaluación adecuada permite implementar medidas preventivas y de control eficaces, protegiendo así la salud del personal.
    
    p.mb-5 Este proceso debe formar parte integral del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), y debe estar incluido en la matriz de identificación de peligros de la organización. El análisis del riesgo biológico implica:

    .row.justify-content-center.align-items-center.bg-color-9.bg-full-width
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5
            ul.lista-ul--color
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Identificar los agentes biológicos presentes.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Determinar la forma, frecuencia y duración de la exposición.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Analizar las condiciones del entorno laboral.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Evaluar el nivel de protección actual (EPP, infraestructura, prácticas).
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Estimar la probabilidad de ocurrencia y las consecuencias asociadas.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-10.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Una herramienta útil para este análisis es el método BIOGAVAL, diseñado para proporcionar una evaluación estructurada y semicuantitativa del riesgo biológico, aplicable en entornos como la salud, investigación, agroindustria, manejo de residuos y laboratorios.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Objetivo")
            p Identificar, valorar y clasificar el riesgo biológico para tomar decisiones sobre prevención y control.
    
          .div(titulo="Enfoque")
            p Semicuantitativo: combina datos cualitativos con escalas numéricas para priorizar riesgos.
    
          .div(titulo="Campos de aplicación")
            p Salud, investigación, agroindustria, laboratorios, gestión de residuos.
    
          .div(titulo="Etapas principales")
            p <b>1</b>. Identificación de agentes 
            p <b>2</b>. Evaluación de exposición 
            p <b>3</b>. Análisis del entorno 
            p <b>4</b>. Valoración de medidas existentes 
            p <b>5</b>. Clasificación del riesgo
          
          .div(titulo="Resultados esperados")
            p Determinación del nivel de riesgo (bajo, medio, alto) y definición de medidas correctivas o preventivas.

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La evaluación del riesgo biológico permite tomar decisiones informadas sobre el diseño de espacios, la implementación de protocolos de bioseguridad, la selección adecuada de EPP, la capacitación continua del personal y el fortalecimiento de la vigilancia epidemiológica institucional.
    
    h2(data-aos="fade-left").mb-5 El método BIOGAVAL

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 El método BIOGAVAL es una herramienta desarrollada por el Grupo de Actividades Variadas en Laboratorios (GAVAL), diseñada para evaluar el riesgo biológico en los lugares de trabajo de forma cualitativa y semicuantitativa. Su propósito es proporcionar un enfoque práctico que permita clasificar el nivel de riesgo y priorizar acciones correctivas o preventivas según la exposición de los trabajadores a agentes biológicos peligrosos.

    ul.lista-ul--color
      li.mb-0.d-flex
        i.far.fa-arrow-alt-circle-right
        p.mb-0 Componentes del método BIOGAVAL
    
    p.mb-5 Este método considera cuatro factores clave para calcular el nivel de riesgo:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-9
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="10%" y="35.5%" numero="+")
                h5 A - Agente biológico
                p Se evalúa la peligrosidad del agente utilizando su clasificación en grupos de riesgo (1 a 4), según normas de la OMS o la Unión Europea.
    
              .bg-color-white.box-shadow.p-3(x="28%" y="18%" numero="+")
                h5 P - Probabilidad de exposición
                p Se analiza la frecuencia y duración de la exposición del trabajador al agente biológico.
    
              .bg-color-white.box-shadow.p-3(x="72%" y="16%" numero="+")
                h5 E - Eficacia de las medidas de control
                p Se valoran las condiciones laborales y las medidas de protección existentes, como EPP, controles de ingeniería y protocolos.
    
              .bg-color-white.box-shadow.p-3(x="90%" y="35%" numero="+")
                h5 N - Número de personas expuestas
                p Se estima cuántos trabajadores podrían estar en contacto con el agente biológico en un entorno específico.
    
    .bg-color-7.bor.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-2
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  h5 Fórmula del método BIOGAVAL 
                p.ms-4 La fórmula para determinar el nivel de riesgo es:

                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  h5 Riesgo = A x P x E x N 
                p.ms-4 El valor obtenido se clasifica en distintos niveles de riesgo (bajo, medio, alto o muy alto), lo cual facilita la priorización de medidas preventivas y correctivas.

            .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema2/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Aplicación práctica del método
    p.mb-5 El método BIOGAVAL puede aplicarse en cualquier organización con riesgo biológico. Los pasos habituales para su implementación son:

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.py-5.px-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Identificar las tareas y procesos que implican exposición a agentes biológicos.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reconocer los agentes asociados, utilizando fuentes científicas, listas oficiales o análisis de laboratorio.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Asignar valores a los factores A, P, E y N con base en las tablas definidas por la metodología.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Calcular el nivel de riesgo y clasificarlo.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Establecer acciones de control, priorizando los riesgos más altos.
  
    p.mb-5 Las ventajas del método BIOGAVAL:

    .row.justify-content-center.align-items-center.bg-color-12.bg-full-width
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5.order-lg-2
            ul.lista-ul--color
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Sistematiza la evaluación del riesgo biológico e integra fácilmente en la matriz de peligros del SG-SST.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Permite priorizar intervenciones con base en un análisis técnico.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Es flexible y adaptable a diferentes sectores y actividades.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Fomenta el trabajo interdisciplinario entre profesionales de salud ocupacional, microbiología, ingeniería y gestión.
          .col-lg-5(data-aos="zoom-in").order-lg-1
            img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Integrar el método BIOGAVAL en los sistemas de gestión permite reducir significativamente la incidencia de enfermedades laborales de origen biológico, promover ambientes de trabajo más seguros y cumplir con la normativa vigente en Colombia.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/52145 " target="_blank" rel="noopener noreferrer") Pascual Álvarez, G. (2017). Libro naranja: bioseguridad para Instalaciones de Nivel 3 de contención biológica: procedimientos: ( ed.). INIA - Instituto Nacional de Investigación y Tecnología Agraria y Alimentaria. 

 



          p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://www.insst.es/agentes-biologicos-basebio " target="_blank" rel="noopener noreferrer") BaseBIO información sobre bacterias, virus, hongos, parásitos y priones - Portal INSST - INSST. (s. f.). Portal INSST. 
          p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://www.cdc.gov/niosh/index.html " target="_blank" rel="noopener noreferrer") National Institute for Occupational Safety and Health. (2025, 23 febrero). National Institute For Occupational Safety And Health (NIOSH). 

          p.d-flex.my-4
            img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
            a(href="https://youtu.be/e01mElvFUFk?si=2FVrWMirhBBXlOMh  " target="_blank" rel="noopener noreferrer") SFPIE UV. (2017, 4 de diciembre) 2.2 Riesgos biológicos y químicos. [Video] YouTube. 


            
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
