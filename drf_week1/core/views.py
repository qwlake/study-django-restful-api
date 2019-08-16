from django.shortcuts import render, redirect
from .models import Music, Singer, Genre
from rest_framework import viewsets
from .serializers import MusicSerializer, SingerSerializer, GenreSerializer

class MusicView(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer

    def perform_create(self, serializer):
        serializer.save()

class SingerView(viewsets.ModelViewSet):
    queryset = Singer.objects.all()
    serializer_class = SingerSerializer

    def perform_create(self, serializer):
        serializer.save()

class GenreView(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

    def perform_create(self, serializer):
        serializer.save()



# def index_view(request):
#     musics = Music.objects.all()
#     singers = Singer.objects.all()
#     genres = Genre.objects.all()

#     context = {
#         'musics':musics,
#         'singers':singers,
#         'genres':genres,
#         }

#     return render(request, 'index.html', context)

# def detail_view(request, pk):
#     music = Music.objects.get(id=pk)

#     context = {'music':music}

#     return render(request, 'detail.html', context)

# def create_view(request):
#     if request.method == 'GET':
#         return render(request, 'create.html')
#     elif request.method == 'POST':
#         request.POST.get('title')

#         title = request.POST.get('title')
#         singer_text = request.POST.get('singer')
#         genre_text = request.POST.get('genre')
#         released_at = request.POST.get('released_at')

#         singer = Singer.objects.get(name=singer_text)
#         genre = Genre.objects.get(name=genre_text)

#         music = Music(title=title, singer=singer, genre=genre, released_at=released_at)
#         music.save()

#         return redirect('/core/')

# def update_view(request, pk):
#     if request.method == 'GET':
#         music = Music.objects.get(id=pk)
#         context = {
#             'music':music
#         }
#         return render(request, 'update.html', context)
#     elif request.method == 'POST':
#         request.POST.get('title')

#         title = request.POST.get('title')
#         singer_text = request.POST.get('singer')
#         genre_text = request.POST.get('genre')
#         released_at = request.POST.get('released_at')

#         singer = Singer.objects.get(name=singer_text)
#         genre = Genre.objects.get(name=genre_text)

#         music = Music(id=pk, title=title, singer=singer, genre=genre, released_at=released_at)
#         music.save()

#         return redirect('/core/' + str(pk))

# def delete_view(request, pk):
#     music = Music.objects.get(id=pk)
#     music.delete()
#     return redirect('/core/')