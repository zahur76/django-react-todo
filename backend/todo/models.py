from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title