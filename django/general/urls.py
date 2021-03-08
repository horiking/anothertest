from django.urls import path
from .views import ElementList

app_name = 'general'

urlpatterns = [
    path('api/', ElementList.as_view(), name='allelements'),
]
