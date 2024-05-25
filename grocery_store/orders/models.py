from django.db import models
from products.models import Products


class Orders(models.Model):
    order_id = models.PositiveBigIntegerField(primary_key=True,null=False)
    customer_name = models.CharField(max_length=256 ,null=False)
    total = models.PositiveBigIntegerField(null=False)
    datetime = models.DateTimeField(null=False)


class Order_Details(models.Model):
    order_id = models.ForeignKey("Orders",on_delete=models.CASCADE,null=False)
    product_id = models.ForeignKey(to=Products,on_delete=models.CASCADE,null=False)
    quantity = models.PositiveBigIntegerField(null=False)
    total_price = models.PositiveBigIntegerField(null=False)