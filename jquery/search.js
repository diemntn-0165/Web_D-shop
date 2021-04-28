$(document).ready(function() {  
  $("#search-addon").on("click", function(e) {
    const search_item = $('#search_item').val();
    console.log(search_item);
    axios.post('http://localhost:3000/search', { item_name: search_item}).then((data, message) => {

    if (data.data.message === "Ok") {
      location.replace('/search.html');
      console.log(data.data.data);
      data.data.data.forEach(function(element) {
              $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ element.img +'">'+ '<div class="card-body">'+
              '<p class="card-text">'+ element.item_name +'</p>'+
              '<h6 class="card-title">'+ element.price +' ¥</h6>'+
              '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
              +'</div>'
              +'</div>'+'</div>')
              .appendTo('.search-item');
            });
    }
    else {
      alert("Not found item!!!");

    }
  }).catch(err => {
    console.log('err', err);
  });

  });
  $('#search_item').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      const search_item = $('#search_item').val();
      console.log(search_item);
      axios.post('http://localhost:3000/search', { item_name: search_item}).then((data, message) => {
  
      if (data.data.message === "Ok") {
        console.log(data.data.data);
        data.data.data.forEach(function(element) {
                $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ element.img +'">'+ '<div class="card-body">'+
                '<p class="card-text">'+ element.item_name +'</p>'+
                '<h6 class="card-title">'+ element.price +' ¥</h6>'+
                '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
                +'</div>'
                +'</div>'+'</div>')
                .appendTo('.search-item');
              });
      }
      else {
        alert("Not found item!!!");
  
      }
    }).catch(err => {
      console.log('err', err);
    });
    }
    //Stop the event from propogation to other handlers
    //If this line will be removed, then keypress event handler attached 
    //at document level will also be triggered
    event.stopPropagation();
});


})