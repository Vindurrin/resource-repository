/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/language-service/src/types", ["require", "exports", "@angular/compiler-cli/src/language_services"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var language_services_1 = require("@angular/compiler-cli/src/language_services");
    exports.BuiltinType = language_services_1.BuiltinType;
    /**
     * The kind of diagnostic message.
     *
     * @publicApi
     */
    var DiagnosticKind;
    (function (DiagnosticKind) {
        DiagnosticKind[DiagnosticKind["Error"] = 0] = "Error";
        DiagnosticKind[DiagnosticKind["Warning"] = 1] = "Warning";
    })(DiagnosticKind = exports.DiagnosticKind || (exports.DiagnosticKind = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sYW5ndWFnZS1zZXJ2aWNlL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILGlGQUE0TDtJQUcxTCxzQkFITSwrQkFBVyxDQUdOO0lBME9iOzs7O09BSUc7SUFDSCxJQUFZLGNBR1g7SUFIRCxXQUFZLGNBQWM7UUFDeEIscURBQUssQ0FBQTtRQUNMLHlEQUFPLENBQUE7SUFDVCxDQUFDLEVBSFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFHekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBDb21waWxlTWV0YWRhdGFSZXNvbHZlciwgQ29tcGlsZVBpcGVTdW1tYXJ5LCBOZ0FuYWx5emVkTW9kdWxlcywgU3RhdGljU3ltYm9sfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQge0J1aWx0aW5UeXBlLCBEZWNsYXJhdGlvbktpbmQsIERlZmluaXRpb24sIFBpcGVJbmZvLCBQaXBlcywgU2lnbmF0dXJlLCBTcGFuLCBTeW1ib2wsIFN5bWJvbERlY2xhcmF0aW9uLCBTeW1ib2xRdWVyeSwgU3ltYm9sVGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbGFuZ3VhZ2Vfc2VydmljZXMnO1xuXG5leHBvcnQge1xuICBCdWlsdGluVHlwZSxcbiAgRGVjbGFyYXRpb25LaW5kLFxuICBEZWZpbml0aW9uLFxuICBQaXBlSW5mbyxcbiAgUGlwZXMsXG4gIFNpZ25hdHVyZSxcbiAgU3BhbixcbiAgU3ltYm9sLFxuICBTeW1ib2xEZWNsYXJhdGlvbixcbiAgU3ltYm9sUXVlcnksXG4gIFN5bWJvbFRhYmxlXG59O1xuXG4vKipcbiAqIFRoZSBpbmZvcm1hdGlvbiBgTGFuZ3VhZ2VTZXJ2aWNlYCBuZWVkcyBmcm9tIHRoZSBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAgdG8gZGVzY3JpYmUgdGhlIGNvbnRlbnQgb2ZcbiAqIGEgdGVtcGxhdGUgYW5kIHRoZSBsYW5ndWFnZSBjb250ZXh0IHRoZSB0ZW1wbGF0ZSBpcyBpbi5cbiAqXG4gKiBBIGhvc3QgaW50ZXJmYWNlOyBzZWUgYExhbmd1YWdlU2VydmljZUhvc3RgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZVNvdXJjZSB7XG4gIC8qKlxuICAgKiBUaGUgc291cmNlIG9mIHRoZSB0ZW1wbGF0ZS5cbiAgICovXG4gIHJlYWRvbmx5IHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlLiBBcyBmaWxlcyBhcmUgbW9kaWZpZWQgdGhlIHZlcnNpb24gc2hvdWxkIGNoYW5nZS4gVGhhdCBpcywgaWYgdGhlXG4gICAqIGBMYW5ndWFnZVNlcnZpY2VgIHJlcXVlc3RpbmcgdGVtcGxhdGUgaW5mb3JtYXRpb24gZm9yIGEgc291cmNlIGZpbGUgYW5kIHRoYXQgZmlsZSBoYXMgY2hhbmdlZFxuICAgKiBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBob3N0IHdhcyBhc2tlZCBmb3IgdGhlIGZpbGUgdGhlbiB0aGlzIHZlcnNpb24gc3RyaW5nIHNob3VsZCBiZVxuICAgKiBkaWZmZXJlbnQuIE5vIGFzc3VtcHRpb25zIGFyZSBtYWRlIGFib3V0IHRoZSBmb3JtYXQgb2YgdGhpcyBzdHJpbmcuXG4gICAqXG4gICAqIFRoZSB2ZXJzaW9uIGNhbiBjaGFuZ2UgbW9yZSBvZnRlbiB0aGFuIHRoZSBzb3VyY2UgYnV0IHNob3VsZCBub3QgY2hhbmdlIGxlc3Mgb2Z0ZW4uXG4gICAqL1xuICByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzcGFuIG9mIHRoZSB0ZW1wbGF0ZSB3aXRoaW4gdGhlIHNvdXJjZSBmaWxlLlxuICAgKi9cbiAgcmVhZG9ubHkgc3BhbjogU3BhbjtcblxuICAvKipcbiAgICogQSBzdGF0aWMgc3ltYm9sIGZvciB0aGUgdGVtcGxhdGUncyBjb21wb25lbnQuXG4gICAqL1xuICByZWFkb25seSB0eXBlOiBTdGF0aWNTeW1ib2w7XG5cbiAgLyoqXG4gICAqIFRoZSBgU3ltYm9sVGFibGVgIGZvciB0aGUgbWVtYmVycyBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgcmVhZG9ubHkgbWVtYmVyczogU3ltYm9sVGFibGU7XG5cbiAgLyoqXG4gICAqIEEgYFN5bWJvbFF1ZXJ5YCBmb3IgdGhlIGNvbnRleHQgb2YgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgcmVhZG9ubHkgcXVlcnk6IFN5bWJvbFF1ZXJ5O1xufVxuXG4vKipcbiAqIEEgc2VxdWVuY2Ugb2YgdGVtcGxhdGUgc291cmNlcy5cbiAqXG4gKiBBIGhvc3QgdHlwZTsgc2VlIGBMYW5ndWFnZVNlcnZpY2VIb3N0YC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIFRlbXBsYXRlU291cmNlcyA9IFRlbXBsYXRlU291cmNlW10gfCB1bmRlZmluZWQ7XG5cblxuLyoqXG4gKiBFcnJvciBpbmZvcm1hdGlvbiBmb3VuZCBnZXR0aW5nIGRlY2xhcmF0aW9uIGluZm9ybWF0aW9uXG4gKlxuICogQSBob3N0IHR5cGU7IHNlZSBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlY2xhcmF0aW9uRXJyb3Ige1xuICAvKipcbiAgICogVGhlIHNwYW4gb2YgdGhlIGVycm9yIGluIHRoZSBkZWNsYXJhdGlvbidzIG1vZHVsZS5cbiAgICovXG4gIHJlYWRvbmx5IHNwYW46IFNwYW47XG5cbiAgLyoqXG4gICAqIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgZGVzY3JpYmluZyB0aGUgZXJyb3Igb3IgYSBjaGFpblxuICAgKiBvZiBtZXNzYWdlcy5cbiAgICovXG4gIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZ3xEaWFnbm9zdGljTWVzc2FnZUNoYWluO1xufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBjb21wb25lbnQgZGVjbGFyYXRpb25zLlxuICpcbiAqIEEgZmlsZSBtaWdodCBjb250YWluIGEgZGVjbGFyYXRpb24gd2l0aG91dCBhIHRlbXBsYXRlIGJlY2F1c2UgdGhlIGZpbGUgY29udGFpbnMgb25seVxuICogdGVtcGxhdGVVcmwgcmVmZXJlbmNlcy4gSG93ZXZlciwgdGhlIGNvbXBvbmVudCBkZWNsYXJhdGlvbiBtaWdodCBjb250YWluIGVycm9ycyB0aGF0XG4gKiBuZWVkIHRvIGJlIHJlcG9ydGVkIHN1Y2ggYXMgdGhlIHRlbXBsYXRlIHN0cmluZyBpcyBtaXNzaW5nIG9yIHRoZSBjb21wb25lbnQgaXMgbm90XG4gKiBkZWNsYXJlZCBpbiBhIG1vZHVsZS4gVGhlc2UgZXJyb3Igc2hvdWxkIGJlIHJlcG9ydGVkIG9uIHRoZSBkZWNsYXJhdGlvbiwgbm90IHRoZVxuICogdGVtcGxhdGUuXG4gKlxuICogQSBob3N0IHR5cGU7IHNlZSBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlY2xhcmF0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBzdGF0aWMgc3ltYm9sIG9mIHRoZSBjb21wcG9uZW50IGJlaW5nIGRlY2xhcmVkLlxuICAgKi9cbiAgcmVhZG9ubHkgdHlwZTogU3RhdGljU3ltYm9sO1xuXG4gIC8qKlxuICAgKiBUaGUgc3BhbiBvZiB0aGUgZGVjbGFyYXRpb24gYW5ub3RhdGlvbiByZWZlcmVuY2UgKGUuZy4gdGhlICdDb21wb25lbnQnIG9yICdEaXJlY3RpdmUnXG4gICAqIHJlZmVyZW5jZSkuXG4gICAqL1xuICByZWFkb25seSBkZWNsYXJhdGlvblNwYW46IFNwYW47XG5cbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgY29tcGlsZXIgZGlyZWN0aXZlIG1ldGFkYXRhIGZvciB0aGUgZGVjbGFyYXRpb24uXG4gICAqL1xuICByZWFkb25seSBtZXRhZGF0YT86IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YTtcblxuICAvKipcbiAgICogRXJyb3IgcmVwb3J0ZWQgdHJ5aW5nIHRvIGdldCB0aGUgbWV0YWRhdGEuXG4gICAqL1xuICByZWFkb25seSBlcnJvcnM6IERlY2xhcmF0aW9uRXJyb3JbXTtcbn1cblxuLyoqXG4gKiBBIHNlcXVlbmNlIG9mIGRlY2xhcmF0aW9ucy5cbiAqXG4gKiBBIGhvc3QgdHlwZTsgc2VlIGBMYW5ndWFnZVNlcnZpY2VIb3N0YC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIERlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9uW107XG5cbi8qKlxuICogVGhlIGhvc3QgZm9yIGEgYExhbmd1YWdlU2VydmljZWAuIFRoaXMgcHJvdmlkZXMgYWxsIHRoZSBgTGFuZ3VhZ2VTZXJ2aWNlYCByZXF1aXJlcyB0byByZXNwb25kXG4gKiB0byB0aGUgYExhbmd1YWdlU2VydmljZWAgcmVxdWVzdHMuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgZGVzY3JpYmVzIHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIGBMYW5ndWFnZVNlcnZpY2VgIG9uIGl0cyBob3N0LlxuICpcbiAqIFRoZSBob3N0IGludGVyZmFjZSBpcyBob3N0IGxhbmd1YWdlIGFnbm9zdGljLlxuICpcbiAqIEFkZGluZyBvcHRpb25hbCBtZW1iZXIgdG8gdGhpcyBpbnRlcmZhY2Ugb3IgYW55IGludGVyZmFjZSB0aGF0IGlzIGRlc2NyaWJlZCBhcyBhXG4gKiBgTGFuZ3VhZ2VTZXJ2aWNlSG9zdGAgaW50ZXJmYWNlIGlzIG5vdCBjb25zaWRlcmVkIGEgYnJlYWtpbmcgY2hhbmdlIGFzIGRlZmluZWQgYnkgU2VtVmVyLlxuICogUmVtb3ZpbmcgYSBtZXRob2Qgb3IgY2hhbmdpbmcgYSBtZW1iZXIgZnJvbSByZXF1aXJlZCB0byBvcHRpb25hbCB3aWxsIGFsc28gbm90IGJlIGNvbnNpZGVyZWQgYVxuICogYnJlYWtpbmcgY2hhbmdlLlxuICpcbiAqIElmIGEgbWVtYmVyIGlzIGRlcHJlY2F0ZWQgaXQgd2lsbCBiZSBjaGFuZ2VkIHRvIG9wdGlvbmFsIGluIGEgbWlub3IgcmVsZWFzZSBiZWZvcmUgaXQgaXNcbiAqIHJlbW92ZWQgaW4gYSBtYWpvciByZWxlYXNlLlxuICpcbiAqIEFkZGluZyBhIHJlcXVpcmVkIG1lbWJlciBvciBjaGFuZ2luZyBhIG1ldGhvZCdzIHBhcmFtZXRlcnMsIGlzIGNvbnNpZGVyZWQgYSBicmVha2luZyBjaGFuZ2UgYW5kXG4gKiB3aWxsIG9ubHkgYmUgZG9uZSB3aGVuIGJyZWFraW5nIGNoYW5nZXMgYXJlIGFsbG93ZWQuIFdoZW4gcG9zc2libGUsIGEgbmV3IG9wdGlvbmFsIG1lbWJlciB3aWxsXG4gKiBiZSBhZGRlZCBhbmQgdGhlIG9sZCBtZW1iZXIgd2lsbCBiZSBkZXByZWNhdGVkLiBUaGUgbmV3IG1lbWJlciB3aWxsIHRoZW4gYmUgbWFkZSByZXF1aXJlZCBpblxuICogYW5kIHRoZSBvbGQgbWVtYmVyIHdpbGwgYmUgcmVtb3ZlZCBvbmx5IHdoZW4gYnJlYWtpbmcgY2hhbmdlcyBhcmUgYWxsb3dlZC5cbiAqXG4gKiBXaGlsZSBhbiBpbnRlcmZhY2UgaXMgbWFya2VkIGFzIGV4cGVyaW1lbnRhbCBicmVha2luZy1jaGFuZ2VzIHdpbGwgYmUgYWxsb3dlZCBiZXR3ZWVuIG1pbm9yXG4gKiByZWxlYXNlcy4gQWZ0ZXIgYW4gaW50ZXJmYWNlIGlzIG1hcmtlZCBhcyBzdGFibGUgYnJlYWtpbmctY2hhbmdlcyB3aWxsIG9ubHkgYmUgYWxsb3dlZCBiZXR3ZWVuXG4gKiBtYWpvciByZWxlYXNlcy4gTm8gYnJlYWtpbmcgY2hhbmdlcyBhcmUgYWxsb3dlZCBiZXR3ZWVuIHBhdGNoIHJlbGVhc2VzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVNlcnZpY2VIb3N0IHtcbiAgLyoqXG4gICAqIFRoZSByZXNvbHZlciB0byB1c2UgdG8gZmluZCBjb21waWxlciBtZXRhZGF0YS5cbiAgICovXG4gIHJlYWRvbmx5IHJlc29sdmVyOiBDb21waWxlTWV0YWRhdGFSZXNvbHZlcjtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGVtcGxhdGUgaW5mb3JtYXRpb24gZm9yIHRlbXBsYXRlcyBpbiBgZmlsZU5hbWVgIGF0IHRoZSBnaXZlbiBsb2NhdGlvbi4gSWZcbiAgICogYGZpbGVOYW1lYCByZWZlcnMgdG8gYSB0ZW1wbGF0ZSBmaWxlIHRoZW4gdGhlIGBwb3NpdGlvbmAgc2hvdWxkIGJlIGlnbm9yZWQuIElmIHRoZSBgcG9zaXRpb25gXG4gICAqIGlzIG5vdCBpbiBhIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5nIHRoZW4gdGhpcyBtZXRob2Qgc2hvdWxkIHJldHVybiBgdW5kZWZpbmVkYC5cbiAgICovXG4gIGdldFRlbXBsYXRlQXQoZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IFRlbXBsYXRlU291cmNlfHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgaW5mb3JtYXRpb24gZm9yIGFsbCB0ZW1wbGF0ZXMgaW4gYGZpbGVOYW1lYCBvciBmb3IgYGZpbGVOYW1lYCBpZlxuICAgKiBpdCBpcyBhIHRlbXBsYXRlIGZpbGUuXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMoZmlsZU5hbWU6IHN0cmluZyk6IFRlbXBsYXRlU291cmNlcztcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQW5ndWxhciBkZWNsYXJhdGlvbnMgaW4gdGhlIGdpdmVuIGZpbGUuXG4gICAqL1xuICBnZXREZWNsYXJhdGlvbnMoZmlsZU5hbWU6IHN0cmluZyk6IERlY2xhcmF0aW9ucztcblxuICAvKipcbiAgICogUmV0dXJuIGEgc3VtbWFyeSBvZiBhbGwgQW5ndWxhciBtb2R1bGVzIGluIHRoZSBwcm9qZWN0LlxuICAgKi9cbiAgZ2V0QW5hbHl6ZWRNb2R1bGVzKCk6IE5nQW5hbHl6ZWRNb2R1bGVzO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBsaXN0IGFsbCB0aGUgdGVtcGxhdGUgZmlsZXMgcmVmZXJlbmNlZCBieSB0aGUgcHJvamVjdC5cbiAgICovXG4gIGdldFRlbXBsYXRlUmVmZXJlbmNlcygpOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBBbiBpdGVtIG9mIHRoZSBjb21wbGV0aW9uIHJlc3VsdCB0byBiZSBkaXNwbGF5ZWQgYnkgYW4gZWRpdG9yLlxuICpcbiAqIEEgYExhbmd1YWdlU2VydmljZWAgaW50ZXJmYWNlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uIHtcbiAgLyoqXG4gICAqIFRoZSBraW5kIG9mIGNvbXBsZXRpb24uXG4gICAqL1xuICBraW5kOiBEZWNsYXJhdGlvbktpbmQ7XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBjb21wbGV0aW9uIHRvIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUga2V5IHRvIHVzZSB0byBzb3J0IHRoZSBjb21wbGV0aW9ucyBmb3IgZGlzcGxheS5cbiAgICovXG4gIHNvcnQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIHNlcXVlbmNlIG9mIGNvbXBsZXRpb25zLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgQ29tcGxldGlvbnMgPSBDb21wbGV0aW9uW10gfCB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBmaWxlIGFuZCBzcGFuLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgc3BhbjogU3Bhbjtcbn1cblxuLyoqXG4gKiBUaGUga2luZCBvZiBkaWFnbm9zdGljIG1lc3NhZ2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZW51bSBEaWFnbm9zdGljS2luZCB7XG4gIEVycm9yLFxuICBXYXJuaW5nLFxufVxuXG4vKipcbiAqIEEgdGVtcGxhdGUgZGlhZ25vc3RpY3MgbWVzc2FnZSBjaGFpbi4gVGhpcyBpcyBzaW1pbGFyIHRvIHRoZSBUeXBlU2NyaXB0XG4gKiBEaWFnbm9zdGljTWVzc2FnZUNoYWluLiBUaGUgbWVzc2FnZXMgYXJlIGludGVuZGVkIHRvIGJlIGZvcm1hdHRlZCBhcyBzZXBhcmF0ZVxuICogc2VudGVuY2UgZnJhZ21lbnRzIGFuZCBpbmRlbnRlZC5cbiAqXG4gKiBGb3IgY29tcGF0aWJpbGl0eSBwcmV2aW91cyBpbXBsZW1lbnRhdGlvbiwgdGhlIHZhbHVlcyBhcmUgZXhwZWN0ZWQgdG8gb3ZlcnJpZGVcbiAqIHRvU3RyaW5nKCkgdG8gcmV0dXJuIGEgZm9ybWF0dGVkIG1lc3NhZ2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWNNZXNzYWdlQ2hhaW4ge1xuICAvKipcbiAgICogVGhlIHRleHQgb2YgdGhlIGRpYWdub3N0aWMgbWVzc2FnZSB0byBkaXNwbGF5LlxuICAgKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmV4dCBtZXNzYWdlIGluIHRoZSBjaGFpbi5cbiAgICovXG4gIG5leHQ/OiBEaWFnbm9zdGljTWVzc2FnZUNoYWluO1xufVxuXG4vKipcbiAqIEFuIHRlbXBsYXRlIGRpYWdub3N0aWMgbWVzc2FnZSB0byBkaXNwbGF5LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaWFnbm9zdGljIHtcbiAgLyoqXG4gICAqIFRoZSBraW5kIG9mIGRpYWdub3N0aWMgbWVzc2FnZVxuICAgKi9cbiAga2luZDogRGlhZ25vc3RpY0tpbmQ7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3VyY2Ugc3BhbiB0aGF0IHNob3VsZCBiZSBoaWdobGlnaHRlZC5cbiAgICovXG4gIHNwYW46IFNwYW47XG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IG9mIHRoZSBkaWFnbm9zdGljIG1lc3NhZ2UgdG8gZGlzcGxheSBvciBhIGNoYWluIG9mIG1lc3NhZ2VzLlxuICAgKi9cbiAgbWVzc2FnZTogc3RyaW5nfERpYWdub3N0aWNNZXNzYWdlQ2hhaW47XG59XG5cbi8qKlxuICogQSBzZXF1ZW5jZSBvZiBkaWFnbm9zdGljIG1lc3NhZ2UuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBEaWFnbm9zdGljcyA9IERpYWdub3N0aWNbXTtcblxuLyoqXG4gKiBBIHNlY3Rpb24gb2YgaG92ZXIgdGV4dC4gSWYgdGhlIHRleHQgaXMgY29kZSB0aGVuIGxhbmd1YWdlIHNob3VsZCBiZSBwcm92aWRlZC5cbiAqIE90aGVyd2lzZSB0aGUgdGV4dCBpcyBhc3N1bWVkIHRvIGJlIE1hcmtkb3duIHRleHQgdGhhdCB3aWxsIGJlIHNhbml0aXplZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIb3ZlclRleHRTZWN0aW9uIHtcbiAgLyoqXG4gICAqIFNvdXJjZSBjb2RlIG9yIG1hcmtkb3duIHRleHQgZGVzY3JpYmluZyB0aGUgc3ltYm9sIGEgdGhlIGhvdmVyIGxvY2F0aW9uLlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHNvdXJjZSBpZiBgdGV4dGAgaXMgYSBzb3VyY2UgY29kZSBmcmFnbWVudC5cbiAgICovXG4gIHJlYWRvbmx5IGxhbmd1YWdlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEhvdmVyIGluZm9ybWF0aW9uIGZvciBhIHN5bWJvbCBhdCB0aGUgaG92ZXIgbG9jYXRpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSG92ZXIge1xuICAvKipcbiAgICogVGhlIGhvdmVyIHRleHQgdG8gZGlzcGxheSBmb3IgdGhlIHN5bWJvbCBhdCB0aGUgaG92ZXIgbG9jYXRpb24uIElmIHRoZSB0ZXh0IGluY2x1ZGVzXG4gICAqIHNvdXJjZSBjb2RlLCB0aGUgc2VjdGlvbiB3aWxsIHNwZWNpZnkgd2hpY2ggbGFuZ3VhZ2UgaXQgc2hvdWxkIGJlIGludGVycHJldGVkIGFzLlxuICAgKi9cbiAgcmVhZG9ubHkgdGV4dDogSG92ZXJUZXh0U2VjdGlvbltdO1xuXG4gIC8qKlxuICAgKiBUaGUgc3BhbiBvZiBzb3VyY2UgdGhlIGhvdmVyIGNvdmVycy5cbiAgICovXG4gIHJlYWRvbmx5IHNwYW46IFNwYW47XG59XG5cbi8qKlxuICogQW4gaW5zdGFuY2Ugb2YgYW4gQW5ndWxhciBsYW5ndWFnZSBzZXJ2aWNlIGNyZWF0ZWQgYnkgYGNyZWF0ZUxhbmd1YWdlU2VydmljZSgpYC5cbiAqXG4gKiBUaGUgbGFuZ3VhZ2Ugc2VydmljZSByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IEFuZ3VsYXIgdGVtcGxhdGVzIHRoYXQgYXJlIGluY2x1ZGVkIGluIGEgcHJvamVjdFxuICogYXMgZGVmaW5lZCBieSB0aGUgYExhbmd1YWdlU2VydmljZUhvc3RgLlxuICpcbiAqIFdoZW4gYSBtZXRob2QgZXhwZWN0cyBhIGBmaWxlTmFtZWAgdGhpcyBmaWxlIGNhbiBlaXRoZXIgYmUgc291cmNlIGZpbGUgaW4gdGhlIHByb2plY3QgdGhhdFxuICogY29udGFpbnMgYSB0ZW1wbGF0ZSBpbiBhIHN0cmluZyBsaXRlcmFsIG9yIGEgdGVtcGxhdGUgZmlsZSByZWZlcmVuY2VkIGJ5IHRoZSBwcm9qZWN0IHJldHVybmVkXG4gKiBieSBgZ2V0VGVtcGxhdGVSZWZlcmVuY2UoKWAuIEFsbCBvdGhlciBmaWxlcyB3aWxsIGNhdXNlIHRoZSBtZXRob2QgdG8gcmV0dXJuIGB1bmRlZmluZWRgLlxuICpcbiAqIElmIGEgbWV0aG9kIHRha2VzIGEgYHBvc2l0aW9uYCwgaXQgaXMgdGhlIG9mZnNldCBvZiB0aGUgVVRGLTE2IGNvZGUtcG9pbnQgcmVsYXRpdmUgdG8gdGhlXG4gKiBiZWdpbm5pbmcgb2YgdGhlIGZpbGUgcmVmZXJlbmNlIGJ5IGBmaWxlTmFtZWAuXG4gKlxuICogVGhpcyBpbnRlcmZhY2UgYW5kIGFsbCBpbnRlcmZhY2VzIGFuZCB0eXBlcyBtYXJrZWQgYXMgYExhbmd1YWdlU2VydmljZWAgdHlwZXMsIGRlc2NyaWJlICBhXG4gKiBwYXJ0aWN1bGFyIGltcGxlbWVudGF0aW9uIG9mIHRoZSBBbmd1bGFyIGxhbmd1YWdlIHNlcnZpY2UgYW5kIGlzIG5vdCBpbnRlbmRlZCB0byBiZVxuICogaW1wbGVtZW50ZWQuIEFkZGluZyBtZW1iZXJzIHRvIHRoZSBpbnRlcmZhY2Ugd2lsbCBub3QgYmUgY29uc2lkZXJlZCBhIGJyZWFraW5nIGNoYW5nZSBhc1xuICogZGVmaW5lZCBieSBTZW1WZXIuXG4gKlxuICogUmVtb3ZpbmcgYSBtZW1iZXIgb3IgbWFraW5nIGEgbWVtYmVyIG9wdGlvbmFsLCBjaGFuZ2luZyBhIG1ldGhvZCBwYXJhbWV0ZXJzLCBvciBjaGFuZ2luZyBhXG4gKiBtZW1iZXIncyB0eXBlIHdpbGwgYWxsIGJlIGNvbnNpZGVyZWQgYSBicmVha2luZyBjaGFuZ2UuXG4gKlxuICogV2hpbGUgYW4gaW50ZXJmYWNlIGlzIG1hcmtlZCBhcyBleHBlcmltZW50YWwgYnJlYWtpbmctY2hhbmdlcyB3aWxsIGJlIGFsbG93ZWQgYmV0d2VlbiBtaW5vclxuICogcmVsZWFzZXMuIEFmdGVyIGFuIGludGVyZmFjZSBpcyBtYXJrZWQgYXMgc3RhYmxlIGJyZWFraW5nLWNoYW5nZXMgd2lsbCBvbmx5IGJlIGFsbG93ZWQgYmV0d2VlblxuICogbWFqb3IgcmVsZWFzZXMuIE5vIGJyZWFraW5nIGNoYW5nZXMgYXJlIGFsbG93ZWQgYmV0d2VlbiBwYXRjaCByZWxlYXNlcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgZXh0ZXJuYWwgdGVtcGxhdGVzIHJlZmVyZW5jZWQgYnkgdGhlIHByb2plY3QuXG4gICAqL1xuICBnZXRUZW1wbGF0ZVJlZmVyZW5jZXMoKTogc3RyaW5nW118dW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgZXJyb3IgZm9yIGFsbCB0ZW1wbGF0ZXMgaW4gdGhlIGdpdmVuIGZpbGUuXG4gICAqL1xuICBnZXREaWFnbm9zdGljcyhmaWxlTmFtZTogc3RyaW5nKTogRGlhZ25vc3RpY3N8dW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGNvbXBsZXRpb25zIGF0IHRoZSBnaXZlbiBwb3NpdGlvbi5cbiAgICovXG4gIGdldENvbXBsZXRpb25zQXQoZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IENvbXBsZXRpb25zfHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkZWZpbml0aW9uIGxvY2F0aW9uIGZvciB0aGUgc3ltYm9sIGF0IHBvc2l0aW9uLlxuICAgKi9cbiAgZ2V0RGVmaW5pdGlvbkF0KGZpbGVOYW1lOiBzdHJpbmcsIHBvc2l0aW9uOiBudW1iZXIpOiBEZWZpbml0aW9ufHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBob3ZlciBpbmZvcm1hdGlvbiBmb3IgdGhlIHN5bWJvbCBhdCBwb3NpdGlvbi5cbiAgICovXG4gIGdldEhvdmVyQXQoZmlsZU5hbWU6IHN0cmluZywgcG9zaXRpb246IG51bWJlcik6IEhvdmVyfHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBwaXBlcyB0aGF0IGFyZSBhdmFpbGFibGUgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgKi9cbiAgZ2V0UGlwZXNBdChmaWxlTmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKTogQ29tcGlsZVBpcGVTdW1tYXJ5W107XG59XG4iXX0=