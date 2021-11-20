from django.db import models

from app.models import Map


class Home(models.Model):
    local = models.ForeignKey(
        Map,
        null=False,
        blank=True,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.local

    class Meta:
        db_table = 'home'
        verbose_name = 'Home'