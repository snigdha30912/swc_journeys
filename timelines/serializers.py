from rest_framework import serializers
from .models import Timeline
from django.contrib.auth.models import User
from django.utils import timezone
from taggit.managers import TaggableManager


class TimelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timeline
        fields = ['id','name', 'date_started', 'bookmarks']

