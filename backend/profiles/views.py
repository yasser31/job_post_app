from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

##############################################################################################################
class ProfilListView(APIView):
    def get(self, request):
        profiles = Profil.objects.all()
        serializer = ProfilSerializer(profiles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ProfilSerializer(data=request.data)
        if serializer.is_valid():
            profil = serializer.save()
            return Response(profil, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ProfilDetailView(APIView):
    def get(self, request, id):
        try:
            profil = Profil.objectsget(id=id)
        except Profil.DoesNotExist:
            return Response({"error": "Profil Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfilSerializer(profil)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            profil = Profil.objectsget(id=id)
        except Profil.DoesNotExist:
            return Response({"error": "Profil Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProfilSerializer(profil, data=request.data)
        if serializer.is_valid():
            profil = serializer.save()
            return Response(profil, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id):
        try:
            profil = Profil.objectsget(id=id)
        except Profil.DoesNotExist:
            return Response({"error": "Profil Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        profil.delete()
        return Response({"message": "Profil Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
    
##############################################################################################################
class EducationListView(APIView):
    def get(self, request):
        education = Education.objects.all()
        serializer = EducationSerializer(education, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = EducationSerializer(data=request.data)
        if serializer.is_valid():
            education = serializer.save()
            return Response(education, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class EducationDetailView(APIView): 
    def get(self, request, id):
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return Response({"error": "Education Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = EducationSerializer(education)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return Response({"error": "Education Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = EducationSerializer(education, data=request.data)
        if serializer.is_valid():
            education = serializer.save()
            return Response(education, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            education = Education.objects.get(id=id)
        except Education.DoesNotExist:
            return Response({"error": "Education Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        education.delete()
        return Response({"message": "Education Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
##############################################################################################################
class WorkExperienceListView(APIView):
    def get(self, request):
        work_experience = WorkExperience.objects.all()
        serializer = WorkExperienceSerializer(work_experience, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = WorkExperienceSerializer(data=request.data)
        if serializer.is_valid():
            work_experience = serializer.save()
            return Response(work_experience, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class WorkExperienceDetailView(APIView):
    def get(self, request, id):
        try:
            work_experience = WorkExperience.objects.get(id=id)
        except WorkExperience.DoesNotExist:
            return Response({"error": "Work Experience Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = WorkExperienceSerializer(work_experience)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            work_experience = WorkExperience.objects.get(id=id)
        except WorkExperience.DoesNotExist:
            return Response({"error": "Work Experience Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = WorkExperienceSerializer(work_experience, data=request.data)
        if serializer.is_valid():
            work_experience = serializer.save()
            return Response(work_experience, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, id):
        try:
            work_experience = WorkExperience.objects.get(id=id)
        except WorkExperience.DoesNotExist:
            return Response({"error": "Work Experience Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        work_experience.delete()
        return Response({"message": "Work Experience Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
##############################################################################################################
class SkillListView(APIView):
    def get(self, request):
        skills = Skill.objects.all()
        serializer = SkillSerializer(skills, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = SkillSerializer(data=request.data)
        if serializer.is_valid():
            skill = serializer.save()
            return Response(skill, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class SkillDetailView(APIView): 
    def get(self, request, id):
        try:
            skill = Skill.objects.get(id=id)
        except Skill.DoesNotExist:
            return Response({"error": "Skill Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = SkillSerializer(skill)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            skill = Skill.objects.get(id=id)
        except Skill.DoesNotExist:
            return Response({"error": "Skill Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = SkillSerializer(skill, data=request.data)
        if serializer.is_valid():
            skill = serializer.save()
            return Response(skill, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, id):
        try:
            skill = Skill.objects.get(id=id)
        except Skill.DoesNotExist:
            return Response({"error": "Skill Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        skill.delete()
        return Response({"message": "Skill Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
##############################################################################################################
class UserSkillListView(APIView):
    def get(self, request):
        user_skills = UserSkill.objects.all()
        serializer = UserSkillSerializer(user_skills, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserSkillSerializer(data=request.data)
        if serializer.is_valid():
            user_skill = serializer.save()
            return Response(user_skill, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserSkillDetailView(APIView):
    def get(self, request, id):
        try:
            user_skill = UserSkill.objects.get(id=id)
        except UserSkill.DoesNotExist:
            return Response({"error": "User Skill Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = UserSkillSerializer(user_skill)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            user_skill = UserSkill.objects.get(id=id)
        except UserSkill.DoesNotExist:
            return Response({"error": "User Skill Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSkillSerializer(user_skill, data=request.data)
        if serializer.is_valid():
            user_skill = serializer.save()
            return Response(user_skill, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            user_skill = UserSkill.objects.get(id=id)
        except UserSkill.DoesNotExist:
            return Response({"error": "User Skill Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        user_skill.delete()
        return Response({"message": "User Skill Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
##############################################################################################################
class LanguageListView(APIView):
    def get(self, request):
        languages = Language.objects.all()
        serializer = LanguageSerializer(languages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = LanguageSerializer(data=request.data)
        if serializer.is_valid():
            language = serializer.save()
            return Response(language, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LanguageDetailView(APIView):  
    def get(self, request, id):
        try:
            language = Language.objects.get(id=id)
        except Language.DoesNotExist:
            return Response({"error": "Language Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = LanguageSerializer(language)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            language = Language.objects.get(id=id)
        except Language.DoesNotExist:
            return Response({"error": "Language Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = LanguageSerializer(language, data=request.data)
        if serializer.is_valid():
            language = serializer.save()
            return Response(language, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, id):
        try:
            language = Language.objects.get(id=id)
        except Language.DoesNotExist:
            return Response({"error": "Language Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        language.delete()
        return Response({"message": "Language Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
##############################################################################################################
class UserLanguageListView(APIView):
    def get(self, request):
        user_languages = UserLanguage.objects.all()
        serializer = UserLanguageSerializer(user_languages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserLanguageSerializer(data=request.data)
        if serializer.is_valid():
            user_language = serializer.save()
            return Response(user_language, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class UserLanguageDetailView(APIView):
    def get(self, request, id):
        try:
            user_language = UserLanguage.objects.get(id=id)
        except UserLanguage.DoesNotExist:
            return Response({"error": "User Language Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        serializer = UserLanguageSerializer(user_language)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            user_language = UserLanguage.objects.get(id=id)
        except UserLanguage.DoesNotExist:
            return Response({"error": "User Language Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserLanguageSerializer(user_language, data=request.data)
        if serializer.is_valid():
            user_language = serializer.save()
            return Response(user_language, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            user_language = UserLanguage.objects.get(id=id)
        except UserLanguage.DoesNotExist:
            return Response({"error": "User Language Does Not Exists"}, status=status.HTTP_404_NOT_FOUND)
        user_language.delete()
        return Response({"message": "User Language Deleted Successfully"}, status=status.HTTP_204_NO_CONTENT)
##############################################################################################################
# The above code defines API views for handling CRUD operations on various models related to user profiles, including Profil, Education, WorkExperience, Skill, UserSkill, Language, and UserLanguage.
# Each model has a corresponding list view and detail view, allowing for the retrieval, creation, updating, and deletion of instances.
# The views use Django REST Framework's APIView class and serializers to handle requests and responses.
# The views are organized into classes, with each class handling a specific model and its associated operations.
# The code is structured to provide a clear and consistent API for interacting with the user profile data, making it easy to extend or modify in the future.
# The views are designed to be used in a Django application, and they rely on the Django ORM for database interactions.
# The code is well-organized and follows best practices for building RESTful APIs in Django.
