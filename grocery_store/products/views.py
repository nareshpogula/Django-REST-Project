from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.shortcuts import get_object_or_404
from .models import Products, Uom
from .serializers import Products_Serializer, Uom_Serializer, ProductsOnly_Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from rest_framework import status
from django.http import HttpResponse
from django.template import loader
# Create your views here.

class ProductsListView(APIView):
    # authentication_classes=[BasicAuthentication]
    # permission_classes =[IsAuthenticated]

    def post(self, request):
      serializer = ProductsOnly_Serializer(data=request.data)
      
      print(request.data, "extracted")
      if serializer.is_valid():
            serializer.save()
            
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_201_CREATED)
      else:
            return Response({"status": "something is missing", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
      
    def get(self,request):
        #productsall = Products.objects.
        template = loader.get_template('Products.html')
        productsall = Products.objects.all().order_by('product_id')  #.defer("product_id","product_name","price_per_unit","uom").all() #  #get('product_id'==1).uom_set.all() #
        serializer = Products_Serializer(productsall, many=True)
        context = {'products': serializer.data[:],}
        #return render(request, "Products.html", context)
        #return HttpResponse(template.render())  #context,request
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)

class Products_Detail_Views(APIView):

    def patch(self, request, id=None):
        products_item = Products.objects.get(product_id=id)
        print(products_item)
        serializer = ProductsOnly_Serializer(products_item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data},status=status.HTTP_200_OK)
        else:
            return Response({"status": " product id missing", "data": serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        
    def get(self, request,id=None):
        try:
         if id:
            item = Products.objects.get(product_id=id)
            serializer = Products_Serializer(item)
            return Response({"status": "success", "data": serializer.data},status=status.HTTP_200_OK)
        except Products.DoesNotExist:
            raise Http404

    def delete(self, request, id=None):
        item = get_object_or_404(Products, product_id=id)
        item.delete()
        return Response({"status": "success", "data": "ISV Deleted"}) 
    

class UomListView(APIView):
    def get(self,request):
        #productsall = Products.objects.
        
        uomsall = Uom.objects.all()
        serializer = Uom_Serializer(uomsall, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    
def Home(request):

    return render(request,"Home.html")