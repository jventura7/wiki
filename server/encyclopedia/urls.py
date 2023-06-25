from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("random", views.random, name="random"),
    path("pages", views.pages, name="pages"),
    path("page/<id>/", views.page, name="page")
]
