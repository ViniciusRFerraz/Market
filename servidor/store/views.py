from django.http import JsonResponse
from django.core import serializers
import json
from .models import Cliente, Compra, ProdutoCompra, Produto, Endereco


def do_login(request, login, senha):
    usuario = Cliente.objects.filter(login=login, senha=senha)
    data = {}
    if len(usuario) == 1:
        data['status'] = 'ok'
        data['dados'] = serializers.serialize('json', usuario)
    else:
        data['status'] = 'Nome de usuário ou senha incorretos'

    return JsonResponse(data)


def do_compra(request):
    data = json.loads(request.body)
    cliente = Cliente.objects.filter(cpf=data['usuario']['pk']).first()
    compra = Compra(cliente=cliente, status='AP', forma_pagamento='BO',
                    endereco=cliente.enderecos.first())
    compra.save()

    for produto in data['carrinho']:
        p = Produto.objects.filter(codigo=produto['codigo']).first()
        pc = ProdutoCompra(compra=compra, produto=p)
        pc.save()

    return JsonResponse({'status': 'ok'})


def update_cliente(request):
    data = json.loads(request.body)
    cliente = Cliente.objects.filter(cpf=data['cpf']).first()
    cliente.nome = data['nome']
    cliente.email = data['email']
    cliente.fone = data['fone']
    cliente.senha = data['senha']

    cliente.save()
    return JsonResponse({'status': 'ok'})


def create_cliente(request):
    data = json.loads(request.body)
    end = data.pop('end')
    cliente = Cliente(**data)
    cliente.save()
    end = Endereco(cliente=cliente, nome='Principal', rua=end, bairro='Não informado', cep='Não informado',
                   cidade='Bauru', estado='SP')
    end.save()
    return JsonResponse({'status': 'ok'})
