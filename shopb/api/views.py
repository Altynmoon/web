from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Category,Product

def list_of_all_products(request):
    list_products = Product.objects.all()
    list_of_products_in_json = []
    for p in list_products:
        list_of_products_in_json.append(p.to_json())
    return JsonResponse(list_of_products_in_json, safe=False)

def get_one_product(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product.to_json(), safe=False)

def list_of_categories(request):
    categors = Category.objects.all()
    categories_json = []
    for c in categors:
        categories_json.append(c.to_json())
    return JsonResponse(categories_json, safe=False)

def get_one_category(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category.to_json(), safe=False)

def get_products_by_category(request, id):
    category = Category.objects.get(id=id)
    products = category.product_set.all()
    products_json = []
    for p in products:
        products_json.append(p.to_json())
    return JsonResponse(products_json, safe=False)    