from django.shortcuts import render, HttpResponse
from django.core.serializers import serialize
from .models import Todo
import json

# Create your views here.
def home(request):
    print('zahur')
    data2 = json.dumps({'zahur': 'banana'})
    data = serialize('json', Todo.objects.all())
    todo = Todo.objects.all()
    
    context = {
        'todo': todo,
        'data': data,
    }
    print(data2)
    return HttpResponse(data,
                content_type='application/json')