from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=50)
    history = models.TextField()
    compositions = models.CharField(max_length=50)
    img = models.ImageField()

class Genre(models.Model):
    name = models.CharField(max_length=50)
    img = models.ImageField()

class Music(models.Model):
    name = models.CharField(max_length=50)
    img = models.ImageField()
    history = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    text = models.TextField()
    rating = models.FloatField()
    sources = models.CharField(max_length=200)
