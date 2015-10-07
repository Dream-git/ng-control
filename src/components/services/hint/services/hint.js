import template from "../templates/hint.html";

import "../css/hint.css";

export default class HintService {
    constructor($document, $q, $rootScope, $compile) {
        this.$document = $document;
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$compile = $compile;

        this.container = angular.element("<div class='sn-hint-container'>");
        this.$document.find("body").append(this.container);
    }

    hint(param) {
        let hint = angular.element(template);

        hint.css("display", "block");

        let scope = Object.assign(this.$rootScope.$new(), param);

        this.$compile(hint)(scope);
        this.container.prepend(hint);

        setTimeout(function () {
            hint.addClass("in");
        }, 10);

        setTimeout(function () {
            hint.removeClass("in");

            setTimeout(function () {
                hint.remove();
            }, 500);
        }, 5000);
    }
}

HintService.$inject = ["$document", "$q", "$rootScope", "$compile"];