from django.db import models


# Create your models here.
class Products(models.Model):
    product_id = models.PositiveBigIntegerField(primary_key=True,auto_created=False)
    product_name = models.CharField(max_length=60)
    uom = models.ForeignKey('Uom',on_delete=models.CASCADE)
    price_per_unit = models.PositiveBigIntegerField()

    def __str__(self):
        return self.product_name
    class Meta:
        verbose_name = 'product name'


class Uom(models.Model):
    uom_id = models.PositiveIntegerField(primary_key=True)
    uom_name = models.CharField(max_length=60)

    def __str__(self):
        return self.uom_name
    class Meta:
        verbose_name = 'uom name'
