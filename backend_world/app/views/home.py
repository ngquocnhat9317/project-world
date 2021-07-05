from app import serializers
from app.serializers.house_owner import HouseOwnerSerializer
from app.models.person import Person
from app.models.house_owner import HouseOwner
from app.serializers.home import HomeSerializer
from app.models.home import Home
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

def check_correct_family(husband_id, wife_id):
    husband = Person.objects.filter(pk=husband_id, gender='XY')
    wife = Person.objects.filter(pk=wife_id, gender='XX')
    if husband and wife:
        return True
    return False

class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer
    
    @action(methods=['post'], detail=False, url_path='make-family', url_name='make-family')
    def make_family(self, request, *args, **kwargs):
        req_data = dict(request.data)
        husband_id = req_data['husband']
        wife_id = req_data['wife']
        check = self.check_correct_family(husband_id, wife_id)
        if check:
            local = Person.objects.filter(pk=husband_id).values('local')
            
            serializer = HouseOwnerSerializer(data=rq)
        return Response({
            'message': 'success'
        })
        
    def create_house(husband_id):
        local = Person.objects.filter(pk=husband_id).values('local')
        serializer = HomeSerializer(data={
            'local': local
        })
        serializer.is_valid()
        serializer.save()
        
        
    def check_correct_family(husband_id, wife_id):
        husband = Person.objects.filter(pk=husband_id, gender='XY')
        wife = Person.objects.filter(pk=wife_id, gender='XX')
        if husband and wife:
            return True
        return False
