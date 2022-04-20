from django.db import models

# Create your models here.

class React(models.Model):
    nitrogen = models.FloatField()
    pottasium = models.FloatField()
    phosphorous= models.FloatField()
    ph = models.FloatField()
    rainfall = models.FloatField()
    city = models.CharField(max_length=30)

    def _str_(self):
        return self.title