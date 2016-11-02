/**
 * Created by Kevin Su on 2016/11/2.
 */
angular.module('angularPrism',[])
    .directive('code', function () {
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {
                element.ready(function () {
                    Prism.highlightAll();
                });
            }
        }

    });