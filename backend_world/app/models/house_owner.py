from django.db import models

from app.models import Person
from app.models import Home


class HouseOwner(models.Model):
    house = models.ForeignKey(
        Home,
        null=True,
        on_delete=models.PROTECT
    )
    husband = models.ForeignKey(
        Person,
        null=True,
        on_delete=models.PROTECT,
        related_name='husband'
    )
    wife = models.ForeignKey(
        Person,
        null=True,
        on_delete=models.PROTECT,
        related_name='wife'
    )

    class Meta:
        db_table = 'house owner'
        verbose_name = 'House Owner'
        constraints = [
            models.UniqueConstraint(fields=['husband', 'wife'], name='family')
        ]