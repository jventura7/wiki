from django.shortcuts import render
from django.http import JsonResponse
from .util import list_entries

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })


def random(request):
    return JsonResponse('hello', safe=False)


def pages(request):
    all_pages = list_entries()
    return JsonResponse(all_pages, safe=False)
