from django.conf.urls import url
from . import views

urlpatterns = [
    url('^do_login/(?P<login>[a-zA-Z]+)/(?P<senha>[^\.]+)/$', views.do_login, name='do_login')
]
