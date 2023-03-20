(function ($) {
    "use strict";
    console.clear();

    function fetchApples() {
        $.get(`${HOST}/api/items`,
            function (data, status) {
                $('#apples-quantity').text(data)
            }
        );
    }

    // TODO: DEBUG
    console.log("hello")

    fetchApples()
}(jQuery));
