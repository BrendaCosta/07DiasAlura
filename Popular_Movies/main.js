

const moviesContainer = document.querySelector('.filmes')



function renderMovie(movie) {
 
        
        const movieElement = document.createElement('div')
        movieElement.classList.add('filme')
        moviesContainer.appendChild(movieElement)
        
        const imagemFilme = document.createElement('img')
        imagemFilme.src = movie.image
        imagemFilme.classList.add('filmeimg')
        movieElement.appendChild(imagemFilme)

        const divSecundaria = document.createElement('div')
        divSecundaria.classList.add('info_filme')
        movieElement.appendChild(divSecundaria)

        const tituloFilme = document.createElement('h3')
        tituloFilme.textContent = movie.title
        divSecundaria.appendChild( tituloFilme)

        const acoes = document.createElement('div')
        acoes.classList.add('acoes')
        divSecundaria.appendChild(acoes)


        const iconStart = document.createElement('ion-icon')
        iconStart.classList.add('estrela')
        iconStart.name = "star-outline"
        acoes.appendChild(iconStart)

        const notaFilme = document.createElement('span')
        notaFilme.textContent = movie.rating
        notaFilme.classList.add('nota')
        acoes.appendChild(notaFilme)

        const iconHeart = iconStart.cloneNode(false)
        iconHeart.classList.add('coracao')
        iconHeart.name = "heart-outline"
        acoes.appendChild(iconHeart)

        const iconHeartText = document.createElement('span')
        iconHeartText.textContent = "Favorita"
        acoes.appendChild(iconHeartText)




      

       

      
      const sinopseFilme = document.createElement('p')
      sinopseFilme.textContent = movie.description
      movieElement.appendChild( sinopseFilme)
    
  

  }



const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.2,
      year: 2022,
      description: "Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. ",
      isFavorited: true,
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
      title: 'Avengers',
      rating: 9.2,
      year: 2019,
      description: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
      isFavorited: false
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      title: 'Doctor Strange',
      rating: 9.2,
      year: 2022,
      description: "O aguardado filme trata da jornada do Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público, o personagem atravessa as realidades alternativas incompreensíveis e perigosas do Multiverso para enfrentar um novo e misterioso adversário.",
      isFavorited: false
    },
    {
      image: 'https://br.web.img3.acsta.net/pictures/20/12/11/10/34/0902853.jpg',
      title: 'WandaVision',
      rating: 9.2,
      year: 2022,
      description: "Três semanas após os eventos de Avengers: Endgame (2019),[1] Wanda Maximoff e Visão estão vivendo uma vida suburbana idílica na cidade de Westview, no estado de New Jersey, tentando esconder suas verdadeiras identidades. À medida que começam a entrar nas novas décadas, o casal suspeita que as coisas não são o que parecem.",
      isFavorited: false
    },
  ]
  
   movies.forEach(movie => renderMovie(movie))