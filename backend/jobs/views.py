from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from. models import *
from .serializers import *

###############################################################################
class JobPostListingView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        jobs = JobPost.objects.all()
        serializer = JobPostSerializer(jobs, many=True)

        return Response({"job posts": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = JobPostSerializer(data=request.data)
        if serializer.is_valid():
            job_post = serializer.save(publisher=request.user)
            return Response({"msg":"job post created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class JobPostDetailView(APIView):
    def get(self, request, id):
        try:
            job_post = JobPost.objects.get(id=id)
        except JobPost.DoesNotExist:
            return Response({"error", "job post not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = JobPostSerializer(job_post)
        
        return Response({"job post": serializer.data}, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            job_post = JobPost.objects.get(id=id)
        except JobPost.DoesNotExist:
            return Response({"error", "job post not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = JobPostSerializer(job_post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete (self, request, id):
        try:
            job_post = JobPost.objects.get(id=id)
        except JobPost.DoesNotExist:
            return Response({"error", "job post not found"}, status=status.HTTP_404_NOT_FOUND)
        
        job_post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
###########################################################################################################

class ProfessionCategoryListingView(APIView):
    def get(self, request):

        try:
            categories = ProfessionCategory.objects.all()
            serializer = ProfessionCategorySerializer(categories, many=True)

        except:
            return Response({"message": "an error happened when fetching data"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({"categories": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ProfessionCategorySerializer(request.data)
        if serializer.is_valid():
            category = serializer.save()
            return Response({"category created successfully": category}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    


class ProfessionCategoryDetailView(APIView):
    def get(self, request, id):
        try:
            category = ProfessionCategory.objects.get(id=id)
        except ProfessionCategory.DoesNotExist:
            return Response({"error", "category not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfessionCategorySerializer(category)
        
        return Response({"category": serializer.data}, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            category = ProfessionCategory.objects.get(id=id)
        except ProfessionCategory.DoesNotExist:
            return Response({"error", "category not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProfessionCategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete (self, request, id):
        try:
            category = ProfessionCategory.objects.get(id=id)
        except ProfessionCategory.DoesNotExist:
            return Response({"error", "category not found"}, status=status.HTTP_404_NOT_FOUND)
        
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

##############################################################################################################

class ProfessionListingView(APIView):
    def get(self, request):
        profession = Profession.objects.all()
        serializer = ProfessionSerializer(profession, many=True)

        return Response({"professions": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = ProfessionSerializer(request.data)
        if serializer.is_valid():
            profession = serializer.save()
            return Response({"profession created successfully": profession}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    


class ProfessionDetailView(APIView):
    def get(self, request, id):
        try:
            profession = Profession.objects.get(id=id)
        except Profession.DoesNotExist:
            return Response({"error", "profession not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfessionSerializer(profession)
        
        return Response({"profession": serializer.data}, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            profession = Profession.objects.get(id=id)
        except Profession.DoesNotExist:
            return Response({"error", "profession not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProfessionSerializer(profession, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete (self, request, id):
        try:
            profession = Profession.objects.get(id=id)
        except Profession.DoesNotExist:
            return Response({"error", "profession not found"}, status=status.HTTP_404_NOT_FOUND)
        
        profession.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

####################################################################################################################

class CompanyListingView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)

        return Response({"companies": serializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = CompanySerializer(request.data)
        if serializer.is_valid():
            company = serializer.save()
            return Response({"company created successfully": company}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    


class CompanyDetailView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return Response({"error", "company not found"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CompanySerializer(company)
        
        return Response({"company": serializer.data}, status=status.HTTP_200_OK)
    
    def put(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return Response({"error", "company not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    def delete (self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return Response({"error", "company not found"}, status=status.HTTP_404_NOT_FOUND)
        
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

########################################################################################################################