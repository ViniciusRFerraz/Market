# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-25 16:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categoria',
            name='loja',
        ),
        migrations.RemoveField(
            model_name='marca',
            name='loja',
        ),
    ]
