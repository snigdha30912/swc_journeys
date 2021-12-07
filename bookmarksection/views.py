from django.contrib.auth import get_user
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, Http404
import requests
from .Scraper import scraper
from rest_framework import status
from .models import *
from .serializers import BookmarkSerializer
from rest_framework.response import Response
from taggit.managers import TaggableManager
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView
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
        # tags = TaggableManager()
        # for tag in scrap.tags:
        #     tags.add(tag)
        print("printing scrap.tagss")
        print(scrap.tags)
        data = {'url_field':url,'description':scrap.description,'title_name' : scrap.title,'image_field':scrap.imgsrc}
        serializer = BookmarkSerializer(data=data)
        print(serializer)
        if serializer.is_valid():
            response = serializer.save(user=self.request.user)
            curr_bookmark = Bookmark.objects.get(url_field = url)
            for tag in scrap.tags :
                curr_bookmark.tags.add(tag)
            curr_bookmark.save()
            return response
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
    
    def get(self, request, pk, *args, **kwargs):
        bookmark = Bookmark.objects.get(pk = pk)
        print(bookmark.tags.names())
        bookmark_data = BookmarkSerializer(bookmark).data
        bookmark_data["tags"] = bookmark.tags.names()
        return Response(bookmark_data)


class DiscoverBookmarkApiView(ListCreateAPIView):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    lookup_field = "id"
    def get_queryset(self):
        recent_bookmarks = []
        all_bookmarks = Bookmark.objects.all()
        if len(all_bookmarks)>20 :
             
            recent_bookmarks = all_bookmarks[:20] 
        else:
            recent_bookmarks = all_bookmarks
        
        print(recent_bookmarks)
        discoverBookmarks = []
        for bookmark in recent_bookmarks:
            j=0
            for tag in bookmark.tags.most_common():
                if(j>2):
                    break
                j=j+1
                tag = str(tag)
                url = ('http://newsapi.org/v2/everything?'
                    'q='+ tag +'&'
                    'from=2021-8-10&'
                    'sortBy=popularity&'
                    'apiKey=f8e6fd8e886541e783d160dc60faf44e')
                response = requests.get(url)
                
                print(response.json())
                tag_json = response.json()
                
                for article in tag_json['articles']:
                    print("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n\n\n")
                    print(article)
                    discoverBookmark = Bookmark(user=self.request.user, url_field=article['url'], title_name = article['title'], description=article['description'] , image_field=article['urlToImage'])
                    discoverBookmarks.append(discoverBookmark)
                
        return discoverBookmarks 

