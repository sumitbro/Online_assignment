from rest_framework import serializers
from djoser.serializers import UserCreateSerializer,UserSerializer
from django.contrib.auth import get_user_model
from .models import *

User= get_user_model()

class AccountCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model= User
        fields= ('id', 'email', 'username', 'password', 'type')
