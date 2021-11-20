from rest_framework import routers

from app.views.job import JobViewSet
from app.views.person import PersonViewSet


router = routers.DefaultRouter()
router.register('people', PersonViewSet)
router.register('jobs', JobViewSet)