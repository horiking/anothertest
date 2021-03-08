from django.db import models
from django.utils import timezone


class Element(models.Model):
    name = models.CharField(max_length = 100)
    creationdate =  models.DateTimeField(default=timezone.now)



# Create your models here.
