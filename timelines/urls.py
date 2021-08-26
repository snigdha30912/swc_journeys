
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

app_name = 'timelines'

urlpatterns = [
    path('timelines/', views.TimelineAPIView.as_view()),
    path('timelines/<int:pk>/', views.TimelineDetail.as_view()),

]
