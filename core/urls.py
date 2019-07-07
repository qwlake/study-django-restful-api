"""drf URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from core import views

urlpatterns = [
    # list
    path('', views.index_view, name='index'),

    # Read
    path('<int:pk>', views.detail_view, name='detail'),

    # Create
    path('new/', views.create_view, name='create'),

    # Update
    path('<int:pk>/update/', views.update_view, name='update'),

    # Delete
    path('<int:pk>/delete/', views.delete_view, name='delete'),
]
