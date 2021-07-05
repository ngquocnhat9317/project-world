from app.models.house_owner import HouseOwner
from rest_framework import fields, serializers

class HouseOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseOwner
        fields = '__all__'