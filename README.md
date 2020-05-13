# Blazor.Matomo
A component which sends navigation changes to a matomo server.

# Setup

Put the following in _Host.cshtml into the head section:
'''
  <script src="_content/Blazor.Matomo/JsInterop.js"></script>
'''

and the following just below your the router:

'''
 <environment exclude="Development">
        <MatomoAnalytics ApiUrl="https://cmoissl.de/mat/" SiteId="3"></MatomoAnalytics>
    </environment>
'''    
