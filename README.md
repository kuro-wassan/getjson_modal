# getjson_modal.js
同サーバー内にあるJSONデータを取り出して、モーダルウィンドウで表示させる簡易jsソース。jQueryを使用。

クソコードです。

## 使い方

```bash
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
```

```bash
{
  "dog":
    {
    "imglink":"img/dog_chihuahua_choco_tan.png",
    "ttl":"犬",
    "txt":"これは犬です。これは犬です。"
    }
}
```

`applicableData["hoge"]`のhogeに呼び出したいJSON内のキーを指定してください。

その他HTMLはご自身でカスタマイズください。