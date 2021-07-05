from django.db import models
from app.models.person import Person
from app.models.home import Home

class HouseOwner(models.Model):
    
    POSITION = [
        (1, 'Husband'),
        (2, 'Wife'),
        (3, 'Child')
    ]
    owner = models.ForeignKey(Person, on_delete=models.CASCADE)
    house = models.ForeignKey(Home, on_delete=models.CASCADE)
    position = models.IntegerField(choices=POSITION, default=3)
    
    class Meta:
        db_table = 'house owner'
        verbose_name = 'House Owner'
        constraints = [
            models.UniqueConstraint(fields=['owner', 'house'], name='house owner')
        ]