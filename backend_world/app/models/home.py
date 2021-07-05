from django.db import models
class Home(models.Model):
    local = models.CharField(max_length=13, null=False)
    
    def __str__(self):
        return self.local
    
    class Meta:
        db_table = 'home'
        verbose_name = 'Home'