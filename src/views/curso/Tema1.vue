<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Accidentes y/o enfermedades laborales por exposición de riesgo biológico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La exposición a riesgos biológicos en el entorno laboral representa una amenaza significativa para la salud y seguridad de los trabajadores, especialmente en sectores como la salud, los laboratorios clínicos, la industria alimentaria, los servicios de limpieza, la recolección de residuos y la agricultura. En estos contextos, el contacto con agentes infecciosos es frecuente y difícil de evitar, lo que puede derivar en accidentes laborales o enfermedades profesionales asociadas a microorganismos como virus, bacterias, hongos y otros agentes biológicos peligrosos.
    
        .bg-color-2.px-5.py-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La gravedad de estas consecuencias va más allá del impacto en la integridad física de los trabajadores, pues también se manifiesta en niveles emocional, social y económico, tanto para los empleados como para las organizaciones y los sistemas de salud pública. Además, la exposición a estos riesgos conlleva costos elevados relacionados con la atención médica, el ausentismo laboral, la pérdida de productividad y la necesidad de implementar medidas preventivas y de control. Por ello, resulta fundamental fortalecer las estrategias de protección, promover la capacitación constante y establecer protocolos rigurosos que minimicen estos riesgos y garanticen un ambiente laboral seguro y saludable.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Bioseguridad en contextos laborales

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La bioseguridad en contextos laborales se define como el conjunto de normas, prácticas y medidas orientadas a prevenir la exposición a agentes biológicos capaces de provocar enfermedades o accidentes. Su importancia ha crecido en un contexto globalizado, con riesgos emergentes y reemergentes impulsados por factores como el cambio climático y las nuevas tecnologías.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-3.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Este enfoque se aplica a una gran variedad de entornos laborales —desde hospitales y laboratorios hasta plantas de tratamiento de residuos y servicios de limpieza— y exige una visión multidisciplinaria, así como la colaboración entre empleadores, trabajadores, comités de seguridad y autoridades regulatorias.
    
    p.mb-5 Según Álvarez Heredia (2010), la bioseguridad debe entenderse como una doctrina de comportamiento destinada a promover actitudes y conductas que reduzcan el riesgo de adquirir infecciones en el ambiente laboral. Aunque el riesgo biológico no puede eliminarse por completo, sí puede reconocerse y minimizarse mediante estrategias adecuadas. Este compromiso debe extenderse a todas las personas presentes en el entorno asistencial, dentro del marco de una estrategia de disminución de riesgos. A continuación, se presentan los principios clave de la bioseguridad laboral:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Evaluación de riesgos
              p Identificación de peligros biológicos presentes en el entorno laboral, valorando su probabilidad de ocurrencia y su impacto potencial.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Controles jerárquicos
              p Aplicación de medidas en orden prioritario: eliminación del riesgo, sustitución por agentes menos peligrosos, controles de ingeniería, controles administrativos y EPP.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Buenas prácticas de trabajo
              p Establecimiento de hábitos seguros como el lavado frecuente de manos, desinfección de superficies y adecuada eliminación de residuos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Capacitación y educación
              p Formación continua en bioseguridad, actualización de procedimientos y sensibilización sobre el autocuidado.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Aplicación de la bioseguridad en diferentes sectores laborales
    
    p.mb-0 Cada sector presenta riesgos específicos que requieren la adaptación de las medidas de bioseguridad, ya que las condiciones y tipos de exposición varían según la actividad y el entorno. Por ello, es imprescindible diseñar protocolos adecuados que protejan la salud de los trabajadores y de la comunidad, y que prevengan infecciones y accidentes biológicos.
    p.mb-5 A continuación, se presentan los principales sectores y las estrategias de bioseguridad aplicadas en cada uno:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Salud")
            p Uso riguroso de EPP (guantes, mascarillas, batas, protectores oculares y respiradores). Protocolos de aislamiento, desinfección rigurosa, manejo seguro de residuos clínicos. Vacunación preventiva (hepatitis B, influenza). Disposición segura de material cortopunzante.
    
          .div(titulo="Laboratorios")
            p Clasificación del riesgo biológico (BSL 1 a BSL 4). Infraestructura especializada (cabinas de seguridad, ventilación, acceso restringido). Capacitación intensiva. Protocolos de descontaminación y manejo seguro de agentes peligrosos.
    
          .div(titulo="Industria alimentaria")
            p Control de la cadena de frío, manipulación higiénica de alimentos. Uso de uniformes y guantes limpios. Desinfección constante de superficies. Vigilancia epidemiológica y capacitación continua del personal.
    
          .div(titulo="Agricultura y ganadería")
            p Vigilancia sanitaria animal, control de plagas, uso de ropa y equipos de protección. Vacunación de animales. Gestión adecuada de residuos, desinfección de instalaciones y control de accesos.
          
          .div(titulo="Gestión de residuos y limpieza")
            p Uso obligatorio de EPP. Capacitación específica en bioseguridad. Normas de desinfección y eliminación de residuos. Segregación adecuada, almacenamiento temporal seguro y disposición final controlada. Higiene personal y desinfección de equipos y vehículos.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-3.py-4.px-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La implementación de estas medidas, adaptadas a las particularidades de cada sector, es esencial para reducir riesgos, garantizar la salud de los trabajadores y asegurar el funcionamiento seguro de las actividades. La formación continua, la vigilancia activa y la evaluación periódica de los protocolos son fundamentales para prevenir la propagación de agentes infecciosos y mantener un entorno laboral seguro.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.text-white
            h2.mb-4(data-aos="flip-up") Accidentes y enfermedades laborales por exposición de riesgo biológico
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Accidentes y Enfermedades laborales por exposición de riesgo biológico, donde se aborda el impacto de la exposición a agentes biológicos en el entorno laboral, especialmente en sectores como la salud, la agricultura y la construcción. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Accidentes y enfermedades laborales por exposición de riesgo biológico
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Accidentes de trabajo por riesgo biológico

    .bg-full-width.bg-color-6
      .p-4.p-md-5
        .bg-color-7.bor.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-2.p-5.p-lg-0
                  p **Los accidentes laborales por riesgo biológico son eventos inesperados que exponen involuntariamente al trabajador a agentes peligrosos como virus, bacterias, hongos u otros microorganismos patógenos. Estos incidentes pueden tener consecuencias graves para la salud, desde infecciones leves hasta enfermedades graves o incluso la muerte en casos extremos, por lo que requieren atención inmediata y protocolos específicos.
                  p Este tipo de accidentes ocurre con mayor frecuencia en sectores como el de la salud, laboratorios, centros de investigación y actividades que implican la manipulación de muestras biológicas. La exposición puede derivarse de diversas situaciones que deben ser reconocidas y abordadas de manera oportuna para reducir los riesgos.
                  p.mb-0 A continuación, se resumen las formas más comunes de accidentes por riesgo biológico:
                .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                  img.img-fluid(src='@/assets/curso/tema1/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/13.svg" alt="" style="width: 90px")
              h5.text-center Pinchazos accidentales
              p.mb-0.text-center Heridas con agujas u objetos punzantes contaminados, con riesgo de introducir agentes infecciosos directamente al torrente sanguíneo.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/14.svg" alt="" style="width: 90px")
              h5.text-center Contacto con mucosas o piel no intacta
              p.mb-0.text-center Exposición de ojos, boca o piel lesionada a sangre o fluidos corporales, facilitando la entrada de microorganismos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/15.svg" alt="" style="width: 90px")
              h5.text-center Inhalación de aerosoles contaminados
              p.mb-0.text-center Riesgo de exposición durante procedimientos clínicos, diagnósticos o de laboratorio que generan partículas infecciosas suspendidas en el aire.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/16.svg" alt="" style="width: 90px")
              h5.text-center Mordeduras o rasguños de animales infectados
              p.mb-0.text-center Lesiones provocadas por animales que portan agentes infecciosos como el virus de la rabia, Leptospira, o zoonosis de origen silvestre o doméstico.

    h2(data-aos="fade-left") Acciones ante un accidente biológico
    p.mb-5 El reconocimiento inmediato del accidente permite activar los protocolos de respuesta médica y administrativa. Las acciones clave incluyen:

    .row.justify-content-center.align-items-center.bg-color-2.bg-full-width.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-5
            ul.lista-ul--color
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Lavado y desinfección inmediata de la zona afectada.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Evaluación clínica inicial y pruebas diagnósticas pertinentes.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Administración de tratamientos profilácticos (vacunas, antivirales, antibacterianos), según el agente implicado.
              li.mb-2.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Registro del incidente y seguimiento médico del trabajador expuesto.
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 Las medidas preventivas esenciales son:

    .bg-full-width.bg-color-6
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/18.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Capacitación constante del personal.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/19.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Uso adecuado de Equipos de Protección Personal (EPP).
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/20.png" alt="")
              .custom-image-card__text.p-4.text-center
                p.mb-0 Estricto cumplimiento de normas y protocolos de bioseguridad.
    
        .bg-full-width.bg-color-8.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 Estos accidentes representan una amenaza real para la salud laboral. Por tanto, la vigilancia constante, la prevención eficaz y una respuesta rápida son pilares fundamentales para garantizar entornos de trabajo seguros y proteger a quienes están expuestos a riesgos biológicos.








    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/172495 " target="_blank" rel="noopener noreferrer") Simes, L. E. (2020). Manual de bioseguridad y bioprotección: ( ed.). Jorge Sarmiento Editor - Universitas. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.insst.es/agentes-biologicos-basebio " target="_blank" rel="noopener noreferrer") BaseBIO información sobre bacterias, virus, hongos, parásitos y priones - Portal INSST - INSST. (s. f.). Portal INSST. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cdc.gov/niosh/index.html " target="_blank" rel="noopener noreferrer") National Institute for Occupational Safety and Health. (2025, 23 febrero). National Institute For Occupational Safety And Health (NIOSH). 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/v6yVkMvx0_Y?si=t187EIHbG2hESoIF " target="_blank" rel="noopener noreferrer") Artesanías de Colombia. (2020, 26 de mayo) Cómo hacer tu protocolo de bioseguridad. [Video] YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
