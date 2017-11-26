from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from decimal import Decimal


class Loja(models.Model):
    nome = models.CharField(max_length=64)
    cnpj = models.CharField(max_length=64, primary_key=True)
    imagem = models.ImageField()

    def __str__(self):
        return self.nome


class UsuarioLoja(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    loja = models.ForeignKey(Loja)

    def __str__(self):
        return 'Loja do usuário'


class Marca(models.Model):
    codigo = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=200)

    def __str__(self):
        return self.nome


class Categoria(models.Model):
    codigo = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=200)
    categoria_pai = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        if self.categoria_pai:
            return f'{self.categoria_pai.nome} -> {self.nome}'
        return self.nome


class Produto(models.Model):
    codigo = models.AutoField(primary_key=True)
    loja = models.ForeignKey(Loja, on_delete=models.CASCADE)
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    nome = models.CharField(max_length=200)
    descricao = models.TextField(verbose_name='Descrição')
    preco = models.DecimalField(verbose_name='Preço', max_digits=10, decimal_places=2,
                                validators=[MinValueValidator(Decimal('0.01'))])
    estoque = models.PositiveIntegerField(default=0)
    peso = models.DecimalField(max_digits=10, decimal_places=4, help_text='Use o peso em Kg',
                               validators=[MinValueValidator(Decimal('0.01'))])

    def __str__(self):
        return f'{self.nome} | {self.marca.nome}'

    def get_images(self):
        return self.imagens.all()


class ProdutoImagem(models.Model):
    produto = models.ForeignKey(Produto, related_name='imagens')
    imagem = models.ImageField()

    def __str__(self):
        return 'Imagem'


class Endereco(models.Model):
    cliente = models.ForeignKey('Cliente', related_name='enderecos')
    nome = models.CharField(max_length=64)
    rua = models.CharField(max_length=64)
    bairro = models.CharField(max_length=64)
    cep = models.CharField(max_length=16, verbose_name='CEP', help_text='CEP sem número')
    cidade = models.CharField(max_length=64)
    estado = models.CharField(max_length=2,
                              choices=(('AC', 'Acre'), ('AL', 'Alagoas'), ('AP', 'Amapá'),
                                       ('AM', 'Amazonas'), ('BA', 'Bahia'), ('CE', 'Ceará'),
                                       ('DF', 'Distrito Federal'), ('ES', 'Espírito Santo'),
                                       ('GO', 'Goiás'), ('MA', 'Maranhão'), ('MT', 'Mato Grosso'),
                                       ('MS', 'Mato Grosso do Sul'), ('MG', 'Minas Gerais'),
                                       ('PA', 'Pará'), ('PB', 'Paraíba'), ('PR', 'Paraná'),
                                       ('PE', 'Pernambuco'), ('PI', 'Piauí'),
                                       ('RJ', 'Rio de Janeiro'), ('RN', 'Rio Grande do Norte'),
                                       ('RS', 'Rio Grande do Sul'), ('RO', 'Rondônia'),
                                       ('RR', 'Roraima'), ('SC', 'Santa Catarina'),
                                       ('SP', 'São Paulo'), ('SE', 'Sergipe'),
                                       ('TO', 'Tocantins')))

    def __str__(self):
        return f'Endereço: {self.nome}, {self.cep}'


class Cliente(models.Model):

    cpf = models.CharField(primary_key=True, max_length=20, verbose_name='CPF',
                           help_text='Digite somente os números')
    nome = models.CharField(max_length=64)
    fone = models.CharField(max_length=20, verbose_name='Telefone para contato')
    login = models.CharField(max_length=20)
    senha = models.CharField(max_length=36)
    email = models.EmailField()

    def __str__(self):
        return self.nome


class Compra(models.Model):
    codigo = models.AutoField(primary_key=True)
    valor = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Valor total da compra')
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    status = models.CharField(max_length=2, verbose_name='Status do pedido',
                              choices=(('AP', 'Aguardando pagamento'),
                                       ('CA', 'Cancelado'),
                                       ('EA', 'Em andamento'),
                                       ('FI', 'Finalizado')))
    forma_pagamento = models.CharField(max_length=2, verbose_name='Método de Pagamento',
                                       choices=(('BO', 'Boleto'),
                                                ('CE', 'Cartão de Crédito'),
                                                ('CD', 'Cartão de Débito'),
                                                ('TA', 'Transferência')))
    endereco = models.ForeignKey(Endereco, verbose_name='Endereço de entrega')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    produtos = models.ManyToManyField(
        Produto,
        through='Pedido',
        through_fields=('compra', 'produto')
    )

    def __str__(self):
        return f'Compra | {self.cliente.nome} | R$ {self.valor:.2f}'


class Pedido(models.Model):
    codigo = models.AutoField(primary_key=True)
    compra = models.ForeignKey(Compra, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    quantidade = models.PositiveIntegerField(default=1)
