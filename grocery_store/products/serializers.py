from rest_framework import serializers
from .models import Products

class Products_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('__all__')
        print(model)

        def validate(self, data):
            if self.context['product_name']:
                return 'product_name'
            else:
                raise serializers.ValidationError(detail="product_name missing")