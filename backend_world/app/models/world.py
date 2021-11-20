from django.db import models


class World(models.Model):
    year = models.CharField(
        max_length=4,
        null=False,
        default=0
    )
    month = models.CharField(
        max_length=2,
        default=1
    )
    seed = models.CharField(
        max_length=15,
        null=True
    )

    def __str__(self):
        return f'month {self.month} - year {self.year} - world {self.seed}'

    class Meta:
        db_table = 'world'
        verbose_name = 'World'
        verbose_name_plural = 'Worlds'