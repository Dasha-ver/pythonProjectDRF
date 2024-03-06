from . models import Cities
from rest_framework import serializers

class CitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = ('__all__')