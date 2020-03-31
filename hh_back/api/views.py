from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy

def companies(request):
    try:
        companies = Company.objects.all()
        companies_json = []
        for company in companies:
            companies_json.append(company.to_json())
        return JsonResponse(companies_json, safe=False)
    except:
        return JsonResponse({"db": "no items insides of current table"})

def company(request, id):
    try:
        company = Company.objects.get(id = id)
        return JsonResponse(company.to_json(), safe=False)
    except:
        return JsonResponse({"db": "no such item insides of current table"})

def vacancies_of_company(request, id):
    try:
        company = Company.objects.get(id = id)
        vacancies = company.vacancy_set.all()
        vacancies_json = []
        for vacancy in vacancies:
            vacancies_json.append(vacancy.to_json())
        return JsonResponse(vacancies_json, safe=False)
    except:
        return JsonResponse({"db": "no items insides of current table"})

def vacancies(request):
    try:
        vacancies = Vacancy.objects.all()
        vacancies_json = []
        for vacancy in vacancies:
            vacancies_json.append(vacancy.to_json())
        return JsonResponse(vacancies_json, safe=False)
    except:
        return JsonResponse({"db": "no items insides of current table"})

def vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id = id)
        return JsonResponse(vacancy.to_json(), safe=False)
    except:
        return JsonResponse({"db": "no items insides of current table"})

def top_ten(request):
    try:
        vacancies = Vacancy.objects.order_by('-salary')
        vacancies_json = []

        i = 1
        for v in vacancies:
            if(i<=10):
                vacancies_json.append(v.to_json())
            i += 1
        
        return JsonResponse(vacancies_json, safe=False)
    except:
        return JsonResponse({"db": "no items insides of current table"})
