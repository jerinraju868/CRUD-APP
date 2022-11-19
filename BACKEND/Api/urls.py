import imp
from django.urls import path
from Api import views

urlpatterns = [
    path('',views.getData),
    path('add',views.postData),
    path('delete/<int:id>',views.deleteData),
]