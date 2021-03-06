from django.urls import path

from api import views 

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>/', views.company),
    path('companies/<int:id>/vacancies/', views.vacancies_of_company),

    path('vacancies/', views.vacancies),
    path('vacancies/<int:id>/', views.vacancy),
    path('vacancies/top_ten/', views.top_ten)
]