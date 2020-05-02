from django.contrib import admin

from api.models import Music, Genre, Author

admin.site.register(Music)
admin.site.register(Genre)
admin.site.register(Author)