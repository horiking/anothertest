from django.shortcuts import render
from .models import Element
from rest_framework import generics
from .serializer import ElementSerializer

class ElementList(generics.ListCreateAPIView):
    queryset = Element.objects.all()
    serializer_class = ElementSerializer



# Create your views here.
