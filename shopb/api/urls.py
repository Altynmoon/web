from django.urls import path

from api.views import list_of_all_products,get_one_product 
from api.views import list_of_categories,get_one_category
from api.views import get_products_by_category

urlpatterns = [
    path('products/', list_of_all_products),
    path('products/<int:id>/', get_one_product),
    path('categories/', list_of_categories),
    path('categories/<int:id>/', get_one_category),
    path('categories/<int:id>/products/', get_products_by_category),
]