# Reactによる簡易的動画配信サービス

```
docker compose up
```

http://localhost:8090/control/get?room=movie にアクセス (これでmovieというroomが作れる，ハッシュっぽい?ので出てくるキーは固定)

http://localhost:3000/ にアクセス

OBSで rtmp://localhost:1935/live/ ，キー movie で配信する (さっき作ったルーム名)

app.jsのurlをルーム作ったときに出てきたキーで書き換える

ブラウザリロード
