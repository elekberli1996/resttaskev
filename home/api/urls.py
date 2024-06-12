
from django.urls import path
from .views import CarListAPIView

urlpatterns = [
   
    path('listcar/', CarListAPIView.as_view(),name="api-listcar" )
 
]