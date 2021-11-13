from rest_framework.views import APIView
from rest_framework.response import Response

from app.serializers.house_owner import HouseOwnerSerializer
from app.models import Person
from app.models import Home

from app.serializers import HomeSerializer


class HomeViewSet(APIView):

    def get(self, request, *args, **kwargs):
        husband_id = request.data['husband']
        wife_id = request.data['husband']
        check = self.check_correct_family(request)
        if check:
            local = Person.objects.filter(pk=husband_id).values_list('local')[0]
            house = Home.objects.create({
                'local': local
            })
            serializer = HouseOwnerSerializer(data={
                'house': house.id,
                'husband': husband_id,
                'wife': wife_id
            })
            serializer.is_valid()
            serializer.save()
        return Response({
            'message': 'success'
        })

    def create_house(husband_id):
        local = Person.objects.filter(pk=husband_id).values_list('local').first()
        serializer = HomeSerializer(data={
            'local': local
        })
        serializer.is_valid()
        serializer.save()

    def check_correct_family(request):
        data = request.data
        husband_id = data['husband']
        wife_id = data['wife']
        husband = Person.objects.filter(pk=husband_id, gender='XY')
        wife = Person.objects.filter(pk=wife_id, gender='XX')
        if husband and wife:
            return True
        return False
