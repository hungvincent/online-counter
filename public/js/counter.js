// 商品數量
function totalPrice(total) {
    $(".counter_product_item").each(function(){
        let itemNum = parseInt($(this).find(".product_num_input").val());
        let itemPrice = parseInt($(this).find(".product_price_input").val());
        if(itemPrice > 0) {
            itemPrice = itemPrice;
        }else {
            itemPrice = 0
        }
        if(itemNum > 0) {
            itemNum = itemNum;
        }else {
            itemNum = 0
        }
        total = total + itemNum * itemPrice;
        // console.log("itemNum=" + itemNum + ",itemPrice=" + itemPrice);
    })
    $(".counter_product_total").text(total);
    // console.log(total);
}

$(document).on("click",".product_num_btn", function(){
    let num = parseInt($(this).parents(".product_num").find("input").val());
    // console.log(num);
    if($(this).hasClass("minus")) {
        if(num > 0) {
            num = num - 1;
        }else {
            num = 0;
        }
    }else if($(this).hasClass("plus")) {
        if(num >= 0) {
            num = num + 1;
        }else {
            num = 0;
        }
    }
    $(this).parents(".product_num").find("input").val(num);
    let total = 0;
    // totalPrice(total);
})

$(document).on("change", ".product_price_input, .product_num_input", function(){
    let total = 0;
    totalPrice(total);
})

$(".check_btn").click(function(){
    let productName,productNum, productPrice, total;
    $("#productTab").find(".nav-link").each(function(){
        let target = $(this).data("bs-target");
        console.log("target:" + target);
        $(target).find(".counter_product_item").each(function(){ 
            productNum = $(this).find(".product_num_input").val();
            productPrice = $(this).find(".product_price_input").val();
            if(productNum > 0 && productPrice > 0) {
                productName = $(this).find(".pn").text();
                console.log("產品：" + productName + ",數量：" + productNum + ",金額" + productPrice);
            }
        })
    })
})

// tw-city-selector.js
var a = new TwCitySelector({
    el: "#dvAddress1",
    // hasZipcode: true,
    elCounty: "#county", // 在 el 裡查找 dom
    elDistrict: "#district", // 在 el 裡查找 dom
    elZipcode: "#code" // 在 el 裡查找 dom
  });

  // 縣市select跟地址input連動
// $(document).on("change", ".county", function () {
//     let county = $(this).val();
//     $(".cAddress").val(county);
//   });
//   $(document).on("change", ".district", function () {
//     let district = $(this).val();
//     let county = $(".county").val();
//     if (!$(".county").val() == "") {
//       $(".cAddress").val(county + district);
//     }
  
//     let code = $("#code").val();
//     console.log("code=" + code);
//     $(".cZip.ac_input").val(code);
//   });
  
//   $(document).on("click",".btn-add-data", function(){
//     let code = $("#code").val();
//     console.log("code=" + code);
//   })