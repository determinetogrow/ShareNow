System.register(['angular2/core', '../services/NavService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, NavService_1;
    var ObservingComponent, Navigation, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NavService_1_1) {
                NavService_1 = NavService_1_1;
            }],
        execute: function() {
            ObservingComponent = (function () {
                function ObservingComponent(navService) {
                    this.navService = navService;
                    this.item = 0;
                }
                ObservingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.navService.getNavChangeEmitter()
                        .subscribe(function (item) { return _this.selectedNavItem(item); });
                };
                ObservingComponent.prototype.selectedNavItem = function (item) {
                    this.item = item;
                };
                ObservingComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                ObservingComponent = __decorate([
                    core_1.Component({
                        selector: 'obs-comp',
                        template: "obs component, item: {{item}}"
                    }), 
                    __metadata('design:paramtypes', [NavService_1.NavService])
                ], ObservingComponent);
                return ObservingComponent;
            }());
            exports_1("ObservingComponent", ObservingComponent);
            Navigation = (function () {
                function Navigation(navService) {
                    this.navService = navService;
                    this.item = 1;
                }
                Navigation.prototype.selectedNavItem = function (item) {
                    console.log('selected nav item ' + item);
                    this.navService.emitNavChangeEvent(item);
                };
                Navigation = __decorate([
                    core_1.Component({
                        selector: 'my-nav',
                        template: "\n    <div class=\"nav-item\" (click)=\"selectedNavItem(1)\">nav 1 (click me)</div>\n    <div class=\"nav-item\" (click)=\"selectedNavItem(2)\">nav 2 (click me)</div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [NavService_1.NavService])
                ], Navigation);
                return Navigation;
            }());
            exports_1("Navigation", Navigation);
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular 2 - event delegation";
                    this.showObsComp = true;
                    console.clear();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "{{title}}\n  <p>\n  <my-nav></my-nav>\n  <button (click)=\"showObsComp = !showObsComp\">toggle ObservingComponent</button>\n  <div *ngIf='showObsComp'>\n    <obs-comp></obs-comp>\n  </div>\n  ",
                        directives: [Navigation, ObservingComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map