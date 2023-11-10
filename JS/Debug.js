// Mode Debug : outline on / off
function debughtml(enable) {
    const styleTag = document.getElementById('debug-mode');
    if (enable) {
        styleTag.textContent = '* { outline: solid 2px red; }';
        localStorage.setItem('debug-html', 'on');
    } else {
        styleTag.textContent = '/* * { outline: solid 2px red; } */';
        localStorage.setItem('debug-html', 'off');
    }
}

debughtml(false);
  
const debugHtmlStatus = localStorage.getItem('debug-html');
if (debugHtmlStatus === 'on') {
    debughtml(true);
}