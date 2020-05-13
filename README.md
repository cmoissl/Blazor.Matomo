# Blazor.Matomo
A component which sends navigation changes to a matomo server.

# Setup

Put the following in _Host.cshtml into the head section:

```diff
+    <script src="_content/Blazor.Matomo/JsInterop.js"></script>
</head>
```

and the following just below your the router:

```diff
           </LayoutView>
       </NotFound>
    </Router>
+   <environment exclude="Development">
+        <MatomoAnalytics ApiUrl="https://<YourMatomoUrl>" SiteId="<YourSiteId>"></MatomoAnalytics>
+    </environment>
```
