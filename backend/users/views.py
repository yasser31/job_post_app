from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated



User = get_user_model()

class RegisterView(APIView):
    

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "user created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(username=email, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "message": "user loged in "}, status=status.HTTP_200_OK)
        return Response({"message": "invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class LogOutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            request.auth.delete()
        except Token.DoesNotExistDoesNot:
            return Response({"message": "User Not Found."}, status=status.HTTP_404_NOT_FOUND)

        return Response({"message": "user disconected"}, status=status.HTTP_200_OK)