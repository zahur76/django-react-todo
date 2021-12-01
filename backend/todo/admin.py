from django.contrib import admin
from .models import Todo

class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'created_at', 'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)