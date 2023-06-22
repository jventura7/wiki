from django.shortcuts import render
from django.http import JsonResponse
import json

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })


def random(request):
    return JsonResponse('hello', safe=False)
