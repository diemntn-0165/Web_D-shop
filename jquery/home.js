$(document).ready(function() {
    
  axios.get('http://localhost:3000/').then((data)=>
    {
      const data_item = data.data.data[0];
      const data_skirt = data.data.data[1];
      const data_coat = data.data.data[2];
      const data_pants = data.data.data[3];
      for (let i = 0; i < 10; i++) {
  
        const item = data_item[i];  
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ item.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ item.item_name +'</p>'+
        '<h6 class="card-title">'+ item.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-item');
        
        
      }
      for (let i = 0; i < 5; i++) {
        const skirt = data_skirt[i];      
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ skirt.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ skirt.item_name +'</p>'+
        '<h6 class="card-title">'+ skirt.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-skirt');
        
        const coat = data_coat[i];      
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+ '<img class="card-img-top" src="./public/images/'+ coat.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ coat.item_name +'</p>'+
        '<h6 class="card-title">'+ coat.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-coat');
  
        const pants = data_pants[i];      
        // console.log("1212", pants);
        $('<div class="col-sm-2 khoiPic">'+'<div class="card">'+'<img class="card-img-top" src="./public/images/'+ pants.img +'">'+ '<div class="card-body">'+
        '<p class="card-text">'+ pants.item_name +'</p>'+
        '<h6 class="card-title">'+ pants.price +' ¥</h6>'+
        '<button class="btn btn-outline-secondary btn_add-to-cart ">かごに追加</button>'
        +'</div>'
        +'</div>'+'</div>')
        .appendTo('div.hot-pants');
        
        
      }
      
      
      $(".btn_add-to-cart").click(function(){
        // $('<tr>'+
        //   '<td>2</td>'+
        //   '<td>'+
        //     '<img src="../assets/img/product/nokia-asha-311.jpg" class="hinhdaidien">'+
        //   '</td>'+
        //   '<td>Nokia Asha 311</td>'+
        //   '<td class="text-right">4</td>'+
        //   '<td class="text-right">2,699,000.00</td>'+
        //   '<td class="text-right">1,0796,000</td>'+
        //   '<td>'+
        //     '<a id="delete_2" data-sp-ma="6" class="btn btn-danger btn-delete-sanpham">'+
        //         '<i class="fa fa-trash" aria-hidden="true"></i> Xóa'+
        //     '</a>'+
        //   '</td>'+
        //   '</tr>')
        //   .appendTo('cart__items');
          location.replace('/cart.html');
    })
  
    }).catch(err=>{console.log(err);
    });
    
   


  });

