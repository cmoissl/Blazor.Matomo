# Blazor.Matomo
A component which sends navigation changes to a matomo server.

# Setup

Put the following in _Host.cshtml into the head section:

```diff
+    <script src="_content/Blazor.Matomo/JsInterop.js"></script>
</head>
```

and the following just below the router and don't forget to fill in your matomo url and site id:

```diff
           </LayoutView>
       </NotFound>
    </Router>
+   <environment exclude="Development">
+        <MatomoAnalytics ApiUrl="https://<YourMatomoUrl>" SiteId="<YourSiteId>"></MatomoAnalytics>
+    </environment>
```
