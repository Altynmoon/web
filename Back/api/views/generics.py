from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Music, Genre, Author
from api.serializaers import MusicSerializer, GenreSerializer, AuthorSerializer


class Musics(generics.ListCreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

class MusicDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    permission_classes = [IsAuthenticated, ]

class Genres(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class GenreDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    permission_classes = [IsAuthenticated, ]

class Authors(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class AuthorDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated, ]
