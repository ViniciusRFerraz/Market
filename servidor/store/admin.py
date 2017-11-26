from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Marca, Categoria, Produto, Endereco, Cliente, Compra, ProdutoImagem, UsuarioLoja
from .models import Loja


class ProdutoFilterStore(admin.ModelAdmin):
    def get_queryset(self, request):
        qs = super(ProdutoFilterStore, self).get_queryset(request)

        if hasattr(request.user, 'usuarioloja'):
            return qs.filter(loja=request.user.usuarioloja.loja)
        return qs


class ProdutoImagemInline(admin.TabularInline):
    model = ProdutoImagem
    extra = 2
    verbose_name = 'Imagem do Produto'
    verbose_name_plural = 'Imagens do Produto'


class ProdutoAdmin(ProdutoFilterStore):
    inlines = [ProdutoImagemInline, ]

    def get_form(self, request, obj=None, **kwargs):
        form = super(ProdutoAdmin, self).get_form(request, obj, **kwargs)
        if hasattr(request.user, 'usuarioloja'):
            form.base_fields['loja'].initial = str(request.user.usuarioloja.loja.cnpj)
            form.base_fields['loja'].disabled = True
        return form


class EnderecoInline(admin.StackedInline):
    model = Endereco
    extra = 2
    verbose_name = 'Endereço'
    verbose_name_plural = 'Endereços'


class ClienteAdmin(admin.ModelAdmin):
    inlines = [EnderecoInline, ]


class UsuarioLojaInline(admin.StackedInline):
    model = UsuarioLoja
    can_delete = False
    verbose_name_plural = 'Loja'
    verbose_name = 'Loja'


class UserAdmin(BaseUserAdmin):
    inlines = (UsuarioLojaInline, )


admin.site.register(Marca)
admin.site.register(Categoria)
admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Cliente, ClienteAdmin)
admin.site.register(Compra)
admin.site.register(Loja)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
