# -*- coding: utf-8 -*-
from odoo import http

class MoldeoSnippetsCollection(http.Controller):
    @http.route(['/get_products'], type='json', auth="public", website=True)
    def get_products(self, limit=6):
        products = http.request.env['product.template'].sudo().search([('website_published','=',True)], limit=6)
        p = []

        for product in products:
            news = {
                "name": product.name,
                "id": product.id,
                "list_price": product.list_price
            }
            p.append(news)
        return p
