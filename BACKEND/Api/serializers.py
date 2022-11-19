from rest_framework import serializers
from Api.models import Student

class SerializerSrudent(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['firstname','lastname', 'dob', 'email', 'username', 'joined']
