<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Evaluación de cumplimiento de requisitos legales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La evaluación del cumplimiento de los requisitos legales en materia de peligros biológicos es un componente fundamental del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Este proceso asegura que las actividades, instalaciones y procedimientos de la organización estén alineados con la normativa vigente, protegiendo la salud de los trabajadores y controlando los riesgos biológicos.
    
        .bg-color-2.py-4.px-5(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Evaluar el cumplimiento normativo en este ámbito es más que una exigencia jurídica; representa una estrategia preventiva que reduce la probabilidad de incidentes, enfermedades laborales, sanciones legales y daños reputacionales. Además, fortalece la cultura de bioseguridad, mejora la planificación de los controles y permite priorizar recursos en medidas eficaces. Una evaluación sistemática permite identificar brechas, establecer planes de mejora y garantizar que la gestión del riesgo biológico se realice conforme a los estándares legales mínimos.
        p Dentro del marco normativo colombiano, algunas de las disposiciones más relevantes que regulan el manejo y control de peligros biológicos son:
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Ley 1562 de 2012")
            p Establece el Sistema General de Riesgos Laborales e incluye enfermedades laborales de origen biológico.
    
          .div(titulo="Decreto 1072 de 2015")
            p Exige la implementación del SG-SST y la identificación de todos los peligros, incluyendo los biológicos.
    
          .div(titulo="Resolución 0312 de 2019")
            p Define los estándares mínimos del SG-SST, destacando la inclusión de los riesgos biológicos en la matriz de peligros.
    
          .div(titulo="Resolución 666 de 2020")
            p Contiene protocolos generales de bioseguridad en contextos de emergencia sanitaria (ej. COVID-19).
          
          .div(titulo="Resoluciones sectoriales")
            p Emitidas por el Ministerio de Salud y el Ministerio de Trabajo, establecen guías técnicas específicas para sectores con riesgo biológico.

    p.mb-5 El proceso de evaluación del cumplimiento legal se realiza de manera estructurada y debe formar parte del ciclo PHVA (Planear, Hacer, Verificar, Actuar) del SG-SST. Este proceso incluye cinco pasos esenciales:

    .row.justify-content-center.align-items-center.bg-color-7.bg-full-width.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center.px-4
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-5
            ul.lista-ul--color
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Identificación de requisitos aplicables</b>: Revisión de normas según la actividad económica, los procesos y los riesgos detectados.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Verificación documental y en campo</b>: Comparación entre lo exigido por la norma y lo implementado (EPP, protocolos, capacitaciones, registros, etc.).
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Detección de brechas</b>: Registro de deficiencias o incumplimientos.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Plan de acción</b>: Diseño de medidas correctivas o preventivas.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Seguimiento y reevaluación</b>: Monitoreo del cumplimiento y actualización ante cambios normativos.
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Para facilitar este proceso, las organizaciones pueden apoyarse en herramientas como:
    
        .bg-color-12.p-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-1.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Listas de chequeo o matrices legales que relacionan cada norma con los requisitos específicos.
            li.mb-1.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Sistemas de gestión documental que mantengan actualizada la normativa y sus evidencias.
            li.mb-1.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Auditorías internas o externas que evalúen la conformidad del SG-SST.
            li.mb-1.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Capacitación continua para el personal responsable de la gestión legal y técnica.
        .bg-color-3.p-5(data-aos="fade-left")
          p.mb-0 En síntesis, la evaluación del cumplimiento legal frente a los peligros biológicos no solo evita sanciones, sino que permite identificar falencias, fortalecer los sistemas de gestión y promover una cultura organizacional orientada a la bioseguridad, la prevención y el bienestar laboral.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

          p.d-flex.my-4
            img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
            | Organización Internacional del Trabajo (OIT). (2001). Manual para la elaboración de programas de vigilancia epidemiológica en el trabajo. OIT.



          p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://www.insst.es/agentes-biologicos-basebio " target="_blank" rel="noopener noreferrer") BaseBIO información sobre bacterias, virus, hongos, parásitos y priones - Portal INSST - INSST. (s. f.). Portal INSST. 
          p.d-flex.my-4
            img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
            a(href="https://www.cdc.gov/niosh/index.html " target="_blank" rel="noopener noreferrer") National Institute for Occupational Safety and Health. (2025, 23 febrero). National Institute For Occupational Safety And Health (NIOSH). 

          p.d-flex.my-4
            img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
            a(href="https://youtu.be/WGEy5SLlO64?si=7te48AyqDyCWM5jd " target="_blank" rel="noopener noreferrer") RAMIREZ, CH. A. (2020, 12 de noviembre) CARTILLA RIESGO BIOLÓGICO.  [Video] YouTube. 

 
            
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
