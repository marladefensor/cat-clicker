$(document).ready(function() {
  let cat1click = 0;
  let cat2click = 0;
  let cat3click = 0;
  let cat4click = 0;
  let cat5click = 0;

  //click first button
  $('#cat1').on('click', () => {
    catGenerator('Milky','images/erik-jan-leusink-IbPxGLgJiMI-unsplash.jpg',1,cat1click);
    clicked();
  });

  //click second button
  $('#cat2').on('click', () => {
    catGenerator('Peanut','images/jae-park-7GX5aICb5i4-unsplash.jpg',2,cat2click);
    clicked();
  });

  //click third button
  $('#cat3').on('click', () => {
    catGenerator('Chowder','images/max-baskakov-OzAeZPNsLXk-unsplash.jpg',3,cat3click);
    clicked();
  });

  //click fourth button
  $('#cat4').on('click', () => {
    catGenerator('Penelope','images/ramiz-dedakovic-9SWHIgu8A8k-unsplash.jpg',4,cat4click)
    clicked();
  });

  //click fifth button
  $('#cat5').on('click', () => {
    catGenerator('Russell','images/rana-sawalha-X7UR0BDz-UY-unsplash.jpg',5,cat5click);
    clicked();
  });

  function catGenerator(name,imagePath,catNum,catClicks) {
    $('#text').replaceWith(`<h2 id="text">${name}</h2>`);
    $('#count').replaceWith(`<span id="count" class="badge badge-secondary">Clicked: </span>`);
    $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${catClicks}<span>`);
    $('#image').replaceWith(`<p><img id="image" class="cat-pic" src="${imagePath}" alt="picture of cat ${catNum}"></p>`);
  }

  function clicked() {
    $('#image').on('click', () => {
      // console.log('cat image clicked!!');
      let name = $('#text').text();
      // console.log(`cat's name: ${name}`);
      if(name === 'Milky') {
        // console.log(`it's milky!!!`);
        cat1click++;
        $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${cat1click}<span>`);
      }
      else if(name === 'Peanut') {
        cat2click++;
        $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${cat2click}<span>`);
      }
      else if(name === 'Chowder') {
        cat3click++;
        $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${cat3click}<span>`);
      }
      else if(name === 'Penelope') {
        cat4click++;
        $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${cat4click}<span>`);
      }
      else if(name === 'Russell') {
        cat5click++;
        $('#num').replaceWith(`<span class="badge badge-secondary" id="num">${cat5click}<span>`);
      }
    })
  };

})
