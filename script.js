
(function() {

    angular
        .module('app', ['gm.dragDrop'])
        .run(run);

    function run($rootScope, $filter) {

        $rootScope.group1 = {
            items: [
                { name: "Jason" },
                { name: "Miles" },
                { name: "Sloan" },
                { name: "Brian" },
                { name: "Tammy" },
                { name: "Sean D" },
                { name: "Sean G" },
                { name: "Patrick" },
                { name: "Mike" },
                { name: "Vernon" },
                { name: "Cung"}
            ]
        };

        $rootScope.group2 = {
            items: [
            ]
        };

        $rootScope.group3 = {
            items: [
            ]
        };

        $rootScope.group4 = {
            items: [
            ]
        };

        $rootScope.onHover = function(item) {
            return function(dragItem, mouseEvent) {
                if(item != dragItem)
                    dragItem.order = item.order + ((mouseEvent.offsetY || -1) > 0 ? 0.5 : -0.5)
            }
        };

        $rootScope.getDropHandler = function(category) {
            return function(dragOb) {
                if(category.items.indexOf(dragOb.item) < 0) {
                    dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);
                    category.items.push(dragOb.item);
                    return true;  // Returning truthy value since we're modifying the view model
                }
            }
        }
    }

})();