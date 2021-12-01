from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api', views.home, name='home'),
    path('api/status/<int:todo_id>', views.status, name='status'),
    path('api/remove/<int:todo_id>', views.remove_todo, name='remove_todo'),
    path('api/add_todo', views.add_todo, name='add_todo'),     
]
