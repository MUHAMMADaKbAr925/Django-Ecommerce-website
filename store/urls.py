from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views


urlpatterns=[
    path('',views.store,name='store'),
    path('cart/',views.cart,name='cart'),
    path('checkout/',views.checkout,name='checkout'),
    path('update_item/',views.updateItem,name='update_item'),
    path('process_order/',views.processOrder,name='process_order'),
    path('sample/',views.sample,name='sample'),
    path('sample_E/',views.sampleCE,name='sample_E'),
]

