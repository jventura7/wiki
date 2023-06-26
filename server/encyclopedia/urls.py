from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("pages", views.pages, name="pages"),
    path("page/<id>/", views.page, name="page"),
    path("page", views.pagePOST, name="page publish"),
    path("search", views.search, name="search"),
    path("random", views.random, name="random")
]
