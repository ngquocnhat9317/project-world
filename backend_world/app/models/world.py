from django.db import models
from app.constants.variables import COLS, ROWS

class World(models.Model):
    MONTH = [
        (1, 'January'),
        (2, 'February'),
        (3, 'March'),
        (4, 'April'),
        (5, 'May'),
        (6, 'June'),
        (7, 'July'),
        (8, 'August'),
        (9, 'September'),
        (10, 'October'),
        (11, 'November'),
        (12, 'December')
    ]
    MAP = [[0 for i in range(COLS)] for j in range(ROWS)]
    
    year = models.IntegerField(null=False, default=0)
    month = models.IntegerField(choices=MONTH, default=1)
    map = models.JSONField(default=MAP)
    
    def __str__(self):
        return 'month %i - year %i' % (self.month, self.year)
    
    class Meta:
        db_table = 'current world'