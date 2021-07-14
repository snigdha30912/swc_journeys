from django.contrib.auth import get_user
import json
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
# from friends.models import CustomNotification
# from friends.serializers import NotificationSerializer
from .models import *
# from friends.models import Friend
from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib.auth.decorators import login_required
import requests
from django.db import IntegrityError
from rest_framework.parsers import JSONParser
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, mixins, viewsets, permissions
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class CommunityAPIView(APIView):
    # permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        communities = Community.objects.all()
        serializer = CommunitySerializer(communities, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CommunitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        communities = Community.objects.all()
        serializer = CommunitySerializer(communities, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommunityDetail(APIView):
    """   
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Community.objects.get(pk=pk)
        except Community.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        community = self.get_object(pk)
        serializer = CommunitySerializer(community)
        return Response(serializer.data)

    def post(self, request, pk, format=None):
        community = self.get_object(pk)
        curr_post = Post.objects.create(
            user=get_user(request), body=request.data["body"])
        # postSerializer = PostSerializer(data=request.data)
        # if(postSerializer.is_valid()):
        #     postSerializer.save()
        community.posts.add(curr_post)
        community.save()
        return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        community = self.get_object(pk)
        community.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PostDetail(APIView):
    """   
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404

    def get(self, request, community_id, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def put(self, request, community_id, pk, format=None):
        post = self.get_object(pk)
        curr_comment = Comment.objects.create(
            user=get_user(request), content=request.data["content"])
        post.comments.add(curr_comment)
        post.save()
        return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CommentDetail(APIView):
    """   
    Retrieve, update or delete a snippet instance.
    """

    def get_object(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise Http404

    def get(self, request, community_id, post_id, pk, format=None):
        comment = self.get_object(pk)
        serializer = CommentSerializer(comment)
        return Response(serializer.data)

    # def put(self, request, pk, format=None):
    #     comment = self.get_object(pk)
    #     curr_comment = Comment.objects.create(request.data)
    #     # CommentSerializer = CommentSerializer(data=request.data)
    #     # if(CommentSerializer.is_valid()):
    #     #     CommentSerializer.save()
    #     Comment.comments.add(curr_comment)
    #     Comment.save()
    #     return Response(status=status.HTTP_201_CREATED)

    def delete(self, request, pk, format=None):
        comment = self.get_object(pk)
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
