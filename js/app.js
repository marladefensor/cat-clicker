$(document).ready(function() {
  let model = {
    cats: [
      {
        name: 'Milky',
        image: 'images/erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg',
        clickCount: 0
      },
      {
        name: 'Peanut',
        image: 'images/jae-park-7GX5aICb5i4-unsplash.jpg',
        clickCount: 0
      },
      {
        name: 'Chowder',
        image: 'images/max-baskakov-OzAeZPNsLXk-unsplash.jpg',
        clickCount: 0
      },
      {
        name: 'Penelope',
        image: 'images/ramiz-dedakovic-9SWHIgu8A8k-unsplash.jpg',
        clickCount: 0
      },
      {
        name: 'Russell',
        image: 'images/rana-sawalha-X7UR0BDz-UY-unsplash.jpg',
        clickCount: 0
      }
    ]
  };

  let octopus = {
    handleClicks: function() {
      $('button').on('click', event => {
        let cat = model.cats[parseInt($(event.target).text()) - 1];
        view.render(cat.name, cat.image, cat.clickCount);
        $('#image').on('click', event => {
          cat.clickCount++;
          $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${cat.clickCount}<span>`);
        });
      });
    },
    init: function() {
      view.init();
      this.handleClicks();
    }
  };

  let view = {
    init: function() {
      console.log('we in!');
      for(let i = 1; i <= 5; i++) {
        $('.btn-group').append(`<button type="button" class="btn btn-secondary" id="cat${i}">${i}</button>`);
      }
    },
    render: function(name,imagePath,catClicks) {
      $('#text').replaceWith(`<h2 id="text">${name}</h2>`);
      $('#count').replaceWith(`<span id="count" class="badge badge-secondary">Clicked: </span>`);
      $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${catClicks}<span>`);
      $('#image').replaceWith(`<p><img id="image" class="cat-pic" src="${imagePath}" alt="picture of cat named ${name}"></p>`);
    }
  };

  octopus.init();
})
