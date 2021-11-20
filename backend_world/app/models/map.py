from django.db import models
from app.models import World


class Map(models.Model):
    world = models.ForeignKey(World,
        null=False,
        blank=False,
        on_delete=models.CASCADE
    )
    local = models.CharField(
        max_length=13,
        null=False,
        blank=True
    )

    class Meta:
        db_table = 'map'
        verbose_name = 'Map'
