from django.shortcuts import render, HttpResponse,get_object_or_404
from django.core.serializers import serialize
from .models import Todo
import json

# Create your views here.
def home(request):
    ''' View to return all Todo objects'''

    data = serialize('json', Todo.objects.all())

    return HttpResponse(data,
                content_type='application/json')

# Create your views here.
def status(request, todo_id):
    ''' View to update status of object'''

    todo = get_object_or_404(Todo, id=todo_id)
    if todo.completed:
        todo.completed = False
        todo.save()
    else:
        todo.completed = True
        todo.save()
    data = serialize('json', Todo.objects.all())

    return HttpResponse(data,
                content_type='application/json')

# Create your views here.
def remove_todo(request, todo_id):
    ''' View to update status of object'''

    todo = get_object_or_404(Todo, id=todo_id)
    todo.delete()
    data = serialize('json', Todo.objects.all())

    return HttpResponse(data,
                content_type='application/json')
