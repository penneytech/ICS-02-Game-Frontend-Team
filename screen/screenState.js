export function screenState() {
console.log('[screenState]: called...')
    
// Check if the user agent string indicates a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Check if the device is mobile and in portrait orientation
if (isMobile) {
  const title = document.getElementById('title');
  title.style.display = 'none';
    
  console.log("[initGame]: Hid title!");
} else {
  console.log("[initGame]: Show title!");
}
    
    
}