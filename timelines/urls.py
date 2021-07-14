
from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

app_name = 'timelines'

urlpatterns = [
    path('journey', views.journey, name='journey'),
    path('journey/<name>', views.timeline, name='timeline'),
    path('addjourney/<int:bookmark_id>', views.addJourney),
    path('addtoexisting/<int:bookmark_id>/<int:timeline_id>', views.addtoexisting),
    path('timelines/', views.TimelineAPIView.as_view()),
    path('timelines/<int:pk>/', views.TimelineDetail.as_view()),

]
