from rest_framework import serializers
from .models import Products, Uom

class Uom_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Uom
        fields = ['uom_id','uom_name']

        def validate(self, data):
            if self.context['uom_id']:
                return 'uom_id'
            else:
                raise serializers.ValidationError(detail="uom_id missing")

class Products_Serializer(serializers.ModelSerializer):
    
    uom= Uom_Serializer(many=False, read_only=True)
    # print(uom)

    class Meta:
        model = Products
        fields = ["product_id","product_name","price_per_unit","uom"]

        def validate(self, data):
            if self.context['product_name']:
                return 'product_name'
            else:
                raise serializers.ValidationError(detail="product_name missing")
            
    # def create(self, validated_data):
    #     print(validated_data)
    #     product_data = validated_data.pop('uom')
    #     print(product_data)
    #     products = Products.objects.create(validated_data)
    #     products.save()
    #     # for uom in product_data:
    #     #     # s = Uom.objects.create(**uom)
    #     #     products.uom.add(**uom)
    #     print(products)
    #     return products
            
class ProductsOnly_Serializer(serializers.ModelSerializer):
    class Meta:
        fields = ["product_id","product_name","price_per_unit","uom"]
        model = Products
