export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Accidentes y/o Enfermedades laborales por exposición de riesgo biológico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Accidentes y/o enfermedades laborales por exposición de riesgo biológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Bioseguridad en contextos laborales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Aplicación de la bioseguridad en diferentes sectores laborales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Accidentes de trabajo por riesgo biológico',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evaluación del riesgo biológico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Evaluación de cumplimiento de requisitos legales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Objetivos, indicadores y planes de acción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Álvarez Heredia, F. (2010). Riesgos biológicos y bioseguridad: (2 ed.). Ecoe Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/69149?page=96 ',
    },
    {
      referencia:
        'Simes, L. E. (2020). Manual de bioseguridad y bioprotección: ( ed.). Jorge Sarmiento Editor - Universitas.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/172495',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2014). Decreto 1477 de 2014: Por el cual se expide la Tabla de Enfermedades Laborales. Diario Oficial No. 49.196.',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2015). Decreto 1072 de 2015: Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Diario Oficial No. 49.523.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo. (2025, 28 de enero). Guía técnica para la evaluación y prevención de los riesgos relacionados con la exposición a agentes biológicos durante el trabajo (3.ª ed.). ',
      link:
        'https://www.insst.es/documentacion/catalogo-de-publicaciones/guia-tecnica-para-la-evaluacion-y-prevencion-de-los-riesgos-relacionados-con-la-exposicion-a-agentes-biologicos ',
    },
    {
      referencia:
        'Instituto Nacional de Seguridad y Salud en el Trabajo. (s. f.). Gestión de los riesgos biológicos. En INSST.   ',
      link:
        'https://www.insst.es/materias/riesgos/riesgos-biologicos/gestion-de-los-riesgos-biologicos',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Resolución 666 de 2020: Por medio de la cual se adopta el protocolo general de bioseguridad para mitigar, controlar y realizar el adecuado manejo de la pandemia del coronavirus COVID-19 (Diario Oficial No. 51 295, 24 de abril de 2020).',
      link: '',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019, 13 de febrero). Resolución 0312 de 2019: Por la cual se definen los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) (Resolución No. 0312). Diario Oficial.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO 45001:2018 - Occupational health and safety management systems — Requirements with guidance for use.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012, 11 de julio). Ley 1562 de 2012: Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de salud ocupacional (Diario Oficial No. 48 488).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Agente biológico',
      significado:
        'organismo, microorganismo, toxina o material biológico que puede causar daño a la salud humana.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de normas, prácticas y medidas destinadas a prevenir la exposición a agentes biológicos en contextos laborales.',
    },
    {
      termino: 'COVID-19',
      significado:
        'enfermedad causada por el coronavirus SARS-CoV-2, reconocida como enfermedad laboral en el sector salud según el Decreto 676 de 2020 en Colombia.',
    },
    {
      termino: 'Decreto 1072 de 2015',
      significado:
        'norma que reglamenta el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST) en Colombia.',
    },
    {
      termino: 'Decreto 1477 de 2014',
      significado:
        'norma que establece la Tabla de Enfermedades Laborales en Colombia.',
    },
    {
      termino: 'Decreto 676 de 2020',
      significado:
        'normativa colombiana que reconoce el COVID-19 como enfermedad laboral en el sector salud.',
    },
    {
      termino: 'Enfermedad laboral',
      significado:
        'condición de salud adquirida como resultado directo del trabajo o del entorno laboral.',
    },
    {
      termino: 'Equipo de Protección Personal (EPP)',
      significado:
        'dispositivos o prendas utilizados para proteger al trabajador de riesgos que puedan amenazar su seguridad o salud.',
    },
    {
      termino: 'Evaluación del riesgo biológico',
      significado:
        'proceso de identificación, análisis y valoración de los riesgos biológicos presentes en un entorno laboral.',
    },
    {
      termino: 'Indicadores de gestión',
      significado: 'Indicadores de gestión:',
    },
    {
      termino: 'Método BIOGAVAL',
      significado:
        'herramienta cualitativa y semicuantitativa para evaluar el riesgo biológico en ambientes laborales.',
    },
    {
      termino: 'Objetivos del SG-SST',
      significado:
        'metas específicas, medibles, alcanzables, relevantes y temporales relacionadas con la gestión del riesgo biológico.',
    },
    {
      termino: 'Riesgo biológico',
      significado:
        'probabilidad de que un agente biológico cause daño a la salud de los trabajadores.',
    },
    {
      termino: 'SG-SST',
      significado:
        'Sistema de Gestión de Seguridad y Salud en el Trabajo, orientado a prevenir accidentes y enfermedades laborales.',
    },
  ],
}
