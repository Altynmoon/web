from django.urls import path

from api.views.auth import UserList, userInfoByToken, login, logout
from api.views.generics import Musics, MusicDetails, Genres, GenreDetails, Authors, AuthorDetails

urlpatterns = [
    path('music/', Musics.as_view()),
    path('music/<int:pk>/', MusicDetails.as_view()),

    path('genres/', Genres.as_view()),
    path('genres/<int:pk>/', GenreDetails.as_view()),

    path('authors/', Authors.as_view()),
    path('authors/<int:pk>/', AuthorDetails.as_view()),

    path('users/', UserList.as_view()),
    path('userInfoByToken/', userInfoByToken),
    path('login/', login),
    path('logout/', logout)
]
