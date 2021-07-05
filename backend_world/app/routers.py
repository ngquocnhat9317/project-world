from app.views.home import HomeViewSet
from app.views.job import JobViewSet
from app.views.person import PersonViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('people', PersonViewSet)
router.register('jobs', JobViewSet)
router.register('home', HomeViewSet)