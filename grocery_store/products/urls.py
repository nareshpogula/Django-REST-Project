from django.urls import path, include
from .views import ProductsListView, Products_Detail_Views, UomListView

urlpatterns = [
    path('products/', ProductsListView.as_view()),
    path('uom/',UomListView.as_view()),
    path('products/<int:id>', Products_Detail_Views.as_view())

]