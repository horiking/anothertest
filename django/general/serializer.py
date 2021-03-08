from rest_framework import serializers
from .models import Element


class ElementSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('name', 'creationdate','id')
        model = Element
