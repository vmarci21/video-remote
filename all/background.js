function idje(id){  
  var a = document.getElementById(id);
return a;
}
function ajax(oldalnev,mit,tovabb,hogy,divid,plus){
var xhr = new XMLHttpRequest();
xhr.open("GET", oldalnev, true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
tovabb( xhr.responseText);
  }
}
xhr.send();
}


function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function kodol(a,b){
var hash = '';
var hash2 = '';
    for (i = 0; i < b.length; i++) {
		char = b.charCodeAt(i);
		hash2 = hash2+''+char;
	}
    for (i = 0; i < a.length; i++) {
		char = a.charCodeAt(i);
        var e = Math.floor((hash2.toString().length*( (i*100)/a.toString().length))/100);
        var char2 = hash2.toString().substr(e, 2);
        char = parseInt(char);
        char2 = parseInt(char2);
        char = char+char2;
        if(char.toString().length==1){
            char = '00'+char;
        }
        if(char.toString().length==2){
            char = '0'+char;
        }
		hash = hash+''+char;
	}

	return hash;
}
function dekodol(a,b){
var szov = '';
var hash2 = '';
    for (i = 0; i < b.length; i++) {
		char = b.charCodeAt(i);
		hash2 = hash2+''+char;
	}
    for (i = 0; i < a.toString().length; i=i+3) {
        var res = a.toString().substr(i, 3);
        if(res.substr(0,1)==0){
        res = res.substr(1,2);
            }
                if(res.substr(0,1)==0){
        res = res.substr(1,2);
            }
         var e = Math.floor((hash2.toString().length*( ((Math.floor(i/3)*100)/Math.floor(a.toString().length/3)))/100));
        var char2 = hash2.toString().substr(e, 2);

       var char = res-char2;
var e = String.fromCharCode(char);
        szov = szov+''+e;
    }
    return szov;
}



bealliturl = '';
html5video = '';
elsoez = true;


url = location.href;
 var userLang = navigator.language || navigator.userLanguage; 
