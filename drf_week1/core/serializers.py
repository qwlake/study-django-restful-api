from rest_framework import serializers
from .models import Music, Singer, Genre

class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = (
            'id',
            'title',
            'singer',
            'genre',
            'released_at',
        )

class SingerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Singer
        fields = (
            'id',
            'name',
            'birth',
        )

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = (
            'id',
            'name',
        )