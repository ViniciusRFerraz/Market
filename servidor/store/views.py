from django.http import JsonResponse
from django.core import serializers
from .models import Cliente


def do_login(request, login, senha):
    usuario = Cliente.objects.filter(login=login, senha=senha)
    data = {}
    if len(usuario) == 1:
        data['status'] = 'ok'
        data['dados'] = serializers.serialize('json', usuario)
    else:
        data['status'] = 'Nome de usuário ou senha incorretos'

    return JsonResponse(data)
