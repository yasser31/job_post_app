from rest_framework import serializers 
from .models import Profil, Education, WorkExperience, Skill, UserSkill, Language, UserLanguage



class ProfilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profil
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = "__all__"


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class UserSkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSkill
        fields = "__all__"


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = "__all__"


class UserLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserLanguage
        fields= "__all__"