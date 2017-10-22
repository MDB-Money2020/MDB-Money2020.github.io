function everyMinuteFetchOrder(callback) {
    setInterval(function() {
        $.ajax({
            url: "https://money2020-app.herokuapp.com/orders?restaurantId=-Kx0rrVSISYN1ZmefG8_",
            type: "get",
            contentType: "application/json",
            dataType: "json",
            success: function(response) {
                callback(response.result);
            },
            error: function(error) {
                console.error(error);
            }
        });
    }, 10000);
}

function getMenuItem(menuItemId, callback) {
    $.ajax({
        url: "https://money2020-app.herokuapp.com/menuItems?menuItemId=" + menuItemId,
        type: "get",
        contentType: "application/json",
        dataType: "json",
        success: function(response) {
            callback(response.result);
        },
        error: function(error) {
            // console.error(error);
        }
    });
}