# Generated by Django 3.0.8 on 2020-07-10 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='photo',
            field=models.ImageField(default=1, upload_to='photos/%Y/%m/%d/'),
            preserve_default=False,
        ),
    ]
