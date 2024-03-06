from . models import Car
from rest_framework import serializers

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('brand', 'mark', 'year', 'price_usd')
