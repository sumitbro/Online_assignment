from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, username, password, type, **other_fields):
         if not email:
             raise ValueError(_('Email is required'))
         if not username:
             raise ValueError(_('Username is required'))
         if not type:
            raise ValueError(_('type is required'))
         email= self.normalize_email(email)
         user= self.model(email=email, username=username,  type=type, **other_fields)
         user.set_password(password)
         user.save()
         return user
    
    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('type', 'SUPERUSER')

        if other_fields.get('is_staff') is None:
            raise ValueError("Superuser must be assigned is_staff=True")
        if other_fields.get('is_superuser') is None:
            raise ValueError("Superuser must be assigned is_superuser= True")
        return self.create_user(email, username, password, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):

    class Types(models.TextChoices):
        ORGANIZATION = "ORGANIZATION", 'Organization'
        STUDENT = "STUDENT", 'Student'
        SUPERUSER = "SUPERUSER", 'Superuser'

    username= models.CharField(max_length=50, unique=False, null=True)
    email= models.EmailField(max_length=250, unique=True)
    is_active= models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    type= models.CharField(_('Type'), max_length=50, choices=Types.choices, null=True)
     
    date_joined= models.DateTimeField(auto_now_add=True)



    # info_created= models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['type', 'username']

    objects = UserManager()

    def __str__(self):
        return self.email

    def get_email(self):
        return self.email



# from django.contrib.auth.models import AbstractUser

# class User(AbstractUser):
#     email= models.EmailField(verbose_name='email',max_length=255,unique=True)
#     # username= models.CharField(max_length=40)
#     REQUIRED_FIELDS= ['username']
#     USERNAME_FIELD= 'email'

#     def get_username(self):
#         return self.email

