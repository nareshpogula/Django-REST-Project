# Generated by Django 5.0.6 on 2024-05-16 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_alter_products_uom'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='product_id',
            field=models.PositiveBigIntegerField(primary_key=True, serialize=False),
        ),
    ]