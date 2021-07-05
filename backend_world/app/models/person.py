from django.db import models
from app.models.world import World
from app.models.job import Job
from app.models.home import Home

class Person(models.Model):
    GENDER = [
        ('XX', 'Female'),
        ('XY', 'Male'),
    ]
    STATUS = [
        (0, 'Death'),
        (1, 'Alive'),
    ]
    
    first_name = models.CharField(max_length=50, blank=False, null=False)
    last_name = models.CharField(max_length=50, blank=False, null=False)
    gender = models.CharField(max_length=5, choices=GENDER, blank=False, null=False)
    age = models.IntegerField(default=0)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, null=True, blank=True, default=None)
    status = models.IntegerField(choices=STATUS, default=1)
    home = models.ManyToManyField(Home, through='HouseOwner', through_fields=('owner', 'house'))
    local = models.CharField(max_length=13, null=False, default='000001-000001')
    date_of_birth = models.IntegerField(null=False)
    date_of_death = models.IntegerField(null=True, blank=True)
    
    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)
    
    class Meta:
        db_table = 'person'
        verbose_name = 'Person'
        verbose_name_plural = 'People'