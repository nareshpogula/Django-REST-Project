from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password':{'write_only':True}
        }

    def create(self, validator_data):
        password= validator_data.pop('password', None)
        instance = self.Meta.model(**validator_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
