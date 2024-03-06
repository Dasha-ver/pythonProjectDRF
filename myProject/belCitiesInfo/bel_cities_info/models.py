from django.db import models

class Cities(models.Model):
    name = models.CharField(max_length=60)
    region = models.CharField(max_length=60)
    year_of_foundation = models.IntegerField()

    def __str__(self):
        return f'{self.name} : {self.region}, {self.year_of_foundation} year'