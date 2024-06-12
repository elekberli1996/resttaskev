from rest_framework.generics import ListAPIView
from .serializer import CarSerializer
from ..models import Car

class CarListAPIView(ListAPIView):
    queryset=Car.objects.all()
    serializer_class=CarSerializer