$(function() {
  'use strict';
  var $modal     = $('#modal'),
      $modalContents  = $('#modal_box_inner_contents'),
      display    = false,
      getData   = false,
      speed = 500,
      jsonData,
      imghtml = "",
      html = "";

  //jsonから情報の取得
  $.getJSON("data.json", null, function(data){
    jsonData = data;
    getData = true;
    console.log('getdata');

    //画像のプリロード
    for(var n in jsonData){
        var imgData = jsonData[n]["imglink"];
        imghtml += '  <img src="' + imgData + '" alt="">\n';
    }
    $('#imgpreload').html(imghtml);
  });


  $('.buttonbox_item_button, #modal_overlay, #modal_box_inner_btn').on('click', function(e) {
    e.preventDefault();
    var $href = $(this).attr('data-href');
    console.log($href);

    if(!display && getData){
      dataParser (
        $href,
        function(){
          //モーダルを開く
          if(html !== ""){
            $modal.fadeIn(speed);
            display = true;
          }
        }
      );
    }else if(display){
      //モーダルを閉じる
      $modal.fadeOut(speed,function(){
        //モーダル内コンテンツ破棄
        $modalContents.html('');
        html = "";
        display = false;
      });
    }
  });

  function dataParser (name,f){
    //情報をパース
    for(var p in jsonData){
      if(p == name) {
        var applicableData = jsonData[p];
        html += '            <dt class="modal_box_inner_contents_ttl">' + applicableData["ttl"] + '</dt>';
        html += '            <dd class="modal_box_inner_contents_description">\n';
        html += '              <img class="modal_box_inner_contents_description_img" src="' + applicableData["imglink"] +'" alt="">';
        html += '              <p class="modal_box_inner_contents_description_txt">' + applicableData["txt"] + '</p>';
        html += '            </dd>';

        //情報をhtmlへ挿入
        $modalContents.html(html);

        //コールバック実行
        f();
        break;
      }
    }
  }

});