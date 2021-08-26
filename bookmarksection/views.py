from django.contrib.auth import get_user
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, Http404
from .Scraper import scraper
from rest_framework import status
from .models import *


from .serializers import BookmarkSerializer

from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from timelines.models import Timeline
from rest_framework import permissions
from .permissions import IsOwner



class BookmarkAPIView(ListCreateAPIView):
    serializer_class = BookmarkSerializer
    queryset = Bookmark.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        print(self.request)
        url = self.request.data['url_field']
        scrap = scraper(url)
        data = {'url_field':url,'description':scrap.description,'title_name' : scrap.title,'image_field':scrap.imgsrc}
        serializer = BookmarkSerializer(data=data)
        if serializer.is_valid():
            return serializer.save(user=self.request.user)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
    


class BookmarkDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = BookmarkSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    queryset = Bookmark.objects.all()
    lookup_field = "id"

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)