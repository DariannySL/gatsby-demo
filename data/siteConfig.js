module.exports = {
  siteTitle: 'Hola! Soy Darianny Santana',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Darianny Santana',
  twitterUsername: 'Ninguno',
  githubUsername: 'DariannySL',
  authorAvatar: '/images/avatar2.jpg',
  authorDescription: `Me gusta considerarme mas que como una estudiante, una futura ingeniera en software. 
  La razon principal por la que me embarque en esta carrera fue porque amo el diseño grafico y hasta el momento 
  todas las experiencias que he podido obtener en la misma son más que gratificantes. Comence interesandome en 
  lo que eran las paginas web y al final me enamore de lo qie vi, por lo que principalmente me empeño en aprender
  HTML, CSS y JavaScript.`,
  skills: [
    {
      name: 'HTML',
      level: 75
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 30
    },
    {
      name: 'C#',
      level: 70
    },
    {
      name: 'React',
      level: 25
    },
    {
      name: 'Git',
      level: 40
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      begin: {
        month: '1',
        year: 'Uno'
      },
      duration: 'Siempre',
      occupation: "Leer",
      description: "Creo que todo ser humano deberia tener como objetivo principal leer, pues es la manera mas sencilla de construirte o transformarte a ti mismo."
  
    },  {
      begin: {
        month: '2',
        year: 'Dos'
      },
      duration: 'Cuando el corazón lo amerita',
      occupation: "Escribir",
      description: "A traves de la escritura puedo batir las alas que el resto se esfuerza por mantener quietas. Escribir es sinonimo de libertad y ya se que escriba sobre mis angeles o demonios, al terminar siempre siento una especie de paz interior."
  
    }, {
      begin: {
        month: '3',
        year: 'Tres'
      },
      duration: 'De vez en cuando',
      occupation: "Dibujar",
      description: "Amo dibujar porque no solo se trata de hacer trazos bonitos. Dibujar va mas allá, es poner tu sentimientos, emociones y deseos en un papel y que los demás entiendan que significa."
    
    }, {
      begin: {
        month: '4',
        year: 'Cuatro'
      },
      duration: 'Siempre',
      occupation: "Reir",
      description: "Con total sinceridad, creo que reír es lo que mas me gusta hacer. No es por ser creída, pero reir es mi mejor cualidad. La risa cura los males del alma."
  
    },
  ],

  portifolio: [
    {
      image: "/images/friends.png",
      description: "Me gusta estar con quienes amo"
    },
    {
      image: "/images/animals.png",
      description: "Me gustan los perritos"
    },
    {
      image: "/images/books.png",
      description: "Me gustan los libros"
    },
    {
      image: "/images/pasta.png",
      description: "Me gusta la pasta"
    },
    {
      image: "/images/plant.png",
      description: "Me gusta la naturaleza"
    },
    {
      image: "/images/camera.png",
      description: "Me gusta tomar fotografias"
    },
    {
      image: "/images/anime.png",
      description: "Me gusta ver anime"
    },
    {
      image: "/images/film.png",
      description: "Me gusta ver peliculas"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "Ninguna",
    linkedin: "Ninguna",
    github: "https://github.com/DariannySL",
    email: "dariannysantana18@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover2.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Sobre mí',
      url: '/',
    },
    {
      label: 'Gustos',
      url: '/portifolio',
    }
  ]
}