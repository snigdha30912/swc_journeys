
from django.contrib.auth import views as auth_views
from . import views
from .views import *
from django.urls import path,include
from .models import Bookmark
from rest_framework.routers import DefaultRouter

app_name = 'bookmarksection'

urlpatterns = [
    path('bookmarks', bookmark_list, name = 'bookmark'),
    path('bookmarkApi/', views.BookmarkAPIView.as_view()),
    path('bookmarkApi/<int:pk>/', views.BookmarkDetail.as_view()),
    path('discoverbookmarks', discoverbookmark_list, name = 'discoverbookmark'),
    path('discoverbookmarkApi/', views.DiscoverBookmarkAPIView.as_view()),
    path('discoverbookmarkApi/<int:pk>/', views.DiscoverBookmarkDetail.as_view()),
    path('delete/<post_id>',views.delete_post,name='delete'),
    
]
