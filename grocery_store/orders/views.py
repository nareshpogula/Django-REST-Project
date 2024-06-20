from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from orders.models import Orders, Order_Details
from rest_framework import status
from orders.serializers import Orders_Serializer, Order_Details_Serializer, Insert_Order_Serializer

class OrdersListView(APIView):
    # authentication_classes=[BasicAuthentication]
    # permission_classes =[IsAuthenticated]

    def post(self, request):
      serializer = Orders_Serializer(data=request.data)
      print(request.data, "extracted")
      if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_201_CREATED)
      else:
            return Response({"status": "something is missing", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
      
    def get(self,request):
        #productsall = Products.objects.
        
        ordersall = Orders.objects.all()#.order_by('order_id')
        serializer = Orders_Serializer(ordersall, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    
class OrdersDetailsListView(APIView):
    # authentication_classes=[BasicAuthentication]
    # permission_classes =[IsAuthenticated]

    def post(self, request):
      serializer = Insert_Order_Serializer(data=request.data)
      print(request.data, "extracted")
      if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_201_CREATED)
      else:
            return Response({"status": "something is missing", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
      
    def get(self,request):
        #productsall = Products.objects.
        
        ordersall = Order_Details.objects.all()#.order_by('order_id')
        print(ordersall)
        serializer = Order_Details_Serializer(ordersall, many=True)
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    

      