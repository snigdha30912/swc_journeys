# Generated by Django 3.2 on 2021-09-19 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timelines', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='timeline',
            name='discription',
            field=models.CharField(default='No Title', max_length=264),
        ),
    ]
