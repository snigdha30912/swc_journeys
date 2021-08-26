from .models import *
from .serializers import TimelineSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions
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
    lookup_field = "id"

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)