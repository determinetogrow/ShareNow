System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                function TodoModel(data) {
                    if (data === void 0) { data = ""; }
                    this.status = "started";
                    this.title = data;
                }
                TodoModel.prototype.toggle = function () {
                    this.status = this.status == "started" ? "completed" : "started";
                };
                return TodoModel;
            }());
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todo-model.js.map