import django_filters.rest_framework

from .models import Cities
from .serializers import CitiesSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from . permissions import AllForAdminOtherReadOnly
from rest_framework import filters


class CitiesViewSet(viewsets.ModelViewSet):
    queryset = Cities.objects.all()
    serializer_class = CitiesSerializer
    permission_classes = (AllForAdminOtherReadOnly,)
    filter_backends = [filters.OrderingFilter]
    search_fields = ['name', 'region', 'year_of_foundation']
