/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { ANALYZE_FOR_ENTRY_COMPONENTS, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren } from './metadata/di';
export { Component, Directive, HostBinding, HostListener, Input, Output, Pipe } from './metadata/directives';
export { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from './metadata/ng_module';
export { ViewEncapsulation } from './metadata/view';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFZSCxPQUFPLEVBQUMsNEJBQTRCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBeUIsZUFBZSxFQUE0QixLQUFLLEVBQUUsU0FBUyxFQUFzQixZQUFZLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBQ2pPLE9BQU8sRUFBQyxTQUFTLEVBQXNCLFNBQVMsRUFBc0IsV0FBVyxFQUF3QixZQUFZLEVBQXlCLEtBQUssRUFBa0IsTUFBTSxFQUFtQixJQUFJLEVBQWdCLE1BQU0sdUJBQXVCLENBQUM7QUFFaFAsT0FBTyxFQUFDLHNCQUFzQixFQUFvQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQW9DLE1BQU0sc0JBQXNCLENBQUM7QUFDN0osT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0saUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogVGhpcyBpbmRpcmVjdGlvbiBpcyBuZWVkZWQgdG8gZnJlZSB1cCBDb21wb25lbnQsIGV0YyBzeW1ib2xzIGluIHRoZSBwdWJsaWMgQVBJXG4gKiB0byBiZSB1c2VkIGJ5IHRoZSBkZWNvcmF0b3IgdmVyc2lvbnMgb2YgdGhlc2UgYW5ub3RhdGlvbnMuXG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGUsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBRdWVyeSwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW59IGZyb20gJy4vbWV0YWRhdGEvZGknO1xuaW1wb3J0IHtDb21wb25lbnQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgUGlwZX0gZnJvbSAnLi9tZXRhZGF0YS9kaXJlY3RpdmVzJztcbmltcG9ydCB7RG9Cb290c3RyYXAsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBTY2hlbWFNZXRhZGF0YX0gZnJvbSAnLi9tZXRhZGF0YS9uZ19tb2R1bGUnO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi9tZXRhZGF0YS92aWV3JztcblxuZXhwb3J0IHtBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBBdHRyaWJ1dGUsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkRGVjb3JhdG9yLCBDb250ZW50Q2hpbGRyZW4sIENvbnRlbnRDaGlsZHJlbkRlY29yYXRvciwgUXVlcnksIFZpZXdDaGlsZCwgVmlld0NoaWxkRGVjb3JhdG9yLCBWaWV3Q2hpbGRyZW4sIFZpZXdDaGlsZHJlbkRlY29yYXRvcn0gZnJvbSAnLi9tZXRhZGF0YS9kaSc7XG5leHBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50RGVjb3JhdG9yLCBEaXJlY3RpdmUsIERpcmVjdGl2ZURlY29yYXRvciwgSG9zdEJpbmRpbmcsIEhvc3RCaW5kaW5nRGVjb3JhdG9yLCBIb3N0TGlzdGVuZXIsIEhvc3RMaXN0ZW5lckRlY29yYXRvciwgSW5wdXQsIElucHV0RGVjb3JhdG9yLCBPdXRwdXQsIE91dHB1dERlY29yYXRvciwgUGlwZSwgUGlwZURlY29yYXRvcn0gZnJvbSAnLi9tZXRhZGF0YS9kaXJlY3RpdmVzJztcbmV4cG9ydCB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjaywgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnLi9tZXRhZGF0YS9saWZlY3ljbGVfaG9va3MnO1xuZXhwb3J0IHtDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBEb0Jvb3RzdHJhcCwgTW9kdWxlV2l0aFByb3ZpZGVycywgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGUsIE5nTW9kdWxlRGVjb3JhdG9yLCBTY2hlbWFNZXRhZGF0YX0gZnJvbSAnLi9tZXRhZGF0YS9uZ19tb2R1bGUnO1xuZXhwb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi9tZXRhZGF0YS92aWV3JztcbiJdfQ==