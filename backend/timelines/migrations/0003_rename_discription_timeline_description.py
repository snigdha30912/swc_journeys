# Generated by Django 3.2 on 2021-09-19 11:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('timelines', '0002_timeline_discription'),
    ]

    operations = [
        migrations.RenameField(
            model_name='timeline',
            old_name='discription',
            new_name='description',
        ),
    ]