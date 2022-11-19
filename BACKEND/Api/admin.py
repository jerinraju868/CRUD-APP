from django.contrib import admin

from Api.models import Student

class AdminStudnet(admin.ModelAdmin):
    list_display =['id','firstname','lastname', 'dob', 'email', 'username', 'password','joined']

admin.site.register(Student, AdminStudnet)