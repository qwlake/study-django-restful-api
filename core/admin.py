from django.contrib import admin
from .models import Music, Singer, Genre

admin.site.register(Music)
admin.site.register(Singer)
admin.site.register(Genre)