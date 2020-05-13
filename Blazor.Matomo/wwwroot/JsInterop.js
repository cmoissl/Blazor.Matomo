// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);


window.BlazorMatomo = {

    init: function (apiUrl, siteId) {
        console.log("registering", apiUrl, siteId);
        var u = apiUrl;
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', siteId]);
        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);
        },

    triggerEvent: function (url, userId) {
        console.log("Tracking", url);
        _paq.push(['setCustomUrl', url]);
        _paq.push(['trackPageView']);
        if (userId) {
            _paq.push(['setUserId', userId]);
        }
    },

    register: function (apiUrl, siteId) {
        _paq.push(['setSiteId', siteId]);
        _paq.push(['setApiUrl', apiUrl]);
    }


}