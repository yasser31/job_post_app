# Generated by Django 5.2 on 2025-05-17 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0007_jobpost_publisher_alter_userjobpostapplication_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobpost',
            name='contract_type',
            field=models.CharField(default="", max_length=256),
        ),
        migrations.AddField(
            model_name='jobpost',
            name='salary',
            field=models.CharField(default="", max_length=256),
        ),
    ]
