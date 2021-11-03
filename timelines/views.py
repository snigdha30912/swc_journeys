from rest_framework.response import Response
from .models import *
from .serializers import TimelineSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, get_object_or_404
from rest_framework import permissions, response, status
from .permissions import IsOwner




class TimelineAPIView(ListCreateAPIView):
    serializer_class = TimelineSerializer
    queryset = Timeline.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)



class TimelineDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = TimelineSerializer
    permission_classes = (permissions.IsAuthenticated, IsOwner,)
    queryset = Timeline.objects.all()
    lookup_field = "pk"

    def patch(self, request, pk, *args, **kwargs):
        print(request.data)
        timeline = Timeline.objects.get(pk = pk)
        for bookmark in request.data["bookmarks"]:
            for tag in bookmark.tags.names():
                timeline.tags.add(tag)
            timeline.bookmarks.add(bookmark)
        print(pk)
        timeline.save()
        return Response(TimelineSerializer(timeline).data)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request, pk, *args, **kwargs):
        timeline = Timeline.objects.get(pk = pk)
        print(timeline.tags.names())
        timeline_data = TimelineSerializer(timeline).data
        timeline_data["tags"] = timeline.tags.names()
        return Response(timeline_data)
    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)