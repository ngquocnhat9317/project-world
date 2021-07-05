from django.contrib import admin
from app.models import *

admin.site.register((Job, Person, Home, HouseOwner, World))
# Register your models here.
