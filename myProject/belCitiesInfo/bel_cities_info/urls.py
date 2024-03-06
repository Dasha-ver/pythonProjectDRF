from django.urls import path, include
from rest_framework import routers
from . views import CitiesViewSet

router = routers.DefaultRouter()
router.register('cities', CitiesViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls'))

]