from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view
from Api.models import Student
from .serializers import SerializerSrudent

@api_view(['GET'])
def getData(request):
    student = Student.objects.all()
    serializer = SerializerSrudent(student, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postData(request):
    serilaizer = SerializerSrudent(data= request.data)
    if serilaizer.is_valid():
        serilaizer.save()
    return Response(serilaizer.data)

@api_view(['DELETE'])
def deleteData(request, id):
    student = Student.objects.get(id=id)
    if request.method == 'DELETE':
        student.delete()
    return Response()

@api_view(['PUT'])
def putData(request, id):
    student = Student.objects.get(id=id)
    student_data = JSONParser().parse(request) 
    serializer = SerializerSrudent(student, data=student_data) 
    if serializer.is_valid(): 
        serializer.save() 
        return Response(serializer.data) 
    return Response(serializer.data) 