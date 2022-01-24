# Generated by Django 3.0.7 on 2021-09-01 19:48

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0003_taggeditem_add_unique_index'),
        ('bookmarksection', '0002_auto_20210902_0114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]