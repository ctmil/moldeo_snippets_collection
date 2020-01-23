odoo.define('moldeo_snippets_collection.snippet_product', ['web.ajax'], function (require) {
    "use strict";

    var ajax = require('web.ajax');

    $(document).ready(function () {
    var container = document.getElementById("snippet_customer_container");

    if (container) {
        container.innerHTML = "";
        container.innerHTML = "<div class='col text-center'><div class='lds-dual-ring'></div></div>";
        ajax.jsonRpc('/get_customers','call', {}).then(function(data) {
            container.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                container.innerHTML += '<div class="col-4 col-sm-4 col-md-2 col-lg-2">\
                                            <img class="img-fluid" src="/web/image/res.partner/'+data[i].id+'/image_medium" />\
                                        </div>';
            }
        });
    }
    });

});
