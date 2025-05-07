from rest_framework import serializers
from. models import JobPost, ProfessionCategory, Profession, Company


class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = "__all__"


class ProfessionCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfessionCategory
        fields = "__all__"


class ProfessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profession
        fields = "__all__"

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"