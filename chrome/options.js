function idje(id){  
  var a = document.getElementById(id);
return a;
}
var userLang = navigator.language || navigator.userLanguage; 
if(userLang=='hu' || userLang=='hu-HU'){
ment = 'Mentés';
mentve = 'Sikeres mentés!';
frame = 'Vezérlés engedélyezése beágyazott videóknál.';
langp = 'hu';
}else if(userLang=='de' || userLang=='de-DE' || userLang=='de-at' || userLang=='de-AT' || userLang=='de-li' || userLang=='de-LI'){
ment = 'Sparen';
mentve = 'Optionen gespeichert!';

frame = 'Aktivieren Steuer eingebettete Videos';
langp = 'de';
}else if(userLang=='ro' || userLang=='ro-RO' || userLang=='ro-mo' || userLang=='ro-MO'){
ment = 'Salvați';
mentve = 'Opțiuni de salvat!';
frame = 'Activați de control embedded video';
langp = 'ro';
}else if(userLang=='sr' || userLang=='sr-SR'){
ment = 'Sačuvaj';
mentve = 'Podaci su uspešno sačuvani!';
frame = ' Omogući kontrola za embedded videa.';
langp = 'sr';
}else{
ment = 'Save';
mentve = 'Options saved!';
frame = 'Enable control in embedded videos';
langp = 'en';
}
idje('save').innerHTML = ment;
idje('frame_szov').innerHTML = frame;


// Saves options to chrome.storage
function save_options() {
  var frame = idje('frame').checked;
  chrome.storage.sync.set({
    frame: frame
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = mentve;
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    frame: 'true'
  }, function(items) {
    idje('frame').checked = items.frame;
});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
