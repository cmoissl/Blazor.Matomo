using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace Blazor.Matomo
{
    public class JsInterop
    {

        public static ValueTask Init(IJSRuntime jsRuntime, string apiUrl, int siteId)
        {

            return jsRuntime.InvokeVoidAsync("BlazorMatomo.init", apiUrl, siteId);
        }

        public static ValueTask TriggerPageView(IJSRuntime jsRuntime, string relativeUrl, string userId)
        {
            return jsRuntime.InvokeVoidAsync("BlazorMatomo.triggerEvent",relativeUrl, userId);
        }
    }
}
