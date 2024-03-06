import django_filters

from .serializers import CarSerializer
from rest_framework import viewsets
from .models import Car
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from . permissions import AllForAdminOtherReadOnly
import django_filters.rest_framework
from rest_framework import filters


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = (AllForAdminOtherReadOnly, )
    filter_backends = [filters.OrderingFilter]
    search_fields = ['brand', 'mark', 'year', 'price_usd']




