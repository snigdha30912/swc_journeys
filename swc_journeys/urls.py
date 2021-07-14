from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('timeline/', include('userprofile.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('allauth.urls')),
    path('bookmarksection/', include('bookmarksection.urls')),
    path('timelines/', include('timelines.urls')),
    path('communities/', include('communities.urls')),
    path('auth/', include('drf_social_oauth2.urls', namespace='drf')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
