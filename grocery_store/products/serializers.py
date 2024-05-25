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
    
    uom= Uom_Serializer()
    print(uom)
    class Meta:
        
        fields = ["product_id","product_name","price_per_unit","uom"
                  ]
        model = Products
       
        def validate(self, data):
            if self.context['product_name']:
                return 'product_name'
            else:
                raise serializers.ValidationError(detail="product_name missing")
            
