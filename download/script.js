document.addEventListener("DOMContentLoaded", function () {
    let userAgent = navigator.userAgent;

    // Use userAgentData if available (modern browsers)
    if (navigator.userAgentData) {
        userAgent = navigator.userAgentData.platform;
    }

    // Redirect logic based on device platform
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'https://apps.apple.com/us/app/jajantracker/id6742694352';
    } else if (/android/i.test(userAgent)) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.hendrickprasdito.jajantracker.flutter_app_jajantracker';
    } else {
        window.location.href = 'https://jajantracker.hendrickprasdito.com';
    }
});