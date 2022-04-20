from rest_framework import serializers
from .models import React

class EfarmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ('id', 'Nitrogen', 'Potassium', 'Phosphorous' ,'ph', 'Rainfall', 'City')