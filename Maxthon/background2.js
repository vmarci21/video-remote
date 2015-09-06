function idje(id){  
  var a = document.getElementById(id);
return a;
}
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
  var rt = window.external.mxGetRuntime();
url = location.href;
frame = rt.storage.getConfig("frame");

framee = inIframe();
if((frame=='true' && framee==true) || (framee==false)){

if(url.indexOf("http://youwatch.org/")>-1 || url.indexOf("http://vidto.me/")>-1 || url.indexOf("http://www.exashare.com/")>-1 || url.indexOf("http://played.to/")>-1 || url.indexOf("http://vishare.us/")>-1 || url.indexOf("http://streamin.to/")>-1 || url.indexOf("http://www.putlocker.com/")>-1 || url.indexOf("http://www.firedrive.com/")>-1 || url.indexOf("http://www.firedrive.com/")>-1 ||  url.indexOf("http://www.video.tt/")>-1 || url.indexOf("https://www.youtube.com")>-1 || url.indexOf("http://videomega.tv/")>-1 || document.getElementsByTagName('video')[0]!=undefined || url.indexOf("http://vodlocker.com/")>-1  || url.indexOf("http://www.allmyvideos.net/")>-1 || url.indexOf("http://vidzi.tv/")>-1 || url.indexOf("http://movreel.com/")>-1 || url.indexOf("http://mooshare.biz/")>-1 || url.indexOf("http://megashare.sc/")>-1 || url.indexOf("https://vimeo.com/")>-1 || url.indexOf(".radio.net")>-1 || url.indexOf("http://videa.hu/player")>-1 || url.indexOf("http://videa.hu/player")>-1 || url.indexOf("http://neodrive.co/embed")>-1 || url.indexOf("http://fastvideo.in/")>-1 || url.indexOf("http://allmyvideos.net/")>-1 || url.indexOf("http://powvideo.net/")>-1 || url.indexOf("http://sharesix.com/")>-1){
setTimeout(function(){
try{
var node = document.createElement("div"); 
node.id = "ide";
if(url.indexOf("https://www.youtube.com")>-1){
document.getElementById('watch8-secondary-actions').appendChild(node); 
   document.getElementById('ide').style.display = 'inline-block';
}else{
document.getElementsByTagName('body')[0].appendChild(node); 
}
idje('ide').innerHTML +='<div id="videoremote0001a" style="color: #4A4A4A;font-size: 13px;"></div>';
}catch(err){
console.log("Video remote: Error: "+err);
}

/*background.js*/

/*background.js end*/

(document.head||document.documentElement).appendChild(s);

}, 3000);
}





}

