from rest_framework import serializers
from. models import JobPost, ProfessionCategory, Profession, Company


class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = "__all__"
    

    def validate_salary(self, value):
        for i in value:
            if i != "-" and not i.isnumeric():
                raise serializers.ValidationError("Salary must be numeric use - if you want an interval") 
        return value


class ProfessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profession
        fields = "__all__"



class ProfessionCategorySerializer(serializers.ModelSerializer):
    category_professions = ProfessionSerializer(many=True, read_only=True)
    class Meta:
        model = ProfessionCategory
        fields = ["id", "title", "category_professions"]



class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"