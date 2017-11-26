from .models import Marca, Categoria, Produto, ProdutoImagem, Compra, Cliente, Endereco
import django_filters
from rest_framework import filters
from rest_framework import routers, serializers, viewsets


class MarcaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Marca
        fields = ('url', 'codigo', 'nome')


class MarcaViewSet(viewsets.ModelViewSet):
    queryset = Marca.objects.all().order_by('nome')
    serializer_class = MarcaSerializer
    filter_fields = ('nome', )


class CategoriaPaiSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Categoria
        fields = ('url', 'codigo', 'nome')


class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    categoria_pai = CategoriaPaiSerializer(many=False, read_only=True)

    class Meta:
        model = Categoria
        fields = ('url', 'codigo', 'nome', 'categoria_pai')


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all().order_by('nome')
    serializer_class = CategoriaSerializer
    filter_fields = ('nome', )


class ProdutoImagemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProdutoImagem
        fields = ('imagem', )


class ProdutoImagemViewSet(viewsets.ModelViewSet):
    queryset = ProdutoImagem.objects.all()
    serializer_class = ProdutoImagemSerializer


class ProdutoSerializer(serializers.HyperlinkedModelSerializer):
    marca = MarcaSerializer(many=False, read_only=True)
    categoria = CategoriaSerializer(many=False, read_only=True)
    imagens = ProdutoImagemSerializer(many=True, read_only=True)

    class Meta:
        model = Produto
        fields = ('url', 'codigo', 'marca', 'categoria', 'nome',
                  'descricao', 'preco', 'estoque', 'peso', 'imagens')


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    filter_backends = (filters.SearchFilter, django_filters.rest_framework.DjangoFilterBackend)
    filter_fields = ('categoria', )
    search_fields = ('nome', 'descricao', )


class EnderecoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Endereco
        fields = ('nome', 'rua', 'bairro', 'cep', 'cidade', 'estado')


class EnderecoViewSet(viewsets.ModelViewSet):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
    filter_fields = ('nome', 'rua', 'bairro', 'cep', 'cidade', 'estado')


class ClienteSerializer(serializers.HyperlinkedModelSerializer):
    enderecos = EnderecoSerializer(many=True, read_only=True)

    class Meta:
        model = Cliente
        fields = ('cpf', 'url', 'nome', 'login', 'fone', 'email', 'enderecos')


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    filter_fields = ('nome', 'login', 'email')


class CompraSerializer(serializers.HyperlinkedModelSerializer):
    endereco = EnderecoSerializer(many=False, read_only=True)

    class Meta:
        model = Compra
        fields = ('codigo', 'valor', 'cliente', 'status', 'forma_pagamento', 'endereco',
                  'created_at', 'updated_at')


class CompraViewSet(viewsets.ModelViewSet):
    queryset = Compra.objects.all()
    serializer_class = CompraSerializer
    filter_fields = ('cliente', 'status', 'forma_pagamento')


router = routers.DefaultRouter()
router.register(r'marcas', MarcaViewSet)
router.register(r'categorias', CategoriaViewSet)
router.register(r'produtos', ProdutoViewSet)
router.register(r'produtos-imagens', ProdutoImagemViewSet)
router.register(r'enderecos', EnderecoViewSet)
router.register(r'clientes', ClienteViewSet)
router.register(r'compras', CompraViewSet)
