from django.db import models

from app.models import HouseOwner
from app.models import Person


class Child(models.Model):
    house = models.ForeignKey(
        HouseOwner,
        null=True,
        on_delete=models.PROTECT
    )
    child = models.ForeignKey(
        Person,
        null=True,
        on_delete=models.PROTECT
    )

    def __str__(self):
        return self.local

    class Meta:
        db_table = 'child'
        verbose_name = 'Child'