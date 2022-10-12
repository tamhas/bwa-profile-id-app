// this is added as a script to the WP site global header settings
// This allows a page to populate a form field from a query URL paramete
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function setValue(id,newvalue) {
    var s = document.getElementById(id);
    s.value = newvalue;
}
window.onload=function() {
    var v = getParameterByName('code');
    setValue('place-id-field', v)
}