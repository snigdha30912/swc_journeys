# Generated by Django 3.0.7 on 2021-12-10 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarksection', '0005_auto_20211208_1734'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='favorite',
            field=models.BooleanField(default=False),
        ),
    ]
