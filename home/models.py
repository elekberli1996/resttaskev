from django.db import models
from django.contrib.auth.models import User
class Car(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    model=models.CharField(max_length=30)
    marka=models.CharField(max_length=30)
    yer=models.CharField(max_length=30)
    il=models.IntegerField()
    qiymet=models.IntegerField()

    def __str__(self):
        return self.marka

# Create your models here.
