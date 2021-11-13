from rest_framework import serializers

from app.models import HouseOwner
from app.models import Person


class ListPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

class PersonSerializer(serializers.ModelSerializer):

    father = serializers.SerializerMethodField()
    mother = serializers.SerializerMethodField()

    def get_father(self, person):
        return get_parent(person.id, 1)
    
    def get_mother(self, person):
        return get_parent(person.id, 2)
    class Meta:
        model = Person
        fields = ['id', 'first_name', 'last_name', 'gender', 'father', 'mother']
        
class FirstPersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'first_name', 'last_name', 'gender']
        
def get_parent_home(id):
    house = HouseOwner.objects.filter(owner=id, position=3).values('house')
    return house

def get_parent(id, position):
    home = get_parent_home(id)
    if home:
        parent_id = HouseOwner.objects.filter(house__in=home, position=position).values('owner')
        parent=  Person.objects.filter(pk__in=parent_id).first()
        serializer = FirstPersonSerializer(instance=parent)
        return serializer.data
    return None
