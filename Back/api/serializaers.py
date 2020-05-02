from django.contrib.auth.models import User
from rest_framework import serializers

from api.models import Music, Genre, Author

class MusicSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta():
        model = Music
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta():
        model = Genre
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta():
        model = Author
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = '__all__'