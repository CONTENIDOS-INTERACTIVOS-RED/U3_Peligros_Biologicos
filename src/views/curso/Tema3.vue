<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Título tema'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Subtítulo tema

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
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
