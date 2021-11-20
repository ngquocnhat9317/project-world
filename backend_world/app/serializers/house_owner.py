from rest_framework import fields, serializers

from app.models import HouseOwner


class HouseOwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseOwner
        fields = ['house', 'husband', 'wife']