from rest_framework import serializers
from .models import Orders, Order_Details
from products.serializers import Products_Serializer

class Orders_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ["order_id","customer_name","total","datetime"]

class Order_Details_Serializer(serializers.ModelSerializer):
    order_id = Orders_Serializer()
    product_id = Products_Serializer()
    class Meta:
        model = Order_Details
        fields = ["order_id","product_id","quantity","total_price"]