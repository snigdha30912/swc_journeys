from asyncio.windows_events import NULL
from django.db import models
from django.conf import settings
from django.contrib import auth
from django.utils.timezone import now
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User

from django.db.models.signals import post_save


class Comment(models.Model):
    user = models.ForeignKey(User,
                             on_delete=models.CASCADE, related_name="comments")
    content = models.TextField(default="Add content")
    created_at = models.DateTimeField(default=now)


class Post(models.Model):

    user = models.ForeignKey(User,
                             on_delete=models.CASCADE, related_name="posts")
    body = models.TextField(default="Add post", null=True)
    created_at = models.DateTimeField(default=now)
    comments = models.ManyToManyField(Comment, null=True, default=[])


# Create your models here.
class Community(models.Model):
    community_name = models.CharField(default="No Name", max_length=264)
    description = models.CharField(
        default="No Description", max_length=500, null=True)
    members = models.ManyToManyField(
        User, related_name="members", null=True, default=[])
    posts = models.ManyToManyField(
        Post, related_name="community_posts", null=True, default=[])
