odoo.define('moldeo_snippets_collection.snippet_product', ['web.ajax'], function (require) {
    "use strict";

    var ajax = require('web.ajax');

    $(document).ready(function () {
    var container = document.getElementById("snippet_product_container");

    if (container) {
        container.innerHTML = "";
        container.innerHTML = "<div class='col text-center'><div class='lds-dual-ring'></div></div>";
        ajax.jsonRpc('/get_products','call', {}).then(function(data) {
            container.innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                container.innerHTML += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 mb-3">\
                                            <a href="/shop/product/' + data[i].id +'" class="d-block col-12 col-lg-10 text-center pt-3 pl-3 pr-3 m-auto product-col">\
                                                <img class="img-fluid" src="/web/image/product.template/'+data[i].id+'/image" />\
                                                <h6 class="text-center mt-3 pb-1">' + data[i].name + '</h6>\
                                            </a>\
                                        </div>';
            }
        });
    }
    });

});
