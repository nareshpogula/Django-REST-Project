from django.db import models

class Uom(models.Model):
    uom_id = models.PositiveIntegerField(primary_key=True, null=False)
    uom_name = models.CharField(max_length=60, null=False)

    def __str__(self):
        return self.uom_id
    class Meta:
        verbose_name = 'uom id'

class Products(models.Model):
    product_id = models.PositiveBigIntegerField(primary_key=True,auto_created=False, null=False)
    product_name = models.CharField(max_length=60,null=False)
    uom = models.ForeignKey('Uom',on_delete=models.CASCADE)
    price_per_unit = models.PositiveBigIntegerField()

    def __str__(self):
        return self.product_name
    class Meta:
        verbose_name = 'product name'



