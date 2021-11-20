from django.db import models

from app.models import Job
from app.models import Map


class Person(models.Model):
    GENDER = [
        ('XX', 'Female'),
        ('XY', 'Male'),
    ]
    STATUS = [
        (0, 'Death'),
        (1, 'Alive'),
    ]

    first_name = models.CharField(
        max_length=50,
        blank=False,
        null=False
    )
    last_name = models.CharField(
        max_length=50,
        blank=False,
        null=False
    )
    gender = models.CharField(
        max_length=2,
        choices=GENDER,
        null=False,
        default='XY'
    )
    age = models.IntegerField(
        null=False,
        default=0
    )
    job = models.ForeignKey(
        Job,
        null=True,
        blank=True,
        on_delete=models.PROTECT
    )
    status = models.IntegerField(
        choices=STATUS,
        null=False,
        default=1
    )
    local = models.ForeignKey(
        Map,
        null=False,
        blank=True,
        on_delete=models.CASCADE
    )
    date_of_birth = models.DateTimeField(
        null=False,
        default='01/01/0001'
    )
    date_of_death = models.DateTimeField(null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        db_table = 'person'
        verbose_name = 'Person'
        verbose_name_plural = 'People'

    def save(self, *args, **kwargs):
        is_exist_male = Person.objects.filter(gender='XY')
        is_exist_female = Person.objects.filter(gender='XX')
        if is_exist_male is None:
            self.first_name = 'Adam'
            self.last_name = ''
            self.gender = 'XY'
            self.age = 18

        if is_exist_female is None:
            self.first_name = 'Eva'
            self.last_name = ''
            self.gender = 'XX'
            self.age = 18

        super(Person, self).save(*args, **kwargs)