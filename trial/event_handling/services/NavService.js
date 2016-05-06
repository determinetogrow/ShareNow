System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var NavService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavService = (function () {
                function NavService() {
                    this.navchange = new core_1.EventEmitter();
                }
                NavService.prototype.emitNavChangeEvent = function (number) {
                    this.navchange.emit(number);
                };
                NavService.prototype.getNavChangeEmitter = function () {
                    return this.navchange;
                };
                return NavService;
            }());
            exports_1("NavService", NavService);
        }
    }
});
//# sourceMappingURL=NavService.js.map