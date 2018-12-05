/*global fl, FLfile */

/*eslint-disable no-unused-vars */

// Publish the application
var libs,sounds,image,js,html;
function publish(outFile,libsDir,imageDir,soundsDir,stageName,htmlName) {
  // data = JSON.parse(data)
  // fl.trace(outFile,imageDir,libsDir,soundsDir)
  var base = FLfile.platformPathToURI(getParentPath().replace(fl.getDocumentDOM().name,''))
  // fl.trace(base+imageDir)
  // fl.trace(base+libsDir)
  // fl.trace(base+soundsDir)
  FLfile.createFolder(base+imageDir)
  FLfile.createFolder(base+libsDir)
  FLfile.createFolder(base+soundsDir)
  libs = base+libsDir
  sounds = base+soundsDir
  // return
    var dom = fl.getDocumentDOM()
      if(!dom)return
  dom.publish();
  js = base+outFile
  html =base+ htmlName
  // setTimeout(function () {
  //   FLfile.remove(base+outFile)
  //   FLfile.remove(base+htmlName)
  return base+outFile+ ' '+(base+htmlName)
  // },500)

}
function deleteDir() {
    FLfile.remove(libs)
    FLfile.remove(sounds)
    FLfile.remove(js)
    FLfile.remove(html)
}
function save() {
  fl.saveDocument(fl.getDocumentDOM())
}

// Get the document URI
function getParentPath() {
  var dom = fl.getDocumentDOM()
  if(!dom)return
    var path = dom.path;
    if (path) {
        return path; // get the directory
    }
    return null; // Document not saved yet
}

// Get the name of the document without the extension
function getDocumentName() {
  var dom = fl.getDocumentDOM()
  if(!dom)return
    return dom.name.replace(/\.[a-zA-Z]{3}$/, '');
}
function documentChanged(reload) {
  try {
    var loadSuccess = new ExternalObject("lib:\PlugPlugExternalObject"); //载入所需对象，loadSuccess 记录是否成功载入
  } catch (e) {
    fl.trace(e)
    alert(e);// 如果载入失败，输出错误信息
  }
  // return window
  // fl.trace(window)
  if (loadSuccess) {
    var eventJAX = new CSXSEvent(); //创建事件对象
    eventJAX.type = "com.change"; //设定一个类型名称
    eventJAX.data = " (⋟﹏⋞) !!!"; // 事件要传递的信息
    eventJAX.dispatch(); // GO ! 发送事件
  }
  //
  // fl.addEventListener('documentChanged',function () {
  //   fl.trace(444444)
  //   reload()
  // })
}

// Browse for JS and return the platform path
function browseOutputFile() {
    var uri = fl.browseForFileURL('save','Publish to JavaScript','JS','js');
    if (uri) {
        return FLfile.uriToPlatformPath(uri);
    }
    return null;
}
function updateDocument(reload) {
  fl.addEventListener('documentChanged',function () {
    // fl.trace(444444)
    // reload()
    // fl.trace(reload)
  })
}
function getPublishSettings() {
  var dom = fl.getDocumentDOM()
  if(!dom)return
    var profile = dom.exportPublishProfileString();
    var settings = /Property name\=\"(PublishSettings\.[^\"]+)\"\>([^\<]+)\<\/Property/g;
    var result = "";
    var match = null;
    while(match = settings.exec(profile)) { // eslint-disable-line no-cond-assign
        result += '"' + match[1] + '":"' + match[2] + '",';
    }
    return '{"data":{' + result.slice(0, -1) + '}}';
}

/*eslint-enable no-unused-vars */