from django.contrib import admin
from .models import React

class EfarmaAdmin(admin.ModelAdmin):
    list_display = ('nitrogen', 'pottasium', 'phosphorous','ph','rainfall','city')

# Register your models here.

admin.site.register(React, EfarmaAdmin)