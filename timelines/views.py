from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, Http404
from django.views.generic import TemplateView
from .models import *
from taggit.managers import TaggableManager
from django.contrib.auth.decorators import login_required
import requests
from django.db import IntegrityError
from rest_framework.parsers import JSONParser
from .serializers import TimelineSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, mixins, viewsets, permissions
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user


# Create your views here.
def addJourney(request, bookmark_id):
    journey_name = request.POST.get('name')
    if len(journey_name) > 0:

        timeline = Timeline.objects.create(name=journey_name)
        timeline.save()
        curr_bookmark = Bookmark.objects.get(id=bookmark_id)
        timeline.bookmarks.add(curr_bookmark)
    return redirect('/')


def addtoexisting(request, bookmark_id, timeline_id):
    timeline = get_object_or_404(Timeline, id=timeline_id)
    curr_bookmark = Bookmark.objects.get(id=bookmark_id)
    # bookmark = Bookmark.objects.create(url_field="http://google.com", title_name = "ffw", description="dbhbckh")
    timeline.bookmarks.add(curr_bookmark)
    timeline.save()
    return HttpResponse("gandu " + str(curr_bookmark.id) + " " + curr_bookmark.title_name)
    # return redirect('/')


def journey(request):
    allTimelines = Timeline.objects.all()
    context2 = {'allTimelines': allTimelines}
    return render(request, 'timelines/journey_list.html', context2)


def timeline(request, name):
    curr_timeline = Timeline.objects.get(name=name)
    allBookmarks = curr_timeline.bookmarks.all().order_by('date')
    context1 = {'allBookmarks': allBookmarks, 'curr_timeline': curr_timeline}
    return render(request, 'timelines/journey.html', context1)


class TimelineAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        timelines = Timeline.objects.all()
        serializer = TimelineSerializer(timelines, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        data["user"] = get_user(request).id
        serializer = TimelineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        timelines = Timeline.objects.all()
        serializer = TimelineSerializer(timelines, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TimelineDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Timeline.objects.get(pk=pk)
        except Timeline.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        timeline = self.get_object(pk)
        serializer = TimelineSerializer(timeline)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        timeline = self.get_object(pk)
        curr_bookmark = Bookmark.objects.get(id=request.data["bookmark_id"])
        # bookmark = Bookmark.objects.create(url_field="http://google.com", title_name = "ffw", description="dbhbckh")
        timeline.bookmarks.add(curr_bookmark)
        timeline.save()

        return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        timeline = self.get_object(pk)
        timeline.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

