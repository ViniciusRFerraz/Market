from django.conf.urls import url
from . import views

urlpatterns = [
    url('^do_login/(?P<login>[a-zA-Z]+)/(?P<senha>[^\.]+)/$', views.do_login, name='do_login'),
    url('^compra/$', views.do_compra, name='do_compra'),
    url('^update_cliente/$', views.update_cliente, name='update_cliente')
]
