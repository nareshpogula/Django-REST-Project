from rest_framework import serializers
from .models import Orders, Order_Details
from products.serializers import Products_Serializer

class Orders_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ["order_id","customer_name","total","datetime"]

class Order_Details_Serializer(serializers.ModelSerializer):
    order_id = Orders_Serializer(many=False, read_only=True)
    product_id = Products_Serializer(many=False, read_only=True)
    print(type(product_id), "product type")
    class Meta:
        model = Order_Details
        fields = ["order_id","product_id","quantity","total_price"]

    # def create(self, validated_data):
       
    #     product_ids_data = validated_data.pop('product_id')
    #     order_Details = Order_Details.objects.create(**validated_data)
    #     for product_id_data in product_ids_data:
    #         product_id_data.objects.create(order_id=order_Details, **product_id_data)
    #     return order_Details

class Insert_Order_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Order_Details
        fields = ["order_id","product_id","quantity","total_price"]