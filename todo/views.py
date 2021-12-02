from django.shortcuts import render, HttpResponse,get_object_or_404
from django.core.serializers import serialize
from .models import Todo
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth import authenticate, login, logout, get_user_model


# Create your views here.
def home(request):
    ''' View to return all Todo objects'''

    data = serialize('json', Todo.objects.all().order_by('id'))

    return HttpResponse(data,
                content_type='application/json')

def status(request, todo_id):
    ''' View to update status of object'''

    todo = get_object_or_404(Todo, id=todo_id)
    if todo.completed:
        todo.completed = False
        todo.save()
    else:
        todo.completed = True
        todo.save()
    data = serialize('json', Todo.objects.all().order_by('id'))

    return HttpResponse(data,
                content_type='application/json')

def remove_todo(request, todo_id):
    ''' View to update status of object'''

    todo = get_object_or_404(Todo, id=todo_id)
    todo.delete()
    data = serialize('json', Todo.objects.all().order_by('id'))

    return HttpResponse(data,
                content_type='application/json')

@require_POST
@csrf_exempt
def add_todo(request):
    ''' View to add new todo object'''
    if request.method == 'POST':
        data = json.loads(request.body)        
        Todo.objects.create(title=data['name'], description=data['description'])

        data = serialize('json', Todo.objects.all().order_by('id'))

        return HttpResponse(data,
                    content_type='application/json')


@require_POST
@csrf_exempt
def login(request):
    ''' View to authenticate login'''
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        print(password)
        print(username)
        if user is not None:
            print('all good')
            data = {'login': True}
            return HttpResponse(json.dumps(data),
                    content_type='application/json')
        data = {'login': False}
        return HttpResponse(json.dumps(data),
                    content_type='application/json')

def logout(request):
    ''' View to authenticate login'''
    
    data = {'login': False}

    return HttpResponse(json.dumps(data),
                content_type='application/json')
