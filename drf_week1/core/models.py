from django.db import models

class Music(models.Model):
    title = models.CharField(max_length=50)
    singer = models.ForeignKey('Singer', on_delete=models.CASCADE)
    genre = models.ForeignKey('Genre', on_delete=models.CASCADE)
    released_at = models.DateField()
    def __str__(self):
        return '{} - {}'.format(self.singer, self.title)

class Singer(models.Model):
    name = models.CharField(max_length=50)
    birth = models.DateField()
    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name