from django.urls import path, include
from .views import ProductsListView, Products_Detail_Views

urlpatterns = [
    path('products/', ProductsListView.as_view()),
    path('products/<int:id>', Products_Detail_Views.as_view())

]