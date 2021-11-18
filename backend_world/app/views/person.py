from app.serializers.person import ListPersonSerializer, FirstPersonSerializer, PersonSerializer
from app.models.person import Person
from rest_framework import viewsets
from rest_framework.decorators import action

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

    def list(self, request, *args, **kwargs):
        self.serializer_class = PersonSerializer
        return super().list(request, *args, **kwargs)

    @action(methods=['post'], detail=False, url_path='create-by-god', url_name='create-by-god')
    def create_by_god(self, request, *args, **kwargs):
        self.serializer_class = FirstPersonSerializer
        return super().create(request, *args, **kwargs)

    @action(methods=['get'], detail=False, url_path='list-full', url_name='list-full')
    def list_full(self, request, *args, **kwargs):
        self.serializer_class = ListPersonSerializer
        return super().list(request, *args, **kwargs)
    # @action(methods=['post'], detail=False, url_path='born', url_name='born')
    # def born(self, request, pk, *args, **kwargs):
