from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse,Http404
from django.views.generic import TemplateView
from .Scraper import scraper
from .models import *
from .Scraper import discoverScraper
from taggit.managers import TaggableManager
from django.contrib.auth.decorators import login_required
import requests
from django.db import IntegrityError
from rest_framework.parsers import JSONParser
from .serializers import BookmarkSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, mixins, viewsets
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from timelines.models import Timeline
# Create your views here.

def bookmark_list(request):
    allBookmarks = Bookmark.objects.all()
    allTimelines = Timeline.objects.all()
    context = {'allBookmarks': allBookmarks, 'allTimelines':allTimelines}
    if request.method == 'POST':
        url_field = request.POST.get('url')
            
        scrap = scraper(url_field)
        try:
            bookmark = Bookmark.objects.create(url_field=url_field, title_name = scrap.title, description=scrap.description , image_field=scrap.imgsrc)
        except IntegrityError:
            return render(request, 'index.html',context)
            
            # return HttpResponse("ERROR: Kumquat already exists!")
        user = request.user
        for tag in scrap.tags:
            bookmark.tags.add(tag)
        bookmark.save()

        DiscoverBookmark.objects.all().delete()
        j=0
        for tag in bookmark.tags.most_common():
            if(j>2):
                 break
            j=j+1
            tag = str(tag)
            url = ('http://newsapi.org/v2/everything?'
                 'q='+ tag +'&'
                 'from=2021-5-10&'
                 'sortBy=popularity&'
                  'apiKey=f8e6fd8e886541e783d160dc60faf44e')
            response = requests.get(url)
            tag_json = response.json()
            k=0
            for article in tag_json['articles']:
                if(k>5):
                    break
                scrap = discoverScraper(article)
                discoverbookmark =  DiscoverBookmark.objects.create(url_field=scrap.URL, title_name = scrap.title, description=scrap.description , image_field=scrap.imgsrc)
                user = request.user
                k=k+1
                for tag in scrap.tags:
                    discoverbookmark.tags.add(tag)
                discoverbookmark.save()
    return render(request, 'bookmarksection/bookmark.html',context)

def discoverbookmark_list(request):
    allBookmarks = Bookmark.objects.all()
    allDiscoverBookmarks = DiscoverBookmark.objects.all()
    allTimelines = Timeline.objects.all()
    context2 = {'allDiscoverBookmarks' : allDiscoverBookmarks,  'allTimelines':allTimelines}
    return render(request, 'bookmarksection/discoverbookmark.html', context2)

    

def search_index(request):
    query = request.GET['query']
    allBookmarks = Bookmark.objects.filter(title_name__icontains=query)
    context = {'allBookmarks': allBookmarks}
    return render(request,'search_index.html',context)

def delete_post(request,post_id=None):
    post_to_delete=Bookmark.objects.get(id=post_id)
    post_to_delete.delete()
    return HttpResponseRedirect("/")


class BookmarkAPIView(APIView):

    def get(self, request):
        bookmarks = Bookmark.objects.all()
        serializer = BookmarkSerializer(bookmarks, many = True)
        return Response(serializer.data)

    def post(self, request):
        url =  request.data['url_field']

        scrap = discoverScraper(url)
      
        
        data = {'url_field':url,'description':scrap.description,'title_name' : scrap.title,'image_field':scrap.imgsrc}
        
        
        serializer = BookmarkSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DiscoverBookmarkAPIView(APIView):

    def get(self, request):
        bookmarks = DiscoverBookmark.objects.all()
        serializer = BookmarkSerializer(bookmarks, many = True)
        return Response(serializer.data)

    def post(self, request):
        url =  request.data['url_field']

        scrap = scraper(url)
      
        
        data = {'url_field':url,'description':scrap.description,'title_name' : scrap.title,'image_field':scrap.imgsrc}
        
        
        serializer = BookmarkSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookmarkDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Bookmark.objects.get(pk=pk)
        except Bookmark.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        serializer = BookmarkSerializer(bookmark)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        serializer = BookmarkSerializer(bookmark, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        bookmark.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DiscoverBookmarkDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return DiscoverBookmark.objects.get(pk=pk)
        except DiscoverBookmark.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        serializer = BookmarkSerializer(bookmark)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        serializer = BookmarkSerializer(bookmark, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        bookmark = self.get_object(pk)
        bookmark.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)