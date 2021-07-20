from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from .views import *



urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('bookmarksection/', include('bookmarksection.urls')),
    path('timelines/', include('timelines.urls')),
    path('communities/', include('communities.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('rest-auth/github/', GithubLogin.as_view(), name='github_login')


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
