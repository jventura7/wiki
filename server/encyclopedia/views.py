import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .util import list_entries, get_entry, save_entry

from . import util


def index(request):
    return render(request, "encyclopedia/index.html", {
        "entries": util.list_entries()
    })


def pages(request):
    all_pages = list_entries()
    return JsonResponse({'pages': all_pages})


@csrf_exempt
def page(request, id):
    entry = get_entry(id)
    return JsonResponse({'entry': entry})


@csrf_exempt
def pagePOST(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        title = body['pageTitle']
        content = body['pageContent']
        save_entry(title, content)
        return HttpResponse({'success': 204})


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
