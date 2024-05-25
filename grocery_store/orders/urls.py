from django.urls import path, include
from .views import OrdersListView, OrdersDetailsListView

urlpatterns = [
    path('orders/', OrdersListView.as_view()),
    path('orderdetails/',OrdersDetailsListView.as_view()),


]