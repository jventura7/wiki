import json
from random import choice
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .util import list_entries, get_entry, save_entry

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })


def random(request):
    all_pages = list_entries()
    random_page = choice(all_pages)
    return JsonResponse({'random_page': random_page})


def pages(request):
    all_pages = list_entries()
    return JsonResponse({'pages': all_pages})


@csrf_exempt
def page(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        title = body['pageTitle']
        content = body['pageContent']
        save_entry(title, content)
        return HttpResponse({'success': True})
    elif request.method == 'GET':
        id = request.GET.get('id')
        entry = get_entry(id)
        return JsonResponse({'entry': entry})
    else:
        return JsonResponse({'error': 'Invalid request method'})


def search(request):
    query = request.GET.get('query')
    entry = get_entry(query)
    if entry:
        return JsonResponse({'found': True, 'entry': entry})
    else:
        all_entries = list_entries()
        matching_entries = []
        for entry in all_entries:
            if query.lower() in entry.lower():
                matching_entries.append(entry)
        return JsonResponse({'found': False, 'entries': matching_entries})
