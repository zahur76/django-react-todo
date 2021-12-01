from django.shortcuts import render
from .models import Todo

# Create your views here.
def home(request):
    todo = Todo.objects.all()
    context = {
        'todo': todo,
    }
    return render(request, 'home/index.html', context)