if(userLang=='hu'){
menuname = 'Távirányító';
szov1 = 'Nyisd meg a másik eszközön a következő lapot:';
langp = 'hu';
}else if(userLang=='de' || userLang=='de-DE' || userLang=='de-at' || userLang=='de-AT' || userLang=='de-li' || userLang=='de-LI'){
menuname = 'Entfernt';
szov1 = 'Öffnen Sie die Seite auf dem anderen Gerät:';
langp = 'de';
}else if(userLang=='ro' || userLang=='ro-RO' || userLang=='ro-mo' || userLang=='ro-MO'){
menuname = 'Telecomandă';
szov1 = 'Deschideţi această pagină pe celălalt device:';
langp = 'ro';
}else if(userLang=='sr' || userLang=='sr-SR'){
menuname = 'Daljinski upravljač';
szov1 = 'Otvori na drugu alatku sajt:';
langp = 'sr';
}else{
menuname = 'Remote';
szov1 = 'Open this page on the other device:';
langp = 'en';
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function allapottekero(){
if(lejatszo<10){
kuld(14,jwplayer().getPosition());
}

if(lejatszo==12){
kuld(12,idje('movie_player').getVolume());
kuld(14,idje('movie_player').getCurrentTime());

if(elsoez){
kuld(11,idje('movie_player').getDuration());
var a = idje('movie_player').getVideoData();
kuld(15,a.title);

kuld(90,'');

var v_id = idje('movie_player').getVideoData().video_id;
kuld(17,'http://img.youtube.com/vi/'+v_id+'/0.jpg');
var a = idje('movie_player');
kuld(13,JSON.stringify(a.getAvailableQualityLevels()),true);
if(a.getPlaylist().length>0){
var k = a.getPlaylist();
kuld(20,JSON.stringify(k),true);
var elemek = k[0]+'';
for (i = 1; i < k.length; ++i) {
elemek = elemek+','+k[i];
}

var classlist = document.getElementsByClassName('yt-ui-ellipsis yt-ui-ellipsis-2');
var result = classlist[0].innerHTML;
var result = result.replace(/\r\n/g, "").replace(/\n/g, "");
var kuldj = '["'+result+'"';
for (i = 1; i < classlist.length; ++i) {
var result = classlist[i].innerHTML;
var result = result.replace(/\r\n/g, "").replace(/\n/g, "");
kuldj = kuldj+',"'+result+'"';
}
kuldj = kuldj+']';
kuld(21,kuldj,true);

}
elsoez = false;
}
}
if(lejatszo<50 && lejatszo>40){
kuld(11,flowplayer().getClip().duration);
kuld(14,flowplayer().getTime());
}


if(lejatszo>50){
kuld(11,html5video.duration);
kuld(14,html5video.currentTime);
}
setTimeout(function(){allapottekero();}, 6000);
}

elozourl = location.href;
window.onclick = function () {

setTimeout(function(){ 
if(elozourl!=location.href){

try{
var node = document.createElement("div"); 
node.id = "ide";
document.getElementById('watch8-secondary-actions').appendChild(node); 
document.getElementById('ide').style.display = 'inline-block';
idje('ide').innerHTML ='<div id="videoremote0001a" style="color: #4A4A4A;font-size: 13px;"></div>';
elsoez = true;
play_remote();
}catch(err){
console.log("Video remote: Error: "+err);
}
elozourl = location.href;
}
}, 3000);

}

ws = '';
vanws = false;
myVara = new Array();
id = randomIntFromInterval(1000000000, 999999999999);
pass = randomIntFromInterval(1000000000000, 999999999999999).toString();
function WebSocketStart()
{
  if ("WebSocket" in window)
  {
try{
     ws = new WebSocket("wss://protected-forest-1773.herokuapp.com/");
}catch(err){
if(err.code==18){
idje('videoremote0001a').innerHTML +='<div id="videoremotegomb003" style="position: fixed;top: -1px;right: 10%;background: #fff;padding: 6px 4px;border: 1px solid #999;box-shadow: 1px 1px 1px 1px rgba(132, 132, 132, 0.23);z-index: 10000000000000000000000000;">Engedélyezd a script betöltését, kattints a címsorban a pajzs ikonra. ;) <div style="background: no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-vflQjUB7G.webp) -130px -378px; background-size: auto; width: 20px; height: 20px;display: inline-block;"></div></div>';
}
}
     ws.onopen = function()
     {
     ws.send('{"azonadd":"'+id+'"}');
	vanws = true;

framee = inIframe();
if(lejatszo==12 && framee==false){
idje('videoremote0001a').innerHTML +='<div id="videoremotegomb002" style="position: fixed;bottom: 0;right: 0;left: 0;top: 0;background: #6F6F6F;color: #fff;padding: 20px 4px;z-index: 1000000000000000000000000000;text-align: center;"><img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http%3A%2F%2Fvmtech.into.hu/projekt/videoremote/vezerlo2.php?id='+id+'%26pass='+pass+'&choe=UTF-8%22"><br>'+szov1+': <b>vmtech.into.hu/projekt/videoremote/vezerlo2.php?id='+id+'&pass='+pass+'</b></div>';
}else if(lejatszo==3){
idje('videoremote0001a').innerHTML = '<div id="videoremotegomb002" style="top: -1px;right: 10px;background: #fff;padding: 6px 4px;border: 1px solid #999;box-shadow: 1px 1px 1px 1px rgba(132, 132, 132, 0.23);z-index: 100000;"><img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http%3A%2F%2Fvmtech.into.hu/projekt/videoremote/vezerlo2.php?id='+id+'%26pass='+pass+'&choe=UTF-8%22"><br>'+szov1+': <b>vmtech.into.hu/projekt/videoremote/vezerlo2.php?id='+id+'&pass='+pass+'</b></div><style>div#videoremotegomb002 {position: fixed;}</style>';

}else{
idje('videoremote0001a').innerHTML +='<div id="videoremotegomb002" style="position: fixed;top: -1px;right: 10px;background: #fff;padding: 6px 4px;border: 1px solid #999;box-shadow: 1px 1px 1px 1px rgba(132, 132, 132, 0.23);z-index: 100000;"><img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=http%3A%2F%2Fvmtech.into.hu/projekt/videoremote/vezerlo2.php?id='+id+'%26pass='+pass+'&choe=UTF-8%22"><br>'+szov1+': <b>vmtech.into.hu/projekt/videoremote/vezerlo2.php?id='+id+'&pass='+pass+'</b></div>';
}
     };
     ws.onmessage = function (evt) 
     { 
        var received_msg = evt.data;
try{
var szszov = window.atob(received_msg);
szszov = dekodol(szszov,pass);
 var e = JSON.parse(szszov);

if(e.id==id && e.pass==pass){
if(e.mi==1){
idje('videoremotegomb002').style.display = 'none';
if(lejatszo<10){
kuld(11,jwplayer().getDuration());
kuld(12,jwplayer().getVolume());
jwplayer().onVolume( function(event){
kuld(12,event.volume);
});
allapottekero();

}

if(lejatszo==12){
kuld(11,idje('movie_player').getDuration());
kuld(12,idje('movie_player').getVolume());
allapottekero();
}
if(lejatszo<50 && lejatszo>40){
kuld(11,flowplayer().getClip().duration);
kuld(12,flowplayer().getVolume());
flowplayer().onVolume = function(){
kuld(12,flowplayer().getVolume());
}
muted = false;
flowplayer().onMute = function(){
muted = true;
}
flowplayer().onUnmute = function(){
muted = false;
}
allapottekero();
}
if(lejatszo>50){
kuld(11,html5video.duration);
kuld(12,html5video.volume*100);
html5video.onvolumechange = function(){
kuld(12,html5video.volume*100);
}
allapottekero();
}

if(lejatszo==13){
kuld(12,radioPlayerInstance.volume());
}
if(lejatszo==12){
idje('movie_player').onvolumechange = function(){
kuld(12,html5video.volume*100);
}
}
}else if(e.mi==2){
if(lejatszo<10){
jwplayer().play(true);
}
if(lejatszo==12){
idje('movie_player').playVideo();
}
if(lejatszo<50 && lejatszo>40){
flowplayer().play();
}
if(lejatszo>50){
html5video.play();
}
if(lejatszo==13){
radioPlayerInstance.play();
}

}else if(e.mi==3){
if(lejatszo<10){
jwplayer().pause(true);
}
if(lejatszo==12){
idje('movie_player').pauseVideo();
}
if(lejatszo<50 && lejatszo>40){
flowplayer().pause();
}
if(lejatszo>50){
html5video.pause();
}
if(lejatszo==13){
radioPlayerInstance.pause();
}

}else if(e.mi==4){
if(lejatszo<10){
jwplayer().onvolumechangesetVolume(e.ertek);
}
if(lejatszo==12){
idje('movie_player').setVolume(e.ertek);
}
if(lejatszo<50 && lejatszo>40){
flowplayer().setVolume(e.ertek);
}
if(lejatszo>50){
html5video.volume = e.ertek/100;
}
if(lejatszo==13){
radioPlayerInstance.volume(e.ertek);
}

}else if(e.mi==5){
if(lejatszo<10){
jwplayer().setMute();
}
if(lejatszo==12){
if(idje('movie_player').isMuted()){
idje('movie_player').unMute();
}else{
idje('movie_player').mute();
}
}
if(lejatszo<50 && lejatszo>40){
if(muted){
flowplayer().onUnmute();
}else{
flowplayer().onMute();
}
}
if(lejatszo>50){
if(html5video.muted){
html5video.muted = false;
}else{
html5video.muted = true;
}
}
if(lejatszo==13){
if(radioPlayerInstance.volume==0){
radioPlayerInstance.unmute();
}else{
radioPlayerInstance.mute();
}
}
}else if(e.mi==6){
if(lejatszo<10){
jwplayer().seek(e.ertek);
}

if(lejatszo==12){
idje('movie_player').seekTo(e.ertek);
}
if(lejatszo<50 && lejatszo>40){
flowplayer().seek(e.ertek);
}
if(lejatszo>50){
html5video.currentTime = e.ertek;
}
}else if(e.mi==7){
if(lejatszo<10){
if(e.ertek==1){
jwplayer().seek(jwplayer().getPosition()-40);
}
if(e.ertek==2){
jwplayer().seek(jwplayer().getPosition()-1+40);
}
}
if(lejatszo==12){
elsoez = true;
if(e.ertek==1){
idje('movie_player').previousVideo();
}
if(e.ertek==2){
idje('movie_player').nextVideo();
}
}
if(lejatszo<50 && lejatszo>40){
if(e.ertek==1){
flowplayer().seek(flowplayer().getTime-40);
}
if(e.ertek==2){
flowplayer().seek(flowplayer().getTime-1+40);
}
}
if(lejatszo>50){
if(e.ertek==1){
html5video.currentTime -= 40;
}
if(e.ertek==2){
html5video.currentTime += 40;
}

}


}else if(e.mi==18){
if(lejatszo<10){
e.setFullscreen();
}
if(lejatszo==12){
if(document.getElementsByClassName('ytp-size-button ytp-button')[0]){
document.getElementsByClassName('ytp-size-button ytp-button')[0].click();
}else if(document.getElementsByClassName('ytp-button ytp-size-toggle-large')[0]){
document.getElementsByClassName('ytp-button ytp-size-toggle-large')[0].click();
}else if(document.getElementsByClassName('ytp-button ytp-size-toggle-small ytp-button-pressed')[0]){
document.getElementsByClassName('ytp-button ytp-size-toggle-small ytp-button-pressed')[0].click();
}else if(document.getElementsByClassName('ytp-fullscreen-button ytp-button')[0]){
document.getElementsByClassName('ytp-button ytp-size-toggle-small ytp-button-pressed')[0].click();
}
}
}else if(e.mi==23){
if(lejatszo<10){

}

if(lejatszo==12){
idje('movie_player').setPlaybackQuality(e.ertek);
}
}else if(e.mi==24){
if(lejatszo==12){
if(document.getElementsByClassName('ytp-subtitles-button ytp-button')[0]){
document.getElementsByClassName('ytp-subtitles-button ytp-button')[0].click();
}
}
}else if(e.mi==25){
if(lejatszo==12){
var a = idje('movie_player');
a.loadVideoById(e.ertek);
elsoez = true;
}


}else if(e.mi==99){
if(lejatszo==12){
document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-like-button like-button-renderer-like-button-unclicked  yt-uix-post-anchor yt-uix-tooltip')[0].click();
}
}else if(e.mi==98){
if(lejatszo==12){
document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup like-button-renderer-dislike-button like-button-renderer-dislike-button-unclicked  yt-uix-post-anchor yt-uix-tooltip')[0].click();
}
}else if(e.mi==97){
if(lejatszo==12){
document.getElementsByClassName('yt-uix-button yt-uix-button-size-default yt-uix-button-subscribe-branded yt-uix-button-has-icon no-icon-markup yt-uix-subscription-button yt-can-buffer')[0].click();

}
}
}else{

}

}catch(err) {

}

     };
     ws.onclose = function()
     { 
	vanws = false;
     };
  }
  else
  {

alert('nem támogatott böngésző... :(');
  }
}
function kuld(mi,ertek,tombe){
if(vanws){
if(tombe==true){
var szov = window.btoa(kodol('{"id":'+id+',"mi":'+mi+',"ertek":'+ertek+',"pass":"'+pass+'","versio":"3.0.0"}',pass));
}else{
var szov = window.btoa(kodol('{"id":'+id+',"mi":'+mi+',"ertek":"'+ertek+'","pass":"'+pass+'","versio":"3.0.0"}',pass));
}
 ws.send(szov);
}
}
lejatszo = 0;
elemid = 0;
frame = false;
function play_remote(){
/*JQPLAYER:*/
if(url.indexOf("http://youwatch.org/")>-1){
lejatszo = 1;
}
if(url.indexOf("http://vidto.me/")>-1){
lejatszo = 2;
}
if(url.indexOf("http://www.exashare.com/")>-1){
lejatszo = 3;
}
if(url.indexOf("http://played.to/")>-1){
lejatszo = 4;
}
if(url.indexOf("http://vishare.us/")>-1){
lejatszo = 5;
}
if(url.indexOf("http://streamin.to/")>-1){
lejatszo = 6;
}
if(url.indexOf("http://www.putlocker.com/")>-1 || url.indexOf("http://www.firedrive.com/")>-1){
lejatszo = 7;
}
if(url.indexOf("http://fastvideo.in/")>-1 || url.indexOf("http://allmyvideos.net/")>-1 || url.indexOf("http://powvideo.net/")>-1 || url.indexOf("http://sharesix.com/")>-1){
lejatszo = 8;
}


/*Egyedi:*/
if(url.indexOf("https://www.youtube.com")>-1){
lejatszo = 12;
}
if(url.indexOf(".radio.net")>-1){
lejatszo = 13;
}

/*flowplayer:*/
if(url.indexOf("http://neodrive.co/embed")>-1){
lejatszo = 41;
}
/*HTML5:*/
if(url.indexOf("http://videomega.tv/")>-1){
lejatszo = 51;
html5video = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementById('container_html5_api');
}
if(url.indexOf("https://vimeo.com/")>-1){
lejatszo = 54;
html5video = document.getElementsByTagName('video')[0];
}
if(url.indexOf("http://videa.hu/player")>-1 || url.indexOf("http://videa.hu/player")>-1){
lejatszo = 55;
}


if(document.getElementsByTagName('video')[0] && lejatszo==0){
lejatszo = 52;
html5video = document.getElementsByTagName('video')[0];
}
if(document.getElementsByTagName('audio')[0] && lejatszo==0){
lejatszo = 53;
html5video = document.getElementsByTagName('audio')[0];
}
try{
if(jwplayer != undefined  && lejatszo==0){
lejatszo = 8;
}
}catch(err) {

}finally{
if(lejatszo>0){



framee = inIframe();
if(lejatszo==12 && framee==false){
idje('videoremote0001a').innerHTML ='<button id="videoremotegomb001" class="yt-uix-button yt-uix-button-size-default yt-uix-button-opacity yt-uix-button-has-icon no-icon-markup pause-resume-autoplay action-panel-trigger  yt-uix-tooltip" type="button" onclick=";return false;" title="Remote" data-tooltip-text="Remote" aria-labelledby="yt-uix-tooltip47-arialabel"><span class="yt-uix-button-content">Remote</span></button>';
}else if(lejatszo==3){
idje('videoremote0001a').innerHTML = '<div style="top: -1px;right: 10px;background: #fff;padding: 6px 4px;border: 1px solid #999;box-shadow: 1px 1px 1px 1px rgba(132, 132, 132, 0.23);z-index: 100000;" id="videoremotegomb001">'+menuname+'</div><style>div#videoremotegomb001 {position: fixed;}</style>';
}else{
idje('videoremote0001a').innerHTML ='<div style="position: fixed;top: -1px;right: 10px;background: #fff;padding: 6px 4px;border: 1px solid #999;box-shadow: 1px 1px 1px 1px rgba(132, 132, 132, 0.23);z-index: 100000;" id="videoremotegomb001">'+menuname+'</div>';

}
idje('videoremotegomb001').onclick=function(){
if(lejatszo==12 && framee==false){
idje('videoremotegomb001').innerHTML = '<span class="yt-uix-button-content"></span>';
}else{
idje('videoremotegomb001').innerHTML = '';
}
WebSocketStart();
};
}
}
}


play_remote();
