# Generated by Django 3.1.7 on 2022-04-19 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nirtogen', models.FloatField()),
                ('pottasium', models.FloatField()),
                ('phosphorous', models.FloatField()),
                ('ph', models.FloatField()),
                ('rainfall', models.FloatField()),
                ('city', models.CharField(max_length=30)),
            ],
        ),
    ]
