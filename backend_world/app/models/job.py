from django.db import models

class Job(models.Model):
    
    LEVEL = [
        (1, 'Level 1'),
        (2, 'Level 2'),
        (3, 'Level 3'),
        (4, 'Level 4'),
        (5, 'Level 5'),
        (6, 'Level 6'),
    ]
    
    job_name = models.CharField(max_length=50)
    job_level = models.IntegerField(choices=LEVEL)
    basic_salary = models.IntegerField()
    
    def __str__(self):
        return self.job_name
    
    class Meta:
        db_table = 'job'
        verbose_name = 'Job'