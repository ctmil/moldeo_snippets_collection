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

    @http.route(['/get_customers'], type='json', auth="public", website=True)
    def get_customers(self, limit=12):
        customers = http.request.env['res.partner'].sudo().search([('website_published','=',True),('customer','=',True)], limit=12)
        c = []

        for customer in customers:
            news = {
                "name": customer.name,
                "id": customer.id
            }
            c.append(news)
        return c
