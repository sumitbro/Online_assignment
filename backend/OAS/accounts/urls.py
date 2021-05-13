from django.urls import path, include, re_path
from accounts import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [

    path('', include('djoser.urls')),
    path('', include('djoser.urls.jwt')),
    # path('profile/', views.UserProfileDetail.as_view())

    
]