from app.serializers.job import JobSerializer
from app.models.job import Job
from rest_framework import viewsets

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer