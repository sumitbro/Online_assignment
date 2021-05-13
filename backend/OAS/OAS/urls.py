
from re import template
from django.contrib import admin
from django.urls import path,include, re_path
from django.views.generic.base import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('accounts.urls')),
    path('assignments/', include('assignment.assignment_url.urls')),
    path('graded-assignments/', include('assignment.graded_assignment_url.urls')),
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html'))
    
]
