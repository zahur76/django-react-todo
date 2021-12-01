from django.shortcuts import render, HttpResponse
from django.core.serializers import serialize
from .models import Todo

# Create your views here.
def home(request):
    
    data = serialize('json', Todo.objects.all())
    print(data)
    todo = Todo.objects.all()
    context = {
        'todo': todo,
        'data': data,
    }
    return HttpResponse(data,
                content_type='application/json')