# Generated by Django 3.0.7 on 2022-01-05 10:20

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('communities', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='community',
            name='members',
            field=models.ManyToManyField(default=[], related_name='members', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='community',
            name='posts',
            field=models.ManyToManyField(default=[], related_name='community_posts', to='communities.Post'),
        ),
        migrations.AlterField(
            model_name='post',
            name='comments',
            field=models.ManyToManyField(default=[], to='communities.Comment'),
        ),
    ]