from rest_framework import serializers
from django.contrib.auth import get_user_model


User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password", "confirm_password"]

    
    def validate(self, data):
        if data["password"] != data["confirm_password"]:
            raise serializers.ValidationError("passwords do not match")
        return data
    
    def create(self, validated_data):
        validated_data.pop("confirm_password")
        user = User.objects.create_user(**validated_data)

        return user