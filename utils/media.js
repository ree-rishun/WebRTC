
// メディアの取得
function getMedia () {
  // video要素の取得
  let localVideo = document.getElementById('local_video')

  // カメラ、オーディオにアクセス
  navigator.mediaDevices.getUserMedia({video : true, audio : false})
    .then(function (stream) {
      // 映像を表示
      localVideo.srcObject = stream
    }).catch(function (error){
    // エラーログ
    console.error('mediaDevices.getUserMedia() error:', error)
    return
  })
}

export default { getMedia }